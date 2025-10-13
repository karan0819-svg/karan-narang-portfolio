/* eslint-disable react/no-unescaped-entities */
"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge
            variant="outline"
            className="text-sm py-2 uppercase font-semibold tracking-wider"
          >
            Clicks to Conversions
          </Badge>

          <div className="max-w-screen-lg mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Scaling D2C Ecommerce Brands to{" "}
              <span className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                New Heights
              </span>
            </h1>
          </div>

          <p className="max-w-screen-md mx-auto text-xl text-muted-foreground leading-relaxed">
            We're a premium e-commerce agency and{" "}
            <strong className="text-foreground">Trusted Meta Partner</strong>,
            driving over{" "}
            <strong className="text-foreground">₹175 Crore+</strong> in revenue
            for brands. Data-driven strategies that turn ad spend into
            measurable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="font-bold group/arrow text-white"
            >
              <Link href="/book-a-call">
                Book a Call
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="font-bold">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={theme === "light" ? "/hero.png" : "/1.png"}
            alt="Performance Marketing Dashboard - Meta Ads & Analytics"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
