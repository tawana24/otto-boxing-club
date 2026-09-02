"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { ArrowRight } from "./Icons";
import {
  fighters,
  recordString,
  winRate,
  koRate,
  statusMeta,
} from "@/lib/fighters";

export default function Champions() {
  return (
    <section
      id="champions"
      className="relative py-24 lg:py-32 border-t border-grey-line bg-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow text-blood mb-4">The Roster</p>
              <h2 className="font-display tracking-wide text-bone leading-[0.95] text-[clamp(2.5rem,6vw,5rem)]">
                Our champions.
              </h2>
            </div>
            <p className="max-w-md text-bone/70 leading-relaxed">
              The fighters who built this gym&apos;s name — and the ones writing
              the next chapter. Tap a card to read the full story.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fighters.map((f, i) => {
            const wr = winRate(f);
            const kr = koRate(f);
            return (
              <Reveal key={f.slug} delay={i * 0.06}>
                <Link
                  href={`/fighters/${f.slug}`}
                  className="fighter-card group block h-full cursor-pointer"
                  aria-label={`Read the story of ${f.name.replace(/&[^;]+;/g, "")}`}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-grey-card">
                    <Image
                      src={f.portrait}
                      alt={`Portrait of ${f.name.replace(/&[^;]+;/g, "")}, ${f.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700"
                      priority={i < 2}
                    />
                    {/* Bottom gradient + label */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/70 to-transparent" />
                    {/* Status pill */}
                    <span
                      className={[
                        "absolute top-4 left-4 eyebrow text-[0.65rem] px-2.5 py-1 border rounded-sm backdrop-blur-sm bg-black/40",
                        statusMeta(f.status).cls,
                      ].join(" ")}
                    >
                      {statusMeta(f.status).label}
                    </span>
                    {/* Name + weight */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="eyebrow text-bone/60 mb-1">{f.weight}</p>
                      <h3
                        className="font-display tracking-wide text-bone text-2xl leading-tight"
                        dangerouslySetInnerHTML={{ __html: f.name }}
                      />
                    </div>
                  </div>

                  <div className="p-5 border-t border-grey-line">
                    <p className="text-bone/85 text-sm leading-snug mb-4">
                      {f.title}
                    </p>

                    {/* Record + percentages */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div>
                        <p className="font-display text-blood text-xl font-tabular leading-none">
                          {recordString(f).split(",")[0]}
                        </p>
                        <p className="eyebrow text-bone/45 text-[0.6rem] mt-1">
                          Record
                        </p>
                      </div>
                      <div>
                        <p className="font-display text-bone text-xl font-tabular leading-none">
                          {wr}%
                        </p>
                        <p className="eyebrow text-bone/45 text-[0.6rem] mt-1">
                          Win rate
                        </p>
                      </div>
                      <div>
                        <p className="font-display text-gold text-xl font-tabular leading-none">
                          {kr}%
                        </p>
                        <p className="eyebrow text-bone/45 text-[0.6rem] mt-1">
                          KO rate
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-grey-line">
                      <span className="eyebrow text-bone/60">Read story</span>
                      <ArrowRight className="w-4 h-4 text-bone/60 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blood" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
