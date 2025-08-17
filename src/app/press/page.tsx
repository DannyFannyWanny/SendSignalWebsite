import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { 
  Mail, 
  Download, 
  Calendar, 
  ExternalLink,
  Smartphone,
  MapPin,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

// Company blurb and founder info
const companyInfo = {
  name: "Signal",
  tagline: "Airdrop for meeting new people",
  description: "Signal removes guesswork from meeting new people. Real-time opt-in technology creates genuine connections.",
  founded: "2024",
  location: "New York City",
  mission: "To make meeting new people as simple and natural as sending a signal.",
  founder: {
    name: "Alex Chen",
    title: "Founder & CEO",
    bio: "Former product leader at leading social platforms, passionate about human connection and privacy-first technology.",
    email: "alex@signal.com",
    linkedin: "linkedin.com/in/alexchen-signal"
  }
};

// Product screenshots (placeholder data)
const productScreenshots = [
  {
    title: "Discover Nearby People",
    description: "See who's also on Signal in your area",
    image: "/screenshots/discover.jpg", // Placeholder path
    alt: "Signal app showing nearby people discovery interface"
  },
  {
    title: "Send Interest Signal",
    description: "One tap to express interest in meeting someone",
    image: "/screenshots/signal.jpg", // Placeholder path
    alt: "Signal app showing interest signal interface"
  },
  {
    title: "Mutual Connection",
    description: "When both people are interested, chat unlocks",
    image: "/screenshots/chat.jpg", // Placeholder path
    alt: "Signal app showing chat interface after mutual connection"
  }
];

// Downloadable assets
const downloadableAssets = [
  {
    name: "Signal Logo (SVG)",
    description: "Vector logo in multiple formats",
    downloads: [
      { format: "SVG", size: "12KB", url: "/assets/signal-logo.svg" },
      { format: "PNG", size: "45KB", url: "/assets/signal-logo.png" },
      { format: "JPG", size: "32KB", url: "/assets/signal-logo.jpg" }
    ]
  },
  {
    name: "Signal Wordmark",
    description: "Text-based logo variations",
    downloads: [
      { format: "SVG", size: "8KB", url: "/assets/signal-wordmark.svg" },
      { format: "PNG", size: "28KB", url: "/assets/signal-wordmark.png" }
    ]
  },
  {
    name: "Monochrome Assets",
    description: "Single-color versions for various backgrounds",
    downloads: [
      { format: "SVG", size: "15KB", url: "/assets/signal-monochrome.svg" },
      { format: "PNG", size: "52KB", url: "/assets/signal-monochrome.png" }
    ]
  }
];

// Press FAQ
const pressFAQ = [
  {
    question: "What makes Signal different from other dating apps?",
    answer: "Real-time opt-in technology. Both people must express interest simultaneously to unlock communication."
  },
  {
    question: "How does Signal ensure user safety and privacy?",
    answer: "Privacy by default. Users share only name, age, and one photo. Location data is approximate. Mutual consent required."
  },
  {
    question: "When will Signal launch?",
    answer: "Currently in private beta in NYC. Expanding to major metropolitan areas in 2025."
  },
  {
    question: "What's your business model?",
    answer: "Free to use with premium features. Core functionality remains free."
  },
  {
    question: "How can I get early access?",
    answer: "Join our waitlist. Prioritizing students and young professionals."
  }
];

// Waitlist stats (placeholder)
const waitlistStats = {
  total: "12,847",
  cities: "47",
  universities: "156",
  growth: "+23%",
  period: "this month"
};

export default function PressPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-padding">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-heading font-bold tracking-tight text-balance">
              Press & Media
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-balance">
              Signal uses real-time opt-in technology. Download our press kit and connect with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="font-heading font-bold text-balance">
                  About Signal
                </h2>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  {companyInfo.description}
                </p>
                                 <p className="text-muted-foreground text-pretty leading-relaxed">
                   Founded in {companyInfo.founded} and based in {companyInfo.location}. 
                   Making meeting new people simple.
                 </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{companyInfo.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Founded {companyInfo.founded}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-muted/20 rounded-2xl p-6">
                <h3 className="font-heading font-semibold mb-4">Founder Contact</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">{companyInfo.founder.name}</p>
                    <p className="text-sm text-muted-foreground">{companyInfo.founder.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{companyInfo.founder.bio}</p>
                  <div className="space-y-2 pt-2">
                    <a 
                      href={`mailto:${companyInfo.founder.email}`}
                      className="flex items-center space-x-2 text-sm text-accent hover:underline touch-target focus-visible-ring"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{companyInfo.founder.email}</span>
                    </a>
                    <a 
                      href={`https://${companyInfo.founder.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm text-accent hover:underline touch-target focus-visible-ring"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Screenshots Section */}
      <section className="section-padding bg-muted/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold mb-4 text-balance">
              Product Overview
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              See how Signal works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productScreenshots.map((screenshot, index) => (
              <div key={screenshot.title} className="space-y-4">
                <div className="aspect-[9/16] bg-muted rounded-2xl flex items-center justify-center border border-border/40">
                  <div className="text-center p-6">
                    <Smartphone className="w-16 h-16 text-muted-foreground/40 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Screenshot {index + 1}</p>
                    <p className="text-xs text-muted-foreground/60">Placeholder</p>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-heading font-semibold">{screenshot.title}</h3>
                  <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Assets Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold mb-4 text-balance">
              Brand Assets
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Download our logo, wordmark, and monochrome assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloadableAssets.map((asset) => (
              <Card key={asset.name} className="h-full border-border/40 hover:border-accent/20 transition-all duration-300 hover:shadow-lg focus-visible-ring">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                    <Download className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="font-heading text-xl">{asset.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {asset.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {asset.downloads.map((download) => (
                      <div key={download.format} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{download.format}</span>
                          <span className="text-sm text-muted-foreground">({download.size})</span>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="touch-target focus-visible-ring"
                          asChild
                        >
                          <a href={download.url} download>
                            Download
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press FAQ Section */}
      <section className="section-padding bg-muted/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold mb-4 text-balance">
              Press FAQ
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Common questions about Signal.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {pressFAQ.map((faq, index) => (
              <Card key={index} className="border-border/40 focus-visible-ring">
                <CardHeader>
                  <CardTitle className="font-heading text-lg text-left">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Stats Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-balance">
                Waitlist Statistics
              </h2>
                          <p className="text-muted-foreground text-pretty">
              Track our growth.
            </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-accent">{waitlistStats.total}</div>
                <p className="text-sm text-muted-foreground">Total Signups</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-accent">{waitlistStats.cities}</div>
                <p className="text-sm text-muted-foreground">Cities</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-accent">{waitlistStats.universities}</div>
                <p className="text-sm text-muted-foreground">Universities</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-accent">{waitlistStats.growth}</div>
                <p className="text-sm text-muted-foreground">{waitlistStats.period}</p>
              </div>
            </div>
            
            <div className="pt-6">
              <Link href="/api/waitlist">
                <Button variant="outline" size="lg" className="touch-target focus-visible-ring">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Detailed Stats
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-heading font-bold text-balance">
              Ready to cover Signal?
            </h2>
            <p className="text-muted-foreground text-pretty">
              Join our press list for updates and direct communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WaitlistDialog />
              <Button variant="outline" size="lg" className="touch-target focus-visible-ring">
                <Mail className="w-4 h-4 mr-2" />
                Contact Press Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
