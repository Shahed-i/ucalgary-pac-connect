import { Target, Eye, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Animated Gradient Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent rounded-full blur-3xl animate-pulse opacity-40" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-accent/10 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse opacity-30 delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl animate-float opacity-35" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-up">
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary font-semibold mb-6 hover:scale-105 transition-transform cursor-default">
            Who We Are
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            <span className="block mb-2">A Community</span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">United for Justice</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed max-w-2xl mx-auto">
            The Palestine Advocacy Club at the University of Calgary is a student-led organization 
            committed to promoting awareness, education, and advocacy for Palestinian human rights 
            and self-determination.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          {/* Vision */}
          <div className="group relative overflow-hidden rounded-2xl p-10 bg-gradient-to-br from-emerald-700/30 to-emerald-700/10 backdrop-blur-md border-2 border-emerald-700/60 hover:border-emerald-700 transition-all duration-300 hover-lift shadow-lg hover:shadow-emerald-700/60">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-700/80 to-emerald-700/60 flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-2xl group-hover:shadow-emerald-700/80">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-emerald-700 transition-colors">
                Our Vision
              </h3>
              <p className="text-foreground/85 leading-relaxed">
                PAC envisions a university community that is informed, empathetic, and actively engaged in the pursuit of justice.
                We strive for a campus environment where Palestinian voices are supported and protected, misinformation and discrimination are challenged, and students are empowered to advocate ethically and effectively, locally and beyond, toward a future grounded in human rights, solidarity, and collective responsibility.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="group relative overflow-hidden rounded-2xl p-10 bg-gradient-to-br from-emerald-700/30 to-emerald-700/10 backdrop-blur-md border-2 border-emerald-700/60 hover:border-emerald-700 transition-all duration-300 hover-lift shadow-lg hover:shadow-emerald-700/60">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-700/80 to-emerald-700/60 flex items-center justify-center mb-8 group-hover:scale-125 group-hover:-rotate-6 transition-all duration-300 shadow-2xl group-hover:shadow-emerald-700/80">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-emerald-700 transition-colors">
                Our Mission
              </h3>
              <p className="text-foreground/85 leading-relaxed">
                PAC exists to unite students from all backgrounds in advocating for justice, dignity, and the rights of the Palestinian people under international law.
                We are committed to educating the campus community on the history and humanitarian realities of Palestine, fostering respectful dialogue and free expression, supporting Palestinian students and newcomers, and engaging in peaceful advocacy, community collaboration, and philanthropic initiatives that reflect integrity, compassion, and accountability.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="group relative overflow-hidden rounded-2xl p-10 bg-gradient-to-br from-emerald-700/30 to-emerald-700/10 backdrop-blur-md border-2 border-emerald-700/60 hover:border-emerald-700 transition-all duration-300 hover-lift shadow-lg hover:shadow-emerald-700/60">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-700/80 to-emerald-700/60 flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-2xl group-hover:shadow-emerald-700/80">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-emerald-700 transition-colors">
                Our Values
              </h3>
              <p className="text-foreground/85 leading-relaxed">
                PAC is guided by principles of justice, education, and peaceful advocacy. We value truth and critical awareness, respectful dialogue and free expression, community care and inclusivity, ethical leadership and accountability, and collaboration rooted in solidarity and service. 
                Through these values, we strive to foster a safe, informed, and principled campus environment committed to dignity, human rights, and collective responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
