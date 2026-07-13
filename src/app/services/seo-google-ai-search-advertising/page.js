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
  LineChart,
  MousePointerClick,
  Bot,
  Target,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "SEO, Google & AI Search Advertising | Revenue Room Digital",
  description:
    "Drive more revenue with data-driven SEO, Google Ads, and AI-powered search advertising. Revenue Room Digital helps Australian businesses dominate search results and convert clicks into customers.",
  keywords: [
    "SEO agency Australia",
    "Google Ads management",
    "AI search advertising",
    "search engine optimisation",
    "Google search ads",
    "paid search Australia",
    "SEM agency",
    "Revenue Room Digital",
  ],
  alternates: {
    canonical:
      "https://revenueroomdigital.com.au/services/seo-google-ai-search-advertising",
  },
  openGraph: {
    title: "SEO, Google & AI Search Advertising | Revenue Room Digital",
    description:
      "Drive more revenue with data-driven SEO, Google Ads, and AI-powered search advertising.",
    url: "https://revenueroomdigital.com.au/services/seo-google-ai-search-advertising",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
  },
};

const FEATURES = [
  {
    title: "Technical & Content SEO",
    description:
      "We rebuild your organic foundation so Google naturally prioritises your site. From site speed to high-intent content clusters, we drive traffic that converts.",
    icon: <LineChart className="w-6 h-6" aria-hidden="true" />,
  },
  {
    title: "Google Ads (PPC)",
    description:
      "Laser-targeted campaigns on Search, Display, and YouTube. We cut wasted spend and focus entirely on cost-per-acquisition (CPA) and ROI.",
    icon: <MousePointerClick className="w-6 h-6" aria-hidden="true" />,
  },
  {
    title: "AI Search Placements",
    description:
      "Get ahead of the curve. We optimise your brand for generative AI search engines (like ChatGPT and Google's AI Overviews) to capture future-ready demand.",
    icon: <Bot className="w-6 h-6" aria-hidden="true" />,
  },
];

const PROCESS_STEPS = [
  {
    title: "Deep Dive Audit",
    description:
      "We analyse your current search visibility, backlink profile, and ad account structure to find immediate revenue leaks and growth opportunities.",
  },
  {
    title: "Strategy & Architecture",
    description:
      "We map out high-intent keywords and structure your ad campaigns and landing pages to match exact user intent.",
  },
  {
    title: "Execution & Scaling",
    description:
      "Our 24/7 team launches the campaigns, fixes technical SEO issues, and begins publishing authoritative, conversion-focused content.",
  },
  {
    title: "Continuous Optimisation",
    description:
      "Search algorithms never sleep, and neither do we. We constantly refine bids, A/B test ad copy, and build powerful backlinks.",
  },
];

const BENEFITS = [
  {
    title: "Dominate the Entire Search Page",
    description:
      "Why choose between organic and paid? We align SEO and Google Ads so you capture maximum real estate for your most profitable keywords.",
  },
  {
    title: "Zero Wasted Spend",
    description:
      "We audit your search terms daily, negative-matching irrelevant clicks so your budget only goes towards users ready to buy.",
  },
  {
    title: "Future-Proofed for AI",
    description:
      "As search evolves into conversational AI, we ensure your brand is cited as the definitive answer, keeping you steps ahead of competitors.",
  },
];

const FAQS = [
  {
    question: "How long does it take to see SEO results?",
    answer: "While paid ads can generate traffic within 24 hours, SEO is a mid-to-long-term strategy. Typically, our clients begin to see noticeable upward momentum in 3 to 4 months, with compound growth accelerating from month 6 onwards. We focus on 'quick wins' in the first 30 days by fixing technical errors."
  },
  {
    question: "Do I need both SEO and Google Ads?",
    answer: "Using both strategies simultaneously is the fastest way to scale. Google Ads secures immediate revenue while SEO builds your long-term organic foundation. Once your SEO rankings solidify, you can choose to reduce ad spend or double down for total market dominance."
  },
  {
    question: "What is AI Search Advertising?",
    answer: "With search engines integrating AI (like Google's AI Overviews), user behavior is changing. We optimize your content to be cited by these AI engines, ensuring you capture demand from users searching via natural language and conversational queries."
  },
  {
    question: "Are there long-term contracts?",
    answer: "We believe in earning your business every month. Our engagements typically start with a 3-month commitment to allow time for implementation and data gathering, followed by a rolling monthly agreement."
  }
];

const PRICING_PLANS = [
  {
    name: "BASIC",
    description: "Basic SEO for businesses looking to attract and convert new customers for 1 key service",
    price: "$500",
    period: "/week",
    setupFee: "+$1,000 Setup",
    disclaimer: "All Prices excluding GST",
    isPopular: false,
    features: [
      "Month to month",
      "Website & Backlink Audit",
      "Keyword Research & Strategy",
      "On-Page Optimisation",
      "Link Building",
      "Google Analytic & Search Console Setup with Detailed Tracking",
      "Schema Implementation",
      "Detailed Monthly Reporting",
      "Content Delivered Monthly",
      "Guidance On Additional Copywriting"
    ]
  },
  {
    name: "GROWTH",
    description: "Intermediate SEO for businesses looking to increase their online conversion",
    price: "$800",
    period: "/week",
    setupFee: "+$1,600 Setup",
    disclaimer: "All Prices excluding GST",
    isPopular: false,
    features: [
      "Month to month",
      "Website & Backlink Audit",
      "Keyword Research & Strategy",
      "On-Page Optimisation",
      "Link Building",
      "Google Analytic & Search Console Setup with Detailed Tracking",
      "Schema Implementation",
      "Detailed Monthly Reporting",
      "Content Delivered Monthly",
      "Guidance On Additional Copywriting",
      "Google Business Profile Setup & Optimisation",
      "Basic Website & Speed Optimisation"
    ]
  },
  {
    name: "ACCELERATE",
    description: "Advanced SEO. Turning your SEO efforts into results",
    price: "$1500",
    period: "/week",
    setupFee: "+$2000 Setup",
    disclaimer: "All Prices excluding GST",
    isPopular: true,
    features: [
      "Month to month",
      "Website & Backlink Audit",
      "Keyword Research & Strategy",
      "On-Page Optimisation",
      "Link Building",
      "Google Analytic & Search Console Setup with Detailed Tracking",
      "Schema Implementation",
      "Detailed Monthly Reporting",
      "Content Delivered Monthly",
      "Guidance On Additional Copywriting",
      "Google Business Profile Setup & Optimisation",
      "Competitor Opportunity Analysis",
      "Advanced Website & Speed Optimisation"
    ]
  }
];

export default function SeoGoogleAiSearchPage() {
  return (
    <main className="bg-brand-bg min-h-screen flex flex-col">
      <Navbar />

      <ServiceHero
        subtitle="Search Marketing"
        title={
          <>
            Dominate Search. <br />
            <span className="text-transparent [-webkit-text-stroke:1px_#ffffff] md:[-webkit-text-stroke:1.5px_#ffffff] opacity-80">
              Capture
            </span>{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_#d8fc4d] md:[-webkit-text-stroke:1.5px_#d8fc4d] drop-shadow-[0_0_15px_rgba(216,252,77,0.3)]">
              Demand.
            </span>
          </>
        }
        description="Turn high-intent searches into revenue. We combine technical SEO, precision Google Ads, and next-gen AI search strategies to ensure your brand shows up exactly when your customers are ready to buy."
        highlights={[
          "Technical & Content SEO",
          "Google Search Ads (PPC)",
          "AI Search Overviews (SGE)",
          "Data-Driven Conversion"
        ]}
      />


      <ServiceFeatures
        subtitle="Our Arsenal"
        title="Full-Stack Search Supremacy"
        features={FEATURES}
      />

      <ServiceTestimonial 
        quote="Revenue Room Digital completely transformed our search visibility. Within 6 months, our organic traffic tripled, and our Google Ads CPA dropped by 40%. They are a true growth partner."
        author="Marcus Vance"
        role="Chief Marketing Officer"
        company="Vanguard Tech Solutions"
        avatarSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=256"
      />

      <ServiceBenefits
        subtitle="The Advantage"
        title="Why our search campaigns win."
        benefits={BENEFITS}
        imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Data analytics and search marketing dashboards"
      />
      
      <ServiceProcess
        subtitle="The Blueprint"
        title="How we scale your search revenue."
        steps={PROCESS_STEPS}
      />

      <ServicePricing plans={PRICING_PLANS} serviceId="seo" />

      <ServiceFAQ faqs={FAQS} />

      <ServiceCTA 
        serviceId="seo" 
        title="Ready to Dominate Search Results?"
        description="Let's build a data-driven search strategy that captures high-intent traffic and turns clicks into revenue."
      />

      {/* Wrapping in relative z-10 so it stacks properly above the white background of ServiceProcess */}
      <div className="relative z-10 bg-brand-bg flex flex-col pt-16">
        <Footer />
      </div>
    </main>
  );
}
