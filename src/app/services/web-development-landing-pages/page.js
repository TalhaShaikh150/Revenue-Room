import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { ServiceHero } from "@/components/services/shared/Hero";
import { ServiceFeatures } from "@/components/services/shared/Features";
import { ServiceProcess } from "@/components/services/shared/Process";
import { ServiceBenefits } from "@/components/services/shared/Benefits";
import { ServiceCTA } from "@/components/services/shared/CTA";
import { ServiceTestimonial } from "@/components/services/shared/Testimonial";
import { ServiceFAQ } from "@/components/services/shared/FAQ";
import { ServicePricing } from "@/components/services/shared/Pricing";

import {
  LayoutDashboard,
  Gauge,
  Code2,
  ShoppingCart,
  ArrowUpRight,
  Smartphone,
} from "lucide-react";

export const metadata = {
  title: "Web Development & Landing Pages | Revenue Room Digital",
  description:
    "High-converting websites and landing pages designed to turn traffic into revenue. Revenue Room Digital builds fast, beautiful, and conversion-optimised web experiences for Australian brands.",
  keywords: [
    "web development agency Australia",
    "landing page design Australia",
    "conversion rate optimisation",
    "Next.js web development",
    "e-commerce development",
    "high converting landing pages",
    "web design agency",
    "Revenue Room Digital",
  ],
  alternates: {
    canonical:
      "https://revenueroomdigital.com.au/services/web-development-landing-pages",
  },
  openGraph: {
    title: "Web Development & Landing Pages | Revenue Room Digital",
    description:
      "High-converting websites and landing pages that turn traffic into revenue.",
    url: "https://revenueroomdigital.com.au/services/web-development-landing-pages",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
  },
};

const FEATURES = [
  {
    title: "Conversion-Focused Landing Pages",
    description:
      "Single-purpose pages engineered to convert. Built with proven direct-response frameworks — strong above-the-fold hooks, social proof, objection handling, and crystal-clear CTAs.",
    icon: <ArrowUpRight className="w-6 h-6" aria-hidden="true" />,
  },
  {
    title: "Full Website Design & Development",
    description:
      "Beautiful, brand-defining websites built on Next.js or WordPress. Fast, SEO-ready, and fully responsive — designed to impress and perform across every device.",
    icon: <LayoutDashboard className="w-6 h-6" aria-hidden="true" />,
  },
  {
    title: "Performance & Core Web Vitals",
    description:
      "A slow website kills conversions. We obsess over load speed, LCP, and Core Web Vitals — delivering sites that score 95+ on PageSpeed to protect your SEO and user experience.",
    icon: <Gauge className="w-6 h-6" aria-hidden="true" />,
  },
  {
    title: "E-commerce Development",
    description:
      "Custom Shopify and WooCommerce stores built to maximise average order value and reduce abandonment. From product pages to checkout flows — every detail is optimised for revenue.",
    icon: <ShoppingCart className="w-6 h-6" aria-hidden="true" />,
  },
  {
    title: "Custom Integrations & Development",
    description:
      "Need something bespoke? We build custom web applications, CRM integrations, API connections, and automation workflows that make your business operate at a higher level.",
    icon: <Code2 className="w-6 h-6" aria-hidden="true" />,
  },
  {
    title: "Mobile-First Design",
    description:
      "Over 70% of your traffic is on mobile. Every project we deliver is built mobile-first with pixel-perfect responsive layouts that look flawless on every screen size.",
    icon: <Smartphone className="w-6 h-6" aria-hidden="true" />,
  },
];

const PROCESS_STEPS = [
  {
    title: "Discovery & Scope",
    description:
      "We start with a structured discovery session to map your goals, audience, brand identity, and technical requirements — then produce a detailed project scope and timeline.",
  },
  {
    title: "Design & Prototype",
    description:
      "Our design team creates high-fidelity Figma mockups for your review. We iterate on design until everything is exactly right before writing a single line of code.",
  },
  {
    title: "Development & QA",
    description:
      "We build your site with clean, scalable code. Every page goes through rigorous cross-browser and cross-device QA testing before launch — zero bugs, guaranteed.",
  },
  {
    title: "Launch & Optimise",
    description:
      "We handle the full launch process — DNS configuration, performance optimisation, analytics setup, and a post-launch CRO review in the first 30 days.",
  },
];

const BENEFITS = [
  {
    title: "Your Website Works While You Sleep",
    description:
      "A high-converting website is your best-performing sales rep — available 24/7, never calls in sick, and scales infinitely. We build digital assets that generate revenue around the clock.",
  },
  {
    title: "Built for SEO from Day One",
    description:
      "Every site we build is technically SEO-optimised out of the box — clean code structure, fast load times, proper schema markup, and a solid foundation for your SEO campaigns.",
  },
  {
    title: "Ownable, Not Rented",
    description:
      "Unlike ad spend that stops the moment you stop paying, a great website is a permanent business asset. We build yours to last and scale with your business for years.",
  },
];

const FAQS = [
  {
    question: "How long does a website project take?",
    answer:
      "A standard 5–8 page business website takes 4–6 weeks from kickoff to launch. A single high-converting landing page can be delivered in as little as 7–10 business days. E-commerce projects typically range from 8–12 weeks depending on complexity.",
  },
  {
    question: "Which platform do you build on?",
    answer:
      "We build primarily on Next.js (for performance and SEO), WordPress (for content-heavy sites), and Shopify (for e-commerce). We recommend the best platform based on your specific needs and will always explain our reasoning.",
  },
  {
    question: "Do you offer ongoing website maintenance?",
    answer:
      "Yes. All projects include 30 days of post-launch support at no charge. After that, we offer optional monthly maintenance retainers covering updates, security, backups, and performance monitoring.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. Website redesigns are one of our most common projects. We conduct a full conversion audit of your existing site to identify exactly what's losing you money before we redesign — not just aesthetics, but performance.",
  },
  {
    question: "Will I be able to edit the website myself?",
    answer:
      "Yes. We build all sites with user-friendly CMS solutions so you can update content, add pages, and manage your blog without touching code. We also provide a handover training session on launch day.",
  },
];

const PRICING_PLANS = [
  {
    name: "Landing Page",
    description: "A single, high-converting page for campaigns or lead generation.",
    price: "$2,500",
    period: "one-time",
    isPopular: false,
    features: [
      "1 Custom Landing Page",
      "Mobile-First, Fully Responsive",
      "Analytics & Pixel Setup",
      "Core Web Vitals Optimised",
      "30-Day Post-Launch Support",
    ],
  },
  {
    name: "Business Website",
    description: "A full website that builds authority and converts visitors.",
    price: "$6,500",
    period: "one-time",
    isPopular: true,
    features: [
      "Up to 8 Custom Pages",
      "Custom Design & Development",
      "CMS Integration (Edit Content Yourself)",
      "SEO-Optimised Structure",
      "Contact Forms & Integrations",
      "30-Day Post-Launch Support",
    ],
  },
  {
    name: "Enterprise",
    description: "Custom web applications and e-commerce at scale.",
    price: "Custom",
    period: "",
    isPopular: false,
    features: [
      "E-commerce / Custom Web App",
      "Custom Integrations & API Development",
      "Advanced Performance Engineering",
      "Multi-Language & Multi-Region Support",
      "Ongoing CRO & A/B Testing",
      "Dedicated Project Manager",
    ],
  },
];

export default function WebDevelopmentLandingPagesPage() {
  return (
    <main className="bg-brand-bg min-h-screen flex flex-col">
      <Navbar />

      <ServiceHero
        subtitle="Web Development & Design"
        title={
          <>
            Websites That <br />
            <span className="text-transparent [-webkit-text-stroke:1px_#ffffff] md:[-webkit-text-stroke:1.5px_#ffffff] opacity-80">
              Actually
            </span>{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_#d8fc4d] md:[-webkit-text-stroke:1.5px_#d8fc4d] drop-shadow-[0_0_15px_rgba(216,252,77,0.3)]">
              Convert.
            </span>
          </>
        }
        description="We design and develop fast, beautiful, and conversion-optimised websites and landing pages that turn your traffic into revenue — built to perform from day one."
        highlights={[
          "High-Converting Landing Pages",
          "Full Website Design & Development",
          "E-commerce & Shopify Stores",
          "Performance & Core Web Vitals",
        ]}
      />

      <ServiceFeatures
        subtitle="Our Capabilities"
        title="Web Experiences Built to Drive Revenue"
        features={FEATURES}
      />

      <ServiceTestimonial
        quote="Revenue Room built our new website and a dedicated landing page for our main offer. Our lead conversion rate went from 2.1% to 7.8% in the first month. The ROI was almost immediate."
        author="Priya Nair"
        role="Head of Growth"
        company="Nexus HR Solutions"
      />

      <ServiceBenefits
        subtitle="The Advantage"
        title="Why your next website should be built by us."
        benefits={BENEFITS}
        imageSrc="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Modern web design and development process"
      />

      <ServiceProcess
        subtitle="The Blueprint"
        title="How we deliver your web project."
        steps={PROCESS_STEPS}
      />

      <ServicePricing plans={PRICING_PLANS} serviceId="web-design" />

      <ServiceFAQ faqs={FAQS} />

      <ServiceCTA
        serviceId="web-design"
        title="Ready to Build Something That Converts?"
        description="Let's design and develop a website that works as hard as you do — generating leads and revenue around the clock."
      />

      <div className="relative z-10 bg-brand-bg flex flex-col pt-16">
        <Footer />
      </div>
    </main>
  );
}
