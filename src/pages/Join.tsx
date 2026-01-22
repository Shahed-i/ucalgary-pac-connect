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
  Music2 as TikTok,
} from "lucide-react";

const ucalgarySocialLinks = [
  {
    name: "Instagram",
    description: "Follow us for updates, event announcements, and educational content.",
    icon: Instagram,
    url: "https://www.instagram.com/pacucalgary/",
    color: "from-purple-500 via-pink-500 to-orange-500",
    followers: "",
  },
  {
    name: "TikTok",
    description: "Watch and share our latest videos and advocacy content.",
    icon: TikTok,
    url: "https://www.tiktok.com/@pac.uofc?_r=1&_t=ZS-93HDv9Lp4dw",
    color: "from-black via-fuchsia-600 to-cyan-400",
    followers: null,
  },
  {
    name: "Linktree",
    description: "All our important links in one place. Quick access to everything PAC.",
    icon: ExternalLink,
    url: "https://linktr.ee/pac.ucalgary",
    color: "from-emerald-900 to-emerald-800",
    followers: null,
  },
  {
    name: "WhatsApp",
    description: "Join our UCalgary community group for real-time updates and discussions.",
    icon: MessageCircle,
    url: "https://chat.whatsapp.com/JP5yTyf4qfMKsnAgMvIV50",
    color: "from-green-800 to-green-700",
    followers: "",
  },
];

const mruSocialLinks = [
  {
    name: "Instagram",
    description: "Follow MRU PAC for updates and events.",
    icon: Instagram,
    url: "https://www.instagram.com/pacmru/",
    color: "from-[#7c1c2a] via-[#a8324a] to-[#c1445a]",
    followers: null,
  },
  {
    name: "TikTok",
    description: "Watch and share our latest videos and advocacy content.",
    icon: TikTok,
    url: "https://www.tiktok.com/@pac.mru?_r=1&_t=ZS-93HDwUxp4NQ",
    color: "from-black via-[#a8324a] to-[#c1445a]",
    followers: null,
  },
  {
    name: "Linktree",
    description: "All MRU PAC links in one place.",
    icon: ExternalLink,
    url: "https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2FPalestineMRU%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnDhS5I26fkwECeXT120JzodsrTIcqdknVJ78TO_VPpgSr58vM3tU31EGKKus_aem_1TKUV_ZExyk8ZAvAgs0yaw&e=AT3ct8O3eAAD45k9F2X-hI3ry6W-zYBcBFHCV6H_pUBXo6J57q2t7nHNAGXQwpuEOLl0l9_Wc4rB6aygI6bB2UPq6mBUSvxWUwpFf9scuRyqB1Glq236RPrxrw",
    color: "from-[#a8324a] to-[#7c1c2a]",
    followers: null,
  },
  {
    name: "WhatsApp",
    description: "Join our MRU community group for real-time updates and discussions.",
    icon: MessageCircle,
    url: "https://chat.whatsapp.com/CH4Za2oNDUHKoHi1BsYqp1",
    color: "from-[#7c1c2a] to-[#a8324a]",
    followers: null,
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

          {/* UCalgary Socials */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-bold text-emerald-900 mb-6 text-center">UCalgary</h3>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {ucalgarySocialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-emerald-50/60 rounded-2xl border border-emerald-900 p-8
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

          {/* MRU Socials */}
          <div>
            <h3 className="font-display text-2xl font-bold text-center" style={{ color: '#7c1c2a' }}>MRU</h3>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {mruSocialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl border p-8 bg-[#f8eaea] border-[#c1445a]
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#c1445a]/30
                    animate-scale-pop"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c1445a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${link.color}
                      flex items-center justify-center mb-6
                      transition-all duration-300
                      group-hover:scale-125 group-hover:shadow-xl`}>
                      <link.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="font-display text-2xl font-bold" style={{ color: '#7c1c2a' }}>
                      {link.name}
                    </h3>

                    <p className="mb-4 leading-relaxed" style={{ color: '#7c1c2a' }}>
                      {link.description}
                    </p>

                    {link.followers && (
                      <div className="flex items-center gap-2 font-semibold" style={{ color: '#7c1c2a' }}>
                        <Coffee className="w-4 h-4" />
                        <span>{link.followers} community members</span>
                      </div>
                    )}

                    <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#7c1c2a' }}>
                      <span>Visit</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
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
