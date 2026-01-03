import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Megaphone, GraduationCap, Heart, Globe } from "lucide-react";

const achievements = [
  {
    icon: Megaphone,
    title: "Campus Awareness Initiatives",
    description:
      "Organized awareness booths and tabling initiatives to engage students in conversations about Palestine and ongoing humanitarian issues.",
    stat: "10+",
    statLabel: "Initiatives",
  },
  {
    icon: GraduationCap,
    title: "Educational & Learning Spaces",
    description:
      "Hosted workshops, discussions, film screenings, and talks exploring Palestinian history, culture, and lived experiences.",
    stat: "15+",
    statLabel: "Sessions",
  },
  {
    icon: Heart,
    title: "Humanitarian Support",
    description:
      "Facilitated donation and fundraising initiatives in collaboration with trusted humanitarian and relief organizations.",
    stat: "$10K+",
    statLabel: "Supported",
  },
  {
    icon: Globe,
    title: "Community & Cultural Engagement",
    description:
      "Created spaces that celebrate Palestinian culture through art, storytelling, and community-centered events while fostering belonging and solidarity.",
    stat: "5000+",
    statLabel: "Members",
  },
];



export function ImpactSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background via-emerald-900/5 to-background">
      {/* Animated Gradient Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-bl from-emerald-700/20 via-emerald-700/5 to-transparent rounded-full blur-3xl animate-pulse opacity-50" />
        <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-700/15 to-transparent rounded-full blur-3xl animate-pulse opacity-40 delay-700" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-br from-emerald-700/10 to-transparent rounded-full blur-3xl animate-float opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20 animate-fade-up">
          <div className="max-w-3xl">
            <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-emerald-700/30 to-emerald-700/10 border border-emerald-700/40 text-emerald-700 font-semibold mb-6 hover:scale-105 transition-transform cursor-default">
              Our Impact
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
              What We've
            </h2>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
              Accomplished
            </h2>
          </div>
          <Button asChild variant="outline" className="self-start lg:self-auto btn-press hover:scale-105 px-8">
            <Link to="/events" className="group">
              View All Events
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 stagger-children">
          {achievements.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl p-10 bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-md border-2 border-emerald-700/30 hover:border-emerald-700/70 transition-all duration-300 hover-lift shadow-lg hover:shadow-emerald-700/50"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Background stat */}
              <div className="absolute -right-8 -top-8 font-display text-8xl font-bold text-emerald-700/10 leading-none group-hover:scale-110 group-hover:text-emerald-700/20 transition-all duration-500 pointer-events-none">
                {item.stat}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-700/70 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-emerald-700/60">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="font-display text-3xl md:text-4xl font-bold text-emerald-700 group-hover:scale-110 transition-transform origin-right group-hover:text-emerald-600">{item.stat}</div>
                    <div className="text-sm font-medium text-emerald-700/70 group-hover:text-emerald-700 transition-colors">{item.statLabel}</div>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
