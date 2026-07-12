// SERVER COMPONENT — no "use client" needed
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeInX } from "@/components/ui/Motion";

export function CultureSection() {
  return (
    <section className="relative w-full py-16 md:py-32 px-4 md:px-8 bg-brand-bg">
      <div className="max-w-[1300px] mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <FadeInX x={-40} delay={0} className="order-2 lg:order-1 relative rounded-[32px] overflow-hidden h-[400px] md:h-[600px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <Image 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=1200" 
              alt="Office Culture" 
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-brand-lime/10 mix-blend-overlay pointer-events-none" />
          </FadeInX>

          <FadeInX x={40} delay={0.1} className="order-1 lg:order-2">
            <h2 className="text-white text-4xl md:text-5xl lg:text-[64px] font-black uppercase tracking-tighter leading-[1.1] mb-6">
              Built in <span className="text-brand-lime">Sydney.</span> <br/>
              Scaling <span className="text-white">Globally.</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed mb-8">
              We started in a small room with a big idea: marketing shouldn't be an expense, it should be an engine. Today, our team operates from the heart of Sydney, managing millions in ad spend and generating compounding returns for clients worldwide. 
              <br/><br/>
              We don't do ping-pong tables and bean bags. We do high-performance workspaces, deep work, and relentless optimization. 
            </p>

            <button className="flex items-center gap-3 text-sm md:text-base font-bold uppercase tracking-widest border border-white/20 px-8 py-4 rounded-full bg-white/5 text-white hover:bg-brand-lime hover:text-black hover:border-brand-lime transition-all duration-300 group">
              Join The Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </FadeInX>

        </div>
      </div>
    </section>
  );
}
