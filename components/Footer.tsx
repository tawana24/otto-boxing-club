"use client";

import Image from "next/image";
import { Instagram, Facebook, WhatsApp } from "./Icons";
import { club, waLink, hasInstagram, hasFacebook } from "@/lib/config";

const navLinks = [
  { label: "Pathways", href: "#pathways" },
  { label: "Champions", href: "#champions" },
  { label: "Story", href: "#story" },
  { label: "Sessions", href: "#sessions" },
  { label: "Visit", href: "#visit" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-grey-line bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-sm bg-bone">
                <Image
                  src="/logo.jpg"
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <div>
                <p className="font-display tracking-wider text-bone text-xl leading-none">
                  {club.shortName} <span className="text-blood">·</span> Boxing
                  Club
                </p>
                <p className="text-bone/50 text-sm mt-1">{club.motto}</p>
              </div>
            </div>
            <p className="mt-6 text-bone/70 max-w-sm leading-relaxed">
              Boutique boxing in {club.location.city}. General training, fight
              prep, and championship coaching under one roof at {club.location.venue}.
            </p>
            <ul className="mt-4 space-y-1 text-bone/70 text-sm">
              {club.emails.map((e) => (
                <li key={e.address}>
                  <a
                    href={`mailto:${e.address}`}
                    className="hover:text-blood transition-colors cursor-pointer"
                  >
                    {e.address}
                  </a>
                  <span className="text-bone/40 text-xs ml-2">
                    {e.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-bone/40 mb-5">Visit</p>
            <ul className="space-y-2 text-bone/80 text-sm">
              <li>{club.location.venue}</li>
              <li>
                {club.location.city}, {club.location.country}
              </li>
              {club.whatsapp.all.map((c) => (
                <li key={c.number} className="font-tabular">
                  {c.display}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-bone/40 mb-5">Sitemap</p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-bone/80 hover:text-blood transition-colors cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-bone/40 mb-5">Connect</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-bone/80 hover:text-blood transition-colors cursor-pointer"
                >
                  <WhatsApp className="w-4 h-4" /> WhatsApp
                </a>
              </li>
              {hasInstagram && (
                <li>
                  <a
                    href={club.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-bone/80 hover:text-blood transition-colors cursor-pointer"
                  >
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                </li>
              )}
              {hasFacebook && (
                <li>
                  <a
                    href={club.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-bone/80 hover:text-blood transition-colors cursor-pointer"
                  >
                    <Facebook className="w-4 h-4" /> Facebook
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-bone/50">
          <p>
            © {new Date().getFullYear()} {club.name}. All rights reserved.
          </p>
          <p>
            Crafted by{" "}
            <a
              href="https://muponda.studio"
              target="_blank"
              rel="noreferrer"
              className="text-bone/70 hover:text-blood transition-colors cursor-pointer"
            >
              Muponda Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
