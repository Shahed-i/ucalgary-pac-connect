import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: "workshop" | "rally" | "cultural" | "fundraiser" | "speaker";
  isPast: boolean;
  attendees?: number;
  image?: string;
}

const events: Event[] = [
  {
    id: "1",
    title: "Palestinian Culture Night",
    date: "December 15, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "MacEwan Hall, University of Calgary",
    description: "Join us for an evening celebrating Palestinian culture through traditional food, music, dabke dancing, and poetry. Open to all students and community members.",
    category: "cultural",
    isPast: false,
    attendees: 150,
  },
  {
    id: "2",
    title: "Documentary Screening: 'The Present'",
    date: "December 10, 2024",
    time: "7:00 PM - 9:30 PM",
    location: "Science Theatres, Room 140",
    description: "Screening of the Oscar-nominated short film 'The Present' followed by a discussion panel with local Palestinian community members.",
    category: "cultural",
    isPast: false,
    attendees: 80,
  },
  {
    id: "3",
    title: "Know Your Rights Workshop",
    date: "December 5, 2024",
    time: "5:00 PM - 7:00 PM",
    location: "Taylor Family Digital Library",
    description: "Learn about your rights as a student activist. Workshop led by legal experts covering freedom of expression, peaceful protest, and advocacy on campus.",
    category: "workshop",
    isPast: false,
    attendees: 45,
  },
  {
    id: "4",
    title: "Humanitarian Aid Fundraiser",
    date: "November 20, 2024",
    time: "12:00 PM - 4:00 PM",
    location: "MacHall Hub",
    description: "Fundraising event with bake sale, art auction, and donation drive. All proceeds go to verified humanitarian organizations providing aid in Gaza.",
    category: "fundraiser",
    isPast: true,
    attendees: 200,
  },
  {
    id: "5",
    title: "Guest Speaker: Dr. Noura Erakat",
    date: "November 10, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Science B, Room 103",
    description: "Human rights attorney and academic Dr. Noura Erakat discusses international law, Palestinian rights, and the path to justice.",
    category: "speaker",
    isPast: true,
    attendees: 250,
  },
  {
    id: "6",
    title: "Solidarity Rally for Peace",
    date: "October 28, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Olympic Plaza, Downtown Calgary",
    description: "Community gathering calling for an immediate ceasefire and humanitarian access to Gaza. Speakers include community leaders and student representatives.",
    category: "rally",
    isPast: true,
    attendees: 500,
  },
];

const categoryColors: Record<string, string> = {
  workshop: "bg-primary/10 text-primary",
  rally: "bg-accent/10 text-accent",
  cultural: "bg-olive/10 text-olive",
  fundraiser: "bg-gold/20 text-foreground",
  speaker: "bg-secondary text-secondary-foreground",
};

const categoryLabels: Record<string, string> = {
  workshop: "Workshop",
  rally: "Rally",
  cultural: "Cultural Event",
  fundraiser: "Fundraiser",
  speaker: "Speaker Event",
};

export default function Events() {
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Events
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Upcoming & Past Events
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
            {filteredEvents.map((event, index) => (
              <article
                key={event.id}
                className={cn(
                  "group bg-card rounded-2xl border border-border/50 overflow-hidden hover-lift transition-all duration-300",
                  event.isPast && "opacity-75"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Event Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className={cn("px-3 py-1 rounded-full text-xs font-medium", categoryColors[event.category])}>
                      {categoryLabels[event.category]}
                    </span>
                    {event.isPast && (
                      <span className="text-xs text-muted-foreground">Past Event</span>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {event.location}
                    </div>
                    {event.attendees && (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        {event.attendees} {event.isPast ? "attended" : "interested"}
                      </div>
                    )}
                  </div>
                </div>

                {/* Expandable Description */}
                <div className="px-6 pb-6">
                  <p className={cn(
                    "text-sm text-muted-foreground leading-relaxed transition-all duration-300",
                    expandedEvent === event.id ? "" : "line-clamp-2"
                  )}>
                    {event.description}
                  </p>
                  
                  <button
                    onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                    className="mt-3 text-sm text-primary font-medium hover:underline flex items-center gap-1"
                  >
                    {expandedEvent === event.id ? "Show less" : "Read more"}
                    <ArrowRight className={cn(
                      "w-3 h-3 transition-transform",
                      expandedEvent === event.id && "rotate-90"
                    )} />
                  </button>
                </div>

                {/* Action Button */}
                {!event.isPast && (
                  <div className="px-6 pb-6 pt-2 border-t border-border/50">
                    <Button variant="outline" className="w-full" size="sm">
                      Register Interest
                    </Button>
                  </div>
                )}
              </article>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No events found for this filter.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
