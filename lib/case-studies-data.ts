export interface Metric {
  value: string;
  label: string;
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface CaseStudy {
  slug: string;
  brandType: string;
  brandName?: string;
  title: string;
  overview: string;
  challenge?: string;
  strategy?: string;
  results?: string;
  metrics?: Metric[];
  tableData?: TableData;
  image?: string;
  industry: string;
}

export const caseStudyList: CaseStudy[] = [
  {
    slug: "apparel-brand-8-3l-in-24-hours",
    brandType: "Apparel Brand",
    industry: "Fashion",
    title: "Generated ₹8.3L in 24 Hours Using Meta Ads",
    overview:
      "On June 15th, 2025, we ran a high-performing one-day flash sale for an Indian apparel brand with a simple yet powerful offer: an entire collection priced at just ₹999 per product. The goal was to drive urgency and boost conversions within 24 hours. By launching Meta ad campaigns with broad targeting and mobile-optimized video creatives, we achieved explosive results, proving the power of a strong offer paired with a strategic ad approach.",
    challenge:
      "The brand wanted to clear inventory while maintaining profitability and creating a sense of urgency that would drive immediate purchases within a 24-hour window.",
    strategy:
      "We launched Meta ad campaigns with broad targeting to maximize reach, created mobile-optimized video creatives showcasing the collection, and implemented a countdown timer strategy to emphasize the limited-time nature of the offer. The campaigns were optimized for purchases with aggressive bidding.",
    results:
      "The campaign generated ₹8.3 lakh in revenue in just 24 hours, achieving an 11.74x ROAS and an average cost per purchase of just ₹135. This represented an 8x boost compared to the brand's typical daily revenue.",
    metrics: [
      { value: "8x", label: "Daily Revenue Boost" },
      { value: "11.74x", label: "Overall ROAS" },
      { value: "₹8.3 Lakh", label: "Generated in 24 Hrs" },
      { value: "₹135", label: "Cost Per Purchase" },
    ],
    image: "/case-studies/apparel-flash-sale.jpg",
  },
  {
    slug: "lingerie-brand-sustained-roas",
    brandType: "Lingerie Brand",
    industry: "Fashion",
    title: "Consistent 4.5x ROAS on High Scale for 6 Months",
    overview:
      "Over six months (Jan–July 2025), we maintained a consistently profitable ROAS for a Lingerie & Intimate Wear brand through a data-driven Meta ads strategy. In a category where the break-even ROAS is around 3, we achieved a sustained average of 4.5x. By scaling ad spend to approximately ₹75 lakh, we generated over 15,000 purchases while keeping acquisition costs efficient and predictable, leading to ₹3.3 crore in total revenue and ensuring steady profitability month over month.",
    challenge:
      "The intimate wear category has higher acquisition costs and lower margins. Maintaining profitability while scaling required precise audience targeting and creative optimization to stay well above the 3x break-even ROAS.",
    strategy:
      "We implemented a full-funnel approach with separate campaigns for prospecting, retargeting, and retention. Dynamic product ads were combined with lifestyle creatives, while continuous A/B testing ensured creative fatigue was minimized. Budget allocation was optimized daily based on performance data.",
    results:
      "Sustained 4.5x ROAS over 6 months while scaling to ₹75 lakh in ad spend, generating ₹3.3 crore in revenue with 15,000+ purchases at an average cost per purchase of ₹490.",
    metrics: [
      { value: "4.5x", label: "Sustained ROAS" },
      { value: "₹3.3 Crore", label: "Total Revenue" },
      { value: "15,000+", label: "Purchases Generated" },
      { value: "₹490", label: "Avg. Cost Per Purchase" },
    ],
    image: "/case-studies/lingerie-sustained-growth.jpg",
  },
  {
    slug: "ethnic-wear-brand-scratch-to-scale",
    brandType: "Ethnic Wear Brand",
    industry: "Fashion",
    title: "From Scratch to Scale in Under 18 Months",
    overview:
      "We partnered with this ethnic wear brand in early 2024 at their online launch. By structuring a full-funnel Meta Ads setup, we built a strong foundation, generating over ₹20 lakh in net sales in the first year. In 2025, we doubled down on scaling, driving ₹50 lakh in net sales in just 6.5 months. This journey reflects our expertise in sustainable scaling, transforming a fresh brand into a strong D2C player generating over ₹70 lakh in combined net revenue.",
    challenge:
      "Launching a new brand online with zero brand awareness and limited budget. The goal was to establish market presence while maintaining profitable unit economics from day one.",
    strategy:
      "Started with a conservative budget focusing on testing audiences and creatives in 2024. Once we identified winning combinations, we aggressively scaled in 2025 with increased ad spend, catalog ads, and lookalike audiences while maintaining ROAS above 4.5x.",
    results:
      "Generated ₹70+ lakh in combined revenue across 18 months, growing from ₹20 lakh (2024) to ₹50 lakh (Jan-July 2025). Average order value increased from ₹1,579 to ₹2,332, demonstrating brand strength and customer trust.",
    tableData: {
      headers: ["Metric", "2024", "2025 (Jan – July)"],
      rows: [
        ["Meta Ad Spend", "₹4.05 Lacs", "₹13.07 Lacs"],
        ["ROAS", "6.42", "4.72"],
        ["Shopify Sales", "₹31.61 Lacs", "₹79.70 Lacs"],
        ["Avg. Order Value", "₹1,579", "₹2,332"],
      ],
    },
    image: "/case-studies/ethnic-wear-growth.jpg",
  },
  {
    slug: "firstcry-school-lead-generation",
    brandType: "Lead Generation",
    industry: "Education",
    title: "High-Quality Leads for FirstCry School Launch",
    overview:
      "When FirstCry, India's most trusted baby product brand, entered the preschool education space, they launched their Vizag center in 2022. We were tasked with generating high-quality leads for admissions. We launched 5 lead generation campaigns with hyperlocal targeting and creatives tailored for parents. Active for only 2 months each year before the admission cycle, these campaigns generated 653 high-intent Meta leads. CRM data confirmed a 5% lead-to-admission conversion rate, validating our strategy for time-sensitive, local lead generation.",
    challenge:
      "Generate high-quality, geographically targeted leads for a premium preschool in a competitive market, with a limited campaign window aligned with the admission cycle.",
    strategy:
      "Implemented hyperlocal targeting within a 5km radius of the Vizag center, created parent-focused ad creatives highlighting safety, curriculum, and FirstCry's brand trust. Used lead forms with qualifying questions to ensure lead quality. Campaigns ran intensively for 2 months before admission deadlines.",
    results:
      "Generated 653 high-quality Meta leads with a 5% lead-to-admission conversion rate (33 admissions), reaching over 5.16 lakh people. Achieved a cost per lead as low as ₹95.89, making it highly cost-effective for premium education lead generation.",
    metrics: [
      { value: "653", label: "Meta Leads Generated" },
      { value: "5%", label: "Lead to Admission Rate" },
      { value: "₹95.89", label: "Lowest Cost Per Lead" },
      { value: "5.16 Lakh+", label: "People Reached" },
    ],
    image: "/case-studies/firstcry-school.jpg",
  },
];

// Helper function to get case study by slug
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudyList.find((study) => study.slug === slug);
}

// Helper function to get all slugs (for static generation)
export function getAllCaseStudySlugs(): string[] {
  return caseStudyList.map((study) => study.slug);
}

// Helper function to get featured case studies (first 4)
export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudyList.slice(0, 4);
}
