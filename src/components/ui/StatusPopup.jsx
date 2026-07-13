"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, X } from "lucide-react";
import { useEffect } from "react";

export function StatusPopup({ isOpen, status, message, onClose }) {
  // Auto-close after 5 seconds
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[100]"
        >
          <div className="relative flex items-center gap-4 bg-[#111111]/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl p-4 sm:p-5 pr-12 max-w-sm">
            
            {/* Icon */}
            <div className="shrink-0">
              {status === "success" ? (
                <CheckCircle2 className="w-8 h-8 text-brand-lime" />
              ) : (
                <XCircle className="w-8 h-8 text-red-500" />
              )}
            </div>

            {/* Content */}
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base">
                {status === "success" ? "Success!" : "Oops!"}
              </h4>
              <p className="text-white/70 text-xs sm:text-sm mt-0.5 leading-relaxed">
                {message}
              </p>
            </div>

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
