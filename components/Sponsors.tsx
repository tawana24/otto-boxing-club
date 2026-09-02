"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { WhatsApp, ArrowRight } from "./Icons";
import { sponsors } from "@/lib/sponsors";
import { waLink } from "@/lib/config";

export default function Sponsors() {
  const hasSponsors = sponsors.length > 0;

  return (
    <section
      id="partners"
      className="relative py-24 lg:py-32 border-t border-grey-line bg-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow text-blood mb-4">Partners &amp; Sponsors</p>
              <h2 className="font-display tracking-wide text-bone leading-[0.95] text-[clamp(2.5rem,6vw,5rem)]">
                Backing champions.
              </h2>
            </div>
            <p className="max-w-md text-bone/70 leading-relaxed">
              The brands and partners who power Otto Boxing Club — fuelling
              grassroots development, fight nights, and the next generation of
              Zimbabwean champions.
            </p>
          </div>
        </Reveal>

        {hasSponsors ? (
          <Reveal delay={0.05}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-grey-line border border-grey-line">
              {sponsors.map((s) => {
                const inner = (
                  <div className="relative bg-bone h-32 flex items-center justify-center p-6 transition-transform duration-300 hover:scale-[1.02]">
                    {s.logo ? (
                      <Image
                        src={s.logo}
                        alt={s.name}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-contain p-6"
                      />
                    ) : (
                      <span className="font-display tracking-wide text-black text-xl text-center">
                        {s.name}
                      </span>
                    )}
                  </div>
                );
                return s.url ? (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="cursor-pointer"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={s.name}>{inner}</div>
                );
              })}
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0.05}>
            <div className="border border-grey-line bg-grey-card p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <p className="font-display tracking-wide text-bone text-2xl lg:text-3xl leading-snug">
                  Partner with Zimbabwe&apos;s
                  <br className="hidden sm:block" /> most decorated stable.
                </p>
                <p className="mt-4 text-bone/65 leading-relaxed max-w-xl">
                  Put your brand alongside ABU, WBF and national champions —
                  fight-night visibility, kit branding, and community impact
                  across our development programmes.
                </p>
              </div>
              <a
                href={waLink(
                  "Hi Coach Alie — I'm interested in partnering with / sponsoring Otto Boxing Club.",
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-primary cursor-pointer inline-flex items-center gap-2 shrink-0"
              >
                <WhatsApp className="w-4 h-4" /> Become a partner
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
