"use client";

import { Reveal } from "./Reveal";

type Quote = {
  body: string;
  who: string;
  role: string;
};

// TODO: replace with real client testimonials when available
const quotes: Quote[] = [
  {
    body:
      "Coach Otto handed me my only loss and turned it into a title. The fight camp before my WBF Continental belt was the most disciplined eight weeks of my career.",
    who: "Tinashe Majoni",
    role: "WBF Continental Super Flyweight Champion",
  },
  {
    body:
      "I came in chasing fitness and left chasing belts. The coaching here is on another level — they meet you where you are and push you further.",
    who: "Otto member",
    role: "Fitness &amp; wellness client",
  },
  {
    body:
      "Real boxing, no nonsense. Whether you&apos;re a pro in camp or a corporate client, the standard never drops.",
    who: "Otto member",
    role: "Corporate training client",
  },
];

const stats = [
  { v: "5", l: "Crowned champions in the stable" },
  { v: "9", l: "Professional fighters on the roster" },
  { v: "7", l: "Years building champions, 2018–2025" },
  { v: "3", l: "Full-time coaches" },
];

export default function Proof() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-grey-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-blood mb-4">The Record</p>
          <h2 className="font-display tracking-wide text-bone leading-[0.95] text-[clamp(2.5rem,6vw,5rem)] mb-16">
            Talk is cheap.
          </h2>
        </Reveal>

        {/* Stats strip */}
        <Reveal delay={0.05}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-grey-line border border-grey-line mb-20">
            {stats.map((s) => (
              <div key={s.l} className="bg-black p-8">
                <p className="font-display text-blood text-5xl lg:text-6xl font-tabular leading-none">
                  {s.v}
                </p>
                <p className="text-bone/60 mt-3 text-sm leading-snug max-w-[18ch]">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <Reveal key={`${q.who}-${i}`} delay={i * 0.08}>
              <figure className="h-full bg-grey-card border border-grey-line p-8 flex flex-col">
                <span
                  className="font-display text-blood text-6xl leading-none mb-4"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <blockquote
                  className="text-bone/85 leading-relaxed flex-1"
                  dangerouslySetInnerHTML={{ __html: q.body }}
                />
                <figcaption className="mt-6 pt-6 border-t border-grey-line">
                  <p className="font-display tracking-wider text-bone text-sm">
                    {q.who}
                  </p>
                  <p className="text-bone/50 text-xs mt-1">{q.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
