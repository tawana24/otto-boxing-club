"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, WhatsApp } from "./Icons";
import { useModal } from "./modalContext";
import { club, waLink } from "@/lib/config";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-end overflow-hidden grain"
    >
      {/* Real photo backdrop — Otto champions with belts */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1: blurred, fills frame, gives dark cinematic atmosphere */}
        <Image
          src="/team.jpg"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover scale-110"
          style={{ filter: "blur(28px) brightness(0.4) saturate(0.85)" }}
        />
        {/* Layer 2: uncropped team photo — anchored bottom-right on desktop, behind hero text */}
        <div className="absolute inset-0 flex items-end justify-end p-0 lg:p-0">
          <div className="relative h-[60%] w-full sm:h-[72%] sm:w-[85%] md:h-[78%] md:w-[70%] lg:h-[90%] lg:w-[55%] xl:w-[48%]">
            <Image
              src="/team.jpg"
              alt="Otto Boxing Club champions with their belts"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 50vw"
              className="object-contain object-bottom"
            />
            {/* Right-edge fade so it blends into the dark */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0) 25%, rgba(10,10,10,0) 75%, rgba(10,10,10,0.4) 100%)",
              }}
            />
          </div>
        </div>
        {/* Layer 3: bottom-to-top dark gradient so copy stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(10,10,10,0.55) 30%, rgba(10,10,10,0.85) 75%, rgba(10,10,10,0.96) 100%)",
          }}
        />
        {/* Layer 4: blood accent radial behind headline */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(45% 55% at 22% 50%, rgba(184,37,44,0.22) 0%, rgba(184,37,44,0) 70%)",
          }}
        />
        {/* Layer 5: subtle scanlines */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(242,237,227,0.4) 0px, rgba(242,237,227,0.4) 1px, transparent 1px, transparent 3px)",
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow text-blood mb-6"
            >
              {club.location.full}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-bone tracking-wide leading-[0.95] text-[clamp(3.5rem,9vw,8rem)]"
            >
              Where champions
              <br />
              are <span className="text-blood">built</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-xl text-bone/80 text-lg leading-relaxed"
            >
              <span className="block font-display tracking-wider text-bone text-xl mb-3 uppercase">
                {club.motto}
              </span>
              Harare&apos;s boutique boxing club. Home to ABU champions and the
              fighters chasing them — general boxing, fight prep, and
              championship-level coaching at Gate 3, Borrowdale Racecourse.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                type="button"
                onClick={() => openModal("join")}
                className="btn-primary cursor-pointer"
              >
                Book a session
              </button>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="btn-outline cursor-pointer inline-flex items-center gap-2"
              >
                <WhatsApp className="w-4 h-4" />
                WhatsApp
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-bone/15"
          >
            <dl className="grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-8">
              {[
                { v: "5", l: "Champions" },
                { v: "3", l: "Coaches" },
                { v: "30+", l: "Members" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-blood text-4xl lg:text-5xl font-tabular leading-none">
                    {s.v}
                  </dt>
                  <dd className="eyebrow text-bone/70 mt-2">{s.l}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>

        <motion.a
          href="#champions"
          aria-label="Scroll to roster"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2 text-bone/70 hover:text-bone transition-colors cursor-pointer animate-subtle-float"
        >
          <span className="eyebrow">Meet the roster</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
}
