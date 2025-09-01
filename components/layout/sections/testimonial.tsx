"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Metric {
  value: string;
  label: string;
}

interface TableData {
  headers: string[];
  rows: string[][];
}

interface CaseStudyProps {
  brandType: string;
  title: string;
  overview: string;
  metrics?: Metric[];
  tableData?: TableData;
}

const caseStudyList: CaseStudyProps[] = [
  {
    brandType: "Apparel Brand",
    title: "Generated ₹8.3L in 24 Hours Using Meta Ads",
    overview:
      "On June 15th, 2025, we ran a high-performing one-day flash sale for an Indian apparel brand with a simple yet powerful offer: an entire collection priced at just ₹999 per product. The goal was to drive urgency and boost conversions within 24 hours. By launching Meta ad campaigns with broad targeting and mobile-optimized video creatives, we achieved explosive results, proving the power of a strong offer paired with a strategic ad approach.",
    metrics: [
      { value: "8x", label: "Daily Revenue Boost" },
      { value: "11.74x", label: "Overall ROAS" },
      { value: "₹8.3 Lakh", label: "Generated in 24 Hrs" },
      { value: "₹135", label: "Cost Per Purchase" },
    ],
  },
  {
    brandType: "Lingerie Brand",
    title: "Consistent 4.5x ROAS on High Scale for 6 Months",
    overview:
      "Over six months (Jan–July 2025), we maintained a consistently profitable ROAS for a Lingerie & Intimate Wear brand through a data-driven Meta ads strategy. In a category where the break-even ROAS is around 3, we achieved a sustained average of 4.5x. By scaling ad spend to approximately ₹75 lakh, we generated over 15,000 purchases while keeping acquisition costs efficient and predictable, leading to ₹3.3 crore in total revenue and ensuring steady profitability month over month.",
    metrics: [
      { value: "4.5x", label: "Sustained ROAS" },
      { value: "₹3.3 Crore", label: "Total Revenue" },
      { value: "15,000+", label: "Purchases Generated" },
      { value: "₹490", label: "Avg. Cost Per Purchase" },
    ],
  },
  {
    brandType: "Ethnic Wear Brand",
    title: "From Scratch to Scale in Under 18 Months",
    overview:
      "We partnered with this ethnic wear brand in early 2024 at their online launch. By structuring a full-funnel Meta Ads setup, we built a strong foundation, generating over ₹20 lakh in net sales in the first year. In 2025, we doubled down on scaling, driving ₹50 lakh in net sales in just 6.5 months. This journey reflects our expertise in sustainable scaling, transforming a fresh brand into a strong D2C player generating over ₹70 lakh in combined net revenue.",
    tableData: {
      headers: ["Metric", "2024", "2025 (Jan – July)"],
      rows: [
        ["Meta Ad Spend", "₹4.05 Lacs", "₹13.07 Lacs"],
        ["ROAS", "6.42", "4.72"],
        ["Shopify Sales", "₹31.61 Lacs", "₹79.70 Lacs"],
        ["Avg. Order Value", "₹1,579", "₹2,332"],
      ],
    },
  },
  {
    brandType: "Lead Generation",
    title: "High-Quality Leads for FirstCry School Launch",
    overview:
      "When FirstCry, India’s most trusted baby product brand, entered the preschool education space, they launched their Vizag center in 2022. We were tasked with generating high-quality leads for admissions. We launched 5 lead generation campaigns with hyperlocal targeting and creatives tailored for parents. Active for only 2 months each year before the admission cycle, these campaigns generated 653 high-intent Meta leads. CRM data confirmed a 5% lead-to-admission conversion rate, validating our strategy for time-sensitive, local lead generation.",
    metrics: [
      { value: "653", label: "Meta Leads Generated" },
      { value: "5%", label: "Lead to Admission Rate" },
      { value: "₹95.89", label: "Lowest Cost Per Lead" },
      { value: "5.16 Lakh+", label: "People Reached" },
    ],
  },
];

export const CaseStudySection = () => {
  return (
    <section id="case-studies" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        {" "}
        {/* Increased bottom margin */}
        <h2 className="text-sm text-primary uppercase tracking-widest font-semibold mb-2">
          {" "}
          {/* Smaller, uppercase, bold, primary */}
          Case Studies
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
          {" "}
          {/* Larger, bolder, tighter leading */}
          Proven Results, Real Growth
        </h3>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {" "}
          {/* Added descriptive subheading */}
          Explore how we help brands achieve exceptional outcomes through
          strategic digital marketing.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-full lg:max-w-screen-xl mx-auto" // Full width on smaller screens, max width on large
      >
        <CarouselContent className="-ml-4">
          {" "}
          {/* Adjusted margin for consistent spacing */}
          {caseStudyList.map((study) => (
            <CarouselItem
              key={study.title}
              className="pl-4 md:basis-1/2 lg:basis-1/3" // Adjusted padding for consistent spacing
            >
              <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                {" "}
                {/* Added hover effect */}
                <CardHeader className="p-6 pb-4">
                  {" "}
                  {/* Consistent padding */}
                  <CardDescription className="text-sm font-medium text-primary mb-2">
                    {" "}
                    {/* Emphasize brand type */}
                    {study.brandType}
                  </CardDescription>
                  <CardTitle className="text-2xl font-bold leading-tight text-foreground">
                    {" "}
                    {/* Clearer title */}
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow px-6 py-0">
                  {" "}
                  {/* Consistent padding */}
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {" "}
                    {/* Improved readability for overview */}
                    {study.overview}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-4 flex-col items-start gap-6">
                  {" "}
                  {/* Footer for metrics/table */}
                  {study.metrics && (
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full">
                      {" "}
                      {/* Increased gap for metrics */}
                      {study.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="text-3xl font-extrabold text-foreground leading-none">
                            {" "}
                            {/* Larger, bolder metrics */}
                            {metric.value}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  {study.tableData && (
                    <div className="w-full border rounded-md overflow-hidden">
                      {" "}
                      {/* Added border and rounded corners to table container */}
                      <Table className="min-w-full">
                        <TableHeader>
                          <TableRow className="bg-muted/30">
                            {" "}
                            {/* Subtle background for table header */}
                            {study.tableData.headers.map((header) => (
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
                          {study.tableData.rows.map((row, rowIndex) => (
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
                                  {" "}
                                  {/* Emphasize first cell in row */}
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-[-1.5rem] disabled:opacity-50" />{" "}
        {/* Position and disable styling */}
        <CarouselNext className="right-[-1.5rem] disabled:opacity-50" />{" "}
        {/* Position and disable styling */}
      </Carousel>
    </section>
  );
};
