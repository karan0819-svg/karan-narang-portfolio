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
    icon: "Target",
    title: "Performance Marketing (Meta and Google Ads)",
    description:
      "Data-driven campaigns on Meta and Google Ads platforms designed to maximize ROAS and drive measurable growth for your business.",
    image: "https://i.postimg.cc/XqBZKmyz/banner-2.png",
  },
  {
    icon: "Sparkles",
    title: "Creative Strategy",
    description:
      "High-impact, scroll-stopping creatives that resonate with your audience and drive conversions across all digital platforms.",
    image: "https://i.postimg.cc/JhKBRb8V/banner-1.png",
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
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <CardHeader className="flex flex-row items-center gap-4 p-0 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Icon
                  name={icon as keyof typeof icons}
                  color="hsl(var(--primary))"
                  size={28}
                  className="text-primary"
                />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">
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
