"use client";

import * as React from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { ArrowRight, Clock, MapPin, WhatsApp } from "./Icons";
import { upcomingEvents, series } from "@/lib/events";
import { waLink } from "@/lib/config";

function useCountdown(targetIso: string) {
  const [now, setNow] = React.useState<number | null>(null);
  React.useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (now === null)
    return { days: "—", hours: "—", minutes: "—", seconds: "—" };
  const diff = new Date(targetIso).getTime() - now;
  if (diff <= 0)
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  const pad = (n: number, l = 2) => String(n).padStart(l, "0");
  return {
    days: pad(Math.floor(diff / 864e5), Math.floor(diff / 864e5) > 99 ? 3 : 2),
    hours: pad(Math.floor((diff / 36e5) % 24)),
    minutes: pad(Math.floor((diff / 6e4) % 60)),
    seconds: pad(Math.floor((diff / 1e3) % 60)),
  };
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Harare",
  });
}

function CountdownDigits({ iso }: { iso: string }) {
  const cd = useCountdown(iso);
  const blocks = [
    { v: cd.days, l: "Days" },
    { v: cd.hours, l: "Hours" },
    { v: cd.minutes, l: "Min" },
    { v: cd.seconds, l: "Sec" },
  ];
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4">
      {blocks.map((b) => (
        <div
          key={b.l}
          className="bg-grey-card border border-grey-line text-center py-4 sm:py-6"
        >
          <p
            suppressHydrationWarning
            className="font-display text-blood text-3xl sm:text-5xl lg:text-6xl font-tabular leading-none"
          >
            {b.v}
          </p>
          <p className="eyebrow text-bone/50 text-[0.6rem] mt-2">{b.l}</p>
        </div>
      ))}
    </div>
  );
}

export default function EventsCountdown() {
  const events = upcomingEvents();
  const headline = events[0];

  return (
    <section
      id="events"
      className="relative py-24 lg:py-32 border-t border-grey-line bg-black overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 70% at 50% 0%, rgba(184,37,44,0.14) 0%, rgba(184,37,44,0) 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow text-blood mb-4">Events &amp; Tournaments</p>
              <h2 className="font-display tracking-wide text-bone leading-[0.95] text-[clamp(2.5rem,6vw,5rem)]">
                {headline ? "Live fight night." : "Next fight night."}
              </h2>
            </div>
            <p className="max-w-md text-bone/70 leading-relaxed">
              Otto stages and promotes Zimbabwe&apos;s biggest professional
              boxing nights. {headline ? "Countdown to first bell — live." : ""}
            </p>
          </div>
        </Reveal>

        {headline ? (
          <Reveal delay={0.05}>
            <article className="bg-grey-card/40 backdrop-blur-sm border border-grey-line p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <p className="eyebrow text-bone/60 mb-3">{headline.series}</p>
                <h3 className="font-display tracking-wide text-bone leading-[0.95] text-[clamp(2rem,4vw,3.25rem)]">
                  {headline.title}
                </h3>
                <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blood mt-0.5 shrink-0" />
                    <div>
                      <dt className="eyebrow text-bone/50 mb-1">First bell</dt>
                      <dd
                        suppressHydrationWarning
                        className="text-bone font-tabular"
                      >
                        {headline.date ? fmtDate(headline.date) : "To be announced"}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blood mt-0.5 shrink-0" />
                    <div>
                      <dt className="eyebrow text-bone/50 mb-1">Venue</dt>
                      <dd className="text-bone">
                        {headline.venue}
                        {headline.city ? `, ${headline.city}` : ""}
                      </dd>
                    </div>
                  </div>
                </dl>
                <p className="mt-6 text-bone/75 leading-relaxed">
                  {headline.blurb}
                </p>
                {headline.card.length > 0 && (
                  <div className="mt-8">
                    <p className="eyebrow text-bone/50 mb-3">Fight card</p>
                    <ul className="divide-y divide-grey-line border border-grey-line">
                      {headline.card.map((c, i) => (
                        <li key={i} className="p-4 flex items-start gap-4">
                          <span className="font-display text-blood text-sm font-tabular leading-none pt-1 min-w-[28px]">
                            0{i + 1}
                          </span>
                          <div>
                            <p className="text-bone font-medium">{c.bout}</p>
                            {c.detail && (
                              <p className="text-bone/55 text-sm mt-1">
                                {c.detail}
                              </p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-8">
                  <a
                    href="#tickets"
                    className="btn-primary cursor-pointer inline-flex items-center gap-2"
                  >
                    Get tickets <ArrowRight className="w-4 h-4" />
                  </a>
                  {headline.ticketPhone && (
                    <p className="text-bone/55 text-sm mt-3">
                      Tickets on sale — call{" "}
                      <span className="text-bone font-tabular">
                        {headline.ticketPhone}
                      </span>
                    </p>
                  )}
                </div>
              </div>
              <div className="lg:col-span-5 lg:border-l lg:border-grey-line lg:pl-10 flex flex-col justify-center">
                {headline.poster && (
                  <a
                    href="#tickets"
                    className="block relative w-full aspect-[771/1080] mb-8 border border-grey-line overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={headline.poster}
                      alt={`${headline.title} — fight poster`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </a>
                )}
                {headline.date ? (
                  <>
                    <p className="eyebrow text-blood mb-5">
                      Countdown to first bell
                    </p>
                    <CountdownDigits iso={headline.date} />
                    <p className="text-bone/40 text-xs mt-6 leading-relaxed">
                      Times shown in Africa/Harare. Live counter — refreshes
                      every second.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="eyebrow text-blood mb-5">Date</p>
                    <p className="font-display tracking-wide text-bone text-3xl">
                      To be announced
                    </p>
                  </>
                )}
              </div>
            </article>
          </Reveal>
        ) : (
          /* No tournament scheduled — honest empty state */
          <Reveal delay={0.05}>
            <div className="bg-grey-card/40 backdrop-blur-sm border border-grey-line p-8 lg:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <span className="inline-block eyebrow text-[0.65rem] px-2.5 py-1 border border-bone/30 text-bone/70 rounded-sm mb-5">
                    No tournament scheduled
                  </span>
                  <h3 className="font-display tracking-wide text-bone leading-[0.95] text-[clamp(1.75rem,3.5vw,2.75rem)]">
                    The next bell hasn&apos;t been called yet.
                  </h3>
                  <p className="mt-5 text-bone/70 leading-relaxed max-w-xl">
                    When Otto announces its next fight night, the date,
                    countdown, fight card and ticketing all go live right here.
                    Want first word? Message Coach Alie and we&apos;ll put you on
                    the list.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={waLink(
                        "Hi Coach Alie — please notify me about Otto Boxing Club's next tournament.",
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary cursor-pointer inline-flex items-center gap-2"
                    >
                      <WhatsApp className="w-4 h-4" /> Notify me of the next event
                    </a>
                    <a
                      href="#tickets"
                      className="btn-outline cursor-pointer inline-flex items-center gap-2"
                    >
                      How ticketing works <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-5 lg:border-l lg:border-grey-line lg:pl-10">
                  <p className="eyebrow text-blood mb-5">Our series</p>
                  <ul className="space-y-5">
                    {series.map((s) => (
                      <li key={s.name} className="border-t border-grey-line pt-4">
                        <p className="font-display tracking-wide text-bone text-xl">
                          {s.name}
                        </p>
                        <p className="text-bone/60 text-sm mt-1 leading-snug">
                          {s.note}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
