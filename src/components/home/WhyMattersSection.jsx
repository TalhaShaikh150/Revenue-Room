// SERVER COMPONENT — no "use client" needed
import { FadeIn } from "@/components/ui/Motion";
import { Activity, Globe, DollarSign, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Activity,
    title: "Ad platforms don't sleep. Neither do we.",
    desc: "Algorithms shift, costs spike, and leads go cold in hours. A campaign left unattended overnight can burn budget fast. We catch it in real-time.",
  },
  {
    icon: Globe,
    title: "Global clients, global hours.",
    desc: "Working across time zones with international partners? You'll never be stuck waiting for business hours again. Someone is always on.",
  },
  {
    icon: DollarSign,
    title: "Every dollar accounted for.",
    desc: "Round-the-clock monitoring means underperforming ads get paused and budgets get reallocated before money is wasted, not after.",
  },
];

export function WhyMattersSection() {
  return (
    <section className="relative w-full py-12 bg-brand-bg px-0 md:px-8 overflow-hidden">
      {/* Ambient Live Pulse Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(216,252,77,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10 w-full">
        <div className="border-y md:border border-white/10 md:border-x bg-[#0a0a0c] relative overflow-hidden rounded-none lg:rounded-[32px] shadow-2xl">
          {/* Header Row */}
          <div className="border-b border-white/10 p-10 lg:p-16 overflow-hidden">
            <FadeIn>
              <h2 className="text-[clamp(28px,8vw,40px)] md:text-[64px] lg:text-[80px] font-black tracking-tighter leading-[0.95] md:leading-[0.9] max-w-4xl whitespace-nowrap text-white text-center sm:text-start">
                Why <span className="text-accent">24/7</span> matters.
              </h2>
            </FadeIn>
          </div>

          {/* Features Row (3 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-b border-white/10">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.1} className="p-6 md:p-10 group hover:bg-white/[0.02] transition-colors duration-500">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-accent group-hover:border-accent group-hover:text-black text-white/50 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white text-xl md:text-2xl font-bold leading-tight mb-3 md:mb-4 group-hover:text-accent transition-colors duration-300 pr-4">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </FadeIn>
              );
            })}
          </div>

          {/* CTA Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white/[0.01]">
            <div className="lg:col-span-8 p-6 md:p-10 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
              <h2 className="text-white text-2xl sm:text-3xl md:text-[40px] font-black tracking-tight mb-3 md:mb-4 leading-tight">
                Marketing doesn't stop at 5pm.
                <br className="hidden sm:block" /> Neither do we.
              </h2>
              <p className="text-white/60 text-base md:text-lg font-medium max-w-xl">
                Talk to a team that's already awake, already watching, and already working on your results.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 md:p-10 gap-3 md:gap-4 bg-accent/5">
              <Link href="/contact" className="w-full bg-accent text-black font-bold py-4 rounded-none text-base md:text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 group">
                Book Consultation
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/61438365241"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-all text-sm font-bold tracking-wide w-full border border-white/10 py-4 rounded-none group"
              >
                <Phone className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                +61 438 365 241
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
