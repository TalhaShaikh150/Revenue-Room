"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, LineChart, Megaphone, MousePointerClick } from "lucide-react";
import { Card } from "./Card";

// Defined outside component — not recreated on re-renders
const SERVICES = [
  { 
    title: "Web Development", 
    description: "High-performance marketing sites.",
    Icon: Code2,
  },
  { 
    title: "Search Engine Optimization", 
    description: "Dominate organic search results with data-backed architecture.",
    Icon: LineChart,
    flagship: true
  },
  { 
    title: "Paid Social Media", 
    description: "Meta, TikTok, and LinkedIn scaling.",
    Icon: Megaphone,
  },
  { 
    title: "Paid Search (PPC)", 
    description: "Google Ads & YouTube.",
    Icon: MousePointerClick,
  },
];

// Variants outside component — stable object references
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function ServicesGrid() {

  return (
    <section className="py-24 px-4 md:px-8 relative z-10 bg-brand-bg">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-border bg-brand-card mb-6">
            <div className="w-2 h-2 rounded-sm bg-accent animate-pulse-slow" />
            <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">
              Core Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
            Revenue-Driving <br /> <span className="text-accent">Capabilities.</span>
          </h2>
          <a href="/agency" className="text-text-secondary hover:text-accent hover:underline decoration-accent underline-offset-8 transition-colors">
            View full agency breakdown &rarr;
          </a>
        </div>

        {/* 2x2 Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {SERVICES.map((service, i) => {
            const { Icon } = service;
            return (
              <motion.div key={i} variants={itemVariants}>
              <Card 
                elevated={service.flagship}
                tilted={service.flagship}
                className="h-72 p-8 flex flex-col justify-between group cursor-pointer border border-brand-border/50 hover:border-accent/30 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-xl bg-brand-card border border-brand-border group-hover:bg-accent group-hover:text-black transition-colors ${service.flagship ? 'bg-accent/10 text-accent border-accent/20' : 'text-text-secondary'}`}>
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  {service.flagship && (
                    <span className="bg-accent text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Flagship
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary">
                    {service.description}
                  </p>
                </div>

                {/* Animated Arrow Bottom Corner */}
                <div className="absolute bottom-8 right-8 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                   <ArrowRight className="text-accent w-6 h-6" />
                </div>
              </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}