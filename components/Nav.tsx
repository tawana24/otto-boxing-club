"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Close, WhatsApp } from "./Icons";
import { club, waLink } from "@/lib/config";

const links = [
  { label: "Champions", href: "#champions" },
  { label: "Coach", href: "#coach" },
  { label: "Events", href: "#events" },
  { label: "Tickets", href: "#tickets" },
  { label: "Book", href: "#book" },
  { label: "Visit", href: "#visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile menu so it can't scroll underneath the
  // overlay (and so the overlay is the only thing the user can interact with).
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-40 transition-colors duration-300",
        scrolled
          ? "bg-black/85 backdrop-blur-md border-b border-grey-line"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3 group"
          aria-label={`${club.name} home`}
        >
          <span className="relative h-10 w-10 overflow-hidden rounded-sm bg-bone transition-transform duration-300 group-hover:rotate-[-4deg]">
            <Image
              src="/logo.jpg"
              alt=""
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-display tracking-wider text-bone text-lg leading-none">
            {club.shortName}
            <span className="text-blood"> · </span>
            <span className="text-bone/70 text-sm">Boxing Club</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display tracking-wider text-sm text-bone/80 hover:text-bone transition-colors duration-200 cursor-pointer"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="btn-primary cursor-pointer text-sm py-2.5 px-5"
          >
            Book on demand
          </a>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden p-2 text-bone cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="md:hidden fixed inset-0 z-50 bg-black"
            // Solid, opaque backdrop the instant the menu opens. The panel must
            // NEVER be see-through: previously the whole overlay faded in via
            // `initial={{opacity:0}}`, and on some mobile browsers that fade
            // could stall mid-transition, leaving the page behind bleeding
            // through the menu links. `initial={false}` renders it at full
            // opacity from the first frame; the inline colour is a belt-and-
            // suspenders guarantee the background paints. Only the close still
            // fades (via `exit`), and the links keep their own staggered entrance.
            style={{ backgroundColor: "#0a0a0a" }}
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between h-16 px-6 border-b border-grey-line">
              <span className="font-display tracking-wider text-bone text-lg">
                {club.shortName} · Boxing Club
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 text-bone cursor-pointer"
              >
                <Close className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col px-6 pt-10 gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl text-bone py-3 border-b border-grey-line tracking-wider"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="flex flex-col gap-3 pt-8">
                <a
                  href="#book"
                  onClick={() => setOpen(false)}
                  className="btn-primary cursor-pointer text-center"
                >
                  Book on demand
                </a>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <WhatsApp className="w-4 h-4" /> WhatsApp us
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
