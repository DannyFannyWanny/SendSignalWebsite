"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Sparkles, Loader2 } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";

// Validation schema
const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "City must be at least 2 characters"),
  universityCompany: z.string().optional(),
  platform: z.enum(["ios", "android", "both"]),
  honeypot: z.string().max(0, "Invalid submission"), // Honeypot field
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

// Confetti particle component
const ConfettiParticle = ({ delay, duration }: { delay: number; duration: number }) => (
  <div
    className="absolute w-2 h-2 bg-gradient-to-r from-accent to-gold rounded-full animate-bounce"
    style={{
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

export function WaitlistDialog() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof WaitlistFormData, string>>>({});
  const [formData, setFormData] = useState<Partial<WaitlistFormData>>({
    platform: "both",
  });

  const handleInputChange = (field: keyof WaitlistFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateField = (field: keyof WaitlistFormData, value: string) => {
    try {
      if (field === "honeypot") return; // Skip honeypot validation
      
      const fieldSchema = waitlistSchema.shape[field];
      if (fieldSchema) {
        fieldSchema.parse(value);
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [field]: "Validation failed" }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate entire form
      const validatedData = waitlistSchema.parse(formData);
      
      setIsSubmitting(true);
      
      // Submit to API
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Close dialog after 3 seconds
        setTimeout(() => {
          setOpen(false);
          setIsSuccess(false);
          setFormData({ platform: "both" });
          setErrors({});
        }, 3000);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        setErrors({ email: "Please check your input and try again." });
      } else {
        setErrors({ email: "Something went wrong. Please try again." });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md text-center">
          <div className="relative overflow-hidden py-8">
            {/* Confetti particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <ConfettiParticle
                key={i}
                delay={i * 0.1}
                duration={2 + Math.random() * 2}
              />
            ))}
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-2">You&apos;re in! 🎉</h3>
              <p className="text-muted-foreground">
                Welcome to the Signal waitlist. We&apos;ll notify you when we launch.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground touch-target focus-visible-ring">
          <Sparkles className="w-4 h-4 mr-2" aria-hidden="true" />
          Join Waitlist
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading">Join the Signal Waitlist</DialogTitle>
          <DialogDescription className="text-base">
            Be among the first to try Signal. No spam, just launch updates.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field - hidden from users */}
          <div className="absolute -left-[9999px]">
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot || ""}
              onChange={(e) => handleInputChange("honeypot", e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              value={formData.name || ""}
              onChange={(e) => handleInputChange("name", e.target.value)}
              onBlur={(e) => validateField("name", e.target.value)}
              className={cn(errors.name && "border-red-500", "touch-target")}
              aria-describedby={errors.name ? "name-error" : undefined}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-red-500" role="alert">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email || ""}
              onChange={(e) => handleInputChange("email", e.target.value)}
              onBlur={(e) => validateField("email", e.target.value)}
              className={cn(errors.email && "border-red-500", "touch-target")}
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-500" role="alert">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="text-sm font-medium">City *</Label>
            <Input
              id="city"
              type="text"
              placeholder="Your city"
              value={formData.city || ""}
              onChange={(e) => handleInputChange("city", e.target.value)}
              onBlur={(e) => validateField("city", e.target.value)}
              className={cn(errors.city && "border-red-500", "touch-target")}
              aria-describedby={errors.city ? "city-error" : undefined}
              aria-invalid={!!errors.city}
            />
            {errors.city && (
              <p id="city-error" className="text-sm text-red-500" role="alert">{errors.city}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="universityCompany" className="text-sm font-medium">University or Company (Optional)</Label>
            <Input
              id="universityCompany"
              type="text"
              placeholder="Where you study or work"
              value={formData.universityCompany || ""}
              onChange={(e) => handleInputChange("universityCompany", e.target.value)}
              className="touch-target"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="platform" className="text-sm font-medium">Preferred Platform *</Label>
            <Select
              value={formData.platform}
              onValueChange={(value) => handleInputChange("platform", value)}
            >
              <SelectTrigger className="touch-target">
                <SelectValue placeholder="Select your platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ios">iOS (iPhone/iPad)</SelectItem>
                <SelectItem value="android">Android</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>
            {errors.platform && (
              <p id="platform-error" className="text-sm text-red-500" role="alert">{errors.platform}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full touch-target focus-visible-ring"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Joining...
              </>
            ) : (
              "Join Waitlist"
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By joining, you agree to receive updates. Unsubscribe anytime.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
