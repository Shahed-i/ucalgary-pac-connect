import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, BookOpen } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Full-page Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{
          backgroundImage: 'url("/images/IMG_1998.jpg")',
        }}
      />
      
      {/* Overlay to apply opacity and darken the image */}
      <div className="absolute inset-0 bg-black opacity-40" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
            Advocating for{" "}
            <span className="text-primary relative ">
              Palestine
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 0 150 8 200 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-accent/50" />
              </svg>
            </span>{" "}
            <br className="hidden sm:block" />
            <span className="inline-block pt-4">With Unity & Purpose</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary font-bold max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
            Join us in our mission to educate, raise awareness, and stand in solidarity 
            with the Palestinian people through peaceful advocacy and community engagement.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-300">
            <Button asChild variant="hero" size="xl" className="btn-press hover:scale-105 transition-all">
              <Link to="/join" className="group">
                Join Our Movement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="btn-press hover:scale-105 transition-all">
              <Link to="/events">Upcoming Events</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fade-up delay-400 stagger-children">
            <div className="group text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover-lift hover:border-primary/30 transition-all">
              <Users className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">500+</div>
              <div className="text-sm text-muted-foreground">Members</div>
            </div>
            <div className="group text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover-lift hover:border-primary/30 transition-all">
              <Calendar className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">50+</div>
              <div className="text-sm text-muted-foreground">Events</div>
            </div>
            <div className="group text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover-lift hover:border-primary/30 transition-all">
              <BookOpen className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">20+</div>
              <div className="text-sm text-muted-foreground">Workshops</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}
