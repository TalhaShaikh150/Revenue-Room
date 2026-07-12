"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, LineChart, Megaphone, MousePointerClick, LayoutTemplate, Bot } from "lucide-react";

const SERVICES = [
  { 
    title: "SEO Architecture", 
    desc: "Dominate organic search results with data-driven content and technical precision.", 
    Icon: LineChart,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Paid Social", 
    desc: "Meta, TikTok, and LinkedIn scaling designed to maximize ROAS.", 
    Icon: Megaphone,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Google Search", 
    desc: "Precision Google Ads & YouTube campaigns targeting high-intent buyers.", 
    Icon: MousePointerClick,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Web Development", 
    desc: "High-performance marketing sites built for speed and conversions.", 
    Icon: Code2,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Landing Pages", 
    desc: "High-converting standalone pages that turn clicks into customers.", 
    Icon: LayoutTemplate,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "AI Advertising", 
    desc: "Next-gen AI-driven discovery campaigns leveraging advanced machine learning.", 
    Icon: Bot,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
  },
];

export function ServicesGrid() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 relative z-10 bg-brand-bg">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1] text-white mb-4 md:mb-6 uppercase">
            Capabilities Matrix
          </h2>
          <p className="text-white/60 text-base md:text-lg font-medium max-w-xl">
            We don't just execute tasks. We build interconnected revenue systems using world-class strategies and technology.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          
          {SERVICES.map((service, i) => {
            const { Icon } = service;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, delay: i * 0.1, ease: smoothEase }}
                className="group relative overflow-hidden rounded-[24px] bg-[#0a0a0c] border border-white/5 cursor-pointer h-[350px] flex flex-col justify-end p-8"
              >
                {/* Image Background */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon at Top */}
                <div className="absolute top-8 left-8 text-white/50 group-hover:text-brand-lime transition-colors duration-500 bg-white/5 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                  <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold tracking-tight mb-2 text-white group-hover:text-brand-lime transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm font-medium group-hover:text-white transition-colors">
                    {service.desc}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                   <ArrowRight className="text-brand-lime w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 flex justify-center">
          <a href="#services" className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-full text-white font-bold uppercase tracking-widest text-[11px] md:text-xs hover:bg-brand-lime hover:text-black hover:border-brand-lime transition-all duration-300">
            Explore All Capabilities <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}