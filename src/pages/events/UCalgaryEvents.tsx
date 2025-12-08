import { EventsPageLayout } from "@/components/events/EventsPageLayout";
import { ucalgaryEvents } from "@/data/events";

export default function UCalgaryEvents() {
  return (
    <EventsPageLayout
      campusName="PAC at UCalgary"
      campusFullName="University of Calgary Events"
      events={ucalgaryEvents}
    />
  );
}
