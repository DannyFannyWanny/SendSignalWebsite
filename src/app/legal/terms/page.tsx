import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Globe, AlertTriangle, CheckCircle, FileText } from "lucide-react";

const termsSections = [
  {
    icon: Users,
    title: "Acceptance of Terms",
    description: "By using Signal, you agree to be bound by these Terms of Service. If you don't agree to these terms, please don't use our service.",
    details: [
      "You must be at least 13 years old to use Signal",
      "You agree to use the service in compliance with applicable laws",
      "You are responsible for maintaining the security of your account"
    ]
  },
  {
    icon: Shield,
    title: "Service Description",
    description: "Signal provides secure messaging, voice calling, and video calling services with end-to-end encryption.",
    details: [
      "Free messaging and calling services",
      "End-to-end encryption for all communications",
      "Cross-platform compatibility",
      "Group chat functionality"
    ]
  },
  {
    icon: Globe,
    title: "User Responsibilities",
    description: "Users are responsible for their conduct and content while using Signal's services.",
    details: [
      "Respect the privacy and rights of others",
      "Don't use the service for illegal activities",
      "Don't attempt to compromise the security of the service",
      "Report any security vulnerabilities you discover"
    ]
  },
  {
    icon: FileText,
    title: "Intellectual Property",
    description: "Signal and its content are protected by intellectual property laws and remain the property of Signal Foundation.",
    details: [
      "Signal Foundation owns all rights to the service",
      "Users retain rights to their own content",
      "Open source components are available under their respective licenses",
      "Trademarks and logos are protected property"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    description: "Signal Foundation provides the service 'as is' and limits its liability to the extent permitted by law.",
    details: [
      "Service is provided without warranties",
      "We're not liable for indirect or consequential damages",
      "Liability is limited to the amount you paid for the service",
      "Some jurisdictions don't allow liability limitations"
    ]
  },
  {
    icon: CheckCircle,
    title: "Termination",
    description: "Either party may terminate the service agreement at any time, subject to the terms outlined in this section.",
    details: [
      "You can delete your account at any time",
      "We may terminate accounts that violate these terms",
      "Termination doesn't affect your privacy rights",
      "Data deletion procedures are outlined in our privacy policy"
    ]
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              These terms govern your use of Signal&apos;s services. Please read them carefully 
              to understand your rights and responsibilities.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: December 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Overview Section */}
      <section className="py-20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Terms Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These terms outline the rules and guidelines for using Signal&apos;s secure 
              communication services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {termsSections.map((section) => (
              <div key={section.title}>
                <Card className="h-full border-border/40 hover:border-accent/20 transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                      <section.icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="font-heading text-2xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                      {section.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {section.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notices Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                Important Notices
              </h2>
              <p className="text-lg text-muted-foreground">
                Please pay special attention to these important terms and conditions.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-accent">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    These terms are governed by the laws of the United States, specifically 
                    the state of California. Any disputes will be resolved in the courts of 
                    San Francisco County, California.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-accent">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We may update these terms from time to time. We&apos;ll notify users of 
                    significant changes through the app or our website. Continued use of 
                    the service after changes constitutes acceptance of the new terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-accent">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Severability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If any provision of these terms is found to be unenforceable, the 
                    remaining provisions will continue to be effective. We&apos;ll work to 
                    replace unenforceable terms with enforceable alternatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold">
              Questions About These Terms?
            </h2>
            <p className="text-lg text-muted-foreground">
              If you have questions about these terms of service or need clarification 
              on any provision, please contact our legal team.
            </p>
            <div className="pt-4">
              <p className="text-muted-foreground">
                Email: <span className="text-accent">legal@signal.org</span>
              </p>
              <p className="text-sm text-muted-foreground/80 mt-2">
                For urgent legal matters, please include &quot;URGENT&quot; in the subject line.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
