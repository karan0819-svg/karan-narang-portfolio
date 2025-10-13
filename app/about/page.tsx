/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Karan Narang - Performance Marketing Specialist",
  description:
    "Learn about Karan Narang, a performance marketing specialist with 6+ years of experience driving ₹15 Cr+ in revenue for D2C and e-commerce brands using Meta Ads.",
  openGraph: {
    title: "About Karan Narang - Performance Marketing Specialist",
    description:
      "Learn about Karan Narang, a performance marketing specialist with 6+ years of experience driving ₹15 Cr+ in revenue for D2C and e-commerce brands.",
  },
};

// A simple component to render each statistic
const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="text-4xl font-extrabold text-primary leading-none">{value}</p>
    <p className="mt-1 text-sm text-muted-foreground uppercase tracking-wider">
      {label}
    </p>
  </div>
);

export default function AboutPage() {
  return (
    <div className="container py-24 sm:py-32">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4">
          Meet Your Growth Partner
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A performance marketing specialist dedicated to scaling D2C and
          e-commerce brands through data-driven strategies and proven results.
        </p>
      </section>

      {/* Main Content */}
      <section className="grid lg:grid-cols-5 gap-12 items-center mb-24">
        {/* Image Column */}
        <div className="lg:col-span-2">
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Karan Narang, Meta Ads Specialist"
            width={500}
            height={600}
            className="rounded-lg shadow-lg object-cover w-full h-auto aspect-[4/5] grayscale transition-all duration-300 hover:grayscale-0"
          />
        </div>

        {/* Text Content Column */}
        <div className="lg:col-span-3">
          <h2 className="text-lg text-primary font-semibold tracking-wider uppercase mb-2">
            About Me
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Karan Narang
          </h3>
          <p className="text-xl font-medium text-muted-foreground mt-2">
            Performance Marketing & Meta Ads Specialist
          </p>

          <div className="mt-6 space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              I help D2C, e-commerce, and service-based brands grow their
              revenue while keeping a sharp focus on profitable returns (ROAS).
            </p>
            <p>
              Over the last few years, I've driven over ₹15 Cr+ in revenue for
              online brands using Meta Ads and consistently delivered 3x - 6x
              ROAS through data-driven funnel strategies. I've partnered with
              25+ businesses across industries like Fashion, Skincare, Health,
              and more.
            </p>
            <p>
              I don't just launch ads; I engineer full-funnel campaigns that
              attract the right audience, convert traffic into paying customers,
              and turn new buyers into loyal ones. Whether you're looking to
              scale your brand, fix underperforming campaigns, or audit your
              funnel, I'm here to help you scale smart and profitably.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="mt-8 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StatCard value="15 Cr+" label="Revenue Generated" />
            <StatCard value="9 Cr+" label="Ad Spend Managed" />
            <StatCard value="28+" label="D2C Brands Scaled" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
          My Approach to Performance Marketing
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Data-Driven Strategy:</strong>{" "}
            Every campaign is built on a foundation of data, from audience
            insights to market trends, ensuring your budget is invested for
            maximum impact.
          </p>
          <p>
            <strong className="text-foreground">ROAS-Focused Scaling:</strong>{" "}
            Growth is about scaling profitably. I meticulously monitor Return on
            Ad Spend (ROAS) to scale your campaigns aggressively without
            sacrificing efficiency.
          </p>
          <p>
            <strong className="text-foreground">Full-Funnel Mastery:</strong>{" "}
            From building brand awareness to driving final conversions and
            retargeting, I manage the entire customer journey to ensure no
            opportunity is missed.
          </p>
        </div>
      </section>

      {/* Why Work Together */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Why Work Together?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Relying only on SEO and organic tactics can take years to build a
          brand's momentum. This is the era of performance marketing: targeted
          campaigns with instant analytics that accelerate growth and strengthen
          your brand's market presence. Combining paid and organic strategies is
          the fastest route to lasting success.
        </p>
        <blockquote className="border-l-4 border-primary pl-4 italic text-xl text-foreground">
          "The internet isn't just for scrolling—it's for building something
          incredible."
        </blockquote>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-card border border-secondary rounded-2xl p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Let's Grow Your Brand Together
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          If you're looking to partner with a specialist who genuinely cares
          about your business, let's connect and discuss how we can accelerate
          your growth.
        </p>
        <Button asChild size="lg" className="font-bold text-white group/arrow">
          <Link href="/book-a-call">
            Schedule a Free Consultation
            <ArrowRight className="ml-2 size-5 group-hover/arrow:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
