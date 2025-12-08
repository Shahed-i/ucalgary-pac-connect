import { Target, Eye, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 olive-decoration opacity-50" style={{ backgroundPosition: "center" }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Who We Are
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Community United for Justice
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Palestine Advocacy Club at the University of Calgary is a student-led organization 
            committed to promoting awareness, education, and advocacy for Palestinian human rights 
            and self-determination.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Vision */}
          <div className="group bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover-lift">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <Eye className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A world where Palestinian voices are heard, their rights are recognized, 
              and justice prevails through peaceful advocacy and education.
            </p>
          </div>

          {/* Mission */}
          <div className="group bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover-lift">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
              <Target className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To educate our campus community, raise awareness about Palestinian history 
              and current affairs, and advocate for human rights through events and initiatives.
            </p>
          </div>

          {/* Values */}
          <div className="group bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover-lift">
            <div className="w-14 h-14 rounded-xl bg-olive/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <Users className="w-7 h-7 text-olive group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Our Values
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Unity, education, peaceful advocacy, inclusivity, and an unwavering 
              commitment to human rights and dignity for all people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
