import { Button } from "@/components/ui/button";
import Link from "next/link";

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
          Why Performance Marketing?
        </h2>

        {/* Main Argument */}
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Relying only on SEO and organic tactics can take years to build a
          brand’s momentum. This is the era of performance marketing: targeted
          campaigns with instant analytics that accelerate growth and strengthen
          your brand’s market presence. Combining paid and organic strategies is
          the fastest route to lasting success!
        </p>

        {/* Standout Quote */}
        <blockquote className="mt-8 border-l-4 border-primary pl-4 italic text-xl text-foreground">
          “The internet isn’t just for scrolling—it’s for building something
          incredible.”
        </blockquote>

        {/* Partnership Invitation */}
        <p className="mt-8 text-lg text-muted-foreground">
          If you’re looking to partner with a specialist who genuinely cares
          about your business, let’s connect.
        </p>

        {/* Call to Action */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="font-bold text-white">
            <Link href="#contact">Schedule a Free Consultation</Link>
          </Button>
          {/* <a
            href="mailto:info@growwithkarannarang.in"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            info@growwithkarannarang.in
          </a> */}
        </div>
      </div>
    </section>
  );
};
