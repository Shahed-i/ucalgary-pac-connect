import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { EventCard } from "@/components/events/EventCard";
import { EventModal } from "@/components/events/EventModal";
import { Event, sortEventsByDate } from "@/data/events";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventsPageLayoutProps {
  campusName: string;
  campusFullName: string;
  events: Event[];
}

export function EventsPageLayout({ campusName, campusFullName, events }: EventsPageLayoutProps) {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const sortedEvents = sortEventsByDate(events);

  const filteredEvents = sortedEvents.filter((event) => {
    if (filter === "upcoming") return !event.isPast;
    if (filter === "past") return event.isPast;
    return true;
  });

  return (
    <Layout>
      {/* Animated Background */}
      <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-bl from-emerald-700/20 via-emerald-700/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-emerald-700/15 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-transparent to-background" />
        
        {/* Animated decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-700/30 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-gradient-to-tl from-emerald-700/20 to-transparent rounded-full blur-3xl animate-pulse" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <Link 
              to="/events" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-600 transition-colors mb-6 group  pt-7"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Events
            </Link>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2 animate-fade-up delay-100">
              {campusFullName}
            </h1>
            <div className="w-full h-1 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 mb-8 animate-fade-up delay-150 rounded-full" />
            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed max-w-2xl animate-fade-up delay-200">
              Join us at our events to learn, connect, and take action. From educational 
              workshops to cultural celebrations, there's something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-emerald-700/20 sticky top-16 lg:top-20 bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-xl z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3">
            {["all", "upcoming", "past"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as typeof filter)}
                className={cn(
                  "px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300",
                  filter === f
                    ? "bg-emerald-700 text-white shadow-lg shadow-emerald-700/50"
                    : "bg-emerald-700/10 text-emerald-700 border border-emerald-700/20 hover:bg-emerald-700/20 hover:border-emerald-700/40"
                )}
              >
                {f === "all" ? "All Events" : f === "upcoming" ? "Upcoming" : "Past Events"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/5 via-background to-emerald-900/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onOpen={setSelectedEvent}
              />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <p className="text-foreground/70 mb-6 text-lg">No events found for this filter.</p>
              <Button onClick={() => setFilter("all")} className="bg-emerald-700 text-white hover:bg-emerald-800 hover:shadow-lg hover:shadow-emerald-700/50 transition-all px-8">
                View All Events
              </Button>
            </div>
          )}

          {/* And many more footer */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-700/50" />
              <p className="text-lg font-display font-semibold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
                and many more
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-700/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Event Modal */}
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </Layout>
  );
}
