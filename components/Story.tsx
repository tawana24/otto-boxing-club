"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { club } from "@/lib/config";

const proofPoints = [
  "5 crowned kings under one stable — ABU, WBF Continental, WBF International, National titles",
  "ANSA Best Boxing Promoter 2024 (Alie “Otto” Phiri)",
  "Host of Rise of the Champions — Zimbabwe's most consistent pro boxing series",
  "Technical consultant — King of the Ring 2025",
  "Founder of the Ghetto Warriors Series amateur grassroots circuit",
];

export default function Story() {
  return (
    <section
      id="story"
      className="relative py-24 lg:py-32 border-t border-grey-line"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <div className="sticky top-28">
              <p className="eyebrow text-blood mb-4">The Otto Phenomenon</p>
              <h2 className="font-display tracking-wide text-bone leading-[0.95] text-[clamp(2.5rem,5.5vw,4.5rem)]">
                Zimbabwe&apos;s
                <br />
                <span className="text-bone/50">boxing</span>
                <br />
                <span className="text-blood">nucleus.</span>
              </h2>
              <p className="mt-6 text-bone/70 leading-relaxed max-w-md">
                In 7 years, Otto Boxing Club has evolved from a Harare passion
                project into the country&apos;s most decorated stable — a rare
                entity that simultaneously incubates raw talent and stages
                global spectacles.
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-7 space-y-8 text-bone/80 leading-relaxed text-lg">
            <Reveal delay={0.05}>
              <blockquote className="border-l-2 border-blood pl-6 py-2 mb-8">
                <p className="font-display text-bone text-2xl lg:text-3xl tracking-wide leading-tight">
                  &ldquo;{club.phenomenon}&rdquo;
                </p>
                <footer className="eyebrow text-bone/50 mt-4">
                  — The Otto method
                </footer>
              </blockquote>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="eyebrow text-blood mb-2">Vision</p>
                  <p>{club.vision}</p>
                </div>
                <div className="mt-4">
                  <p className="eyebrow text-blood mb-2">Mission</p>
                  <p>{club.mission}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="grid grid-cols-1 gap-3 mt-4">
                {proofPoints.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 border-t border-grey-line pt-4"
                  >
                    <span className="font-display text-blood text-2xl font-tabular leading-none mt-0.5 shrink-0">
                      0{i + 1}
                    </span>
                    <p className="text-bone/85 leading-snug">{p}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <blockquote className="bg-grey-card border border-grey-line p-7 mt-10">
                <p className="font-display text-bone text-xl lg:text-2xl tracking-wide leading-snug">
                  &ldquo;{club.signatureQuote}&rdquo;
                </p>
                <footer className="eyebrow text-bone/55 mt-5">
                  {club.signatureQuoteBy}
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
