"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeX, Pause, Play } from "lucide-react";

export function VideoSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  // Parallax effect using Framer Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Moves the video container slightly for the parallax feel
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Slight scale effect for when it comes into view
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

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
    <section ref={containerRef} className="relative w-full h-[60vh] md:h-[90vh] py-8 md:py-12 px-4 md:px-8 overflow-hidden flex items-center justify-center bg-brand-bg">
      <motion.div 
        style={{ y, scale }}
        className="relative w-full max-w-[1400px] h-full rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-[#1a1a1c]"
      >
        {/* Placeholder Video */}
        {/* IMPORTANT: Add your video source below! Autoplay must be true and muted must be true for autoplay to work on page load. */}
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          {/* ADD YOUR VIDEO FILE HERE */}
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
      </motion.div>
    </section>
  );
}
