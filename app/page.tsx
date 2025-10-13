import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { StatsSection } from "@/components/layout/sections/stats";
import { ServicesSection } from "@/components/layout/sections/services";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { CaseStudySection } from "@/components/layout/sections/testimonial";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karan Narang - Performance Marketing & Meta Ads Specialist",
  description:
    "Trusted Meta Partner driving ₹175 Crore+ in revenue for D2C brands. Expert in Meta Ads, performance marketing, and ROAS-focused scaling strategies.",
  keywords: [
    "Performance Marketing",
    "Meta Ads Specialist",
    "D2C Marketing",
    "E-commerce Growth",
    "Facebook Ads",
    "Instagram Ads",
    "ROAS Optimization",
    "Digital Marketing",
  ],
  openGraph: {
    type: "website",
    url: "https://growwithkarannarang.in",
    title: "Karan Narang - Performance Marketing & Meta Ads Specialist",
    description:
      "Trusted Meta Partner driving ₹175 Crore+ in revenue for D2C brands. Expert in performance marketing and data-driven growth strategies.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Karan Narang - Performance Marketing Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Narang - Performance Marketing & Meta Ads Specialist",
    description:
      "Trusted Meta Partner driving ₹175 Crore+ in revenue for D2C brands through data-driven marketing strategies.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <StatsSection />
      <ServicesSection />
      <CaseStudySection />
      <FooterSection />
    </>
  );
}
