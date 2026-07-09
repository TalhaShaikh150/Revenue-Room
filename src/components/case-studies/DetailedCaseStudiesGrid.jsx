"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Zap, Target } from "lucide-react";

const detailedCaseStudies = [
  {
    client: "Nova Fitness App",
    logo: "/case1.png",
    industry: "Health & Fitness",
    metrics: [
      { label: "ROAS", value: "4.2x", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "New Users", value: "50k+", icon: <Target className="w-5 h-5" /> },
      { label: "CAC", value: "-45%", icon: <Zap className="w-5 h-5" /> },
    ],
    challenge: "Scaling user acquisition in a highly competitive market while lowering Customer Acquisition Cost (CAC).",
    solution: "Implemented an aggressive multi-channel strategy heavily focused on TikTok Ads and precise lookalike audiences on Meta.",
  },
  {
    client: "Lumina Skincare",
    logo: "/case2.png",
    industry: "E-Commerce",
    metrics: [
      { label: "Revenue", value: "$2.1M", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Conversion", value: "+85%", icon: <Target className="w-5 h-5" /> },
      { label: "LTV", value: "2.5x", icon: <Zap className="w-5 h-5" /> },
    ],
    challenge: "Stagnant online sales despite high organic traffic and a strong social media presence.",
    solution: "Completely overhauled the checkout funnel and introduced aggressive retargeting campaigns leveraging user-generated content.",
  },
  {
    client: "Apex SaaS Platform",
    logo: "/case3.png",
    industry: "B2B Tech",
    metrics: [
      { label: "ARR Growth", value: "300%", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Lead Vol", value: "10x", icon: <Target className="w-5 h-5" /> },
      { label: "CPA", value: "-60%", icon: <Zap className="w-5 h-5" /> },
    ],
    challenge: "High churn rate during free trials and low quality leads from search campaigns.",
    solution: "Re-engineered search intent targeting on Google Ads and built an automated email nurture sequence to increase activation.",
  },
  {
    client: "Global Logistics Inc.",
    logo: "/case5.png",
    industry: "Logistics",
    metrics: [
      { label: "MQLs", value: "5k+", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Pipeline", value: "$15M", icon: <Target className="w-5 h-5" /> },
      { label: "CPL", value: "-35%", icon: <Zap className="w-5 h-5" /> },
    ],
    challenge: "Outdated brand perception and reliance on traditional outbound sales methods.",
    solution: "Launched a highly targeted LinkedIn ABM (Account-Based Marketing) strategy coupled with high-value whitepaper lead magnets.",
  }
];

export function DetailedCaseStudiesGrid() {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section className="relative w-full py-16 md:py-32 px-4 md:px-8 bg-brand-bg">
      <div className="max-w-[1300px] mx-auto w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {detailedCaseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1 * (idx % 2), ease: smoothEase }}
              className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 hover:bg-white/10 transition-colors duration-500 group flex flex-col h-full"
            >
              
              {/* Header: Logo & Info */}
              <div className="flex items-center justify-between mb-10 pb-8 border-b border-white/10">
                <div>
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 overflow-hidden border border-white/5">
                    {/* Fallback to text if image fails to load, but we use the images */}
                    <img src={study.logo} alt={study.client} className="w-full h-full object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-1">{study.client}</h3>
                  <span className="text-brand-lime text-xs font-bold uppercase tracking-widest">{study.industry}</span>
                </div>
                <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-lime hover:text-black hover:border-brand-lime transition-all duration-300 self-start">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {study.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-black/40 border border-white/5 group-hover:border-brand-lime/30 transition-colors duration-500">
                    <div className="text-brand-lime mb-2 opacity-80">{metric.icon}</div>
                    <span className="text-xl md:text-2xl font-black text-white mb-1">{metric.value}</span>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 text-center">{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* Story */}
              <div className="flex-grow flex flex-col gap-6">
                <div>
                  <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">The Challenge</h4>
                  <p className="text-white/80 font-medium leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-brand-lime/70 text-xs font-bold uppercase tracking-widest mb-2">Our Solution</h4>
                  <p className="text-white font-medium leading-relaxed">{study.solution}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
