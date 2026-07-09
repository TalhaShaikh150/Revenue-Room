"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Alex Sterling",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "David Kim",
    role: "Lead Media Buyer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Emily Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
  }
];

export function TeamSection() {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section className="relative w-full py-16 md:py-32 px-4 md:px-8 bg-brand-bg border-t border-white/5">
      <div className="max-w-[1300px] mx-auto w-full">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="text-white text-3xl md:text-5xl lg:text-[56px] font-black uppercase tracking-tighter leading-[1.1] mb-6"
          >
            Meet the <span className="text-brand-lime">Machine</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            className="text-white/50 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            We don't hire employees, we build a roster of killers. Every person on this team is obsessed with one thing: your ROI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * idx, ease: smoothEase }}
              className="group relative"
            >
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 border border-white/10 mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Subtle gradient overlay at bottom for text readability if we put text inside, but we'll put it below */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              
              <div className="text-center">
                <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-1">{member.name}</h3>
                <p className="text-brand-lime font-bold uppercase tracking-widest text-xs md:text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
