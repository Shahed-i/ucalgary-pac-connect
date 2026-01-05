import { X, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Event, categoryColors, categoryLabels } from "@/data/events";

interface EventModalProps {
  event: Event | null;
  onClose: () => void;
}

export function EventModal({ event, onClose }: EventModalProps) {
  if (!event) return null;

  const canRegister = !event.isPast && event.requiresRegistration;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 sm:p-0">
          <div
            className={cn(
              "relative w-full max-w-2xl bg-card rounded-2xl shadow-2xl overflow-hidden",
              "animate-in fade-in zoom-in-95 duration-300"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className={cn(
                "absolute top-4 right-4 z-10 p-2 rounded-full",
                "bg-black/20 hover:bg-black/40 text-white transition-colors"
              )}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Image */}
            {event.poster && (
              <div className="relative h-80 overflow-hidden">
                <img
                  src={event.poster}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span
                    className={cn(
                      "inline-block px-4 py-2 rounded-full text-sm font-medium backdrop-blur mb-3",
                      categoryColors[event.category]
                    )}
                  >
                    {categoryLabels[event.category]}
                  </span>
                  <h1 className="font-display text-4xl font-bold text-white leading-tight">
                    {event.title}
                  </h1>
                </div>
              </div>
            )}

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Event Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-emerald-700 mb-2">
                    Date
                  </span>
                  <span className="text-lg font-semibold">{event.date || "TBA"}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-emerald-700 mb-2">
                    Time
                  </span>
                  <span className="text-lg font-semibold">{event.time || "TBA"}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-emerald-700 mb-2">
                    Location
                  </span>
                  <span className="text-lg font-semibold">{event.location || "TBA"}</span>
                </div>
              </div>

              {/* Additional Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-b border-border/30 py-6">
                {event.price !== undefined && (
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-emerald-700">Price</span>
                      <p className="text-lg font-semibold">{event.price || "Free"}</p>
                    </div>
                  </div>
                )}
                {event.collaborators && event.collaborators.length > 0 && (
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-emerald-700">Collaborators</span>
                      <p className="text-lg font-semibold">{event.collaborators.join(", ")}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="border-t border-border/50 pt-6">
                <h2 className="font-display text-2xl font-semibold mb-4">
                  About this event
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Gallery */}
              {event.gallery && event.gallery.length > 0 && (
                <div className="border-t border-border/50 pt-6">
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Gallery
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {event.gallery.map((image, idx) => (
                      <div
                        key={idx}
                        className="group relative h-40 rounded-lg overflow-hidden"
                      >
                        <img
                          src={image}
                          alt={`Gallery ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              {canRegister && (
                <div className="flex gap-3 pt-6 border-t border-border/50">
                  <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      className={cn(
                        "w-full h-12 font-semibold",
                        "bg-gradient-to-r from-emerald-700 to-emerald-600",
                        "hover:from-emerald-700 hover:to-emerald-500",
                        "text-white shadow-lg shadow-emerald-700/30",
                        "transition-all duration-300"
                      )}
                    >
                      Register Now
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="flex-1 h-12 font-semibold"
                    onClick={onClose}
                  >
                    Close
                  </Button>
                </div>
              )}

              {event.isPast && (
                <div className="px-4 py-3 bg-muted/50 rounded-lg text-center text-sm text-muted-foreground font-medium">
                  This event has passed
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
