/* eslint-disable react/no-unescaped-entities */
import {
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
  caseStudyList,
} from "@/lib/case-studies-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all case studies
export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} - Case Study`,
    description: caseStudy.overview.substring(0, 160),
    openGraph: {
      title: `${caseStudy.title} - Case Study`,
      description: caseStudy.overview.substring(0, 160),
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  // Get related case studies (other studies from same industry)
  const relatedStudies = caseStudyList
    .filter(
      (study) =>
        study.slug !== caseStudy.slug && study.industry === caseStudy.industry
    )
    .slice(0, 2);

  return (
    <div className="container py-16 md:py-24">
      {/* Back Button */}
      <Link
        href="/case-studies"
        className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6 group"
      >
        <ArrowLeft className="mr-2 size-4 group-hover:-translate-x-1 transition-transform" />
        Back to All Case Studies
      </Link>

      {/* Hero Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Badge
            variant="secondary"
            className="uppercase text-xs font-semibold"
          >
            {caseStudy.industry}
          </Badge>
          <Badge variant="outline" className="text-xs font-medium">
            {caseStudy.brandType}
          </Badge>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
          {caseStudy.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed">
          {caseStudy.overview}
        </p>
      </section>

      {/* Key Metrics Section */}
      {caseStudy.metrics && (
        <section className="mb-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.metrics.map((metric) => (
              <Card key={metric.label} className="text-center p-6 shadow-smooth hover:shadow-smooth-lg border-0 transition-all duration-300">
                <CardContent className="p-0">
                  <p className="text-4xl md:text-5xl font-extrabold text-primary leading-none mb-2">
                    {metric.value}
                  </p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {metric.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Challenge, Strategy, Results Sections */}
      <div className="grid lg:grid-cols-3 gap-6 mb-12">
        {caseStudy.challenge && (
          <Card className="shadow-smooth hover:shadow-smooth-lg border-0 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">The Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudy.challenge}
              </p>
            </CardContent>
          </Card>
        )}

        {caseStudy.strategy && (
          <Card className="shadow-smooth hover:shadow-smooth-lg border-0 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Our Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudy.strategy}
              </p>
            </CardContent>
          </Card>
        )}

        {caseStudy.results && (
          <Card className="shadow-smooth hover:shadow-smooth-lg border-0 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">The Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudy.results}
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Table Data Section */}
      {caseStudy.tableData && (
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Performance Breakdown</CardTitle>
              <CardDescription>
                Detailed metrics across campaign periods
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/30">
                      {caseStudy.tableData.headers.map((header) => (
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
                    {caseStudy.tableData.rows.map((row, rowIndex) => (
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
            </CardContent>
          </Card>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/8 via-secondary/8 to-accent/8 shadow-smooth-lg rounded-2xl p-8 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Want Similar Results for Your Brand?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss how we can create a customized growth strategy that
          delivers measurable results for your business.
        </p>
        <Button asChild size="lg" className="font-bold text-white group/arrow">
          <Link href="/book-a-call">
            Schedule Your Strategy Call
            <ArrowRight className="ml-2 size-5 group-hover/arrow:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            More {caseStudy.industry} Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedStudies.map((study) => (
              <Card
                key={study.slug}
                className="shadow-smooth hover:shadow-smooth-lg border-0 transition-all duration-300 hover:scale-[1.02] group"
              >
                <CardHeader>
                  <CardDescription className="text-sm font-medium text-primary mb-2">
                    {study.brandType}
                  </CardDescription>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {study.overview}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="group/arrow"
                  >
                    <Link href={`/case-studies/${study.slug}`}>
                      View Case Study
                      <ArrowRight className="ml-2 size-4 group-hover/arrow:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
