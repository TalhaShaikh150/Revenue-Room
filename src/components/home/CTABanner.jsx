"use client";

import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTABanner() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-24 md:py-32 px-4 md:px-6 relative z-10 bg-brand-bg flex flex-col items-center justify-center overflow-hidden border-y border-white/5">
      
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-brand-bg pointer-events-none" />

      <div className="container mx-auto max-w-[800px] text-center relative z-10">

        {/* Clean, Stark Headline */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: smoothEase }}
          className="mobile-no-animate"
        >
          <span className="inline-block py-1.5 px-4 border border-white/10 rounded-full bg-white/5 text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Next Steps
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-[80px] font-black tracking-tighter leading-[1] text-white mb-6 uppercase">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-lime to-[#8ba800]">Scale?</span>
          </h2>
          <p className="text-lg md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Stop wasting time with generic agencies. Partner with a team that treats your revenue like their own.
          </p>
        </m.div>

        {/* Cleaner CTA Button linking to Contact */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: smoothEase, delay: 0.1 }}
          className="mobile-no-animate w-full flex justify-center"
        >
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-4 bg-brand-lime text-black font-black py-5 px-10 rounded-full text-base md:text-lg uppercase tracking-widest hover:scale-[1.03] hover:bg-white transition-all duration-300 group"
          >
            Let's Talk Growth
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </m.div>

      </div>
    </section>
  );
}