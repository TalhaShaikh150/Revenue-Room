import { CheckCircle2 } from "lucide-react";
import { FadeIn, FadeInX, FadeInScale } from "@/components/ui/Motion";
import Image from "next/image";

export function ServiceBenefits({ title, subtitle, benefits, imageSrc, imageAlt }) {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 relative z-10 bg-[#050505] overflow-hidden">
      
      {/* Decorative ambient light */}
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-brand-lime/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <FadeInX className="lg:w-1/2" delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#0a0a0c] mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse-slow" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                {subtitle}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black tracking-tighter leading-[1.05] mb-12 text-white">
              {title}
            </h2>

            <div className="flex flex-col gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-5 items-start group">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:bg-brand-lime/10 group-hover:border-brand-lime/30 transition-colors duration-300">
                    <CheckCircle2 className="w-6 h-6 text-brand-lime shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-brand-lime transition-colors duration-300">{benefit.title}</h4>
                    <p className="text-white/60 leading-relaxed text-sm md:text-base group-hover:text-white/80 transition-colors duration-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInX>

          {/* Image/Visual Content */}
          <FadeInScale className="lg:w-1/2 w-full relative" delay={0.2}>
            {/* Structural offset borders for a premium editorial look */}
            <div className="absolute -inset-4 border border-white/10 rounded-[40px] z-0 hidden md:block" />
            <div className="absolute -inset-8 border border-white/5 rounded-[48px] z-0 hidden lg:block" />

            <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] bg-white/5 border border-white/10 group z-10 shadow-2xl">
              <Image 
                src={imageSrc} 
                alt={imageAlt || "Benefits image"}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out mix-blend-luminosity opacity-80 group-hover:opacity-100"
              />
              {/* Premium dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
            </div>
          </FadeInScale>

        </div>
      </div>
    </section>
  );
}
