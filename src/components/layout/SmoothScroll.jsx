"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }) {
  useEffect(() => {
    // Skip Lenis on mobile — native scroll is faster and smoother
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId); // Properly cancel the loop
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
