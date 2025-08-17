import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Ban, MapPin, Users, CheckCircle, Heart } from "lucide-react";

const safetyAnchors = [
  {
    id: "privacy",
    title: "Privacy",
    icon: Shield,
    description: "Your data stays yours.",
    content: "Privacy is fundamental. Signal collects minimal data and never shares your information. Your conversations and connections remain private.",
    features: [
      "No message content stored",
      "End-to-end encryption",
      "No tracking or profiling",
      "Minimal data collection"
    ]
  },
  {
    id: "block-report",
    title: "Block/Report",
    icon: Ban,
    description: "You're always in control.",
    content: "Your safety comes first. Block anyone instantly, report concerning behavior. We have zero tolerance for harassment.",
    features: [
      "Instant blocking",
      "Anonymous reporting",
      "24/7 safety monitoring",
      "Clear guidelines"
    ]
  },
  {
    id: "location-controls",
    title: "Location Controls",
    icon: MapPin,
    description: "You choose what to share.",
    content: "Location sharing is optional and under your control. Share your general area or keep it private. Change settings anytime.",
    features: [
      "Neighborhood-level sharing only",
      "No exact coordinates",
      "Easy on/off toggle",
      "Data deleted after 24 hours"
    ]
  },
  {
    id: "community-standards",
    title: "Community Standards",
    icon: Users,
    description: "Building a respectful community.",
    content: "We create a safe, welcoming environment. Our standards are clear, fair, and consistently enforced.",
    features: [
      "Clear expectations",
      "Fair moderation",
      "Appeal process",
      "Regular updates"
    ]
  }
];

const faqItems = [
  {
    question: "Can people see my exact location?",
    answer: "No. Signal shows only your general neighborhood if you choose to share it. Exact coordinates are never visible."
  },
  {
    question: "What happens if I block someone?",
    answer: "They can't see your profile or contact you. The block is immediate and permanent unless you unblock them."
  },
  {
    question: "How do you handle reports?",
    answer: "Reports are reviewed within 24 hours. We take immediate action and provide clear feedback."
  },
  {
    question: "Can Signal access my messages?",
    answer: "No. All messages are encrypted end-to-end. Only you and the recipient can read them."
  },
  {
    question: "What data do you collect?",
    answer: "Minimal data: phone number, basic app usage, and optional location data. We never sell or share this data."
  },
  {
    question: "How do you ensure consent?",
    answer: "Every interaction requires mutual consent. Both people must express interest before communication unlocks."
  }
];

export default function Safety() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Your Safety, Our Priority
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Built with privacy, consent, and minimal data at the core.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Anchors Section */}
      <section className="py-20">
        <div className="container-max">
          <div className="space-y-16">
            {safetyAnchors.map((anchor) => (
              <div key={anchor.id} id={anchor.id} className="scroll-mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                  {/* Left Column - Icon and Title */}
                  <div className="lg:col-span-1">
                    <div className="sticky top-32">
                      <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                        <anchor.icon className="w-10 h-10 text-accent" />
                      </div>
                      <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                        {anchor.title}
                      </h2>
                      <p className="text-lg text-muted-foreground font-medium">
                        {anchor.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Right Column - Content */}
                  <div className="lg:col-span-2">
                    <div className="space-y-6">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {anchor.content}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {anchor.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-border/40 hover:border-accent/20 transition-colors">
                <CardHeader className="pb-4">
                  <CardTitle className="font-heading text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <Card className="border-border/40 bg-muted/10">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-gold" />
                </div>
                <CardTitle className="font-heading text-2xl lg:text-3xl">
                  Our Commitment
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We build a platform where meaningful connections happen safely. 
                  Your privacy, security, and well-being are the foundation of everything we do.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Technology should bring people together, not put them at risk. 
                  Signal has privacy and consent at its core, ensuring every interaction is safe and under your control.
                </p>
                <div className="pt-6">
                  <div className="inline-block">
                    <p className="text-gold font-medium text-lg">— Signal Team</p>
                    <div className="w-24 h-0.5 bg-gold/30 mx-auto mt-2"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/20">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold">
              Ready to try Signal?
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

      <Footer />
    </div>
  );
}
