import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  ExternalLink,
  MessageCircle,
  Users,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Globe,
  Coffee,
  BookOpen,
} from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    description: "Follow us for updates, event announcements, and educational content.",
    icon: Instagram,
    url: "https://www.instagram.com/pacucalgary/",
    color: "from-purple-500 via-pink-500 to-orange-500",
    followers: "5K+",
  },
  {
    name: "Linktree",
    description: "All our important links in one place. Quick access to everything PAC.",
    icon: ExternalLink,
    url: "https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Fpac.ucalgary%3Futm_source%3Dlinktree_admin_share%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnrXxsTTtcui2ZhTnZ_8I9YmfFJCS48s8Z5RX04j2F_YGW7ALN_oY7pGFscZs_aem_0U6VBaI6ysLlLD8mVWRYJA&e=AT11lNXlEOiExQXXFk8tmUzDVGOQDVwfQD8qiTgGVl-VqEiK1wKAEgVf-DE94N0a5WU9k74VoKorAjjoRGPye_xwG_pbDx81w_feV4d3zHhseLAynUNgTF40QA",
    color: "from-emerald-900 to-emerald-800",
    followers: null,
  },
  {
    name: "WhatsApp",
    description: "Join our community group for real-time updates and discussions.",
    icon: MessageCircle,
    url: "https://chat.whatsapp.com/JP5yTyf4qfMKsnAgMvIV50",
    color: "from-green-800 to-green-700",
    followers: "300+",
  },
];

const reasons = [
  {
    icon: Users,
    title: "Build Community",
    description: "Join a grounded community rooted in solidarity, care, and collective responsibility.",
  },
  {
    icon: Zap,
    title: "Make an Impact",
    description: "Transform education and advocacy into meaningful, values-driven action on campus.",
  },
  {
    icon: BookOpen,
    title: "Learn & Grow",
    description: "Engage with talks, workshops, and discussions centered on justice and lived experience.",
  },
];

export default function Join() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-emerald-50/40">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-800/10 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-900/5 blur-3xl rounded-full animate-pulse-slow" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/10 text-emerald-900 text-sm font-medium mb-6 border border-emerald-900/20">
              <Sparkles className="w-4 h-4" />
              Join the Movement
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-emerald-950 mb-6">
              Be Part of Something Bigger
            </h1>

            <p className="text-lg text-slate-700 leading-relaxed">
              Join the Palestine Advocacy Club and become part of a community
              rooted in education, solidarity, and principled advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-emerald-950">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4">
              <Target className="w-8 h-8 text-white" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                Why Join PAC?
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group relative bg-emerald-50/60 border border-emerald-900/10 rounded-2xl p-8
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/20
                  animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-emerald-900 flex items-center justify-center
                    transition-all duration-300
                    group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-emerald-900/40">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-emerald-950 text-center mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-slate-700 text-center leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-24 bg-emerald-50/40 relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4">
              <Globe className="w-7 h-7 text-emerald-900 animate-spin" style={{ animationDuration: "20s" }} />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-emerald-950">
                Connect With Us
              </h2>
            </div>
            <p className="text-slate-700 max-w-2xl mx-auto text-lg">
              Stay connected through our platforms and be part of the conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-emerald-50/60 rounded-2xl border border-emerald-900/10 p-8
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/20
                  animate-scale-pop"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${link.color}
                    flex items-center justify-center mb-6
                    transition-all duration-300
                    group-hover:scale-125 group-hover:shadow-xl`}>
                    <link.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-emerald-950 mb-3">
                    {link.name}
                  </h3>

                  <p className="text-slate-700 mb-4 leading-relaxed">
                    {link.description}
                  </p>

                  {link.followers && (
                    <div className="flex items-center gap-2 text-emerald-900 font-semibold">
                      <Coffee className="w-4 h-4" />
                      <span>{link.followers} community members</span>
                    </div>
                  )}

                  <div className="mt-4 flex items-center gap-2 text-emerald-900 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Visit</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-foreground" />
          <div className="absolute inset-0 tatreez-pattern opacity-10" />
          {/* Decorative blobs - animated */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float delay-300" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
                Ready to make a difference?
              </h2>
              <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                Whether you have five minutes or five hours a week, there's a way for you to contribute. Every voice matters in the pursuit of justice.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90 btn-press hover:scale-105 transition-all">
                  <a href="https://www.instagram.com/pacucalgary/" target="_blank" className="group">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="xl"
                  variant="outline"
                  className="border-background/30 text-background hover:bg-background/10 hover:border-background/50 btn-press hover:scale-105 transition-all"
                >
                  <a href="mailto:pac@ucalgary.ca">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  );
}
