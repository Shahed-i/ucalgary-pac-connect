import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Instagram, ExternalLink, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    const templateParams = {
      name: form.name.value,
      title: form.subject.value,
      message: form.message.value,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        "service_5d0oi0w",
        "template_585j3il",
        templateParams,
        "ho44ZeKW7uaX0fVLN"
      );

      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out via Instagram.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-emerald-50/40">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-800/10 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-900/5 blur-3xl rounded-full animate-pulse-slow" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/10 text-emerald-900 text-sm font-medium mb-6 border border-emerald-900/20">
              <Mail className="w-4 h-4" />
              Contact
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-emerald-950 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed">
              Have questions, ideas, or want to collaborate? We'd love to hear from you. Reach out and let's connect.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're a student looking to join, a community member wanting to 
                  collaborate, or media seeking information, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a 
                      href="mailto:pac.ucalgary@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      pac.ucalgary@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      University of Calgary<br />
                      2500 University Dr NW<br />
                      Calgary, AB T2N 1N4
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Social Media</h3>
                    <div className="flex items-center gap-4">
                      <a 
                        href="https://www.instagram.com/pacucalgary/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        Instagram <ExternalLink className="w-3 h-3" />
                      </a>
                      <a 
                        href="https://linktr.ee/pac.ucalgary" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        Linktree <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-secondary/50 rounded-xl">
                <h3 className="font-semibold text-foreground mb-3">Response Time</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We typically respond within 24–48 hours during the academic semester.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input id="name" name="name" required placeholder="Your name" />
                  <Input id="email" name="email" type="email" required placeholder="your.email@ucalgary.ca" />
                  <Input id="subject" name="subject" required placeholder="What is this regarding?" />
                  <Textarea id="message" name="message" required rows={5} placeholder="Your message..." />

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : <>Send Message <Send className="w-4 h-4 ml-2" /></>}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
