"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { WhatsApp, ArrowRight } from "./Icons";
import { waLink, club } from "@/lib/config";

const highlights = [
  "ZBF Provincial Coaching Certification — March 2017",
  "Best Promoter — Lindsay Earlie / Otto Boxing Club",
  "Technical Consultant — King of the Ring 2025",
  "Principal Coach — Red Team, King of the Ring 2025",
  "Host — Ghetto Warriors Series",
  "Lead Promoter — Rise of the Champions Series",
];

const developed = [
  { name: "Hassan Milanzi", title: "WBF International Champion — Nov 2024" },
  { name: "Tinashe Majoni", title: "WBF Continental Super Fly — Mar 2025" },
  { name: "Bongani Makorova", title: "WBF Continental Bantam — Aug 2025" },
  { name: "Aliyah Phiri", title: "ABU SADC Lightweight — Dec 2023" },
  { name: "Shungu Kupani", title: "National Super Bantam — Aug 2025" },
];

export default function Coach() {
  return (
    <section
      id="coach"
      className="relative py-24 lg:py-32 border-t border-grey-line bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:col-span-5">
            <div className="sticky top-28">
              {/* Portrait */}
              <div className="relative aspect-[4/5] max-w-md border border-grey-line overflow-hidden">
                <Image
                  src="/coach/alie-phiri.jpg"
                  alt="Alie &ldquo;Otto&rdquo; Phiri — Founder &amp; Head Coach"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="eyebrow text-blood mb-1">Founder &amp; Head Coach</p>
                  <p className="font-display tracking-wide text-bone text-2xl leading-tight">
                    Alie &ldquo;Otto&rdquo; Phiri
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 space-y-8">
            <Reveal>
              <p className="eyebrow text-blood mb-4">The Architect</p>
              <h2 className="font-display tracking-wide text-bone leading-[0.95] text-[clamp(2.25rem,5vw,4rem)]">
                The Alie Phiri
                <br />
                <span className="text-bone/55">difference.</span>
              </h2>
              <p className="mt-6 text-bone/80 leading-relaxed text-lg">
                ZBF-qualified boxing coach. Founder of Otto Boxing Club. ANSA
                Best Boxing Promoter 2024. The man behind every ABU and WBF
                title currently held under the Otto banner.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 gap-3">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 border-t border-grey-line pt-3"
                  >
                    <span className="font-display text-blood text-lg font-tabular leading-none mt-1 shrink-0">
                      ·
                    </span>
                    <p className="text-bone/85">{h}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-6">
                <p className="eyebrow text-bone/60 mb-4">
                  Champions developed
                </p>
                <ul className="divide-y divide-grey-line border border-grey-line">
                  {developed.map((d) => (
                    <li
                      key={d.name}
                      className="px-4 py-3 flex items-start gap-4"
                    >
                      <span className="font-display text-bone w-44 shrink-0">
                        {d.name}
                      </span>
                      <span className="text-bone/60 text-sm">{d.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <blockquote className="bg-grey-card border border-grey-line p-6 mt-6">
                <p className="font-display text-bone text-xl tracking-wide leading-snug">
                  &ldquo;{club.signatureQuote}&rdquo;
                </p>
                <footer className="eyebrow text-bone/55 mt-4">
                  {club.signatureQuoteBy}
                </footer>
              </blockquote>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={waLink(
                    "Hi Coach Otto — I'd like to enquire about coaching.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary cursor-pointer inline-flex items-center gap-2"
                >
                  <WhatsApp className="w-4 h-4" /> Message Coach Otto
                </a>
                <a
                  href="/profiles/alie-phiri.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline cursor-pointer inline-flex items-center gap-2"
                >
                  Full profile <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
