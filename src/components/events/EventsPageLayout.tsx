import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { EventCard } from "@/components/events/EventCard";
import { Event } from "@/data/events";
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
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  const filteredEvents = events.filter((event) => {
    if (filter === "upcoming") return !event.isPast;
    if (filter === "past") return event.isPast;
    return true;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero tatreez-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <Link 
              to="/events" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Events
            </Link>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {campusName} Events
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {campusFullName}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join us at our events to learn, connect, and take action. From educational 
              workshops to cultural celebrations, there's something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border/50 sticky top-16 lg:top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2">
            {["all", "upcoming", "past"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as typeof filter)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {f === "all" ? "All Events" : f === "upcoming" ? "Upcoming" : "Past Events"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isExpanded={expandedEvent === event.id}
                onToggleExpand={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
              />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No events found for this filter.</p>
              <Button variant="outline" onClick={() => setFilter("all")}>
                View All Events
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
