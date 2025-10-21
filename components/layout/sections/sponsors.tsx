"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

interface sponsorsProps {
  image: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    image: "https://i.postimg.cc/ht5jL08P/balfe.jpg",
    name: "Balfe",
  },
  {
    image: "https://i.postimg.cc/qM7413MP/Teesa-Home.jpg",
    name: "Teesa Home",
  },
  {
    image: "https://i.postimg.cc/0jyRXTxC/HypeDevi.jpg",
    name: "HypeDevi",
  },
  {
    image: "https://i.postimg.cc/nLJWwyGT/House-Of-Kirti.jpg",
    name: "House Of Kirti",
  },
  {
    image: "https://i.postimg.cc/8z8Xj29N/Fabister.jpg",
    name: "Fabister",
  },
  {
    image: "https://i.postimg.cc/nVNfGwg9/GritPro.jpg",
    name: "GritPro",
  },
  {
    image: "https://i.postimg.cc/B6ykNXYZ/Silberry.jpg",
    name: "Silberry",
  },
  {
    image: "https://i.postimg.cc/s2gLrpbY/House-Of-Zavi.jpg",
    name: "House Of Zavi",
  },
  {
    image: "https://i.postimg.cc/ZKPsv7Sv/Amoshh.jpg",
    name: "Amoshh",
  },
  {
    image: "https://i.postimg.cc/MH75RThW/Phooldhaage.webp",
    name: "Phooldhaage",
  },
  {
    image: "https://i.postimg.cc/pTNKZvQx/Zilaire.jpg",
    name: "Zilaire",
  },
  {
    image: "https://i.postimg.cc/TwrNjCDq/naaptol.jpg",
    name: "Naaptol",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="container py-16 md:py-24">
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
          {sponsors.map(({ image, name }, index) => (
            <div
              key={`${image}-${index}`}
              className="flex items-center text-xl md:text-2xl font-bold tracking-wider text-foreground/70 hover:text-foreground transition-colors"
            >
              <img
                src={image}
                alt={name}
                className="w-32 h-32 object-contain bg-white"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
