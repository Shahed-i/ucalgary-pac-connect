import { EventsPageLayout } from "@/components/events/EventsPageLayout";
import { mruEvents } from "@/data/events";

export default function MRUEvents() {
  return (
    <EventsPageLayout
      campusName="PAC at MRU"
      campusFullName="Mount Royal University Events"
      events={mruEvents}
    />
  );
}
