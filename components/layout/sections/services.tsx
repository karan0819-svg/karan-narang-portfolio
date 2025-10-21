import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import Image from "next/image";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
  image: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "BrainCircuit",
    title: "Data-Driven Strategy",
    description:
      "Every campaign is built on a foundation of data, from audience insights to market trends, ensuring your budget is invested for maximum impact.",
    image:
      "https://cdn.prod.website-files.com/673ecf6717cdad8aa771d297/67456e9d3c5e5401826c5ccf_retention%20marketing.jpg",
  },
  {
    icon: "TrendingUp",
    title: "ROAS-Focused Scaling",
    description:
      "Growth is about scaling profitably. We meticulously monitor Return on Ad Spend (ROAS) to scale your campaigns aggressively without sacrificing efficiency.",
    image:
      "https://cdn.prod.website-files.com/673ecf6717cdad8aa771d297/67456e9d3c5e5401826c5ccf_retention%20marketing.jpg",
  },
  {
    icon: "Waypoints",
    title: "Full-Funnel Mastery",
    description:
      "From building brand awareness to driving final conversions and retargeting, we manage the entire customer journey to ensure no opportunity is missed.",
    image:
      "https://cdn.prod.website-files.com/673ecf6717cdad8aa771d297/67456e9d3c5e5401826c5ccf_retention%20marketing.jpg",
  },
  {
    icon: "WandSparkles",
    title: "High-Impact Creatives",
    description:
      "Your ads need to stop the scroll. We focus on developing compelling, mobile-first creatives that resonate with your audience and drive action.",
    image:
      "https://cdn.prod.website-files.com/673ecf6717cdad8aa771d297/67456e9d3c5e5401826c5ccf_retention%20marketing.jpg",
  },
  {
    icon: "Cog",
    title: "Advanced Technical Setup",
    description:
      "We ensure flawless tracking with expert implementation of Meta Pixel, Conversion APIs, and catalog ads for a robust advertising ecosystem.",
    image:
      "https://cdn.prod.website-files.com/673ecf6717cdad8aa771d297/67456e9d3c5e5401826c5ccf_retention%20marketing.jpg",
  },
  {
    icon: "Handshake",
    title: "A True Growth Partner",
    description:
      "We work as an extension of your team, providing transparent communication and a genuine commitment to helping your business achieve its goals.",
    image:
      "https://cdn.prod.website-files.com/673ecf6717cdad8aa771d297/67456e9d3c5e5401826c5ccf_retention%20marketing.jpg",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-16 md:py-24">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider uppercase font-semibold">
        Our Services
      </h2>

      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-extrabold mb-4">
        Your Strategic Growth Partner
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We combine data-driven strategies with creative excellence to turn ad
        spend into measurable revenue and sustainable growth for your brand.
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {featureList.map(({ icon, title, image }) => (
          <Card
            key={title}
            className="bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <CardHeader className="flex flex-row items-center gap-4 p-0 mb-6">
              <div className="bg-slate-900 dark:bg-slate-950 p-3 rounded-lg">
                <Icon
                  name={icon as keyof typeof icons}
                  size={28}
                  className="text-white"
                />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {title}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0 flex-grow flex items-center justify-center">
              <img
                src={image}
                alt={`${title} illustration`}
                width={500}
                height={300}
                className="rounded-lg object-contain w-full h-auto"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
