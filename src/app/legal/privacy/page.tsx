import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Users, Globe, Calendar } from "lucide-react";

const privacyPrinciples = [
  {
    icon: Shield,
    title: "Data Minimization",
    description: "We collect only the minimum amount of data necessary to provide our service. We don't collect or store your messages, contacts, or call history."
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All communications are encrypted end-to-end, meaning only you and your intended recipient can read your messages."
  },
  {
    icon: Eye,
    title: "No Tracking",
    description: "We don't track your activity, location, or behavior. We don't create profiles or target you with ads."
  },
  {
    icon: Users,
    title: "User Control",
    description: "You have complete control over your data. You can delete your account and all associated data at any time."
  },
  {
    icon: Globe,
    title: "Transparency",
    description: "Our code is open source and our privacy practices are transparent. We're committed to being clear about how we protect your data."
  },
  {
    icon: Calendar,
    title: "Regular Updates",
    description: "We regularly review and update our privacy practices to ensure they meet the highest standards and comply with applicable laws."
  }
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Your privacy is fundamental to Signal. This policy explains how we protect 
              your data and maintain your privacy while using our service.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: December 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Principles Section */}
      <section className="py-20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do to protect your privacy and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {privacyPrinciples.map((principle) => (
              <div key={principle.title}>
                <Card className="h-full border-border/40 hover:border-accent/20 transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                      <principle.icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="font-heading text-xl">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Collection Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                What We Collect
              </h2>
              <p className="text-lg text-muted-foreground">
                We&apos;re transparent about what data we collect and why we need it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-green-600">
                    What We Do Collect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Phone number for account creation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Device information for app functionality</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Basic usage statistics (anonymized)</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-red-600">
                    What We Don&apos;t Collect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Message content or call audio</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Contact lists or address books</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Location data or browsing history</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection Section */}
      <section className="py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                How We Protect Your Data
              </h2>
              <p className="text-lg text-muted-foreground">
                We use industry-leading security measures to protect your information.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-semibold text-lg mb-2">Encryption</h3>
                <p className="text-muted-foreground">
                  All data is encrypted using AES-256 encryption both in transit and at rest. 
                  Your messages are encrypted end-to-end using the Signal Protocol.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-semibold text-lg mb-2">Access Controls</h3>
                <p className="text-muted-foreground">
                  Strict access controls ensure that only authorized personnel can access 
                  system data, and all access is logged and monitored.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-semibold text-lg mb-2">Regular Audits</h3>
                <p className="text-muted-foreground">
                  We undergo regular security audits and penetration testing to identify 
                  and address any potential vulnerabilities.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-semibold text-lg mb-2">Data Retention</h3>
                <p className="text-muted-foreground">
                  We retain minimal data and only for as long as necessary to provide 
                  our service. You can request data deletion at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold">
              Questions About Privacy?
            </h2>
            <p className="text-lg text-muted-foreground">
              If you have questions about this privacy policy or how we protect your data, 
              please contact our privacy team.
            </p>
            <div className="pt-4">
              <p className="text-muted-foreground">
                Email: <span className="text-accent">privacy@signal.org</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
