/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

// A simple component to render each statistic
const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="text-4xl font-extrabold text-primary leading-none">{value}</p>
    <p className="mt-1 text-sm text-muted-foreground uppercase tracking-wider">
      {label}
    </p>
  </div>
);

export const AboutMeSection = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        {/* Image Column */}
        <div className="lg:col-span-2">
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Vraj Choksi, Meta Ads Specialist"
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
            Vraj Choksi
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
              Over the last few years, I’ve driven over ₹15 Cr+ in revenue for
              online brands using Meta Ads and consistently delivered 3x - 6x
              ROAS through data-driven funnel strategies. I've partnered with
              25+ businesses across industries like Fashion, Skincare, Health,
              and more.
            </p>
            <p>
              I don’t just launch ads; I engineer full-funnel campaigns that
              attract the right audience, convert traffic into paying customers,
              and turn new buyers into loyal ones. Whether you're looking to
              scale your brand, fix underperforming campaigns, or audit your
              funnel, I’m here to help you scale smart and profitably.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="mt-8 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StatCard value="15 Cr+" label="Revenue Generated" />
            <StatCard value="9 Cr+" label="Ad Spend Managed" />
            <StatCard value="28+" label="D2C Brands Scaled" />
          </div>
        </div>
      </div>
    </section>
  );
};
