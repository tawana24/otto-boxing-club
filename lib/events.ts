// Otto Boxing Club — events / tournaments
// No event is currently scheduled. When Otto announces a tournament,
// add it to the `events` array below and the countdown + ticketing
// automatically go live across the site.

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

// ── No tournament currently scheduled ──
// To announce one, add an object here, e.g.:
// {
//   slug: "rise-of-the-champions-7",
//   series: "Rise of the Champions",
//   title: "Rise of the Champions VII",
//   date: "2026-09-13T19:00:00+02:00",
//   venue: "HICC", city: "Harare",
//   status: "tickets-open",
//   card: [{ bout: "Hassan Milanzi vs. TBA", detail: "WBF International defence" }],
//   blurb: "Otto's flagship fight night.",
// }
export const events: OttoEvent[] = [
  {
    slug: "zvenyika-vs-moffat",
    series: "ROYGRI Boxing Promotions × Lighthouse College of Technology",
    title: "Zvenyika vs Moffat — National Featherweight Title",
    date: "2026-06-13T18:00:00+02:00", // 13 June 2026; first-bell time approx — TODO confirm
    venue: "Baradzanwa Cultural Village",
    status: "tickets-open",
    poster: "/events/zvenyika-vs-moffat.jpg",
    ticketPhone: "0774 601 820 / 0718 957 325",
    card: [
      {
        bout: 'Alfonso "Zvedza Jnr" Zvenyika vs Mike "Iron Heart" Moffat',
        detail: "Zimbabwe National Featherweight Title · 10 rounds",
      },
    ],
    blurb:
      "Otto's Alfonso Zvenyika Jnr challenges for the Zimbabwe National Featherweight Title. Presented by ROYGRI Boxing Promotions in conjunction with Lighthouse College of Technology — under the banner of empowering women & girls and fighting drug & substance abuse.",
  },
];

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
