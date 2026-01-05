import { Calendar, MapPin, Clock, Users, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { Event, categoryColors, categoryLabels } from "@/data/events";

interface EventCardProps {
  event: Event;
  onOpen: (event: Event) => void;
}

export function EventCard({ event, onOpen }: EventCardProps) {
  return (
    <article
      onClick={() => onOpen(event)}
      className={cn(
        "group bg-card rounded-2xl border border-border/50 overflow-hidden cursor-pointer transition-all duration-300 flex flex-col",
        "hover:shadow-xl hover:border-emerald-700/40",
        event.isPast && "opacity-80"
      )}
    >
      {/* Header with Title and Category */}
      <div className="px-6 pt-6 pb-4 border-b border-border/30">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-display text-xl font-semibold group-hover:text-emerald-700 transition-colors flex-1">
            {event.title}
          </h3>
          <span
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium backdrop-blur whitespace-nowrap flex-shrink-0",
              categoryColors[event.category]
            )}
          >
            {categoryLabels[event.category]}
          </span>
        </div>
      </div>

      {/* Content Grid */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: Details */}
        <div className="flex-1 p-6 space-y-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{event.date || "TBA"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{event.time || "TBA"}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{event.location || "TBA"}</span>
          </div>
          {event.price !== undefined && (
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-700 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{event.price || "Free"}</span>
            </div>
          )}
          {event.collaborators && event.collaborators.length > 0 && (
            <div className="flex items-center gap-2 pt-2 border-t border-border/30">
              <Users className="w-4 h-4 text-emerald-700 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{event.collaborators.join(", ")}</span>
            </div>
          )}
        </div>

        {/* Right: Poster */}
        {event.poster && (
          <div className="p-4 flex-shrink-0">
            <div className="w-36 h-44 rounded-lg overflow-hidden border-2 border-emerald-700/30 shadow-lg">
              <img
                src={event.poster}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
