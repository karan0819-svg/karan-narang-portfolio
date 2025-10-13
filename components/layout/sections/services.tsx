import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "BrainCircuit",
    title: "Data-Driven Strategy",
    description:
      "Every campaign is built on a foundation of data, from audience insights to market trends, ensuring your budget is invested for maximum impact.",
  },
  {
    icon: "TrendingUp",
    title: "ROAS-Focused Scaling",
    description:
      "Growth is about scaling profitably. We meticulously monitor Return on Ad Spend (ROAS) to scale your campaigns aggressively without sacrificing efficiency.",
  },
  {
    icon: "Waypoints",
    title: "Full-Funnel Mastery",
    description:
      "From building brand awareness to driving final conversions and retargeting, we manage the entire customer journey to ensure no opportunity is missed.",
  },
  {
    icon: "WandSparkles",
    title: "High-Impact Creatives",
    description:
      "Your ads need to stop the scroll. We focus on developing compelling, mobile-first creatives that resonate with your audience and drive action.",
  },
  {
    icon: "Cog",
    title: "Advanced Technical Setup",
    description:
      "We ensure flawless tracking with expert implementation of Meta Pixel, Conversion APIs, and catalog ads for a robust advertising ecosystem.",
  },
  {
    icon: "Handshake",
    title: "A True Growth Partner",
    description:
      "We work as an extension of your team, providing transparent communication and a genuine commitment to helping your business achieve its goals.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider uppercase font-semibold">
        Our Services
      </h2>

      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-extrabold mb-4">
        Your Strategic Growth Partner
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-12">
        We combine data-driven strategies with creative excellence to turn ad
        spend into measurable revenue and sustainable growth for your brand.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none hover:shadow-lg transition-shadow">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle className="text-center">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
