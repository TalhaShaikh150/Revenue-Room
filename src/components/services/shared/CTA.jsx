import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServiceCTA({ serviceId = "general", title = "Ready to Dominate Your Market?", description = "Let's discuss how we can help you achieve your revenue goals." }) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-brand-bg px-4 md:px-8">
      <div className="max-w-[1300px] w-full mx-auto relative z-10">
        
        <div className="relative w-full rounded-3xl md:rounded-[40px] overflow-hidden bg-[#0a0a0c] border border-white/10 shadow-2xl p-8 md:p-16 lg:p-24 text-center group">
          
          {/* High-quality background image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200" 
              alt="Premium office background" 
              fill
              sizes="(max-width: 1300px) 100vw, 1300px"
              className="object-cover mix-blend-luminosity opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-[#0a0a0c]/40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0c_100%)]" />
          </div>

          {/* Subtle glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-lime/50 to-transparent z-10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[100px] bg-brand-lime/10 blur-[80px] pointer-events-none z-10" />

          <div className="relative z-10 flex flex-col items-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse-slow" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                Next Steps
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              {title}
            </h2>
            
            <p className="text-base md:text-lg text-white/60 mb-10 max-w-2xl font-medium leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href={`/contact?service=${serviceId}`}
                className="group flex items-center justify-center gap-3 bg-brand-lime text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors duration-300 w-full sm:w-auto"
              >
                Book This Service
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white/5 hover:border-white/40 transition-all duration-300 w-full sm:w-auto"
              >
                Ask a Question
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
