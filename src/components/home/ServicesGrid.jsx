// SERVER COMPONENT, no "use client" needed
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/Motion";
import Link from "next/link";

const SERVICES = [
  {
    title: "SEO & Google Ads",
    desc: "Dominate organic search results with data-driven content and technical precision.",
    Icon: null,
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Paid Social",
    desc: "Meta, TikTok, and LinkedIn scaling designed to maximize ROAS.",
    Icon: null,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Google Search",
    desc: "Precision Google Ads & YouTube campaigns targeting high-intent buyers.",
    Icon: null,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Web Development",
    desc: "High-performance marketing sites built for speed and conversions.",
    Icon: null,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Video Production",
    desc: "High-production ad creatives, short-form reels, and brand documentaries.",
    Icon: null,
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "AI Search Ads",
    desc: "Future-proof your brand with AI-powered search campaigns that put you in front of ready-to-buy customers.",
    Icon: null,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
  }
];

// Import icons separately so component remains a server component
import { Code2, LineChart, Megaphone, MousePointerClick, Video, Bot } from "lucide-react";
const ICONS = [LineChart, Megaphone, MousePointerClick, Code2, Video, Bot];

export function ServicesGrid({ showCTA = true }) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 relative z-10 bg-brand-bg">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1] text-white mb-4 md:mb-6 uppercase">
            Our Services
          </h2>
          <p className="text-white/60 text-base md:text-lg font-medium max-w-xl">
            We don&apos;t just execute tasks. We build interconnected revenue systems using world-class strategies and technology.
          </p>
        </div>

        {/* Grid Container */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i];
            return (
              <FadeInItem key={i}>
                <div className="group relative overflow-hidden rounded-[24px] bg-[#0a0a0c] border border-white/5 cursor-pointer h-[350px] flex flex-col justify-end p-8">
                  {/* Optimized Image Background */}
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon at Top */}
                  <div className="absolute top-8 left-8 text-white/50 group-hover:text-brand-lime transition-colors duration-500 bg-white/5 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                    <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold tracking-tight mb-2 text-white group-hover:text-brand-lime transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm font-medium group-hover:text-white transition-colors">
                      {service.desc}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                     <ArrowRight className="text-brand-lime w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>

        {/* CTA */}
        {showCTA && (
          <div className="mt-16 md:mt-20 flex justify-center">
            <Link href="/services" className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-full text-white font-bold uppercase tracking-widest text-[11px] md:text-xs hover:bg-brand-lime hover:text-black hover:border-brand-lime transition-all duration-300">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}