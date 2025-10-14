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
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32 max-w-full">
        <div className="flex lg:justify-self-start ">
          <Badge
            variant="outline"
            className="text-sm mb-2 py-3 px-4 uppercase font-semibold tracking-wider rounded-md"
          >
            Clicks to Conversions
          </Badge>
        </div>
        <div className="flex flex-col lg:!flex-row items-center lg:items-start justify-between text-center lg:text-left gap-8">
          <div className=" sm:max-w-[560px]">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold leading-tight max-w-[585px]">
              Scaling D2C Ecommerce Brands to{" \n"}
              <br />
              <span className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                New Heights
              </span>
            </h1>
          </div>

          <div className="lg:w-[35%] md:w-[50%] flex flex-col gap-4 ">
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a premium e-commerce agency and{" "}
              <strong className="text-foreground">Trusted Meta Partner</strong>,
              driving over{" "}
              <strong className="text-foreground">₹175 Crore+</strong> in
              revenue for brands. Data-driven strategies that turn ad spend into
              measurable growth.
            </p>
            <div className="flex gap-4 self-center lg:self-start">
              <Button
                asChild
                className="font-bold group/arrow text-white text-sm md:text-base lg:text-lg px-4 py-2 md:px-6 md:py-3"
              >
                <Link href="/book-a-call">
                  Book a Call
                  <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="font-bold text-sm md:text-base lg:text-lg px-4 py-2 md:px-6 md:py-3"
              >
                <Link href="/case-studies">Case Studies</Link>
              </Button>
            </div>
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
