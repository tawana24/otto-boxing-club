"use client";

import { Reveal } from "./Reveal";
import { ArrowRight, Check } from "./Icons";
import { useModal } from "./modalContext";

type Pillar = {
  tag: string;
  title: string;
  blurb: string;
  bullets: string[];
  cta: string;
  highlight?: boolean;
};

// The three business dimensions of Otto Boxing Club
const pillars: Pillar[] = [
  {
    tag: "01",
    title: "Developmental Pipeline",
    blurb:
      "A direct feeder line from grassroots to the professional circuit. Otto identifies raw township talent and develops it for the global stage — the same path that produced multiple WBF and ABU champions.",
    bullets: [
      "Ghetto Warriors Series — amateur grassroots events",
      "Provincial team selection pathway",
      "Amateur → professional progression",
    ],
    cta: "Apply for development",
  },
  {
    tag: "02",
    title: "Professional Training & Management",
    blurb:
      "Championship-level coaching, fight camps, boxer management, and event promotion. Led by ANSA Best Boxing Promoter 2024 — Alie &ldquo;Otto&rdquo; Phiri.",
    bullets: [
      "Personalised fight camps",
      "Boxer management & match-making",
      "Promotion via Rise of the Champions Series",
    ],
    cta: "Train under Otto",
    highlight: true,
  },
  {
    tag: "03",
    title: "Fitness & Wellness",
    blurb:
      "Boxing-led conditioning for individual and corporate clients. On-demand, personalized, no fixed timetable — train when it works for you, with coaches who fight at championship level.",
    bullets: [
      "Individual sessions — by appointment",
      "Corporate packages & team retreats",
      "Strength, conditioning, recovery",
    ],
    cta: "Book wellness",
  },
];

export default function Pathways() {
  const { openModal } = useModal();

  return (
    <section
      id="pathways"
      className="relative py-24 lg:py-32 border-t border-grey-line"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow text-blood mb-4">What we do</p>
              <h2 className="font-display tracking-wide text-bone leading-[0.95] text-[clamp(2.5rem,6vw,5rem)]">
                Three dimensions. <br />
                <span className="text-bone/50">One standard.</span>
              </h2>
            </div>
            <p className="max-w-md text-bone/70 leading-relaxed">
              Otto Boxing Club operates on a three-dimensional scale —
              development pipeline, professional training &amp; management,
              fitness &amp; wellness. Every service is personalized and booked
              on demand.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.08}>
              <article
                className={[
                  "group relative h-full flex flex-col p-8 lg:p-10 border transition-all duration-300",
                  p.highlight
                    ? "bg-grey-card border-blood/40 lg:-translate-y-2"
                    : "bg-grey-card border-grey-line hover:border-bone/30",
                ].join(" ")}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-8 bg-blood text-bone font-display tracking-widest text-[0.7rem] px-3 py-1 rounded-sm">
                    Flagship
                  </span>
                )}

                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-display text-bone/30 text-5xl font-tabular leading-none">
                    {p.tag}
                  </span>
                </div>

                <h3 className="font-display tracking-wide text-bone text-3xl mb-3">
                  {p.title}
                </h3>
                <p
                  className="text-bone/70 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: p.blurb }}
                />

                <ul className="space-y-3 mb-8 mt-auto">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-bone/85 text-sm"
                    >
                      <Check className="w-4 h-4 text-blood mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => openModal("join", `Enquiry: ${p.title}`)}
                  className="group/btn inline-flex items-center justify-between font-display tracking-wider text-sm uppercase text-bone border-t border-grey-line pt-5 cursor-pointer transition-colors hover:text-blood"
                >
                  {p.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
