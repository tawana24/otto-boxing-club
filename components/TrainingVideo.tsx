"use client";

import * as React from "react";
import { Reveal } from "./Reveal";

export default function TrainingVideo() {
  const ref = React.useRef<HTMLVideoElement>(null);
  const bgRef = React.useRef<HTMLVideoElement>(null);

  // Pause when off-screen to save bandwidth
  React.useEffect(() => {
    const el = ref.current;
    const bg = bgRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
          bg?.play().catch(() => {});
        } else {
          el.pause();
          bg?.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative py-24 lg:py-32 border-t border-grey-line bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-blood mb-4">Inside the gym</p>
            <h2 className="font-display tracking-wide text-bone leading-[0.95] text-[clamp(2.25rem,5vw,4rem)]">
              Real coaching.
              <br />
              <span className="text-bone/55">Real fighters.</span>
              <br />
              <span className="text-blood">No gimmicks.</span>
            </h2>
            <p className="mt-6 text-bone/70 leading-relaxed max-w-md">
              Every session is led by an active or former competitive boxer. You
              get attention, you get corrected, and you leave a better fighter
              than you arrived.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            {/* Cinema frame — portrait video shown uncropped, blurred copy fills the bars */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] border border-grey-line overflow-hidden bg-black">
              {/* Blurred backdrop video — fills entire frame */}
              <video
                ref={bgRef}
                src="/training-clip.mp4"
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden
                tabIndex={-1}
                className="absolute inset-0 w-full h-full object-cover scale-110"
                style={{ filter: "blur(34px) brightness(0.55) saturate(0.9)" }}
              />
              {/* Foreground video — full frame, never cropped */}
              <video
                ref={ref}
                src="/training-clip.mp4"
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Otto Boxing Club training session"
                className="relative w-full h-full object-contain"
              />
              {/* Inner vignette for depth */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(100% 80% at 50% 50%, transparent 55%, rgba(0,0,0,0.5) 100%)",
                }}
              />
              {/* Label */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm border border-grey-line px-3 py-1.5 z-10">
                <p className="eyebrow text-bone/80 text-[0.6rem]">
                  Live · Otto Boxing Club
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
