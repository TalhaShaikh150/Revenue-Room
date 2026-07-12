"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

export function ServiceFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-brand-bg relative border-t border-white/5">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center">
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
             <MessageCircleQuestion className="w-6 h-6 text-brand-lime" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 text-lg max-w-xl">
            Everything you need to know about how this service works and what you can expect.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-[#0a0a0c] border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-brand-lime/30"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                >
                  <span className="text-lg md:text-xl font-bold text-white pr-8 group-hover:text-brand-lime transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-brand-lime border-brand-lime text-black" : "text-white group-hover:bg-brand-lime/10 group-hover:border-brand-lime/30 group-hover:text-brand-lime"}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="p-6 md:p-8 pt-0 text-white/60 text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
