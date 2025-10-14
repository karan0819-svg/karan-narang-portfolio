"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CaseStudy, getFeaturedCaseStudies } from "@/lib/case-studies-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const CaseStudyCard = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  const { theme } = useTheme();

  return (
    <div
      className="flex flex-col h-full 
  bg-white dark:bg-slate-800/50 
  border border-slate-200 dark:border-slate-700 
  rounded-lg p-6 
  text-slate-900 dark:text-white 
  transform transition-transform duration-300 
  hover:scale-[1.02] hover:border-blue-500"
    >
      {/* Card Header */}
      <div className="flex-shrink-0 mb-4">
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
          {caseStudy.industry}
        </p>
        <p className="text-sm dark:text-slate-300 text-black mb-2">
          {caseStudy.brandType}
        </p>
        <h3 className="text-2xl font-bold leading-tight dark:text-slate-100 text-black">
          {caseStudy.title}
        </h3>
      </div>

      {/* Card Body */}
      <div className="flex-grow mb-6">
        <p className="text-slate-400 leading-relaxed">{caseStudy.overview}</p>
      </div>

      {/* Card Footer - Conditionally renders metrics or table */}
      <div className="flex-shrink-0 mt-auto">
        {/* Render Metrics if they exist */}
        {caseStudy.metrics && (
          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            {caseStudy.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-3xl font-extrabold dark:text-white text-black leading-none">
                  {metric.value}
                </p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Render Table if it exists */}
        {caseStudy.tableData && (
          <div className="overflow-x-auto border border-slate-700 rounded-md">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-900/70">
                <tr>
                  {caseStudy.tableData.headers.map((header) => (
                    <th
                      key={header}
                      className="py-2 px-3 text-left font-semibold text-slate-300"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {caseStudy.tableData.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-t border-slate-700">
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`py-2 px-3 ${
                          cellIndex === 0
                            ? "font-medium dark:text-slate-200 text-black"
                            : "text-slate-400"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export const CaseStudySection = () => {
  const featuredCases = getFeaturedCaseStudies();

  return (
    <section id="case-studies" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:max-w-screen-xl mx-auto">
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
        </div>

        {/* --- COLUMN 2 --- */}
        <div className="flex flex-col gap-6">
          {/* Card 3 */}
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
          {/* Card 4 */}
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

        {/* --- COLUMN 3: TALL IMAGE CARD --- */}
        {/* This card is visible on medium screens and up, and spans the full height of the grid */}
        {featuredCases[3] && (
          <Link
            href={`/case-studies/${featuredCases[3].slug}`}
            className="md:col-span-2 lg:col-span-1 h-full min-h-[300px] lg:min-h-0"
          >
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 relative group">
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
      <div className="text-center mt-12">
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
