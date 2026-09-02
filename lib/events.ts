// Otto Boxing Club — events / tournaments.
// The DATA lives in the CMS: editing events in /keystatic writes to
// content/events/index.json, imported below. When no event has a future
// (or TBA) date, the site automatically shows its "no tournament scheduled"
// state — nothing to remove by hand when a fight night passes.
import eventsDoc from "@/content/events/index.json";

export type EventStatus = "announced" | "tickets-open" | "sold-out" | "past";

export type FightCardItem = {
  bout: string;
  detail?: string;
};

export type OttoEvent = {
  slug: string;
  series: string;
  title: string;
  date?: string; // ISO 8601 — omit/empty if date is still TBA
  venue: string;
  city?: string;
  status: EventStatus;
  poster?: string;
  ticketUrl?: string;
  ticketPhone?: string;
  card: FightCardItem[];
  blurb: string;
};

export const events = eventsDoc.list as unknown as OttoEvent[];

// The recurring series Otto stages (shown even when no date is set)
export const series = [
  {
    name: "Rise of the Champions",
    note: "Zimbabwe's most consistent professional boxing series.",
  },
  {
    name: "Ghetto Warriors Series",
    note: "Grassroots amateur development — the pipeline's proving ground.",
  },
];

export const upcomingEvents = () =>
  events
    // keep dated-future events + any with a TBA (missing) date
    .filter((e) => !e.date || new Date(e.date).getTime() > Date.now())
    .sort((a, b) => {
      if (!a.date) return 1; // TBA events sort last
      if (!b.date) return -1;
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

export const nextEvent = (): OttoEvent | undefined => upcomingEvents()[0];
export const hasUpcoming = () => upcomingEvents().length > 0;
