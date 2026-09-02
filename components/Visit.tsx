"use client";

import { Reveal } from "./Reveal";
import { MapPin, Clock, Phone, ArrowRight } from "./Icons";
import { club } from "@/lib/config";

export default function Visit() {
  return (
    <section
      id="visit"
      className="relative py-24 lg:py-32 border-t border-grey-line"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-blood mb-4">Visit</p>
            <h2 className="font-display tracking-wide text-bone leading-[0.95] text-[clamp(2.5rem,6vw,5rem)]">
              {club.location.venue}.
            </h2>
            <p className="mt-6 text-bone/70 leading-relaxed max-w-md">
              Find us at Gate 3 of Borrowdale Racecourse. Free parking,
              sheltered entry, showers on site.
            </p>

            <dl className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-blood mt-0.5 shrink-0" />
                <div>
                  <dt className="eyebrow text-bone/60 mb-1">Address</dt>
                  <dd className="text-bone">{club.location.full}</dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-blood mt-0.5 shrink-0" />
                <div>
                  <dt className="eyebrow text-bone/60 mb-1">Sessions</dt>
                  <dd className="text-bone">
                    By appointment — on demand
                    <p className="text-bone/55 text-sm mt-1 leading-relaxed">
                      No fixed timetable. Book any service through the channels
                      below.
                    </p>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-blood mt-0.5 shrink-0" />
                <div>
                  <dt className="eyebrow text-bone/60 mb-1">WhatsApp</dt>
                  <dd className="text-bone space-y-1.5">
                    {club.whatsapp.all.map((c) => (
                      <p
                        key={c.number}
                        className="flex flex-wrap items-baseline gap-x-3"
                      >
                        <span className="font-tabular">{c.display}</span>
                        {c.label && (
                          <span className="text-bone/50 text-xs eyebrow">
                            {c.label}
                          </span>
                        )}
                      </p>
                    ))}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-blood mt-0.5 shrink-0"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <div>
                  <dt className="eyebrow text-bone/60 mb-1">Email</dt>
                  <dd className="space-y-1.5">
                    {club.emails.map((e) => (
                      <p
                        key={e.address}
                        className="flex flex-wrap items-baseline gap-x-3"
                      >
                        <a
                          href={`mailto:${e.address}`}
                          className="text-bone hover:text-blood transition-colors cursor-pointer"
                        >
                          {e.address}
                        </a>
                        <span className="text-bone/50 text-xs eyebrow">
                          {e.label}
                        </span>
                      </p>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>

            <a
              href={club.location.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 font-display tracking-wider text-sm uppercase text-bone border-b border-blood pb-1 hover:text-blood transition-colors cursor-pointer"
            >
              Get directions
              <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>

          {/* Real Google Maps embed */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] border border-grey-line overflow-hidden bg-grey-card">
              <iframe
                src={club.location.mapsEmbed}
                title={`Map showing ${club.name} at ${club.location.full}`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                style={{
                  border: 0,
                  filter:
                    "invert(0.92) hue-rotate(180deg) brightness(0.92) contrast(0.95) saturate(0.85)",
                }}
              />
              {/* Pin overlay */}
              <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-blood/40 blur-2xl scale-150" />
                  <MapPin
                    className="relative w-12 h-12 text-blood"
                    strokeWidth={2}
                  />
                </div>
                <div className="mt-3 bg-black/90 backdrop-blur-sm border border-blood/40 px-4 py-2 shadow-lg">
                  <p className="font-display tracking-wider text-bone text-sm">
                    {club.shortName} Boxing Club
                  </p>
                  <p className="text-bone/60 text-xs mt-0.5">
                    {club.location.venue}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
