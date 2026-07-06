"use client";

import { motion } from "framer-motion";
import { Activity, Globe, DollarSign, Phone } from "lucide-react";

const features = [
  {
    icon: <Activity className="w-6 h-6 text-brand-lime" />,
    title: "Ad platforms don't sleep. Neither do we.",
    desc: "Algorithms shift, costs spike, and leads go cold in hours, not days. A campaign left unattended overnight can burn through budget before anyone notices. We catch it in real time."
  },
  {
    icon: <Globe className="w-6 h-6 text-brand-lime" />,
    title: "Global clients, global hours.",
    desc: "Working across time zones with international partners? You'll never be stuck waiting for business hours again. Someone from our team is always on."
  },
  {
    icon: <DollarSign className="w-6 h-6 text-brand-lime" />,
    title: "Every dollar accounted for.",
    desc: "Round-the-clock monitoring means underperforming ads get paused, budgets get reallocated, and leads get followed up. Before money is wasted, not after."
  }
];

export function WhyMattersSection() {
  return (
    <section className="relative w-full py-10 md:py-16 bg-brand-bg px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Top Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold text-center mb-16 tracking-tight leading-tight"
        >
          Why 24/7 matters
        </motion.h2>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-[#121214] border border-white/5 rounded-[24px] p-8 md:p-10 flex flex-col items-start group hover:-translate-y-2 hover:border-brand-lime/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
            >
              {/* Icon Container with subtle glow */}
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-brand-lime/10 group-hover:border-brand-lime/30 transition-colors duration-300 relative">
                {feature.icon}
                <div className="absolute inset-0 bg-brand-lime/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-white text-[22px] md:text-[26px] font-bold leading-tight mb-4 group-hover:text-brand-lime transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-white/50 text-[16px] leading-relaxed font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-white/10 mb-20 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-32 h-[2px] bg-brand-lime/50 blur-[2px]"></div>
        </div>

        {/* Bottom CTA Area */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-[44px] font-bold tracking-tight mb-6 leading-tight"
          >
            Marketing doesn't stop at 5pm. Neither do we.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl mb-12 font-medium"
          >
            Talk to a team that's already awake, already watching, and already working on your results.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <button className="bg-brand-lime text-black font-bold px-12 py-5 rounded-[16px] text-[16px] md:text-[18px] hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(216,252,77,0.2)] hover:shadow-[0_0_60px_rgba(216,252,77,0.4)]">
              Book your free consultation
            </button>
            
            <a href="https://wa.me/61438365241" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-brand-lime transition-all text-[15px] md:text-[16px] font-bold tracking-wide group bg-white/5 border border-white/10 px-6 py-2.5 rounded-full hover:border-brand-lime/30 hover:bg-brand-lime/10">
              <Phone className="w-4 h-4 text-brand-lime group-hover:scale-110 transition-transform" />
              +61 438 365 241
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
