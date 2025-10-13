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
import { getFeaturedCaseStudies } from "@/lib/case-studies-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:max-w-screen-xl mx-auto">
        {/* First Column - First Case Study */}
        {featuredCases[0] && (
          <Link href={`/case-studies/${featuredCases[0].slug}`} className="block h-full">
            <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 group cursor-pointer">
              <CardHeader className="p-6 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="uppercase text-xs">
                    {featuredCases[0].industry}
                  </Badge>
                </div>
                <CardDescription className="text-sm font-medium text-primary mb-2">
                  {featuredCases[0].brandType}
                </CardDescription>
                <CardTitle className="text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                  {featuredCases[0].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow px-6 py-0">
                <p className="text-base text-muted-foreground leading-relaxed line-clamp-4">
                  {featuredCases[0].overview}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-4 flex-col items-start gap-6">
                {featuredCases[0].metrics && (
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full">
                    {featuredCases[0].metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-3xl font-extrabold text-foreground leading-none">
                          {metric.value}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {featuredCases[0].tableData && (
                  <div className="w-full border rounded-md overflow-hidden">
                    <Table className="min-w-full">
                      <TableHeader>
                        <TableRow className="bg-muted/30">
                          {featuredCases[0].tableData.headers.map((header) => (
                            <TableHead
                              key={header}
                              className="text-foreground font-semibold"
                            >
                              {header}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {featuredCases[0].tableData.rows.map((row, rowIndex) => (
                          <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                              <TableCell
                                key={cellIndex}
                                className={
                                  cellIndex === 0
                                    ? "font-medium text-foreground"
                                    : "text-muted-foreground"
                                }
                              >
                                {cell}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardFooter>
            </Card>
          </Link>
        )}

        {/* First Column - Second Case Study */}
        {featuredCases[1] && (
          <Link href={`/case-studies/${featuredCases[1].slug}`} className="block h-full">
            <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 group cursor-pointer">
              <CardHeader className="p-6 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="uppercase text-xs">
                    {featuredCases[1].industry}
                  </Badge>
                </div>
                <CardDescription className="text-sm font-medium text-primary mb-2">
                  {featuredCases[1].brandType}
                </CardDescription>
                <CardTitle className="text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                  {featuredCases[1].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow px-6 py-0">
                <p className="text-base text-muted-foreground leading-relaxed line-clamp-4">
                  {featuredCases[1].overview}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-4 flex-col items-start gap-6">
                {featuredCases[1].metrics && (
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full">
                    {featuredCases[1].metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-3xl font-extrabold text-foreground leading-none">
                          {metric.value}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {featuredCases[1].tableData && (
                  <div className="w-full border rounded-md overflow-hidden">
                    <Table className="min-w-full">
                      <TableHeader>
                        <TableRow className="bg-muted/30">
                          {featuredCases[1].tableData.headers.map((header) => (
                            <TableHead
                              key={header}
                              className="text-foreground font-semibold"
                            >
                              {header}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {featuredCases[1].tableData.rows.map((row, rowIndex) => (
                          <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                              <TableCell
                                key={cellIndex}
                                className={
                                  cellIndex === 0
                                    ? "font-medium text-foreground"
                                    : "text-muted-foreground"
                                }
                              >
                                {cell}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardFooter>
            </Card>
          </Link>
        )}

        {/* Second Column - Third Case Study */}
        {featuredCases[2] && (
          <Link href={`/case-studies/${featuredCases[2].slug}`} className="block h-full">
            <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 group cursor-pointer">
              <CardHeader className="p-6 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="uppercase text-xs">
                    {featuredCases[2].industry}
                  </Badge>
                </div>
                <CardDescription className="text-sm font-medium text-primary mb-2">
                  {featuredCases[2].brandType}
                </CardDescription>
                <CardTitle className="text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                  {featuredCases[2].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow px-6 py-0">
                <p className="text-base text-muted-foreground leading-relaxed line-clamp-4">
                  {featuredCases[2].overview}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-4 flex-col items-start gap-6">
                {featuredCases[2].metrics && (
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full">
                    {featuredCases[2].metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-3xl font-extrabold text-foreground leading-none">
                          {metric.value}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {featuredCases[2].tableData && (
                  <div className="w-full border rounded-md overflow-hidden">
                    <Table className="min-w-full">
                      <TableHeader>
                        <TableRow className="bg-muted/30">
                          {featuredCases[2].tableData.headers.map((header) => (
                            <TableHead
                              key={header}
                              className="text-foreground font-semibold"
                            >
                              {header}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {featuredCases[2].tableData.rows.map((row, rowIndex) => (
                          <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                              <TableCell
                                key={cellIndex}
                                className={
                                  cellIndex === 0
                                    ? "font-medium text-foreground"
                                    : "text-muted-foreground"
                                }
                              >
                                {cell}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardFooter>
            </Card>
          </Link>
        )}

        {/* Third Column - Full Height Image from Fourth Case Study */}
        {featuredCases[3] && (
          <Link
            href={`/case-studies/${featuredCases[3].slug}`}
            className="hidden lg:block lg:row-span-2"
          >
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 group cursor-pointer relative">
              {featuredCases[3].image ? (
                <div className="relative h-full min-h-[600px]">
                  <Image
                    src={featuredCases[3].image}
                    alt={featuredCases[3].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <Badge variant="secondary" className="uppercase text-xs mb-3">
                      {featuredCases[3].industry}
                    </Badge>
                    <p className="text-sm font-medium text-accent mb-2">
                      {featuredCases[3].brandType}
                    </p>
                    <h4 className="text-3xl font-bold leading-tight mb-4">
                      {featuredCases[3].title}
                    </h4>
                    {featuredCases[3].metrics && (
                      <div className="grid grid-cols-2 gap-4">
                        {featuredCases[3].metrics.slice(0, 2).map((metric) => (
                          <div key={metric.label}>
                            <p className="text-2xl font-extrabold leading-none">
                              {metric.value}
                            </p>
                            <p className="text-sm text-gray-300 mt-1">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full justify-between p-8 bg-gradient-to-br from-primary to-primary/70">
                  <div>
                    <Badge variant="secondary" className="uppercase text-xs mb-3">
                      {featuredCases[3].industry}
                    </Badge>
                    <p className="text-sm font-medium text-accent mb-2">
                      {featuredCases[3].brandType}
                    </p>
                    <h4 className="text-3xl font-bold leading-tight text-white mb-4">
                      {featuredCases[3].title}
                    </h4>
                  </div>
                  {featuredCases[3].metrics && (
                    <div className="grid grid-cols-2 gap-4 text-white">
                      {featuredCases[3].metrics.slice(0, 2).map((metric) => (
                        <div key={metric.label}>
                          <p className="text-2xl font-extrabold leading-none">
                            {metric.value}
                          </p>
                          <p className="text-sm text-gray-200 mt-1">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </Card>
          </Link>
        )}
      </div>

      {/* View All CTA */}
      <div className="text-center mt-12">
        <Button asChild variant="outline" size="lg" className="font-bold group/arrow">
          <Link href="/case-studies">
            View All Case Studies
            <ArrowRight className="ml-2 size-5 group-hover/arrow:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
