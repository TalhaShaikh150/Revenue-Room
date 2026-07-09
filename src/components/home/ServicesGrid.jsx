"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, LineChart, Megaphone, MousePointerClick, LayoutTemplate, Bot } from "lucide-react";

const SERVICES = [
  { title: "SEO Architecture", desc: "Dominate organic search results with data.", Icon: LineChart },
  { title: "Paid Social", desc: "Meta, TikTok, and LinkedIn scaling.", Icon: Megaphone },
  { title: "Google Search", desc: "Precision Google Ads & YouTube campaigns.", Icon: MousePointerClick },
  { title: "Web Development", desc: "High-performance marketing sites.", Icon: Code2 },
  { title: "Landing Pages", desc: "High-converting standalone pages.", Icon: LayoutTemplate },
  { title: "AI Advertising", desc: "Next-gen AI-driven discovery campaigns.", Icon: Bot },
];

export function ServicesGrid() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-32 px-4 md:px-8 relative z-10 bg-brand-bg">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white mb-6">
            Capabilities Matrix
          </h2>
          <p className="text-white/50 text-lg font-medium max-w-xl">
            We don't just execute tasks. We build interconnected revenue systems.
          </p>
        </div>

        {/* THE PERFECT 1PX MATRIX */}
        {/* By setting a gap-[1px] and a background color on the parent, we create perfect hairline borders */}
        <div className="bg-brand-border max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] border border-brand-border">
          
          {SERVICES.map((service, i) => {
            const { Icon } = service;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }}
                className="bg-[#050505] p-10 lg:p-12 flex flex-col group relative overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(216,252,77,0.1)_0%,_transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="mb-12 text-white/40 group-hover:text-accent transition-colors duration-500">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>

                <div className="mt-auto relative z-10">
                  <h3 className="text-2xl font-bold tracking-tight mb-3 text-white group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed text-sm font-medium">
                    {service.desc}
                  </p>
                </div>

                <div className="absolute top-10 right-10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                   <ArrowRight className="text-accent w-5 h-5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 flex justify-center">
          <a href="#services" className="inline-flex items-center gap-3 border-b border-white/30 pb-2 text-white font-bold uppercase tracking-widest text-xs hover:text-accent hover:border-accent transition-all duration-300">
            Explore All Capabilities <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}