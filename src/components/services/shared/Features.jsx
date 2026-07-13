// SERVER COMPONENT, no "use client" needed
import Image from "next/image";
import { FadeIn, FadeInX, FadeInScale } from "@/components/ui/Motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

const BENTO_IMAGES = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
];

export function ServiceFeatures({ 
  title, 
  subtitle, 
  description = "We build clear digital marketing strategies that grow your revenue, no guesswork, no bloated reports.",
  features 
}) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.map((feature, i) => {
            const isLarge = i === 0 && features.length % 2 !== 0;
            const imgUrl = feature.image || BENTO_IMAGES[i % BENTO_IMAGES.length];

            return (
              <FadeIn key={i} delay={i * 0.1} className={`group relative flex flex-col justify-end p-8 md:p-10 min-h-[400px] rounded-[32px] overflow-hidden bg-[#0a0a0c] border border-white/10 cursor-pointer ${isLarge ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                {/* Optimized Background Image */}
                <Image 
                  src={imgUrl} 
                  alt={feature.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity"
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
              </FadeIn>
            );
          })}
        </div>

        {/* CTA Block */}
        <FadeIn delay={0.4} className="mt-12 p-8 md:p-12 bg-brand-lime rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-8 group cursor-pointer">
          <div>
            <h4 className="text-2xl md:text-3xl font-black text-black mb-3 tracking-tighter uppercase">Ready to Start Growing?</h4>
            <p className="text-black/70 font-medium max-w-md">
              Stop paying for vanity metrics. We tie our deliverables directly to your bottom-line revenue.
            </p>
          </div>
          
          <Link href="/contact" className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-black text-brand-lime group-hover:scale-110 transition-transform duration-500">
            <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}