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
  BarChart2,
  Target,
  Users,
  TrendingUp,
  PlayCircle,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Paid Social Media Advertising | Revenue Room Digital",
  description:
    "Turn social feeds into revenue machines. Revenue Room Digital runs high-converting paid social campaigns across Meta, TikTok, LinkedIn and more — built to scale your brand profitably.",
  keywords: [
    "paid social media advertising Australia",
    "Facebook Ads agency",
    "Instagram Ads management",
    "TikTok advertising agency",
    "LinkedIn Ads Australia",
    "social media ad campaigns",
    "paid social agency",
    "Revenue Room Digital",
  ],
  alternates: {
    canonical:
      "https://revenueroomdigital.com.au/services/paid-social-media-advertising",
  },
  openGraph: {
    title: "Paid Social Media Advertising | Revenue Room Digital",
    description:
      "Turn social feeds into revenue machines with high-converting paid social campaigns across Meta, TikTok, and LinkedIn.",
    url: "https://revenueroomdigital.com.au/services/paid-social-media-advertising",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
  },
};


const FEATURES = [
  {
    title: "Meta (Facebook & Instagram) Ads",
    description:
      "We build full-funnel Meta campaigns — from broad awareness to retargeting warm audiences. Every dollar is tracked against real revenue outcomes, not vanity metrics.",
    icon: <BarChart2 className="w-6 h-6" aria-hidden="true" />,
  },
  {
    title: "TikTok Advertising",
    description:
      "Short-form video ads that stop the scroll. We craft native-feeling creatives and pair them with precision targeting to generate explosive reach and measurable conversions.",
    icon: <PlayCircle className="w-6 h-6" aria-hidden="true" />,
  },
  {
    title: "LinkedIn B2B Campaigns",
    description:
      "Reach decision-makers at scale. Our LinkedIn campaigns target by industry, seniority, and company size to drive qualified pipeline for high-ticket B2B offers.",
    icon: <Users className="w-6 h-6" aria-hidden="true" />,
  },
  {
    title: "Audience & Retargeting Strategy",
    description:
      "We build sophisticated audience stacks — from lookalikes to behavioural cohorts — ensuring your ads reach the right people at the right stage of the buying journey.",
    icon: <Target className="w-6 h-6" aria-hidden="true" />,
  },
  {
    title: "Creative Testing & Iteration",
    description:
      "Creative is the #1 lever in paid social. We run structured A/B tests on hooks, formats, and CTAs to find your highest-performing assets and scale them aggressively.",
    icon: <Layers className="w-6 h-6" aria-hidden="true" />,
  },
  {
    title: "Performance Reporting & Scaling",
    description:
      "Full-funnel attribution dashboards so you always know exactly which campaigns are driving revenue. We scale winners fast and cut losers even faster.",
    icon: <TrendingUp className="w-6 h-6" aria-hidden="true" />,
  },
];

const PROCESS_STEPS = [
  {
    title: "Audience & Competitor Research",
    description:
      "We map your ideal customer profile, analyse competitor ad libraries, and identify the audiences most likely to convert into paying customers for your business.",
  },
  {
    title: "Creative Strategy & Production",
    description:
      "Great ads start with great creative. We develop a content framework built around your brand voice — scripts, hooks, formats, and visuals proven to stop the scroll.",
  },
  {
    title: "Campaign Build & Launch",
    description:
      "We architect your full campaign structure across the right platforms, configure pixel tracking, set up conversion events, and launch with precision.",
  },
  {
    title: "Optimise, Test & Scale",
    description:
      "With live data flowing in, we continuously optimise bids, refresh creatives, and scale your top-performing ad sets to aggressively grow your return on ad spend.",
  },
];

const BENEFITS = [
  {
    title: "Revenue-First Reporting",
    description:
      "We measure success in revenue and ROAS, not likes or impressions. Every decision we make is tied back to your bottom line.",
  },
  {
    title: "Platform-Native Creative",
    description:
      "Ads that feel native to each platform perform dramatically better. We craft platform-specific creatives for Meta, TikTok, and LinkedIn — not one-size-fits-all content.",
  },
  {
    title: "Full Funnel Coverage",
    description:
      "From cold audiences seeing your brand for the first time to hot retargeting of cart abandoners — we engineer every stage of your social funnel.",
  },
];

const FAQS = [
  {
    question: "Which platforms do you run paid social on?",
    answer:
      "We primarily manage campaigns on Meta (Facebook & Instagram), TikTok, and LinkedIn. Depending on your audience and objectives, we can also extend to Pinterest or YouTube. Our initial audit will determine where your customers are most active and where your budget will work hardest.",
  },
  {
    question: "What is a realistic ad budget to get started?",
    answer:
      "We recommend a minimum monthly ad spend of $3,000–$5,000 to give the algorithms enough data to optimise and deliver meaningful results. We work alongside this with our management fee. For e-commerce brands looking to scale aggressively, budgets of $10,000+/month are where results become truly transformational.",
  },
  {
    question: "Do you create the ad creative, or do I need to supply it?",
    answer:
      "Both options are available. On our Scale and Enterprise plans, creative strategy and production is included — we handle scripts, design, and video editing. On our Growth plan, we provide a detailed creative brief for you to produce, and we handle all the strategy, targeting, and management.",
  },
  {
    question: "How quickly will I see results from paid social?",
    answer:
      "Unlike SEO, paid social can generate results within the first week. However, we typically see the strongest performance emerge after 4–6 weeks as the algorithm gathers data and optimises your campaigns. The first 30 days are a critical learning phase.",
  },
  {
    question: "Are there long-term contracts?",
    answer:
      "We believe in earning your business every month. Our engagements start with a 3-month commitment to allow for proper campaign learning and optimisation, followed by a flexible rolling monthly agreement.",
  },
];

const PRICING_PLANS = [
  {
    name: "Launch",
    description: "For brands ready to test and validate their paid social strategy.",
    price: "$1,200",
    period: "/ month",
    isPopular: false,
    features: [
      "1 Platform (Meta or TikTok)",
      "Ad Strategy & Audience Setup",
      "Up to $5k Monthly Ad Spend",
      "Monthly Performance Report",
      "Creative Brief Provided",
    ],
  },
  {
    name: "Scale",
    description: "For growth-stage brands ready to dominate their social feeds.",
    price: "$2,800",
    period: "/ month",
    isPopular: true,
    features: [
      "Up to 2 Platforms (Meta + TikTok or LinkedIn)",
      "Full Funnel Campaign Architecture",
      "Up to $25k Monthly Ad Spend",
      "Creative Strategy & Production (3 ads/mo)",
      "Retargeting & Lookalike Audiences",
      "Bi-Weekly Strategy Calls",
    ],
  },
  {
    name: "Enterprise",
    description: "Custom, omni-channel social advertising at scale.",
    price: "Custom",
    period: "",
    isPopular: false,
    features: [
      "All Platforms (Meta, TikTok, LinkedIn)",
      "Unlimited Ad Spend Management",
      "Weekly Creative Production & Testing",
      "Custom Attribution Reporting Dashboard",
      "Dedicated Account Director",
      "Slack Channel Access",
    ],
  },
];

export default function PaidSocialMediaAdvertisingPage() {
  return (
    <main className="bg-brand-bg min-h-screen flex flex-col">
      <Navbar />

      <ServiceHero
        subtitle="Paid Social Advertising"
        title={
          <>
            Stop the Scroll. <br />
            <span className="text-transparent [-webkit-text-stroke:1px_#ffffff] md:[-webkit-text-stroke:1.5px_#ffffff] opacity-80">
              Start the
            </span>{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_#d8fc4d] md:[-webkit-text-stroke:1.5px_#d8fc4d] drop-shadow-[0_0_15px_rgba(216,252,77,0.3)]">
              Revenue.
            </span>
          </>
        }
        description="We run high-converting paid social campaigns across Meta, TikTok, and LinkedIn that transform your ad budget into predictable, scalable revenue. No fluff — just ROI."
        highlights={[
          "Meta (Facebook & Instagram) Ads",
          "TikTok Advertising",
          "LinkedIn B2B Campaigns",
          "Creative Strategy & Production",
        ]}
      />


      <ServiceFeatures
        subtitle="Our Arsenal"
        title="Full-Funnel Social Ad Dominance"
        features={FEATURES}
      />

      <ServiceTestimonial
        quote="Our ROAS went from 1.8x to 9.4x in just four months. Revenue Room Digital completely rebuilt our Meta strategy from the ground up — the creative testing process alone was worth the investment."
        author="Marcus Webb"
        role="Founder & CEO"
        company="Elevate Supplements Co."
      />

      <ServiceBenefits
        subtitle="The Advantage"
        title="Why our social campaigns convert."
        benefits={BENEFITS}
        imageSrc="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Social media advertising dashboards and performance analytics"
      />

      <ServiceProcess
        subtitle="The Blueprint"
        title="How we scale your social revenue."
        steps={PROCESS_STEPS}
      />

      <ServicePricing plans={PRICING_PLANS} serviceId="ppc" />

      <ServiceFAQ faqs={FAQS} />

      <ServiceCTA
        serviceId="ppc"
        title="Ready to Scale Your Social Revenue?"
        description="Let's build a paid social strategy that turns your audience into customers — and your customers into repeat buyers."
      />

      <div className="relative z-10 bg-brand-bg flex flex-col pt-16">
        <Footer />
      </div>
    </main>
  );
}
