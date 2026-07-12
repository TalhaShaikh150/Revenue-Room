"use client";

import { m } from "framer-motion";

export function WastedSpendSection() {
  return (
    <section className="relative w-full py-8 md:py-12 bg-brand-bg px-4 md:px-8">
      <div className="max-w-[1000px] mx-auto">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mobile-no-animate bg-[#f4f4f2] rounded-[24px] md:rounded-[32px] p-8 md:p-14 lg:p-20 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Accent Glows */}
          <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-[#d8fc4d]/30 blur-[60px] rounded-full pointer-events-none mix-blend-multiply"></div>

          <div className="relative z-10 flex flex-col gap-8 md:gap-12">
            <h2 className="text-[#1a1a1c] text-3xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight">
              We catch wasted spend within 24 hours. Or we cover it.
            </h2>

            <p className="text-[#1a1a1c]/80 text-base md:text-xl lg:text-[22px] leading-relaxed font-medium">
              Most agencies check your campaigns once a week, if you're lucky.
              We watch them every hour of every day. If an underperforming ad
              slips past our team for more than 24 hours without action, we
              cover the wasted spend ourselves. This applies to active campaigns
              we're managing where spend and targets are agreed in advance. No
              fine print games, no "technically it was 25 hours."
            </p>
          </div>
        </m.div>
      </div>
    </section>
  );
}
