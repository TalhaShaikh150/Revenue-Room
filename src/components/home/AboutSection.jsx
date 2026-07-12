"use client";

import { m } from "framer-motion";
import { ArrowRight, Activity, TrendingUp } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section className="bg-brand-bg text-white pt-8 md:pt-24 pb-8 md:pb-32 px-4 md:px-8 relative z-20 border-t border-white/10">
      <div className="max-w-[1300px] mx-auto w-full">
        {/* TOP TEXT AREA */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16 sm:mb-24">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            className="mobile-no-animate lg:w-3/4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-brand-lime"></div>
              <span className="text-white/50 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em]">
                The Revenue Room Difference
              </span>
            </div>
            <h2 className="text-[28px] md:text-[clamp(40px,4.5vw,56px)] font-medium leading-[1.1] tracking-tight">
              Most agencies clock off at 5pm. We believe growth shouldn't have
              to wait.
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              <div className="md:hidden h-6"></div>
              <span className="text-white/40 text-[18px] md:text-[clamp(24px,2.5vw,32px)] leading-[1.4] md:leading-[1.3] block mt-6">
                We're Australia's first 24/7 marketing agency. A team that never
                stops watching, testing, and improving your campaigns. While
                other agencies are asleep, we're already fixing what's not
                working, chasing your leads, and making sure your budget never
                sits idle.
              </span>
            </h2>
          </m.div>
        </div>

        {/* IMAGES & CTA GRID - BENTO STYLE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          
          {/* Bento Item 1: Real-time Analytics Visual */}
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="mobile-no-animate md:col-span-8 relative rounded-[24px] lg:rounded-[32px] overflow-hidden h-[300px] md:h-[450px] bg-[#0a0a0c] border border-white/10 group flex flex-col"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
              alt="Data Analytics"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/50 to-transparent" />
            
            <div className="relative z-10 p-8 md:p-12 mt-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-brand-lime/10 text-brand-lime px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                  <Activity className="w-3 h-3" /> Live Tracking
                </span>
                <span className="bg-white/5 text-white/70 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                  <TrendingUp className="w-3 h-3" /> ROAS
                </span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">Data never sleeps.</h3>
              <p className="text-white/60 max-w-md">Real-time optimization ensures your ad spend is always pushing towards maximum profitability.</p>
            </div>
          </m.div>

          {/* Bento Item 2: Guarantee CTA */}
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
            className="mobile-no-animate md:col-span-4 rounded-[24px] lg:rounded-[32px] overflow-hidden h-[400px] md:h-[450px] bg-brand-lime text-black flex flex-col p-8 md:p-10 group shadow-[0_0_50px_rgba(216,252,77,0.15)] relative"
          >
            {/* Ambient pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 flex-1 flex flex-col">
              <span className="inline-flex items-center justify-center bg-black text-white text-[11px] md:text-[12px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8 w-max">
                Our Guarantee
              </span>
              <h3 className="text-[32px] md:text-[40px] font-black leading-[1.05] tracking-tighter mb-4">
                Start with us today… <br />
                Don’t like us, <br />
                <span className="text-black/50">
                  don’t pay anything!
                </span>
              </h3>
              
              <button className="w-full mt-auto h-14 bg-black text-white rounded-full text-[14px] font-bold tracking-wide hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3">
                <span>Start Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </m.div>
          
        </div>
      </div>
    </section>
  );
}
