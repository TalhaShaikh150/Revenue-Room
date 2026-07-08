"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section className="bg-white text-black pt-8 md:pt-24 pb-8 md:pb-32 px-4 md:px-8 rounded-t-[40px] w-full relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="max-w-[1300px] mx-auto w-full">
        
        {/* TOP TEXT AREA */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-12 md:mb-32">
          
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            className="lg:w-3/4"
          >
            <h2 className="text-[24px] md:text-[clamp(32px,4vw,45px)] font-medium leading-[1.2] md:leading-[1.1] tracking-tight">
              Most agencies clock off at 5pm. We believe growth shouldn't have to wait.
              <br className="hidden md:block" /><br className="hidden md:block" />
              <div className="md:hidden h-6"></div>
              <span className="text-black/40 text-[18px] md:text-[clamp(24px,3vw,36px)] leading-[1.4] md:leading-[1.2] block">
              We're Australia's first 24/7 marketing agency. A team that never stops watching, testing, and improving your campaigns. While other agencies are asleep, we're already fixing what's not working, chasing your leads, and making sure your budget never sits idle. If you're tired of slow turnarounds and "we'll get to it next week," you're in the right place.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* IMAGES & CTA GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Image 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: smoothEase }}
            className="relative rounded-[24px] overflow-hidden hidden sm:flex h-[400px] md:h-[450px] bg-[#f4f4f5] group"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
              alt="Marketing analytics dashboard"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            className="relative rounded-[24px] overflow-hidden h-[250px] md:h-[450px] bg-[#f4f4f5] group"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Team working late on strategy"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
            className="rounded-[24px] overflow-hidden h-[400px] md:h-[450px] bg-black text-white flex flex-col justify-between p-8 md:p-10 lg:p-12 group shadow-[0_15px_40px_rgba(0,0,0,0.2)] relative"
          >
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/20 blur-[50px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              <span className="inline-flex items-center justify-center bg-brand-lime text-black text-[11px] md:text-[12px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 shadow-[0_0_15px_rgba(216,252,77,0.3)]">
                Our Guarantee
              </span>
              <h3 className="text-[30px] md:text-[34px] lg:text-[40px] font-black leading-[1.3] tracking-tight mb-4">
                Start with us today… <br />
                Don’t like us, <br />
                don’t pay anything!
              </h3>
            </div>
            
            <button className="bg-brand-lime text-black w-full py-4 px-2 rounded-full text-[13px] md:text-[14px] font-bold hover:bg-white hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 relative z-10">
              No risk, No reward. Start Now! <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}