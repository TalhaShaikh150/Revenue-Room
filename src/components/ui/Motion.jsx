"use client";

/**
 * Shared thin "use client" wrappers for Framer Motion.
 * 
 * Why this file exists:
 * Framer Motion requires a browser environment. By isolating all `motion`
 * usage into this file, parent components can remain React Server Components
 * (no "use client" needed), keeping the JS bundle small and SSR fast.
 * 
 * Usage:
 *   import { FadeIn, FadeInStagger } from "@/components/ui/Motion";
 */

import { motion } from "framer-motion";

const smoothEase = [0.16, 1, 0.3, 1];

/** Simple fade-up on scroll into view */
export function FadeIn({ children, className = "", delay = 0, y = 24, as: Tag = "div" }) {
  const MotionTag = motion[Tag] ?? motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/** Fade-up with a custom x offset (for slide-in from side) */
export function FadeInX({ children, className = "", delay = 0, x = -40 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Scale fade-in (for cards/images appearing with a slight scale) */
export function FadeInScale({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers its children's animations */
export function FadeInStagger({ children, className = "", stagger = 0.1 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: stagger } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Child item to use inside FadeInStagger */
export function FadeInItem({ children, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: smoothEase } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
