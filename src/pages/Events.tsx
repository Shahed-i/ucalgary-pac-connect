import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, GraduationCap, Building2 } from "lucide-react";

const campuses = [
  {
    id: "ucalgary",
    name: "PAC at UCalgary",
    fullName: "University of Calgary",
    description:
      "Our founding chapter. A space for advocacy, learning, culture, and collective organizing on campus.",
    icon: GraduationCap,
    path: "/events/ucalgary",
    image: "/images/events/ucalgary.jpg",
    symbol: "✦",
  },
  {
    id: "mru",
    name: "PAC at MRU",
    fullName: "Mount Royal University",
    description:
      "A growing chapter centered on community, cultural expression, and accessible educational spaces.",
    icon: Building2,
    path: "/events/mru",
    image: "/images/events/mru.jpg",
    symbol: "✧",
  },
];

export default function Events() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 via-background to-background" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-6 py-2 rounded-full border border-emerald-700/50 text-emerald-700 font-semibold mb-6">
              Events & Chapters
            </span>

            <h1 className="font-display text-6xl md:text-7xl font-bold text-foreground mb-6">
              Where We
              <span className="block bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent pb-6">
                Gather & Organize
              </span>
            </h1>

            <p className="text-xl text-foreground/85 max-w-2xl">
              PAC events are more than dates on a calendar, they are moments of learning, remembrance, culture, and collective action.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Cards */}
      <section className="pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto">
            {campuses.map((campus) => (
              <Link
                key={campus.id}
                to={campus.path}
                className="group relative h-[520px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-700/40 transition-all duration-500"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${campus.image})` }}
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                {/* Symbolic texture overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_40%)]" />

                {/* Content */}
                <div className="relative z-10 h-full p-10 flex flex-col justify-end">
                  <div className="mb-auto text-emerald-400 text-4xl font-display opacity-70">
                    {campus.symbol}
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-emerald-700 flex items-center justify-center mb-6 shadow-lg">
                    <campus.icon className="w-7 h-7 text-white" />
                  </div>

                  <h2 className="font-display text-4xl font-bold text-white mb-2">
                    {campus.name}
                  </h2>

                  <p className="text-emerald-300 font-medium mb-4">
                    {campus.fullName}
                  </p>

                  <p className="text-white/85 leading-relaxed mb-6 max-w-md">
                    {campus.description}
                  </p>

                  <div className="flex items-center gap-3 text-emerald-300 font-bold text-lg">
                    Enter Chapter
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 text-center">
            <p className="text-lg text-foreground/70">
              Want to bring PAC to your campus or collaborate on an event?{" "}
              <Link
                to="/contact"
                className="text-emerald-700 font-bold hover:underline"
              >
                Let’s build together
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
