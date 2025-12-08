import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, GraduationCap, Building2 } from "lucide-react";

const campuses = [
  {
    id: "ucalgary",
    name: "PAC at UCalgary",
    fullName: "University of Calgary",
    description: "Join our chapter at the University of Calgary campus. We host regular events, workshops, and community gatherings.",
    icon: GraduationCap,
    path: "/events/ucalgary",
    color: "bg-primary",
  },
  {
    id: "mru",
    name: "PAC at MRU",
    fullName: "Mount Royal University",
    description: "Connect with our Mount Royal University chapter for cultural events, educational sessions, and solidarity actions.",
    icon: Building2,
    path: "/events/mru",
    color: "bg-accent",
  },
];

export default function Events() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero tatreez-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Events
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Find Events Near You
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Palestine Advocacy Club is active across multiple campuses in Calgary. 
              Select your campus to see upcoming and past events.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Selection */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {campuses.map((campus, index) => (
              <Link
                key={campus.id}
                to={campus.path}
                className="group relative bg-card rounded-2xl border border-border/50 p-8 hover:border-primary/30 transition-all duration-300 hover-lift overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${campus.color} opacity-5 rounded-full blur-2xl`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${campus.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <campus.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {campus.name}
                  </h2>
                  
                  <p className="text-sm text-muted-foreground mb-1">
                    {campus.fullName}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {campus.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    View Events
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Want to start a PAC chapter at your campus?{" "}
              <Link to="/contact" className="text-primary hover:underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
