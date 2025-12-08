import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Shield, ExternalLink, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const donationOptions = [
  {
    name: "UNRWA",
    description: "The UN agency providing essential services to Palestinian refugees including healthcare, education, and emergency aid.",
    url: "https://donate.unrwa.org/",
    verified: true,
  },
  {
    name: "Medical Aid for Palestinians",
    description: "Provides medical aid and health services to Palestinians affected by conflict, occupation, and displacement.",
    url: "https://www.map.org.uk/",
    verified: true,
  },
  {
    name: "Palestine Children's Relief Fund",
    description: "Provides free medical care to injured and ill children throughout the Middle East.",
    url: "https://www.pcrf.net/",
    verified: true,
  },
  {
    name: "Islamic Relief Canada",
    description: "Provides emergency relief, healthcare, and support to families in Gaza and the West Bank.",
    url: "https://islamicreliefcanada.org/",
    verified: true,
  },
];

export default function Donate() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero tatreez-pattern relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Support the Cause
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Generosity Makes a Difference
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Support humanitarian relief efforts and help provide essential aid to 
              Palestinians in need. Every contribution counts.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-8 bg-secondary/50 border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-center">
            <Shield className="w-5 h-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              We only recommend verified, reputable humanitarian organizations with transparent operations.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Trusted Organizations
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                These organizations have been vetted and are known for their transparent 
                operations and effective delivery of humanitarian aid.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {donationOptions.map((org, index) => (
                <a
                  key={org.name}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card rounded-2xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-accent" />
                    </div>
                    {org.verified && (
                      <span className="flex items-center gap-1 text-xs text-primary font-medium">
                        <Shield className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {org.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {org.description}
                  </p>
                  
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:underline">
                    Donate Now
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-12 p-6 bg-muted/50 rounded-xl border border-border/50">
              <div className="flex gap-4">
                <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">
                    <strong className="text-foreground">Please Note:</strong> The Palestine 
                    Advocacy Club does not directly collect donations. All donations are made 
                    directly to the organizations listed above through their official websites.
                  </p>
                  <p>
                    We encourage you to research each organization and choose one that aligns 
                    with your values. Tax receipts and donation policies vary by organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Other Ways to Help
            </h2>
            <p className="text-muted-foreground mb-8">
              Financial contributions aren't the only way to make a difference. 
              Consider these alternatives:
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">Volunteer</h3>
                <p className="text-sm text-muted-foreground">
                  Help organize events, spread awareness, or contribute your skills.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">Educate</h3>
                <p className="text-sm text-muted-foreground">
                  Share information with friends and family. Knowledge is powerful.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">Advocate</h3>
                <p className="text-sm text-muted-foreground">
                  Contact your representatives and advocate for humanitarian policies.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Button asChild size="lg">
                <Link to="/join">Join Our Club</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
