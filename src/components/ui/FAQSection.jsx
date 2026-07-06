"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What makes your agency different?",
    answer: "We don't do 'set and forget' retainers. We monitor campaigns 24/7, catching wasted spend in real-time, and treating your revenue like our own. Our goals are completely aligned with your growth."
  },
  {
    question: "How fast can we expect to see results?",
    answer: "Because we optimize and adjust bids daily—not weekly—most of our clients see a significant improvement in ROAS and lead quality within the first 14 to 30 days of partnering with us."
  },
  {
    question: "Do you guarantee results?",
    answer: "Yes. Our 24-hour guarantee means if an underperforming ad slips past our team for more than 24 hours without action, we cover the wasted spend ourselves. No fine print."
  },
  {
    question: "What platforms do you manage?",
    answer: "We specialize in scaling businesses through Google Ads, Meta Ads (Facebook/Instagram), and TikTok Ads, ensuring your brand captures high-intent demand wherever it lives."
  },
  {
    question: "How do we get started?",
    answer: "Click 'Book your free consultation' anywhere on this page. We'll run a deep audit of your current ad accounts, find the hidden leaks, and map out a custom, no-BS strategy for scaling."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-brand-bg relative z-10">
      <div className="max-w-[800px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-brand-lime text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
              Got Questions?
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter"
          >
            Frequently Asked <br/>
            <span className="text-brand-lime">Questions</span>
          </motion.h2>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-[#121214] border ${isOpen ? 'border-brand-lime/50 shadow-[0_0_30px_rgba(216,252,77,0.1)]' : 'border-white/5'} rounded-2xl overflow-hidden transition-all duration-300`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                >
                  <span className={`text-lg md:text-xl font-bold pr-4 transition-colors duration-300 ${isOpen ? 'text-brand-lime' : 'text-white group-hover:text-brand-lime'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-brand-lime text-black border-brand-lime scale-110' : 'bg-white/5 border-white/10 text-white/50 group-hover:text-brand-lime group-hover:border-brand-lime/30'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                        <div className="w-full h-px bg-white/10 mb-6"></div>
                        <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
