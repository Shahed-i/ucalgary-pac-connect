import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Shield, ExternalLink, AlertCircle, Users, BookOpen, Megaphone } from "lucide-react";
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
      <section className="pt-32 pb-20 relative overflow-hidden bg-emerald-50/40">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-800/10 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-900/5 blur-3xl rounded-full animate-pulse-slow" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
              <Heart className="w-4 h-4" />
              Support the Cause
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-emerald-950 mb-6">
              Your Generosity Makes a Difference
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed">
              Support humanitarian relief efforts and help provide essential aid to Palestinians in need. Every contribution counts.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div>
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Trusted Organizations
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                These organizations have been vetted and are known for their transparent 
                operations and effective delivery of humanitarian aid.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
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

            {/* PAC Direct Donation */}
            <div className="mt-16 text-center bg-emerald-50/60 border border-emerald-900/10 rounded-2xl p-8 max-w-3xl mx-auto animate-fade-up">
              <h3 className="font-display text-2xl font-bold text-emerald-900 mb-3">
                Want to donate to PAC?
              </h3>
              <p className="text-lg text-emerald-950 mb-2">
                You can e-transfer your support directly to our club at
                <span className="font-semibold text-primary ml-1">pac.ucalgary@gmail.com</span>.
              </p>
              <p className="text-base text-emerald-900/80">
                100% of your donation goes towards running new events, educational initiatives, and advocacy efforts for the campus community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-gradient-to-br from-emerald-50/60 to-accent/10 relative overflow-hidden">
        <div className="absolute -top-20 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-40 animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30 animate-float delay-300" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-emerald-900 mb-4 flex items-center justify-center gap-2 animate-fade-up">
              <Megaphone className="w-7 h-7 text-primary animate-bounce" />
              Other Ways to Help
            </h2>
            <p className="text-lg text-emerald-950 mb-10 animate-fade-up delay-100">
              Financial contributions aren't the only way to make a difference. Consider these alternatives:
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-left animate-fade-up delay-200">
              <div className="group bg-white/80 rounded-2xl border border-emerald-200 shadow-md p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-primary/10">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-emerald-900 mb-2 text-lg">Volunteer</h3>
                <p className="text-sm text-emerald-900/80">
                  Help organize events, spread awareness, or contribute your skills.
                </p>
              </div>
              <div className="group bg-white/80 rounded-2xl border border-emerald-200 shadow-md p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-primary/10">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-emerald-900 mb-2 text-lg">Educate</h3>
                <p className="text-sm text-emerald-900/80">
                  Share information with friends and family. Knowledge is powerful.
                </p>
              </div>
              <div className="group bg-white/80 rounded-2xl border border-emerald-200 shadow-md p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-primary/10">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                  <Megaphone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-emerald-900 mb-2 text-lg">Advocate</h3>
                <p className="text-sm text-emerald-900/80">
                  Contact your representatives and advocate for humanitarian policies.
                </p>
              </div>
            </div>
            <div className="mt-12 animate-fade-up delay-300">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 btn-press hover:scale-105 transition-all">
                <Link to="/join">Join Our Club</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
