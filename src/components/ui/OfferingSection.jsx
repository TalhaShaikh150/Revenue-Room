"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function OfferingSection() {
  const ease = [0.16, 1, 0.3, 1];

  const offerings = [
    { num: "01", tag: "We do it for you", title: "Agency.", desc: "An elite, end-to-end growth engine. We completely take over your strategy, paid media, and creative pipelines to scale your revenue." },
    { num: "02", tag: "We teach you", title: "Academy.", desc: "Get the exact frameworks and SOPs we use in our agency. Build, train, and manage your own internal marketing team." },
    { num: "03", tag: "Implant us", title: "Advisory.", desc: "Fractional C-suite leadership. We implant our top minds into your business to audit systems, restructure teams, and provide high-level direction." }
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

        {/* 3 Equal Columns with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {offerings.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease }}
              className="py-12 md:py-16 md:px-10 lg:px-12 flex flex-col group hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center justify-between mb-16">
                <span className="text-brand-lime font-mono text-sm tracking-widest">{item.num}</span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-[40px] lg:text-[48px] font-black leading-none tracking-tighter mb-6 uppercase group-hover:translate-x-2 transition-transform duration-300">
                {item.title}
              </h3>
              
              <p className="text-white/60 text-[15px] leading-relaxed mb-12 flex-1">
                {item.desc}
              </p>

              <button className="flex items-center gap-3 text-white text-[12px] font-bold uppercase tracking-widest group-hover:text-brand-lime transition-colors w-max">
                Explore Model <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}