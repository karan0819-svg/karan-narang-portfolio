import { AboutMeSection } from "@/components/layout/sections/about-me";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { CaseStudySection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Karan Narang - Performance Marketing Portfolio",
  description:
    "A bespoke portfolio to showcase the expertise, case studies, and services of a performance marketing specialist.",
  openGraph: {
    type: "website",
    url: "https://YOUR_LIVE_DOMAIN.com", // Replace with your actual domain
    title: "Karan Narang - Performance Marketing Portfolio",
    description:
      "Explore the case studies and data-driven strategies of Karan Narang, a performance marketing specialist.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Karan Narang - Performance Marketing Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle", // Replace with your Twitter handle
    title: "Karan Narang - Performance Marketing Portfolio",
    description:
      "Explore the case studies and data-driven strategies of Karan Narang, a performance marketing specialist.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg", // Replace with your actual Twitter image
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <CaseStudySection />
      <AboutMeSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
