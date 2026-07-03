"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="bg-white text-black pt-24 pb-32 px-4 rounded-t-[40px] w-full relative z-20">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Top Text Area */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-24">
          <div className="md:w-1/4">
            <span className="text-[14px] text-gray-500 font-medium tracking-tight">
              About Revenue Room
            </span>
          </div>
          <div className="md:w-3/4">
            <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-medium leading-[1.2] tracking-tight">
              At Revenue Room, we believe marketing isn't about selling it's
              about connecting. We're a full-service marketing agency built to
              help brands grow with{" "}
              <span className="text-gray-400">
                purpose and data-driven precision. From crafting compelling
                stories to executing campaigns that convert, we blend strategy
                to turn attention into action.
              </span>
            </h2>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Image 1 (Landscape/Square) */}
          <div className="relative rounded-[24px] overflow-hidden h-[400px] bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
              alt="Team collaborating"
              className="w-full h-full object-cover filter grayscale"
            />
          </div>

          {/* Image 2 (Square) */}
          <div className="relative rounded-[24px] overflow-hidden h-[400px] bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              alt="Strategy meeting"
              className="w-full h-full object-cover filter grayscale"
            />
          </div>

          {/* Text/Action Card */}
          <div className="rounded-[24px] overflow-hidden h-[400px] bg-white flex flex-col justify-center items-start p-8 md:p-12">
            <h3 className="text-[32px] font-bold leading-[1.1] tracking-tight mb-8">
              Our Bold and
              <br />
              Brilliant Thinkers
            </h3>
            <button className="bg-brand-lime text-black px-6 py-3 rounded-full text-[14px] font-bold hover:bg-[#cbf03d] transition flex items-center gap-2">
              Learn More <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
