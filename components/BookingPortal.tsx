"use client";

import * as React from "react";
import { Reveal } from "./Reveal";
import { WhatsApp, Instagram, Facebook, ArrowRight } from "./Icons";
import { bookingChannels, club, waLink } from "@/lib/config";
import { useModal } from "./modalContext";

// Cross-platform booking intake
// Otto offers no fixed timetable — all services are on-demand.
// This portal lets a visitor pick their service + start the booking on the channel they prefer.

const services = [
  {
    slug: "fitness",
    name: "Fitness & Wellness",
    blurb: "Boxing-led training for individuals or corporate teams.",
  },
  {
    slug: "training-camp",
    name: "Training Camp",
    blurb: "Personalised pro-level fight prep.",
  },
  {
    slug: "youth",
    name: "Youth Development",
    blurb: "Amateur development pathway — Ghetto Warriors Series intake.",
  },
  {
    slug: "management",
    name: "Pro Management",
    blurb: "Boxer management & matchmaking enquiries.",
  },
  {
    slug: "event",
    name: "Event Booking",
    blurb: "Tickets, sponsorship, or venue/promotion enquiries.",
  },
] as const;

type ServiceSlug = (typeof services)[number]["slug"];

export default function BookingPortal() {
  const { openModal } = useModal();
  const [picked, setPicked] = React.useState<ServiceSlug>("fitness");
  const service = services.find((s) => s.slug === picked) ?? services[0];
  const message = `Hi Otto Boxing Club — I'd like to book: ${service.name}. ${service.blurb}`;
  const channels = bookingChannels(message);

  return (
    <section
      id="book"
      className="relative py-24 lg:py-32 border-t border-grey-line bg-black overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(50% 60% at 75% 40%, rgba(184,37,44,0.18) 0%, rgba(184,37,44,0) 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-blood mb-4">Book on demand</p>
            <h2 className="font-display tracking-wide text-bone leading-[0.95] text-[clamp(2.25rem,5vw,4rem)]">
              No timetables.
              <br />
              <span className="text-bone/55">Book the moment</span>
              <br />
              <span className="text-blood">you&apos;re ready.</span>
            </h2>
            <p className="mt-6 text-bone/70 leading-relaxed max-w-md">
              {club.notes.onDemandLine} Pick a service, choose your platform,
              we&apos;ll lock in the time.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 px-4 py-3 border border-grey-line bg-grey-card">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blood opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blood" />
              </span>
              <span className="eyebrow text-bone/80">
                Live · replies during gym hours
              </span>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="bg-grey-card border border-grey-line p-7 lg:p-10">
              <p className="eyebrow text-bone/55 mb-4">Step 1 · Pick a service</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((s) => {
                  const active = s.slug === picked;
                  return (
                    <button
                      key={s.slug}
                      type="button"
                      onClick={() => setPicked(s.slug)}
                      className={[
                        "text-left p-4 border transition-all duration-200 cursor-pointer",
                        active
                          ? "border-blood bg-blood/10 text-bone"
                          : "border-grey-line text-bone/85 hover:border-bone/30",
                      ].join(" ")}
                    >
                      <p
                        className={[
                          "font-display tracking-wide text-lg leading-tight",
                          active ? "text-bone" : "",
                        ].join(" ")}
                      >
                        {s.name}
                      </p>
                      <p className="text-xs text-bone/55 mt-1 leading-snug">
                        {s.blurb}
                      </p>
                    </button>
                  );
                })}
              </div>

              <p className="eyebrow text-bone/55 mt-8 mb-4">
                Step 2 · Reach us where you live
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={channels.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 p-4 border border-grey-line hover:border-blood transition-colors cursor-pointer"
                >
                  <WhatsApp className="w-6 h-6 text-[#25D366]" />
                  <div className="flex-1">
                    <p className="font-display tracking-wide text-bone">
                      WhatsApp
                    </p>
                    <p className="text-xs text-bone/50">
                      Fastest response · pre-filled message
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-bone/40 transition-transform group-hover:translate-x-1" />
                </a>
                {channels.instagram && (
                  <a
                    href={channels.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 p-4 border border-grey-line hover:border-blood transition-colors cursor-pointer"
                  >
                    <Instagram className="w-6 h-6 text-bone" />
                    <div className="flex-1">
                      <p className="font-display tracking-wide text-bone">
                        Instagram DM
                      </p>
                      <p className="text-xs text-bone/50">Slide into our DMs</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-bone/40 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
                {channels.facebook && (
                  <a
                    href={channels.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 p-4 border border-grey-line hover:border-blood transition-colors cursor-pointer"
                  >
                    <Facebook className="w-6 h-6 text-bone" />
                    <div className="flex-1">
                      <p className="font-display tracking-wide text-bone">
                        Facebook
                      </p>
                      <p className="text-xs text-bone/50">Message our page</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-bone/40 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
                <a
                  href={channels.email}
                  className="group flex items-center gap-4 p-4 border border-grey-line hover:border-blood transition-colors cursor-pointer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-bone"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  <div className="flex-1">
                    <p className="font-display tracking-wide text-bone">
                      Email
                    </p>
                    <p className="text-xs text-bone/50">
                      {club.emails[0].address}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-bone/40 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-grey-line flex flex-wrap items-center justify-between gap-4">
                <p className="text-bone/55 text-sm leading-relaxed max-w-md">
                  Prefer to fill in a form? Use our intake — it routes straight
                  to {club.whatsapp.primary.label}.
                </p>
                <button
                  type="button"
                  onClick={() =>
                    openModal("join", `${service.name}: ${service.blurb}`)
                  }
                  className="btn-primary cursor-pointer inline-flex items-center gap-2"
                >
                  Open intake form <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
