"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ResultsAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const results = [
    {
      category: "Lead Generation Campaigns",
      metric: "+145% increase",
      details: [
        { client: "Acme Corp", platform: "Google Ads", result: "CPA reduced by 40%" },
        { client: "Beta Inc", platform: "LinkedIn Ads", result: "MQL volume up 210%" }
      ]
    },
    {
      category: "Ecommerce Scaling",
      metric: "3.2x ROAS",
      details: [
        { client: "StyleBrand", platform: "Meta Ads", result: "Scaled spend to $50k/day" },
        { client: "TechGear", platform: "TikTok Ads", result: "Acquired 10k new customers" }
      ]
    },
    {
      category: "Organic Search Growth",
      metric: "+85% Traffic",
      details: [
        { client: "SaaS Platform", platform: "SEO", result: "Ranked #1 for 15 core terms" },
        { client: "Local Service", platform: "Local SEO", result: "Tripled inbound calls" }
      ]
    }
  ];

  return (
    <section className="py-24 px-6 relative z-10 border-y border-white/5">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">Proven Results</h2>

        <div className="space-y-4">
          {results.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? "bg-brand-surface border-white/10" : "bg-transparent border-white/5 hover:border-white/10"
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                    <h3 className="text-xl md:text-2xl font-bold">{item.category}</h3>
                    <span className="text-accent font-semibold">{item.metric}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <ChevronDown size={24} className="text-text-secondary" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="bg-brand rounded-xl p-6 border border-white/5">
                          <table className="w-full text-sm md:text-base text-left">
                            <thead>
                              <tr className="text-text-secondary border-b border-white/5">
                                <th className="pb-3 font-medium">Client</th>
                                <th className="pb-3 font-medium">Platform</th>
                                <th className="pb-3 font-medium text-right">Result</th>
                              </tr>
                            </thead>
                            <tbody>
                              {item.details.map((detail, dIdx) => (
                                <tr key={dIdx} className="border-b border-white/5 last:border-0">
                                  <td className="py-4 font-semibold">{detail.client}</td>
                                  <td className="py-4 text-text-secondary">{detail.platform}</td>
                                  <td className="py-4 text-right text-accent font-medium">{detail.result}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
