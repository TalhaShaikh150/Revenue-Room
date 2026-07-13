"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  // Initialise Lenis once on mount
  useEffect(() => {
    // Skip Lenis on mobile, native scroll is faster and smoother
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // On every route change: instantly jump to top BEFORE Lenis animates anything
  useEffect(() => {
    if (lenisRef.current) {
      // Stop any in-progress scroll animation immediately
      lenisRef.current.stop();
      // Jump to top with no animation
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      // Resume Lenis so the new page scrolls normally
      lenisRef.current.start();
    } else {
      // Mobile fallback
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return <>{children}</>;
}
