"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";

export function CourseTrainingPopup({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Simple validation
  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{5,15}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
       newErrors.phone = "Invalid phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async () => {
    if (validateStep2()) {
      setIsSubmitting(true);
      // Simulate API call for now
      setTimeout(() => {
        setIsSubmitting(false);
        alert("Training unlocked! (Backend integration pending)");
        onClose();
        // reset form
        setStep(1);
        setFormData({ name: "", email: "", phone: "" });
      }, 1500);
    }
  };

  const closePopup = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePopup}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-[#2b2b2b] rounded-lg shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-8 flex flex-col items-center">
            {/* Progress Bar Container */}
            <div className="w-full max-w-[80%] h-4 bg-black/40 rounded-full mb-6 overflow-hidden relative border border-white/5">
                <motion.div 
                   className="absolute top-0 left-0 h-full bg-brand-lime"
                   initial={{ width: step === 1 ? "50%" : "100%" }}
                   animate={{ width: step === 1 ? "50%" : "100%" }}
                   transition={{ duration: 0.3 }}
                />
            </div>

            <h2 className="text-white text-3xl md:text-4xl font-black text-center uppercase tracking-tight leading-[1.1] mb-4">
              Get Your Free Training + Exclusive Bonuses Now!
            </h2>
            <p className="text-white/80 text-center text-sm md:text-base mb-8 px-2">
              Just enter your details below to get access to this exclusive free training and bonuses!
            </p>

            {/* Form Area */}
            <div className="w-full relative min-h-[180px]">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-4 w-full"
                  >
                    <div>
                        <input
                        type="text"
                        placeholder="Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-brand-lime ${errors.name ? 'border-2 border-red-500' : 'border border-transparent'}`}
                        />
                        {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                        <input
                        type="email"
                        placeholder="Email *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-brand-lime ${errors.email ? 'border-2 border-red-500' : 'border border-transparent'}`}
                        />
                        {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email}</span>}
                    </div>

                    <button
                      onClick={handleNext}
                      className="w-full bg-brand-lime hover:bg-[#b0df00] text-black font-black uppercase text-xl py-4 rounded transition-colors mt-2"
                    >
                      Next step
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-4 w-full"
                  >
                     <div>
                        {/* Phone input with fake country code dropdown to match design */}
                        <div className={`flex w-full rounded overflow-hidden bg-white ${errors.phone ? 'border-2 border-red-500' : 'border border-transparent'} focus-within:ring-2 focus-within:ring-brand-lime`}>
                            <div className="flex items-center gap-1 bg-gray-100 px-3 py-3 border-r border-gray-200 cursor-pointer">
                                <span>🇵🇰</span>
                                <span className="text-black font-medium text-sm">+92</span>
                                <span className="text-black text-xs ml-1">▼</span>
                            </div>
                            <input
                                type="tel"
                                placeholder="Phone Number *"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-3 text-black focus:outline-none"
                            />
                        </div>
                        {errors.phone && <span className="text-red-400 text-xs mt-1 block">{errors.phone}</span>}
                     </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-brand-lime hover:bg-[#b0df00] text-black rounded transition-colors mt-2 flex flex-col items-center justify-center py-3 relative overflow-hidden"
                    >
                        {isSubmitting ? (
                            <Loader2 className="w-8 h-8 animate-spin" />
                        ) : (
                            <>
                                <span className="font-black uppercase text-2xl md:text-3xl leading-none">Get Access Now!</span>
                                <span className="text-[10px] uppercase font-medium mt-1 tracking-tight opacity-80">Check ya phone as we'll text you the training immediately</span>
                            </>
                        )}
                    </button>
                    
                    <button onClick={() => setStep(1)} className="text-white/50 text-xs hover:text-white mt-1 underline underline-offset-2 transition-colors text-center">
                        Back to previous step
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
