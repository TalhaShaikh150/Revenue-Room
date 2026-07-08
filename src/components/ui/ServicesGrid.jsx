"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, LineChart, Megaphone, MousePointerClick, LayoutTemplate, Bot, Users, Video } from "lucide-react";
import { Card } from "./Card";

// Defined outside component — not recreated on re-renders
const SERVICES = [
  { 
    title: "SEO", 
    description: "Dominate organic search results with data-backed architecture.",
    Icon: LineChart,
    flagship: true
  },
  { 
    title: "Paid Social", 
    description: "Meta, TikTok, and LinkedIn scaling.",
    Icon: Megaphone,
  },
  { 
    title: "Google Search", 
    description: "Precision-targeted Google Ads & YouTube campaigns.",
    Icon: MousePointerClick,
  },
  { 
    title: "Web Development", 
    description: "High-performance, modern marketing sites.",
    Icon: Code2,
  },
  { 
    title: "Landing Pages", 
    description: "High-converting bespoke landing pages designed for scale.",
    Icon: LayoutTemplate,
  },
  { 
    title: "AI Search Advertising", 
    description: "Next-gen AI-driven search and discovery campaigns.",
    Icon: Bot,
  },
  { 
    title: "Organic Account Management", 
    description: "Building loyal brand communities and engagement.",
    Icon: Users,
  },
  { 
    title: "Video Editing", 
    description: "Premium short and long-form video content production.",
    Icon: Video,
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
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
            Revenue-Driving <br /> <span className="text-accent">Capabilities.</span>
          </h2>
        </div>

        {/* 3x2 Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {SERVICES.slice(0, 6).map((service, i) => {
            const { Icon } = service;
            return (
              <motion.div key={i} variants={itemVariants} className="h-full">
              <Card 
                className="h-full min-h-[300px] flex flex-col justify-between group cursor-pointer border border-white/5 hover:border-accent/40 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-accent group-hover:text-black text-white/70 transition-colors">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-black tracking-tight mb-3 group-hover:text-accent transition-colors text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm pr-4">
                    {service.description}
                  </p>
                </div>

                {/* Animated Arrow Bottom Corner */}
                <div className="absolute top-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                   <ArrowRight className="text-accent w-6 h-6" />
                </div>
              </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <a href="#services" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-[12px] hover:bg-white/10 transition-colors duration-300 group">
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
                    
        </div>
      </div>
    </section>
  );
}