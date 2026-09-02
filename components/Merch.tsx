"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { ArrowRight } from "./Icons";
import { waLink } from "@/lib/config";

type MerchItem = {
  name: string;
  price: string;
  detail: string;
  accent: string;
  initial: string;
  image?: string; // real product photo (overrides placeholder tile)
  fit?: "cover" | "contain"; // contain = flat product cutout; cover = photo
};

const items: MerchItem[] = [
  {
    name: "Rise of the Champions 6 Tee",
    price: "$20",
    detail: "Official event tee · White & Black · Otto Boxing crest front, event print on back",
    accent: "#b8252c",
    initial: "R",
    image: "/merch/rotc6-tee.jpg",
    fit: "contain",
  },
  {
    name: "Otto Champion Tee",
    price: "Enquire",
    detail: "100% cotton · laurel-and-gloves heritage logo",
    accent: "#b8252c",
    initial: "T",
  },
  {
    name: "Training Wraps",
    price: "$15",
    detail: "180 inch · Otto-branded · cotton-elastic blend",
    accent: "#c9a961",
    initial: "W",
    image: "/merch/training-wraps.jpg",
    fit: "cover",
  },
  {
    name: "Cap — Crossed Batons",
    price: "Enquire",
    detail: "6-panel · embroidered crest · bone on black",
    accent: "#f2ede3",
    initial: "C",
  },
];

export default function Merch() {
  return (
    <section
      id="merch"
      className="relative py-24 lg:py-32 border-t border-grey-line bg-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div>
              <p className="eyebrow text-blood mb-4">Merchandise</p>
              <h2 className="font-display tracking-wide text-bone leading-[0.95] text-[clamp(2.5rem,6vw,5rem)]">
                Wear the crest.
              </h2>
            </div>
            <p className="max-w-md text-bone/70 leading-relaxed">
              Otto apparel drops around tournament nights. Reserve yours now as a
              pre-order — we&apos;ll confirm sizing, price and pickup with Coach
              Alie.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-10 flex flex-wrap items-center gap-3 border border-grey-line bg-grey-card px-5 py-4">
            <span className="inline-block eyebrow text-[0.65rem] px-2.5 py-1 border border-gold/40 text-gold rounded-sm">
              Pre-order
            </span>
            <p className="text-bone/65 text-sm">
              Featured around tournaments. Designs shown are indicative — message
              to register interest and we&apos;ll confirm availability.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.06}>
              <article className="group bg-grey-card border border-grey-line hover:border-bone/30 transition-colors flex flex-col h-full">
                {it.image ? (
                  <div
                    className={[
                      "relative aspect-square overflow-hidden",
                      it.fit === "contain" ? "bg-bone" : "bg-black",
                    ].join(" ")}
                  >
                    <Image
                      src={it.image}
                      alt={it.name}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className={[
                        "transition-transform duration-500 group-hover:scale-105",
                        it.fit === "contain"
                          ? "object-contain p-2"
                          : "object-cover",
                      ].join(" ")}
                    />
                  </div>
                ) : (
                  <div
                    className="relative aspect-square overflow-hidden"
                    style={{
                      background: `linear-gradient(160deg, #161616 0%, #0a0a0a 60%, ${it.accent}33 100%)`,
                    }}
                  >
                    <span
                      className="absolute inset-0 flex items-center justify-center font-display text-[12rem] leading-none select-none"
                      style={{ color: `${it.accent}22` }}
                      aria-hidden
                    >
                      {it.initial}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <p className="font-display text-bone text-lg leading-tight">
                    {it.name}
                  </p>
                  <p className="font-display text-blood font-tabular text-xl mt-1">
                    {it.price}
                  </p>
                  <p className="text-bone/55 text-xs mt-2 leading-relaxed flex-1">
                    {it.detail}
                  </p>
                  <a
                    href={waLink(
                      `Hi Coach Alie — I'd like to pre-order: ${it.name} (${it.price}).`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center justify-between font-display tracking-wider text-xs uppercase text-bone border-t border-grey-line pt-3 cursor-pointer transition-colors hover:text-blood"
                  >
                    Pre-order <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
