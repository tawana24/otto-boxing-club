"use client";

import { Reveal } from "./Reveal";
import { ArrowRight, WhatsApp } from "./Icons";
import { useModal } from "./modalContext";
import { waLink } from "@/lib/config";

export default function BigCTA() {
  const { openModal } = useModal();

  return (
    <section className="relative py-24 lg:py-36 border-t border-grey-line overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(50% 80% at 50% 50%, rgba(184,37,44,0.20) 0%, rgba(184,37,44,0) 70%), #0a0a0a",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <p className="eyebrow text-blood mb-6">Train with champions</p>
          <h2 className="font-display tracking-wide text-bone leading-[0.95] text-[clamp(3rem,8vw,7rem)]">
            Show up.
            <br />
            <span className="text-blood">Find out.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl mx-auto text-bone/75 text-lg leading-relaxed">
            Personalized, on-demand training under the coaches who built ABU and
            WBF champions. Book your first session and we&apos;ll take it from
            there.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => openModal("join", "I'd like to book my first session.")}
              className="btn-primary cursor-pointer inline-flex items-center gap-2"
            >
              Book a session
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={waLink("Hi Coach Alie — I'd like to book my first session.")}
              target="_blank"
              rel="noreferrer"
              className="btn-outline cursor-pointer inline-flex items-center gap-2"
            >
              <WhatsApp className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
