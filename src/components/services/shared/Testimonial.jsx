// SERVER COMPONENT — no "use client" needed
import Image from "next/image";
import { Quote } from "lucide-react";
import { FadeIn, FadeInX, FadeInScale } from "@/components/ui/Motion";

export function ServiceTestimonial({ 
  quote, 
  author, 
  role, 
  company,
  avatarSrc = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256" // Premium default avatar
}) {
  return (
    <section className="py-24 md:py-32 bg-brand-bg relative overflow-hidden border-b border-white/5">
      
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Author Visual */}
        <FadeInScale className="shrink-0 relative">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full p-2 border border-white/10 bg-white/5 relative z-10 overflow-hidden">
            <Image 
              src={avatarSrc} 
              alt={author} 
              fill
              sizes="(max-width: 768px) 192px, 256px"
              className="object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700 p-2"
            />
          </div>
          {/* Decorative floating quote */}
          <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-16 h-16 md:w-24 md:h-24 bg-[#0a0a0c] rounded-full flex items-center justify-center border border-white/10 z-20 shadow-2xl">
            <Quote className="w-8 h-8 md:w-10 md:h-10 text-brand-lime fill-brand-lime/20" />
          </div>
        </FadeInScale>

        {/* Quote Content */}
        <FadeInX x={30} delay={0.2} className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <blockquote className="text-2xl md:text-4xl lg:text-[40px] font-medium text-white mb-10 leading-[1.3] md:leading-[1.2] tracking-tight">
            "{quote}"
          </blockquote>
          
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
            <div className="w-12 h-1 bg-brand-lime hidden lg:block" />
            <div>
              <div className="text-xl font-bold text-white mb-1">{author}</div>
              <div className="text-white/60 font-medium tracking-wide">
                {role} {company && <span className="text-brand-lime/70 font-bold ml-1">@ {company}</span>}
              </div>
            </div>
          </div>
        </FadeInX>

      </div>
    </section>
  );
}
