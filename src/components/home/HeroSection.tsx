import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, BookOpen } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 tatreez-pattern opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-secondary/30" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float delay-300" />

      {/* Palestinian Flag Colors - Decorative Stripes */}
      <div className="absolute left-0 top-0 bottom-0 w-1 md:w-2">
        <div className="h-1/4 bg-foreground" />
        <div className="h-1/4 bg-primary" />
        <div className="h-1/4 bg-background" />
        <div className="h-1/4 bg-accent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            University of Calgary Student Club
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
            Advocating for{" "}
            <span className="text-primary relative">
              Palestine
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 0 150 8 200 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-accent/50" />
              </svg>
            </span>{" "}
            <br className="hidden sm:block" />
            With Unity & Purpose
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
            Join us in our mission to educate, raise awareness, and stand in solidarity 
            with the Palestinian people through peaceful advocacy and community engagement.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-300">
            <Button asChild variant="hero" size="xl">
              <Link to="/join" className="group">
                Join Our Movement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/events">Upcoming Events</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fade-up delay-400">
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover-lift">
              <Users className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Members</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover-lift">
              <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Events</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover-lift">
              <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">20+</div>
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
