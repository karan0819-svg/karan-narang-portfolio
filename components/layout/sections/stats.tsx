/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Package, Award } from "lucide-react";

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: StatProps[] = [
  {
    icon: <TrendingUp className="size-8 md:size-10" />,
    value: "40CR+",
    label: "Spend on Ads",
  },
  {
    icon: <DollarSign className="size-8 md:size-10" />,
    value: "175CR+",
    label: "Revenue Created",
  },
  {
    icon: <Package className="size-8 md:size-10" />,
    value: "15+",
    label: "Ecommerce Niches",
  },
  {
    icon: <Award className="size-8 md:size-10" />,
    value: "5YR+",
    label: "Years Experience",
  },
];

export const StatsSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          We're Your Outsourced CMO
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Support Your Revenue Growth Better Than Anyone Else.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="p-8 text-center bg-card hover:bg-accent/5 transition-colors border-2 hover:border-primary/50"
          >
            <div className="flex justify-center mb-4 text-primary">
              {stat.icon}
            </div>
            <p className="text-4xl md:text-5xl font-extrabold text-foreground mb-2">
              {stat.value}
            </p>
            <p className="text-sm md:text-base text-muted-foreground font-medium">
              {stat.label}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};
