import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Megaphone, GraduationCap, Heart, Globe } from "lucide-react";

const achievements = [
  {
    icon: Megaphone,
    title: "Awareness Campaigns",
    description: "Organized campus-wide awareness campaigns reaching thousands of students and faculty members.",
    stat: "10+",
    statLabel: "Campaigns",
  },
  {
    icon: GraduationCap,
    title: "Educational Workshops",
    description: "Hosted educational workshops, film screenings, and speaker events to share Palestinian history and perspectives.",
    stat: "25+",
    statLabel: "Workshops",
  },
  {
    icon: Heart,
    title: "Humanitarian Drives",
    description: "Led fundraising and donation drives supporting humanitarian relief efforts for Palestinians in need.",
    stat: "$50K+",
    statLabel: "Raised",
  },
  {
    icon: Globe,
    title: "Community Building",
    description: "Built a diverse, inclusive community of students united in their commitment to justice and human rights.",
    stat: "500+",
    statLabel: "Members",
  },
];

export function ImpactSection() {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 animate-fade-up">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 hover:scale-105 transition-transform cursor-default">
              Our Impact
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              What We've Accomplished
            </h2>
          </div>
          <Button asChild variant="outline" className="self-start lg:self-auto btn-press hover:scale-105">
            <Link to="/events" className="group">
              View All Events
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 stagger-children">
          {achievements.map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift overflow-hidden"
            >
              {/* Background number */}
              <div className="absolute -right-4 -top-4 font-display text-[120px] font-bold text-primary/5 leading-none group-hover:scale-110 transition-transform duration-500">
                {item.stat}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="text-right">
                    <div className="font-display text-3xl font-bold text-primary group-hover:scale-110 transition-transform origin-right">{item.stat}</div>
                    <div className="text-sm text-muted-foreground">{item.statLabel}</div>
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
