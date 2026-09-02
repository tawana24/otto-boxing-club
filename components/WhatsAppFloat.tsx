"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { WhatsApp } from "./Icons";
import { waLink } from "@/lib/config";

export default function WhatsAppFloat() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Otto Boxing Club on WhatsApp"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.7,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-30 h-14 w-14 rounded-full bg-[#25D366] text-black shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 flex items-center justify-center transition-shadow cursor-pointer"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <WhatsApp className="relative w-6 h-6" />
    </motion.a>
  );
}
