"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";

export function AboutSection() {
  return (
    <section className="py-32 px-6 relative z-10 bg-brand-light text-brand">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
              We are not an <br/>
              <span className="italic font-light">ordinary</span> agency.
            </h2>
            
            <div className="relative">
              <p className="text-lg md:text-xl font-medium leading-relaxed max-w-lg pb-12" style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)"
              }}>
                We built this company because we were tired of generic agencies delivering generic results. Our team is composed of ex-founders, elite media buyers, and award-winning creatives who understand that your brand needs to be treated like an asset, not an experiment.
              </p>
              
              <div className="absolute bottom-0 left-0 w-full flex justify-center pb-2">
                <Button variant="ghost" className="text-brand hover:bg-black/5 font-bold">
                  Read our full story &darr;
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-black/5 rounded-2xl h-48 w-full bg-[url('https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale mix-blend-multiply" />
              <div className="bg-black/5 rounded-2xl p-6 h-40 flex flex-col justify-center text-center">
                <div className="text-4xl font-bold mb-1">50+</div>
                <div className="text-sm font-semibold uppercase tracking-wider opacity-60">Team<br/>Members</div>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-black/5 rounded-2xl p-6 h-40 flex flex-col justify-center text-center">
                <div className="text-4xl font-bold mb-1">2018</div>
                <div className="text-sm font-semibold uppercase tracking-wider opacity-60">Year<br/>Founded</div>
              </div>
              <div className="bg-black/5 rounded-2xl h-48 w-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale mix-blend-multiply" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
