"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section className="bg-white text-black pt-24 pb-32 px-4 md:px-8 rounded-t-[40px] w-full relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="max-w-[1300px] mx-auto w-full">
        
        {/* TOP TEXT AREA */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: smoothEase }}
            className="lg:w-1/4"
          >
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="text-[11px] text-black/50 font-bold uppercase tracking-[0.2em]">
                About Revenue Room
              </span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            className="lg:w-3/4"
          >
            <h2 className="text-[clamp(32px,4vw,56px)] font-medium leading-[1.1] tracking-tight">
              At Revenue Room, we believe marketing isn't about selling it's about <span className="font-serif italic pr-2">connecting.</span> 
              <br className="hidden md:block" /><br className="hidden md:block" />
              <span className="text-black/30">
                We're a full-service growth engine built to scale brands with purpose and data-driven precision. From crafting compelling stories to executing campaigns that convert, we blend strategy and creative to turn attention into action.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* IMAGES & CTA GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Image 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: smoothEase }}
            className="relative rounded-[24px] overflow-hidden h-[400px] md:h-[450px] bg-[#f4f4f5] group"
          >
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
              alt="Team collaborating"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            className="relative rounded-[24px] overflow-hidden h-[400px] md:h-[450px] bg-[#f4f4f5] group"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              alt="Strategy meeting"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </motion.div>

          {/* Text/Action Card (Added soft gray bg so it doesn't bleed into the white section) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
            className="rounded-[24px] overflow-hidden h-[400px] md:h-[450px] bg-[#f4f4f5] flex flex-col justify-between p-8 md:p-12 group"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-6 block">Our Culture</span>
              <h3 className="text-[36px] md:text-[40px] font-black leading-[1] tracking-tighter mb-4">
                Our Bold &<br />
                Brilliant<br />
                Thinkers.
              </h3>
            </div>
            
            <button className="bg-black text-white w-full py-4 rounded-full text-[14px] font-bold hover:bg-brand-lime hover:text-black transition-colors duration-300 flex items-center justify-center gap-2">
              Meet The Team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}