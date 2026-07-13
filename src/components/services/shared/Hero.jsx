// SERVER COMPONENT — no "use client" needed
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInItem, FadeInScale, FadeInX } from "@/components/ui/Motion";

export function ServiceHero({ 
  title, 
  subtitle, 
  description, 
  ctaText = "Get Started", 
  ctaLink = "/contact",
  highlights = [
    "Data-Driven Strategy",
    "Full-Service Execution",
    "Clear Monthly Reporting"
  ],
  imageSrc = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" // Premium default
}) {
  return (
    <section className="relative w-full flex items-center bg-[#050505] pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden border-b border-white/5">
      
      {/* Very subtle background ambient light */}
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-brand-lime/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1300px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Clean, unconstrained typography column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeInStagger>
              <FadeInItem className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse-slow" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                  {subtitle}
                </span>
              </FadeInItem>

              {/* Text will naturally flow within its 7-column span */}
              <FadeInItem>
                <h1 className="text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] font-black leading-[1.05] tracking-tight mb-4 text-white">
                  {title}
                </h1>
              </FadeInItem>

              <FadeInItem>
                <p className="text-white/60 text-base md:text-lg font-medium mb-8 leading-relaxed max-w-xl">
                  {description}
                </p>
              </FadeInItem>

              <FadeInItem>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link 
                    href={ctaLink}
                    className="group flex items-center justify-center gap-3 bg-brand-lime text-black px-8 py-4 w-full sm:w-auto font-bold rounded-full hover:bg-white transition-colors duration-300"
                  >
                    <span>{ctaText}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link 
                    href="#works"
                    className="flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto text-white font-bold rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    View Case Studies
                  </Link>
                </div>
              </FadeInItem>
            </FadeInStagger>
          </div>

          {/* RIGHT: Visual & Deliverables embedded neatly */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <FadeInScale delay={0}>
              <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-[4/3] bg-white/5 border border-white/10 group">
                <Image 
                  src={imageSrc} 
                  alt={typeof title === 'string' ? title : "Service Deliverables"} 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover mix-blend-luminosity opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent pointer-events-none" />
              </div>
            </FadeInScale>

            {/* Structured Deliverables Box overlapping securely */}
            <FadeIn delay={0.3} className="relative -mt-16 mx-6 md:mx-0 md:absolute md:-left-8 md:bottom-8 md:mt-0 z-20 bg-[#0a0a0c] border border-white/10 p-5 md:p-6 rounded-2xl shadow-2xl">
              <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-4 pb-3 border-b border-white/10">
                Core Deliverables
              </h3>
              
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-lime shrink-0" />
                    <span className="text-white/80 font-medium text-sm md:text-base leading-snug">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}