"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export function CTABanner() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-24 md:py-32 px-4 md:px-6 relative z-10 bg-brand-bg flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto max-w-[900px] text-center relative z-10">

        {/* Clean, Stark Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: smoothEase, delay: 0.1 }}
        >
          <h2 className="text-[44px] md:text-7xl lg:text-[88px] font-black tracking-tighter leading-[1.1] text-white mb-6 uppercase">
            Ready to <span className="text-brand-lime">Scale?</span>
          </h2>
          <p className="text-base md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-medium px-4">
            Stop wasting time with generic agencies. Partner with a team that treats your revenue like their own.
          </p>
        </motion.div>

        {/* Massive CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: smoothEase, delay: 0.2 }}
          className="w-full flex justify-center mt-4"
        >
          <a 
            href="#signup" 
            className="inline-flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 bg-brand-lime text-black font-black py-6 px-8 md:py-6 md:px-12 rounded-full text-sm md:text-xl uppercase tracking-widest hover:scale-[1.02] hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(216,252,77,0.3)] hover:shadow-[0_0_60px_rgba(216,252,77,0.5)] group text-center"
          >
            WHAT ARE YOU WAITING FOR? SIGN UP NOW
            <ArrowRight className="w-6 h-6 hidden md:block group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}