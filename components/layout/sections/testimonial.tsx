"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { CaseStudy, getFeaturedCaseStudies } from "@/lib/case-studies-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const CaseStudyCard = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  const { theme } = useTheme();

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-smooth hover:shadow-smooth-xl border-0 transition-all duration-300 hover:scale-[1.02]">
      <CardHeader>
        <CardTitle>{caseStudy.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-4">
          {caseStudy.overview}
        </p>
      </CardContent>
    </Card>
  );
};

export const CaseStudySection = () => {
  const featuredCases = getFeaturedCaseStudies();

  return (
    <section id="case-studies" className="container py-16 md:py-24 bg-secondary/5">
      <div className="text-center mb-8">
        <h2 className="text-sm text-primary uppercase tracking-widest font-semibold mb-2">
          Case Studies
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
          Proven Results, Real Growth
        </h3>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore how we help brands achieve exceptional outcomes through
          strategic digital marketing.
        </p>
      </div>

      {/* 3-Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* --- COLUMN 1 --- */}
        <div className="flex flex-col gap-6">
          {/* Card 1 */}
          {featuredCases[0] && (
            <Link
              href={`/case-studies/${featuredCases[0].slug}`}
              className="block h-full"
            >
              <CaseStudyCard
                key={featuredCases[0].slug}
                caseStudy={featuredCases[0]}
              />
            </Link>
          )}
          {/* Card 2 */}
          {featuredCases[1] && (
            <Link
              href={`/case-studies/${featuredCases[1].slug}`}
              className="block h-full"
            >
              <CaseStudyCard
                key={featuredCases[1].slug}
                caseStudy={featuredCases[1]}
              />
            </Link>
          )}
        </div>

        {/* --- COLUMN 2 --- */}
        <div className="flex flex-col gap-6">
          {/* Card 3 */}
          {featuredCases[2] && (
            <Link
              href={`/case-studies/${featuredCases[2].slug}`}
              className="block h-full"
            >
              <CaseStudyCard
                key={featuredCases[2].slug}
                caseStudy={featuredCases[2]}
              />
            </Link>
          )}
          {/* Card 4 */}
          {featuredCases[3] && (
            <Link
              href={`/case-studies/${featuredCases[3].slug}`}
              className="block h-full"
            >
              <CaseStudyCard
                key={featuredCases[3].slug}
                caseStudy={featuredCases[3]}
              />
            </Link>
          )}
        </div>

        {/* --- COLUMN 3: TALL IMAGE CARD --- */}
        {/* This card is visible on medium screens and up, and spans the full height of the grid */}
        {featuredCases[3] && (
          <Link
            href={`/case-studies/${featuredCases[3].slug}`}
            className="md:col-span-2 lg:col-span-1 h-full min-h-[300px] lg:min-h-0"
          >
            <Card className="h-full overflow-hidden shadow-smooth hover:shadow-smooth-xl border-0 transition-all duration-300 relative group">
              <Image
                src={"/1.png"}
                alt={featuredCases[3].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Badge variant="secondary" className="uppercase text-xs mb-2">
                  {featuredCases[3].industry}
                </Badge>
                <h3 className="text-2xl font-bold leading-tight">
                  {featuredCases[3].title}
                </h3>
              </div>
            </Card>
          </Link>
        )}
      </div>

      {/* View All CTA */}
      <div className="text-center mt-8">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="font-bold group/arrow"
        >
          <Link href="/case-studies">
            View All Case Studies
            <ArrowRight className="ml-2 size-5 group-hover/arrow:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
