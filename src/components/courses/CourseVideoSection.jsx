"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Pause, Play, Star } from "lucide-react";
import Image from "next/image";
import { CourseTrainingPopup } from "./CourseTrainingPopup";

const reviews = [
  {
    name: "Alex M.",
    role: "E-commerce Founder",
    image: "https://i.pravatar.cc/150?img=11",
    text: "This training completely changed how we approach our ad spend. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah J.",
    role: "Marketing Director",
    image: "https://i.pravatar.cc/150?img=5",
    text: "Incredible value. The bonuses alone are worth their weight in gold.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Agency Owner",
    image: "https://i.pravatar.cc/150?img=12",
    text: "Straight to the point with actionable strategies we implemented the same day.",
    rating: 5,
  }
];

export function CourseVideoSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full px-4 md:px-8 bg-brand-bg flex flex-col items-center">
      
      {/* Title (Optional, keeping it clean) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[1000px] text-center mb-12"
      >
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight mb-4">
          Unlock the secrets to <span className="text-brand-lime">scaling</span> your revenue
        </h1>
        <p className="text-white/60 text-lg md:text-xl font-medium">
          Watch the video below to discover exactly what you'll get in this exclusive training.
        </p>
      </motion.div>

      {/* Video Container */}
      <div ref={containerRef} className="w-full aspect-video max-w-[900px] flex items-center justify-center mb-12">
        <div 
          className="relative w-full h-full rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-[#1a1a1c]"
        >
          {/* Video element */}
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="none"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          >
            <source src="/hero2.mp4" type="video/mp4" />
          </video>

          {/* Overlay to ensure controls are visible if video is bright */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Controls Container */}
          <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 flex items-center gap-3 md:gap-4 z-10">
            <button 
              onClick={togglePlay}
              className="w-12 h-12 md:w-14 md:h-14 bg-black/50 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand-lime hover:text-black hover:border-brand-lime transition-colors duration-300 group"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 md:w-6 md:h-6" />
              ) : (
                <Play className="w-5 h-5 md:w-6 md:h-6 ml-1" />
              )}
            </button>

            <button 
              onClick={toggleMute}
              className="w-12 h-12 md:w-14 md:h-14 bg-black/50 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand-lime hover:text-black hover:border-brand-lime transition-colors duration-300"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 md:w-6 md:h-6" />
              ) : (
                <Volume2 className="w-5 h-5 md:w-6 md:h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <button 
          onClick={() => setIsPopupOpen(true)}
          className="bg-brand-lime text-black font-black uppercase text-xl md:text-3xl px-8 py-5 md:px-12 md:py-6 rounded-2xl hover:bg-[#b0df00] hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(202,255,4,0.3)]"
        >
          Get Free Training + Exclusive Bonuses
        </button>
      </motion.div>

      {/* Reviews / Profiles Section */}
      <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="flex gap-1 mb-4">
               {[...Array(review.rating)].map((_, i) => (
                 <Star key={i} className="w-5 h-5 fill-brand-lime text-brand-lime" />
               ))}
            </div>
            <p className="text-white/80 font-medium italic mb-6">"{review.text}"</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-lime">
                <Image src={review.image} alt={review.name} fill sizes="48px" className="object-cover" />
              </div>
              <div className="text-left">
                <h4 className="text-white font-bold">{review.name}</h4>
                <p className="text-white/50 text-sm">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Popup Modal */}
      <CourseTrainingPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

    </section>
  );
}
