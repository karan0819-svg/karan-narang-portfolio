"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

interface sponsorsProps {
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    name: "UDHHU",
  },
  {
    name: "HYPEDEVI",
  },
  {
    name: "Balfe",
  },
  {
    name: "WorkSpaceCo.",
  },
  {
    name: "WESTCODE",
  },
  {
    name: "SILBERRY",
  },
  {
    name: "STEPLE",
  },
  {
    name: "UDHHU",
  },
  {
    name: "HYPEDEVI",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-8 text-muted-foreground font-medium">
        Trusted by Leading D2C Brands
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[4rem]"
          fade
          innerClassName="gap-[4rem]"
          pauseOnHover
        >
          {sponsors.map(({ name }, index) => (
            <div
              key={`${name}-${index}`}
              className="flex items-center text-xl md:text-2xl font-bold tracking-wider text-foreground/70 hover:text-foreground transition-colors"
            >
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
