"use client";

import { useState, useEffect, Suspense, useCallback } from "react";
import { useSearchParams } from "next/navigation";

// Master map: service value → { label, plans[] }
const SERVICE_PLANS = {
  general: {
    label: "General Inquiry",
    plans: [],
  },
  seo: {
    label: "SEO & AI Search Advertising",
    plans: [
      { value: "growth", label: "Growth — $1,500/mo" },
      { value: "scale", label: "Scale — $3,500/mo" },
      { value: "enterprise", label: "Enterprise — Custom" },
    ],
  },
  ppc: {
    label: "Paid Social Media Advertising",
    plans: [
      { value: "launch", label: "Launch — $1,200/mo" },
      { value: "scale", label: "Scale — $2,800/mo" },
      { value: "enterprise", label: "Enterprise — Custom" },
    ],
  },
  "social-media": {
    label: "Organic Social Media Management",
    plans: [
      { value: "launch", label: "Launch — $900/mo" },
      { value: "scale", label: "Scale — $2,200/mo" },
      { value: "enterprise", label: "Enterprise — Custom" },
    ],
  },
  "web-design": {
    label: "Web Development & Landing Pages",
    plans: [
      { value: "landing page", label: "Landing Page — $2,500" },
      { value: "business website", label: "Business Website — $6,500" },
      { value: "enterprise", label: "Enterprise — Custom" },
    ],
  },
  "video-editing": {
    label: "Video Editing & Production",
    plans: [
      { value: "starter", label: "Starter — $800/mo" },
      { value: "scale", label: "Scale — $1,800/mo" },
      { value: "enterprise", label: "Enterprise — Custom" },
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

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We have received your inquiry and will be in touch shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "general",
      plan: "",
      message: "",
    });
  }, [formData]);

  const availablePlans = SERVICE_PLANS[formData.service]?.plans ?? [];
  const hasPlans = availablePlans.length > 0;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white/[0.02] p-8 rounded-2xl border border-white/10 backdrop-blur-md"
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

      {/* Plan Selection — only visible when a service with plans is selected */}
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
            <option value="">— Select a plan —</option>
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
        className="w-full bg-brand-lime text-black font-bold py-4 px-8 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-[1.02]"
      >
        Send Inquiry
      </button>
    </form>
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
