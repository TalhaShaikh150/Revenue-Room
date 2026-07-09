"use client";

import { motion } from "framer-motion";
import { Target, Zap, ShieldCheck } from "lucide-react";

const philosophies = [
  {
    icon: <Zap className="w-8 h-8 text-black" />,
    title: "Speed is a Feature",
    description: "In the digital world, the slow die. We iterate, test, and scale campaigns faster than anyone else in the market.",
  },
  {
    icon: <Target className="w-8 h-8 text-black" />,
    title: "Data Over Ego",
    description: "We don't guess. Every decision we make is backed by hard numbers. If the data says pivot, we pivot.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-black" />,
    title: "Radical Transparency",
    description: "No smoke and mirrors. You see exactly where your money goes and the exact ROI it generates in real-time.",
  }
];

export function OurPhilosophySection() {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-8 bg-white text-black rounded-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-20">
      <div className="max-w-[1300px] mx-auto w-full">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, ease: smoothEase }}
            className="lg:w-1/3"
          >
            <span className="inline-block py-1 px-3 border border-black/10 rounded-full bg-black/5 text-black text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black uppercase tracking-tighter leading-[1.1]">
              How We <br/> Operate.
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            className="lg:w-2/3 flex items-center"
          >
            <p className="text-lg md:text-2xl text-black/60 font-medium leading-relaxed">
              We operate differently. Traditional agencies are bloated, slow, and care more about awards than your bottom line. We are a lean, aggressive growth partner built for modern brands that want to dominate.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {philosophies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * idx, ease: smoothEase }}
              className="bg-[#f4f4f5] rounded-[24px] p-8 md:p-10 hover:bg-brand-lime transition-colors duration-500 group"
            >
              <div className="w-16 h-16 rounded-full bg-brand-lime group-hover:bg-white flex items-center justify-center mb-8 transition-colors duration-500 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4">{item.title}</h3>
              <p className="text-black/60 group-hover:text-black/80 font-medium leading-relaxed transition-colors duration-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
