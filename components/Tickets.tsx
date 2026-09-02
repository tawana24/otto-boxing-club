"use client";

import { Reveal } from "./Reveal";
import { ArrowRight, WhatsApp } from "./Icons";
import { waLink } from "@/lib/config";
import { nextEvent } from "@/lib/events";

// Standing tournament pricing (three-tier). Pricing is by proximity to the
// stage + priority access — no bundled extras. Refreshments are purchased
// separately; table service is provided through our partners.
const tiers = [
  {
    name: "Standard",
    price: "$10",
    note: "General admission",
  },
  {
    name: "VIP",
    price: "$20",
    note: "Closer to the stage · priority access",
    highlight: true,
  },
  {
    name: "VVIP",
    price: "$50",
    note: "Closest to the stage · highest priority",
  },
];

export default function Tickets() {
  const event = nextEvent();
  const live = Boolean(event);

  return (
    <section
      id="tickets"
      className="relative py-24 lg:py-32 border-t border-grey-line"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-6">
            <div>
              <p className="eyebrow text-blood mb-4">Ticketing</p>
              <h2 className="font-display tracking-wide text-bone leading-[0.95] text-[clamp(2.5rem,6vw,5rem)]">
                Be in the room.
              </h2>
            </div>
            <p className="max-w-md text-bone/70 leading-relaxed">
              {live ? (
                <>
                  Tickets for{" "}
                  <span className="text-bone">{event!.title}</span>. Three
                  tiers, limited ringside.
                </>
              ) : (
                <>
                  Our standing three-tier pricing for tournament nights — priced
                  by proximity to the stage and priority access. Tickets open
                  here the moment a fight night is announced.
                </>
              )}
            </p>
          </div>
        </Reveal>

        {/* Availability banner when no event */}
        {!live && (
          <Reveal>
            <div className="mb-10 flex flex-wrap items-center gap-3 border border-grey-line bg-grey-card px-5 py-4">
              <span className="inline-block eyebrow text-[0.65rem] px-2.5 py-1 border border-bone/30 text-bone/70 rounded-sm">
                Opens with next tournament
              </span>
              <p className="text-bone/65 text-sm">
                No event on sale right now — pricing below is what tournament
                ticketing will look like.
              </p>
            </div>
          </Reveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <article
                className={[
                  "h-full flex flex-col p-8 lg:p-10 border transition-all duration-300",
                  t.highlight
                    ? "bg-grey-card border-blood/40 lg:-translate-y-2"
                    : "bg-grey-card border-grey-line hover:border-bone/30",
                ].join(" ")}
              >
                {t.highlight && (
                  <span className="self-start bg-blood text-bone font-display tracking-widest text-[0.7rem] px-3 py-1 rounded-sm mb-6">
                    Most popular
                  </span>
                )}
                <h3 className="font-display tracking-wide text-bone text-3xl mb-2">
                  {t.name}
                </h3>
                <p className="font-display text-blood text-5xl font-tabular leading-none">
                  {t.price}
                </p>
                <p className="text-bone/70 text-sm leading-relaxed mt-4 mb-8 border-t border-grey-line pt-4">
                  {t.note}
                </p>
                <a
                  href={waLink(
                    live
                      ? `Hi Coach Alie — I'd like to reserve ${t.name} tickets for ${event!.title}.`
                      : `Hi Coach Alie — please notify me when ${t.name} tickets open for the next Otto tournament.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center justify-between font-display tracking-wider text-sm uppercase text-bone border-t border-grey-line pt-5 cursor-pointer transition-colors hover:text-blood"
                >
                  {live ? `Reserve ${t.name}` : "Notify me"}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 text-bone/45 text-xs leading-relaxed max-w-3xl">
            Refreshments are available to purchase at the venue. Table service
            is provided through our partners. Pricing reflects entry and
            seating proximity only.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-6 border border-grey-line bg-grey-card p-6">
            <p className="text-bone/75 leading-relaxed">
              Corporate tables and venue-specific seating configured per
              tournament. Talk to Coach Alie for group bookings.
            </p>
            <a
              href={waLink(
                "Hi Coach Alie — I'd like to enquire about corporate tables for Otto tournaments.",
              )}
              target="_blank"
              rel="noreferrer"
              className="btn-outline cursor-pointer inline-flex items-center gap-2"
            >
              <WhatsApp className="w-4 h-4" /> Corporate enquiries
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
