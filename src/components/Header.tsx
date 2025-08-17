"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "How it Works", href: "/how-it-works" },
  { name: "Safety", href: "/safety" },
  { name: "Press", href: "/press" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "backdrop-blur-md bg-background/80 border-b border-border/10",
        isScrolled && "h-16 shadow-sm",
        !isScrolled && "h-20"
      )}
    >
      <div className="container-max h-full">
        <div className="flex h-full items-center justify-between">
          {/* Left: Wordmark */}
          <Link href="/" className="flex items-center touch-target focus-visible-ring">
            <span className="font-heading text-2xl font-semibold tracking-tight text-foreground">
              Signal
            </span>
          </Link>

          {/* Right: Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground touch-target focus-visible-ring"
              >
                {item.name}
              </Link>
            ))}
            <WaitlistDialog />
          </div>

          {/* Mobile: Sheet Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2 h-10 w-10 touch-target focus-visible-ring"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col h-full">
                {/* Mobile Navigation */}
                <nav className="flex-1 space-y-6 pt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-lg font-medium text-foreground hover:text-accent transition-colors touch-target focus-visible-ring py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                {/* Mobile CTA */}
                <div className="pt-6 border-t border-border/10">
                  <WaitlistDialog />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
