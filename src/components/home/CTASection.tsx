import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute inset-0 tatreez-pattern opacity-10" />
      
      {/* Decorative blobs - animated */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float delay-300" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-8 hover:scale-105 transition-transform cursor-default">
            <Heart className="w-4 h-4 animate-pulse" />
            Be Part of the Change
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
            Join Our Movement for{" "}
            <span className="text-primary hover:scale-105 inline-block transition-transform">Justice</span>
          </h2>

          <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you want to attend events, volunteer, or simply stay informed, 
            there's a place for you in our community. Together, we can make a difference.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90 btn-press hover:scale-105 transition-all">
              <Link to="/join" className="group">
                Become a Member
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="xl" 
              variant="outline" 
              className="border-background/30 text-background hover:bg-background/10 hover:border-background/50 btn-press hover:scale-105 transition-all"
            >
              <Link to="/donate">Support Our Cause</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
