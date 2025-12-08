import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink, MessageCircle, Users, Heart, ArrowRight } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    description: "Follow us for updates, event announcements, and educational content.",
    icon: Instagram,
    url: "https://instagram.com/pacucalgary",
    color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500",
    followers: "2.5K",
  },
  {
    name: "Linktree",
    description: "All our important links in one place. Quick access to everything PAC.",
    icon: ExternalLink,
    url: "https://linktr.ee/pacucalgary",
    color: "bg-primary",
    followers: null,
  },
  {
    name: "WhatsApp",
    description: "Join our community group for real-time updates and discussions.",
    icon: MessageCircle,
    url: "https://chat.whatsapp.com/pacucalgary",
    color: "bg-green-500",
    followers: "500+",
  },
];

const reasons = [
  {
    icon: Users,
    title: "Build Community",
    description: "Connect with like-minded students who share your values and commitment to justice.",
  },
  {
    icon: Heart,
    title: "Make an Impact",
    description: "Your voice and actions contribute to real change on campus and beyond.",
  },
  {
    icon: ExternalLink,
    title: "Learn & Grow",
    description: "Access educational resources, workshops, and speaker events to deepen your understanding.",
  },
];

export default function Join() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero tatreez-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Join Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Be Part of Something Bigger
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join the Palestine Advocacy Club and become part of a vibrant community 
              dedicated to education, awareness, and peaceful advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Why Join PAC?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="text-center p-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Connect With Us
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Follow our social channels to stay updated and join our community conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card rounded-2xl border border-border/50 p-6 hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <link.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {link.description}
                </p>
                {link.followers && (
                  <span className="text-xs text-primary font-medium">
                    {link.followers} followers
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 tatreez-pattern opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-background/70 mb-8 leading-relaxed">
              Whether you have five minutes or five hours a week, there's a way for you 
              to contribute. Every voice matters in the pursuit of justice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="https://linktr.ee/pacucalgary" target="_blank" rel="noopener noreferrer" className="group">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-background/30 text-background hover:bg-background/10"
              >
                <a href="mailto:pac@ucalgary.ca">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
