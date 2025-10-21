/* eslint-disable react/no-unescaped-entities */
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
import { caseStudyList } from "@/lib/case-studies-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - Proven Results in Performance Marketing",
  description:
    "Explore our portfolio of successful performance marketing campaigns. See how we've helped D2C and e-commerce brands achieve 3x-6x ROAS and generate ₹15 Cr+ in revenue.",
  openGraph: {
    title: "Case Studies - Proven Results in Performance Marketing",
    description:
      "Explore our portfolio of successful performance marketing campaigns. See how we've helped brands achieve exceptional growth through Meta Ads.",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="container py-16 md:py-24">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <Badge variant="outline" className="mb-4">
          Success Stories
        </Badge>
        <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6">
          Proven Results, Real Growth
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore how we help brands achieve exceptional outcomes through
          strategic digital marketing and data-driven campaigns.
        </p>
      </section>

      {/* Case Studies Grid */}
      <section className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {caseStudyList.map((study) => (
          <Card
            key={study.slug}
            className="flex flex-col h-full overflow-hidden shadow-smooth hover:shadow-smooth-xl border-0 transition-all duration-300 hover:scale-[1.02] group"
          >
            <CardHeader className="p-6 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  variant="secondary"
                  className="uppercase text-xs font-semibold"
                >
                  {study.industry}
                </Badge>
              </div>
              <CardDescription className="text-sm font-medium text-primary mb-2">
                {study.brandType}
              </CardDescription>
              <CardTitle className="text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                {study.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-grow px-6 py-0">
              <p className="text-base text-muted-foreground leading-relaxed line-clamp-4">
                {study.overview}
              </p>
            </CardContent>

            <CardFooter className="p-6 pt-4 flex-col items-start gap-6">
              {study.metrics && (
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full">
                  {study.metrics.slice(0, 4).map((metric) => (
                    <div key={metric.label}>
                      <p className="text-2xl md:text-3xl font-extrabold text-foreground leading-none">
                        {metric.value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {study.tableData && (
                <div className="w-full">
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>
                      <strong>Meta Ad Spend:</strong>{" "}
                      {study.tableData.rows[0][1]} →{" "}
                      {study.tableData.rows[0][2]}
                    </p>
                    <p>
                      <strong>ROAS:</strong> {study.tableData.rows[1][1]} →{" "}
                      {study.tableData.rows[1][2]}
                    </p>
                  </div>
                </div>
              )}

              <Button asChild variant="outline" className="w-full group/arrow">
                <Link href={`/case-studies/${study.slug}`}>
                  View Full Case Study
                  <ArrowRight className="ml-2 size-4 group-hover/arrow:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center bg-gradient-to-br from-primary/8 via-secondary/8 to-accent/8 shadow-smooth-lg rounded-2xl p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Want Results Like These?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss how we can create a customized growth strategy for your
          brand and achieve similar outcomes.
        </p>
        <Button asChild size="lg" className="font-bold text-white group/arrow">
          <Link href="/book-a-call">
            Book a Strategy Call
            <ArrowRight className="ml-2 size-5 group-hover/arrow:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
