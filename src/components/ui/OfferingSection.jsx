"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function OfferingSection() {
  const ease = [0.16, 1, 0.3, 1];

  const offerings = [
    {
      num: "01",
      tag: "We do it for you",
      title: "Agency.",
      desc: "An elite, end-to-end growth engine. We completely take over your strategy, paid media, and creative pipelines to scale your revenue.",
    },
    {
      num: "02",
      tag: "We teach you",
      title: "Courses.",
      desc: "Get the exact frameworks and SOPs we use in our agency. Build, train, and manage your own internal marketing team.",
    },
    {
      num: "03",
      tag: "Implant us",
      title: "Advisory.",
      desc: "Fractional C-suite leadership. We implant our top minds into your business to audit systems, restructure teams, and provide high-level direction.",
    },
  ];

  return (
    <section className="bg-[#050505] text-white py-32 px-4 md:px-8 relative z-20">
      <div className="max-w-[1300px] mx-auto w-full">
        {/* Intro Header */}
        <div className="max-w-3xl mb-20 md:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-brand-lime"></div>
            <span className="text-white/50 text-[11px] font-bold uppercase tracking-[0.25em]">
              Engagement Models
            </span>
          </div>
          <h2 className="text-[clamp(40px,5vw,64px)] font-black tracking-tighter leading-[0.9] uppercase">
            Three Paths. <br />
            <span className="text-brand-lime">One Result.</span>
          </h2>
        </div>

        {/* 3 Equal Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease }}
              className="relative p-8 md:p-10 lg:p-12 flex flex-col group bg-[#0e0e10] border border-white/5 rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(216,252,77,0.1)]"
            >
              {/* Prominent SVG Glowing Curve Animation (Matches Footer) */}
              <div className="absolute bottom-0 left-0 w-full h-[150px] pointer-events-none overflow-hidden rounded-b-[32px]">
                <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id={`card-glow-${index}`} x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="rgba(216,252,77,0)" />
                      <stop offset="30%" stopColor="rgba(216,252,77,0.3)" />
                      <stop offset="65%" stopColor="#d8fc4d" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                  </defs>
                  
                  {/* Layer 1: Wide Ambient Bloom */}
                  <motion.path
                    d="M 0,80 C 100,100 200,40 300,70"
                    fill="none"
                    stroke={`url(#card-glow-${index})`}
                    strokeWidth="8"
                    strokeLinecap="round"
                    vectorEffect="nonScalingStroke"
                    className="blur-[10px] opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease, delay: index * 0.2 }}
                  />
                  
                  {/* Layer 2: Tight Core Glow */}
                  <motion.path
                    d="M 0,80 C 100,100 200,40 300,70"
                    fill="none"
                    stroke={`url(#card-glow-${index})`}
                    strokeWidth="4"
                    strokeLinecap="round"
                    vectorEffect="nonScalingStroke"
                    className="blur-[4px] opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease, delay: index * 0.2 }}
                  />
                  
                  {/* Layer 3: Sharp Neon Tube */}
                  <motion.path
                    d="M 0,80 C 100,100 200,40 300,70"
                    fill="none"
                    stroke={`url(#card-glow-${index})`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    vectorEffect="nonScalingStroke"
                    className="opacity-100"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease, delay: index * 0.2 }}
                  />
                </svg>
              </div>

              <div className="relative z-10 flex items-center justify-between mb-16">
                <span className="text-brand-lime font-mono text-sm tracking-widest">
                  {item.num}
                </span>
                <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/70 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:border-brand-lime/30 group-hover:text-brand-lime transition-colors duration-500">
                  {item.tag}
                </span>
              </div>

              <h3 className="relative z-10 text-[40px] lg:text-[48px] font-black leading-none tracking-tighter mb-6 uppercase group-hover:text-brand-lime transition-colors duration-500">
                {item.title}
              </h3>

              <p className="relative z-10 text-white/60 text-[15px] leading-relaxed mb-12 flex-1 group-hover:text-white/90 transition-colors duration-500">
                {item.desc}
              </p>

              <button className="relative z-10 flex items-center gap-3 text-white text-[12px] font-bold uppercase tracking-widest w-max mt-auto bg-white/5 border border-white/10 px-6 py-3.5 rounded-full group-hover:bg-brand-lime group-hover:text-black group-hover:border-brand-lime transition-all duration-300">
                Get Started Now{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
