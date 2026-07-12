// SERVER COMPONENT — no "use client" needed
import { ArrowRight } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/Motion";

const offerings = [
  {
    num: "01",
    tag: "We do it for you",
    title: "Agency.",
    desc: "An elite, end-to-end growth engine. We completely take over your strategy, paid media, and creative pipelines to scale your revenue.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    num: "02",
    tag: "We teach you",
    title: "Courses.",
    desc: "Get the exact frameworks and SOPs we use in our agency. Build, train, and manage your own internal marketing team.",
  },
  {
    num: "03",
    tag: "Implant us",
    title: "Advisory.",
    desc: "Fractional C-suite leadership. We implant our top minds into your business to audit systems, restructure teams, and provide high-level direction.",
  },
];

export function OfferingSection() {
  return (
    <section className="bg-[#050505] text-white py-20 px-4 md:px-8 relative z-20">
      <div className="max-w-[1300px] mx-auto w-full">
        {/* Intro Header */}
        <div className="max-w-3xl mb-12 md:mb-24 lg:mb-32">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-2 h-2 bg-brand-lime" />
            <span className="text-white/50 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em]">
              Engagement Models
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black tracking-tighter leading-[0.9] uppercase">
            Three Paths. <br />
            <span className="text-brand-lime">One Result.</span>
          </h2>
        </div>

        {/* 3 Columns */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {offerings.map((item, index) => (
            <FadeInItem key={index}>
              <div className="relative p-6 md:p-8 lg:p-12 flex flex-col group bg-[#0e0e10] border border-white/5 rounded-[24px] lg:rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                {/* Prominent SVG Glowing Curve Animation */}
                <div className="absolute bottom-[-24px] left-0 w-full h-[120px] md:h-[150px] pointer-events-none overflow-hidden rounded-b-[24px] lg:rounded-b-[32px]">
                  <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id={`card-glow-${index}`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="rgba(216,252,77,0)" />
                        <stop offset="30%" stopColor="rgba(216,252,77,0.3)" />
                        <stop offset="65%" stopColor="#d8fc4d" />
                        <stop offset="100%" stopColor="#ffffff" />
                      </linearGradient>
                    </defs>
                    {/* Static neon curve — hover reveals it via opacity transition */}
                    <path
                      d="M 0,80 C 100,100 200,40 300,70"
                      fill="none"
                      stroke={`url(#card-glow-${index})`}
                      strokeWidth="8"
                      strokeLinecap="round"
                      vectorEffect="nonScalingStroke"
                      className="blur-[10px] opacity-0 group-hover:opacity-60 transition-opacity duration-700"
                    />
                    <path
                      d="M 0,80 C 100,100 200,40 300,70"
                      fill="none"
                      stroke={`url(#card-glow-${index})`}
                      strokeWidth="4"
                      strokeLinecap="round"
                      vectorEffect="nonScalingStroke"
                      className="blur-[4px] opacity-0 group-hover:opacity-80 transition-opacity duration-700"
                    />
                    <path
                      d="M 0,80 C 100,100 200,40 300,70"
                      fill="none"
                      stroke={`url(#card-glow-${index})`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      vectorEffect="nonScalingStroke"
                      className="opacity-20 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  </svg>
                </div>

                {/* Card Header */}
                <div className="relative z-10 flex items-center justify-between mb-8 lg:mb-16">
                  <span className="text-brand-lime font-mono text-xs md:text-sm tracking-widest">{item.num}</span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/70 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] group-hover:border-brand-lime/30 group-hover:text-brand-lime transition-colors duration-500">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-3xl md:text-[40px] lg:text-[48px] font-black leading-none tracking-tighter mb-4 lg:mb-6 uppercase group-hover:text-brand-lime transition-colors duration-500">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-white/60 text-sm md:text-[15px] leading-relaxed mb-8 lg:mb-12 flex-1 group-hover:text-white/90 transition-colors duration-500">
                  {item.desc}
                </p>

                {/* Button */}
                <button className="relative z-10 flex items-center gap-2 md:gap-3 text-white text-[11px] md:text-[12px] font-bold uppercase tracking-widest w-max mt-auto bg-white/5 border border-white/10 px-5 py-3 md:px-6 md:py-3.5 rounded-full group-hover:bg-brand-lime group-hover:text-black group-hover:border-brand-lime transition-all duration-300">
                  Get Started <span className="hidden sm:inline">Now</span>
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
