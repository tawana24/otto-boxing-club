"use client";

import {
  motion,
  useReducedMotion,
  useInView,
  type Variants,
} from "framer-motion";
import * as React from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "header" | "article" | "footer";
};

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: Props) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [failsafe, setFailsafe] = React.useState(false);

  // Resilience net. Content renders at opacity:0 and is revealed by the
  // IntersectionObserver behind `useInView`. But when a visitor lands on a
  // section via an anchor jump or deep link (e.g. /#tickets, clicking
  // "Events"/"Book"), that observer can fail to fire for the jumped-to section
  // — and its `-80px` top margin also ignores a heading that lands right under
  // the fixed nav — leaving content stuck invisible (a blank/black section).
  // Backstop: reveal any block that is genuinely inside the viewport. A scroll
  // listener covers the smooth-scroll animation (it fires scroll events as it
  // travels to the target) and normal scrolling; a few timed checks cover an
  // instant jump where no scroll event fires. Once revealed we detach, so
  // off-screen blocks still animate in on scroll as intended.
  React.useEffect(() => {
    let done = false;
    const reveal = () => {
      if (done) return;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh && r.bottom > 0) {
        done = true;
        setFailsafe(true);
        window.removeEventListener("scroll", reveal);
      }
    };
    const timers = [150, 500, 1200, 2500].map((ms) =>
      window.setTimeout(reveal, ms),
    );
    window.addEventListener("scroll", reveal, { passive: true });
    reveal();
    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  const show = inView || failsafe;

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = motion[as] as React.ElementType;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={show ? "show" : "hidden"}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
