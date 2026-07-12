"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

// Pre-defined premium Unsplash images to instantly upgrade all service pages
const BENTO_IMAGES = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
];

export function ServiceFeatures({ 
  title, 
  subtitle, 
  description = "We don't just execute tasks. We deploy proven architectural frameworks designed to capture market share, reduce wasted spend, and scale your revenue predictably.",
  features 
}) {
  const smoothEase = [0.16, 1, 0.3, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: smoothEase } },
  };

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 relative z-10 bg-[#050505] overflow-hidden">
      
      <div className="max-w-[1300px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-12 justify-between items-end mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-lime">
                {subtitle}
              </span>
            </div>
            
            <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-black tracking-tighter leading-[1.05] md:leading-[0.95] text-white mb-6 uppercase">
              {title}
            </h2>
            
            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-4 py-4 px-6 border border-white/10 bg-[#0a0a0c] rounded-2xl shrink-0">
            <ShieldCheck className="w-8 h-8 text-brand-lime shrink-0" />
            <div>
              <p className="text-white text-sm font-bold tracking-wide">The Revenue Room Standard</p>
              <p className="text-white/50 text-xs mt-1">Data-backed execution. Zero guesswork.</p>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {features.map((feature, i) => {
            // Make the first item span 2 columns if there are 3 items, or adjust dynamically
            const isLarge = i === 0 && features.length % 2 !== 0;
            const imgUrl = feature.image || BENTO_IMAGES[i % BENTO_IMAGES.length];

            return (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className={`group relative flex flex-col justify-end p-8 md:p-10 min-h-[400px] rounded-[32px] overflow-hidden bg-[#0a0a0c] border border-white/10 cursor-pointer ${isLarge ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                {/* Background Image */}
                <img 
                  src={imgUrl} 
                  alt={feature.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
                
                {/* Content */}
                <div className="relative z-10 mt-auto pt-20">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 text-white group-hover:bg-brand-lime group-hover:text-black transition-colors duration-500">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3 group-hover:text-brand-lime transition-colors duration-500">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed text-sm md:text-base mb-6 group-hover:text-white/90 transition-colors duration-500 max-w-md">
                    {feature.description}
                  </p>

                  {feature.impact && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-white group-hover:border-brand-lime/50 transition-colors duration-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                      Impact: {feature.impact}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: smoothEase }}
          className="mt-12 p-8 md:p-12 bg-brand-lime rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-8 group cursor-pointer"
        >
          <div>
            <h4 className="text-2xl md:text-3xl font-black text-black mb-3 tracking-tighter uppercase">Ready to bypass the guesswork?</h4>
            <p className="text-black/70 font-medium max-w-md">
              Stop paying for vanity metrics. We tie our deliverables directly to your bottom-line revenue.
            </p>
          </div>
          
          <Link href="/contact" className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-black text-brand-lime group-hover:scale-110 transition-transform duration-500">
            <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}