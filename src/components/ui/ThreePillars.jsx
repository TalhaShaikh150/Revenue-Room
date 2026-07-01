"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

export function ThreePillars() {
  const [activeTab, setActiveTab] = useState("agency");

  const tabs = [
    { id: "agency", label: "Agency" },
    { id: "academy", label: "Academy" },
    { id: "consultancy", label: "Consultancy" },
  ];

  const content = {
    agency: {
      title: "Done-for-you",
      description: "We embed directly into your business to execute high-impact growth campaigns. Perfect for brands that need rapid, hands-off scale.",
      bullets: ["Full-funnel execution", "Dedicated creative & media team", "Performance-based scaling"],
      bestFor: "Established brands ready to scale spend",
      cta: "Work with our team"
    },
    academy: {
      title: "We teach you",
      description: "Equip your in-house team with the exact frameworks and systems we use to generate millions in revenue.",
      bullets: ["Cohort-based training", "Access to our internal SOPs", "Weekly live Q&A sessions"],
      bestFor: "Teams wanting to internalize growth skills",
      cta: "Join the next cohort"
    },
    consultancy: {
      title: "We embed in your business",
      description: "Fractional leadership to guide your internal marketing teams, audit funnels, and solve complex attribution challenges.",
      bullets: ["Fractional CMO services", "Deep-dive funnel audits", "Team hiring & vetting support"],
      bestFor: "Founders needing strategic direction",
      cta: "Book a strategy call"
    }
  };

  return (
    <section className="py-24 px-6 relative z-10 bg-brand-surface border-y border-white/5">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">
          Three ways to work with us
        </h2>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="relative flex items-center bg-brand p-1 rounded-full border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-3 text-sm font-medium rounded-full transition-colors z-10 ${
                  activeTab === tab.id ? "text-brand" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="pillIndicator"
                    className="absolute inset-0 bg-accent rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col md:flex-row gap-12 items-center bg-brand border border-white/5 rounded-3xl p-8 md:p-12"
            >
              <div className="flex-1 space-y-6">
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-wider">
                  Best for: {content[activeTab].bestFor}
                </div>
                <h3 className="text-3xl font-bold">{content[activeTab].title}</h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {content[activeTab].description}
                </p>
                <ul className="space-y-3">
                  {content[activeTab].bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-text-primary">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/3 flex justify-center w-full">
                <Button className="w-full text-lg">{content[activeTab].cta}</Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
