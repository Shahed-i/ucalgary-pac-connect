import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Event, categoryColors, categoryLabels } from "@/data/events";

interface EventCardProps {
  event: Event;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export function EventCard({ event, isExpanded, onToggleExpand }: EventCardProps) {
  return (
    <article
      className={cn(
        "group bg-card rounded-2xl border border-border/50 overflow-hidden hover-lift transition-all duration-300",
        event.isPast && "opacity-75"
      )}
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
          isExpanded ? "" : "line-clamp-2"
        )}>
          {event.description}
        </p>
        
        <button
          onClick={onToggleExpand}
          className="mt-3 text-sm text-primary font-medium hover:underline flex items-center gap-1"
        >
          {isExpanded ? "Show less" : "Read more"}
          <ArrowRight className={cn(
            "w-3 h-3 transition-transform",
            isExpanded && "rotate-90"
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
  );
}
