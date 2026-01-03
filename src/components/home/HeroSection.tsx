import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, BookOpen } from "lucide-react";
import { CountUp } from "@/components/ui/count-up";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl animate-pulse opacity-60" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-primary/15 via-accent/5 to-transparent rounded-full blur-3xl animate-pulse opacity-50 delay-700" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-float opacity-40" />
      </div>

      {/* Full-page Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url("/images/IMG_1998.jpg")',
        }}
      />
      
      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center justify-center min-h-screen">
          {/* Main Heading with Gradient */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 animate-fade-up delay-100">
            <span className="block text-foreground">Advocating for</span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-up delay-150">
              Palestine
            </span>{" "}
            <span className="block text-foreground mt-4 text-5xl sm:text-6xl md:text-7xl">With Unity & Purpose</span>
            <svg className="mx-auto mt-4 w-32 h-3" viewBox="0 0 200 8" fill="none">
              <path d="M0 4C50 0 150 8 200 4" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-primary)" />
                  <stop offset="100%" stopColor="var(--color-accent)" />
                </linearGradient>
              </defs>
            </svg>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground font-semibold max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up delay-200">
            Join us in our mission to educate, raise awareness, and stand in solidarity 
            with the Palestinian people through peaceful advocacy and community engagement.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-fade-up delay-300">
            <Button asChild variant="hero" size="xl" className="btn-press hover:scale-105 transition-all shadow-lg hover:shadow-primary/50">
              <Link to="/join" className="group px-8">
                Join Our Movement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="btn-press hover:scale-105 transition-all px-8">
              <Link to="/events">Upcoming Events</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl mx-auto animate-fade-up delay-400 stagger-children">
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border border-primary/20 hover:border-primary/50 transition-all duration-300 hover-lift shadow-lg hover:shadow-primary/30">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <Users className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-125 transition-transform duration-300" />
                <div className="font-display text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  <CountUp end={5000} />+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Active Members</div>
              </div>
            </div>
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border border-accent/20 hover:border-accent/50 transition-all duration-300 hover-lift shadow-lg hover:shadow-accent/30">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <Calendar className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-125 transition-transform duration-300" />
                <div className="font-display text-4xl md:text-5xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                  <CountUp end={50} />+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Events Hosted</div>
              </div>
            </div>
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border border-primary/20 hover:border-primary/50 transition-all duration-300 hover-lift shadow-lg hover:shadow-primary/30">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-125 transition-transform duration-300" />
                <div className="font-display text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  <CountUp end={20} />+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Workshops & Seminars</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-11 rounded-full border-2 border-primary/40 flex items-start justify-center p-2.5 backdrop-blur-sm bg-card/20">
          <div className="w-1.5 h-3 rounded-full bg-gradient-to-b from-primary to-accent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
