"use client";

import { useState, useEffect, Suspense, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { StatusPopup } from "@/components/ui/StatusPopup";

// Master map: service value → { label, plans[] }
const SERVICE_PLANS = {
  general: {
    label: "General Inquiry",
    plans: [],
  },
  seo: {
    label: "SEO & AI Search Advertising",
    plans: [
      { value: "growth", label: "Growth - $1,500/mo" },
      { value: "scale", label: "Scale - $3,500/mo" },
      { value: "enterprise", label: "Enterprise - Custom" },
    ],
  },
  ppc: {
    label: "Paid Social Media Advertising",
    plans: [
      { value: "launch", label: "Launch - $1,200/mo" },
      { value: "scale", label: "Scale - $2,800/mo" },
      { value: "enterprise", label: "Enterprise - Custom" },
    ],
  },
  "social-media": {
    label: "Organic Social Media Management",
    plans: [
      { value: "launch", label: "Launch - $900/mo" },
      { value: "scale", label: "Scale - $2,200/mo" },
      { value: "enterprise", label: "Enterprise - Custom" },
    ],
  },
  "web-design": {
    label: "Web Development & Landing Pages",
    plans: [
      { value: "landing page", label: "Landing Page - $2,500" },
      { value: "business website", label: "Business Website - $6,500" },
      { value: "enterprise", label: "Enterprise - Custom" },
    ],
  },
  "video-editing": {
    label: "Video Editing & Production",
    plans: [
      { value: "starter", label: "Starter - $800/mo" },
      { value: "scale", label: "Scale - $1,800/mo" },
      { value: "enterprise", label: "Enterprise - Custom" },
    ],
  },
  consulting: {
    label: "Digital Marketing Consulting",
    plans: [],
  },
};

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-colors placeholder:text-white/30";

const labelClass = "block text-sm font-medium text-gray-300 mb-2";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "general";
  const planParam = searchParams.get("plan") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "general",
    plan: "",
    message: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [popupState, setPopupState] = useState({ isOpen: false, status: "success", message: "" });

  // Auto-select service & plan from URL on load
  useEffect(() => {
    const matchedService = SERVICE_PLANS[serviceParam] ? serviceParam : "general";
    const availablePlans = SERVICE_PLANS[matchedService]?.plans ?? [];

    // Find a matching plan (case-insensitive)
    const matchedPlan =
      availablePlans.find((p) => p.value === planParam.toLowerCase())?.value ?? "";

    setFormData((prev) => ({
      ...prev,
      service: matchedService,
      plan: matchedPlan,
    }));
  }, [serviceParam, planParam]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    // When the service changes, reset the plan selection
    if (name === "service") {
      setFormData((prev) => ({ ...prev, service: value, plan: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "contact_page" }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        const errData = await res.json();
        setPopupState({ isOpen: true, status: "error", message: `Error: ${errData.error || "Something went wrong"}` });
      }
    } catch (error) {
      setPopupState({ isOpen: true, status: "error", message: "Network error. Please try again or email us directly." });
    } finally {
      setIsLoading(false);
    }
  }, [formData]);

  const availablePlans = SERVICE_PLANS[formData.service]?.plans ?? [];
  const hasPlans = availablePlans.length > 0;

  return (
    <div className="bg-white/[0.02] p-8 sm:p-10 rounded-3xl border border-white/10 backdrop-blur-md relative overflow-hidden min-h-[500px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center text-center w-full"
          >
            <div className="w-20 h-20 bg-brand-lime/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-brand-lime" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Thank you!</h3>
            <p className="text-white/70 text-lg max-w-md mx-auto leading-relaxed">
              We have successfully received your details. One of our growth experts will review your inquiry and be in touch shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6 w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-brand-lime">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-brand-lime">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="john@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="+61 400 000 000"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className={labelClass}>
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your Company Pty Ltd"
          />
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <label htmlFor="service" className={labelClass}>
          Service Required <span className="text-brand-lime">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className={`${inputClass} [&>option]:bg-[#0b0c0c]`}
        >
          {Object.entries(SERVICE_PLANS).map(([value, { label }]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Plan Selection - only visible when a service with plans is selected */}
      {hasPlans && (
        <div>
          <label htmlFor="plan" className={labelClass}>
            Interested Plan{" "}
            <span className="text-white/40 font-normal text-xs ml-1">(optional)</span>
          </label>
          <select
            id="plan"
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            className={`${inputClass} [&>option]:bg-[#0b0c0c]`}
          >
            <option value="">- Select a plan -</option>
            {availablePlans.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>

          {/* Confirmation badge when a plan is pre-selected via URL */}
          {formData.plan && planParam && (
            <p className="mt-2 text-xs text-brand-lime flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime inline-block" />
              Plan pre-selected from your choice on the service page.
            </p>
          )}
        </div>
      )}

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Project Details <span className="text-brand-lime">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your goals, current challenges, and any other details that would help us prepare for our conversation..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-brand-lime text-black font-bold py-4 px-8 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-brand-lime"
      >
        {isLoading ? "Sending..." : "Send Inquiry"}
      </button>

      <StatusPopup 
        isOpen={popupState.isOpen} 
        status={popupState.status} 
        message={popupState.message} 
        onClose={() => setPopupState(prev => ({ ...prev, isOpen: false }))} 
      />
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

// Wrap in Suspense because useSearchParams can suspend
export function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="h-96 flex items-center justify-center text-white/50">
          Loading form...
        </div>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}
