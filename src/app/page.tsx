import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Shield, Zap, Target, User, Lock } from "lucide-react";
import Link from "next/link";

// Abstract Signal Graphic Component
const SignalGraphic = () => (
  <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-8" role="img" aria-label="Abstract signal visualization with animated ripples and particles">
    {/* Concentric ripples with custom animations */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-accent/20 animate-ripple"></div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-accent/30 animate-ripple" style={{ animationDelay: '0.5s' }}></div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-accent/30 animate-ripple" style={{ animationDelay: '1s' }}></div>
    </div>
    
    {/* Center signal dot with enhanced ping */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-accent animate-ping"></div>
      <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-accent/30 animate-ping" style={{ animationDelay: '0.3s' }}></div>
    </div>
    
    {/* Floating particles with custom animations */}
    <div className="absolute top-6 left-12 sm:top-8 sm:left-16 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent/60 animate-float animate-particle" style={{ animationDelay: '0.2s' }}></div>
    <div className="absolute top-16 right-16 sm:top-24 sm:right-20 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent/40 animate-float animate-particle" style={{ animationDelay: '0.8s' }}></div>
    <div className="absolute bottom-16 left-18 sm:bottom-20 sm:left-24 w-0.75 h-0.75 sm:w-1 sm:h-1 rounded-full bg-accent/50 animate-float animate-particle" style={{ animationDelay: '1.2s' }}></div>
    <div className="absolute bottom-12 right-12 sm:bottom-16 sm:right-16 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent/30 animate-float animate-particle" style={{ animationDelay: '0.6s' }}></div>
    <div className="absolute top-24 left-24 sm:top-32 sm:left-32 w-0.75 h-0.75 sm:w-1 sm:h-1 rounded-full bg-accent/40 animate-float animate-particle" style={{ animationDelay: '1.4s' }}></div>
    
    {/* Additional subtle particles for depth */}
    <div className="absolute top-12 right-6 sm:top-16 sm:right-8 w-0.5 h-0.5 rounded-full bg-accent/30 animate-float" style={{ animationDelay: '1.6s' }}></div>
    <div className="absolute bottom-6 left-24 sm:bottom-8 sm:left-32 w-0.5 h-0.5 rounded-full bg-accent/20 animate-float" style={{ animationDelay: '1.8s' }}></div>
  </div>
);

const whySignalCards = [
  {
    title: "Confidence, not confusion",
    description: "Real-time opt-in removes guesswork.",
    icon: Target,
  },
  {
    title: "Instant context",
    description: "Name, age, one photo. Simple.",
    icon: User,
  },
  {
    title: "Safety first",
    description: "Mutual consent. Location privacy by default.",
    icon: Lock,
  },
];

const features = [
  {
    title: "Real-time Interest",
    description: "See who's interested instantly.",
    icon: Sparkles,
  },
  {
    title: "Privacy First",
    description: "Your data stays private.",
    icon: Shield,
  },
  {
    title: "Smart Matching",
    description: "AI-powered suggestions based on interests.",
    icon: Users,
  },
  {
    title: "Instant Connection",
    description: "Connect with people who share your interests.",
    icon: Zap,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Header />
      
      {/* Hero Section */}
      <main id="main-content" className="relative">
        <section className="relative hero-padding overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-muted/20"></div>
          
          <div className="container-max relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Main headline with responsive typography */}
              <h1 className="font-heading font-bold text-foreground mb-6 tracking-tight text-balance">
                Airdrop for meeting new people.
              </h1>
              
              {/* Subhead with responsive sizing and better line breaks */}
              <p className="text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-pretty">
                Signal lets you send and receive interest in real time—no swiping, no guesswork.
              </p>
              
              {/* CTA Buttons with proper touch targets */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <WaitlistDialog />
                <Link href="/how-it-works">
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-lg px-8 py-3 group touch-target focus-visible-ring"
                  >
                    How it works
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
              {/* Abstract Signal Graphic */}
              <SignalGraphic />
              
              {/* Trust Row with responsive spacing */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-muted-foreground/70">
                <span>Launching NYC</span>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/40"></div>
                <span>Universities & Young Professionals</span>
              </div>
            </div>
          </div>
        </section>

      {/* Why Signal Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold mb-4 text-balance">
              Why Signal
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Built for genuine connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-gap-responsive">
            {whySignalCards.map((card, index) => (
              <div 
                key={card.title}
                className="group animate-card-enter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full border-border/40 hover:border-gold/40 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 focus-visible-ring">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-gold/20 transition-colors duration-300">
                      <card.icon className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    </div>
                    <CardTitle className="font-heading text-xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground text-base leading-relaxed text-pretty">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold mb-4 text-balance">
              Why Signal is Different
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Built for meaningful connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 grid-gap-responsive">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group animate-card-enter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full border-border/40 hover:border-accent/20 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 focus-visible-ring">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-accent/20 transition-colors duration-300">
                      <feature.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    </div>
                    <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground text-base leading-relaxed text-pretty">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-heading font-bold text-balance">
              Ready to meet people?
            </h2>
            <p className="text-muted-foreground text-pretty">
              Join the waitlist.
            </p>
            <div className="pt-4">
              <WaitlistDialog />
            </div>
          </div>
        </div>
      </section>

      <Footer />
        </main>
      </div>
    );
  }
