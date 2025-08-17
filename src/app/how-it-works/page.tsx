import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Send, Unlock, Coffee, Users } from "lucide-react";

// Simple SVG Diagram Component
const SignalDiagram = () => (
  <div className="w-full max-w-2xl mx-auto mb-12">
    <svg viewBox="0 0 800 200" className="w-full h-auto">
      <defs>
        <linearGradient id="userGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--gold))" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(var(--gold))" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* User 1 */}
      <circle cx="100" cy="100" r="25" fill="url(#userGradient)" stroke="hsl(var(--accent))" strokeWidth="2" />
      <text x="100" y="180" textAnchor="middle" className="text-sm fill-current" fill="hsl(var(--muted-foreground))">You</text>
      
      {/* Signal wave */}
      <path d="M 130 100 Q 200 80 270 100 Q 340 120 410 100" 
            stroke="hsl(var(--gold))" 
            strokeWidth="3" 
            fill="none" 
            strokeDasharray="5,5" />
      
      {/* User 2 */}
      <circle cx="450" cy="100" r="25" fill="url(#userGradient)" stroke="hsl(var(--accent))" strokeWidth="2" />
      <text x="450" y="180" textAnchor="middle" className="text-sm fill-current" fill="hsl(var(--muted-foreground))">Someone</text>
      
      {/* Connection line */}
      <path d="M 130 100 Q 275 50 450 100" 
            stroke="hsl(var(--accent))" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.6" />
      
      {/* Signal icon */}
      <circle cx="275" cy="50" r="15" fill="url(#signalGradient)" stroke="hsl(var(--gold))" strokeWidth="2" />
      <circle cx="275" cy="50" r="8" fill="hsl(var(--gold))" />
      
      {/* Arrow */}
      <path d="M 500 100 L 520 100 M 520 100 L 510 95 M 520 100 L 510 105" 
            stroke="hsl(var(--accent))" 
            strokeWidth="2" 
            fill="none" />
      
      {/* Chat bubble */}
      <rect x="540" y="70" width="120" height="60" rx="10" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1" />
      <text x="600" y="95" textAnchor="middle" className="text-xs fill-current" fill="hsl(var(--muted-foreground))">Chat</text>
      <text x="600" y="110" textAnchor="middle" className="text-xs fill-current" fill="hsl(var(--muted-foreground))">Unlocked!</text>
    </svg>
  </div>
);

const steps = [
  {
    step: "1",
    title: "Discover",
    description: "See nearby people also on Signal.",
    icon: MapPin,
    details: "Signal shows you people in your area. No endless profiles - just a curated list.",
  },
  {
    step: "2",
    title: "Send a Signal",
    description: "One tap to express interest.",
    icon: Send,
    details: "Tap to send a signal. Friendly and non-intrusive.",
  },
  {
    step: "3",
    title: "Mutual Unlock",
    description: "If accepted, chat unlocks; optional 15-sec video intro toggle.",
    icon: Unlock,
    details: "When both people express interest, chat unlocks. Optional 15-second video intro.",
  },
  {
    step: "4",
    title: "Meet IRL",
    description: "Simple, safe, time-boxed suggestions.",
    icon: Coffee,
    details: "Signal suggests safe, public meeting spots. You're always in control.",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              How Signal Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Four simple steps to meaningful connections.
            </p>
          </div>
        </div>
      </section>

      {/* Diagram Section */}
      <section className="py-16">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
              The Signal Flow
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From discovery to meeting in real life.
            </p>
          </div>
          <SignalDiagram />
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container-max">
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.step} className="group">
                <Card className="w-full border-border/40 hover:border-accent/20 transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="pb-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                          <step.icon className="w-8 h-8 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-4xl font-bold text-accent/60 font-heading">
                            {step.step}
                          </span>
                          <CardTitle className="font-heading text-2xl lg:text-3xl">
                            {step.title}
                          </CardTitle>
                        </div>
                        <p className="text-lg text-muted-foreground font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-base leading-relaxed max-w-3xl">
                      {step.details}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/20">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold">
              Ready to Try Signal?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join the waitlist.
            </p>
            <div className="pt-4">
              <WaitlistDialog />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border/40 p-4 md:hidden z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Users className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">Join the waitlist</p>
              <p className="text-xs text-muted-foreground">Be first to try Signal</p>
            </div>
          </div>
          <WaitlistDialog />
        </div>
      </div>

      <Footer />
    </div>
  );
}


