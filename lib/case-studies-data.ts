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
      "On June 15th, 2025, I ran a high-performing one-day flash sale campaign for an Indian apparel brand. The offer was simple yet powerful an entire collection priced at just ₹999 per product. The goal was to drive urgency and boost conversions within 24 hours.",
    challenge:
      "The brand typically generates around ₹50 lakh in monthly revenue, averaging ₹1.6 lakh per day. But this exclusive offer, paired with the right Meta ads strategy, helped us boost daily revenue by over 8 times a remarkable lift for the business. The average ticket size of their products is usually around ₹2,200, so the ₹999 offer created strong perceived value.​",
    strategy:
      "To make this happen, I launched Meta ad campaigns using a mix of broad and interest-based targeting, supported by mobile-optimized video creatives. Campaigns were optimized for website purchases, with CBO (Campaign Budget Optimization) enabled to let the algorithm push budget to top-performing ad sets. One of the campaigns alone delivered a 27.5x ROAS, showcasing the power of scaling the right creative with the right audience.",
    results:
      "By the end of the day, we had spent approximately ₹65K and generated ₹8.3 lakh in Shopify sales with over 512 orders. Out of these, 485 purchases came directly through Meta ads, while the remaining were driven by retention channels like repeat customers and returning traffic. The campaign maintained an average cost per purchase of ₹135.37, and the overall ROAS across campaigns stood at 11.74x. This campaign proved that with a strong offer, strategic targeting, and high-performing creatives, Meta ads can drive explosive results  even within a single day.​​",
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
      "Over the past 9 months (Jan–September 2025), I’ve been working with a Lingerie & Intimate Wear brand  where I’ve been able to consistently maintain a strong and profitable ROAS through a data-driven Meta ads strategy. In a category where the average break-even ROAS is around 3, we achieved a sustained average ROAS of 4.8x, highlighting the impact of structured campaign execution and ongoing optimization.",
    challenge:
      "The intimate wear category has higher acquisition costs and lower margins. Maintaining profitability while scaling required precise audience targeting and creative optimization to stay well above the 3x break-even ROAS.",
    strategy:
      "During this period, we scaled ad spend to approximately ₹1.3 crores and generated over 25,514 purchases with through Meta campaigns. The strategy combined broad targeting, retargeting funnels, and seasonal pushes, all backed by optimized creatives tailored to customer intent. Even at scale, we maintained an average cost per purchase of just ₹490,where average order value is 2000, keeping acquisition costs efficient and predictable.​",
    results:
      "These campaigns led to ₹6.57 crore in total revenue, while ensuring steady profitability month over month. What makes this performance stand out is not just the numbers  but the sustained efficiency over time, in a category that’s both highly competitive and sensitive in nature. This journey proves that with the right blend of targeting, creative direction, and iterative testing, you can achieve long-term, profitable growth  not just short-term spikes.​",
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
      "I started working with this ethnic wear brand in early 2024 when they had just launched their online store . We structured a full-funnel Meta Ads setup ,installed pixel and conversion APIs, and ran cold-to-hot audience campaigns focused on catalog ads and creative storytelling.",
    challenge:
      "By the end of 2024, we had spent just ₹4.05 lakh on Meta Ads and generated 1,670 purchases at an impressive average ROAS of 6.42.. Gross sales on Shopify touched ₹31.61 lakh, with net sales of ₹20.51 lakh after accounting for returns and discounts. A total of 1,936 orders were placed and 1,003 were successfully fulfilled. This marked a successful foundation year with strong profitability and learnings.",
    strategy:
      "Started with a conservative budget focusing on testing audiences and creatives in 2024. Once we identified winning combinations, we aggressively scaled in 2025 with increased ad spend, catalog ads, and lookalike audiences while maintaining ROAS above 4.5x.",
    results:
      "In 2025, we doubled down on scale. From January to mid-Oct alone, we spent ₹25.72 lakh and drove 5,829 purchases. Despite the broader targeting, we maintained a solid ROAS of 5.00, The brand hit ₹1.61 Crore in gross sales and crossed ₹1.10 Crore in Net sales in just 9 months. Orders placed grew to 5,829, with 4,715 fulfilled, showing improved delivery reliability and repeat customer interest. This journey reflects not just setup success but our expertise in sustainable scaling. We transformed a fresh brand into a strong D2C player in under 21 months, generating over ₹1.10 Crore in combined net revenue, backed by a well-tested and profitable Meta Ads ecosystem.",
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
      "When FirstCry, India’s most trusted baby product brand, entered the preschool education space, they launched their Vizag center in 2022. I was brought in to lead Meta Ads performance marketing with a focused goal ,  generate high-quality leads and build strong visibility for admissions in a city where the preschool offering was still new.​",
    challenge:
      "Generate high-quality, geographically targeted leads for a premium preschool in a competitive market, with a limited campaign window aligned with the admission cycle.",
    strategy:
      "We launched and managed 5 lead generation campaigns using the highest volume bidding strategy and hyperlocal targeting around Vizag. Creatives were tailored for parents of toddlers, highlighting the FirstCry legacy and the preschool’s USPs. Across these campaigns, we generated 653 Meta leads, reaching over 5.16 lakh people, all within a total spend of ₹1.20 lakh.",
    results:
      "Notably, the campaigns were active for only 2 months each year, just before the annual admission cycle  making precision targeting and timely execution crucial. The best-performing ad set delivered 301 leads at just ₹95.89 per lead. According to CRM data from the center, 5% of these leads converted into actual preschool admissions, validating both lead quality and strategy alignment.This campaign reflects my expertise in running time-sensitive, high-impact local lead generation, aligned with offline admission workflows  delivering measurable results even within a short window.​",
    metrics: [
      { value: "653", label: "Meta Leads Generated" },
      { value: "5%", label: "Lead to Admission Rate" },
      { value: "₹95.89", label: "Lowest Cost Per Lead" },
      { value: "5.16 Lakh+", label: "People Reached" },
    ],
    image: "/case-studies/firstcry-school.jpg",
  },
  {
    slug: "firstcasry-school-lead-generation",
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
    image: "_next/image?url=%2F1.png&w=1200&q=75",
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
