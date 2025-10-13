import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronsDownIcon, Mail, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="contact" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
          <div className="col-span-full md:col-span-2">
            <Link href="/" className="flex font-bold items-center mb-4">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary text-white" />
              <h3 className="text-2xl">Karan Narang</h3>
            </Link>
            <p className="text-muted-foreground mb-4">
              Performance Marketing & Meta Ads Specialist helping D2C brands scale profitably.
            </p>
            <Button asChild className="font-bold text-white">
              <Link href="/book-a-call">Book a Call</Link>
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <div>
              <Link
                href="/about"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                About
              </Link>
            </div>
            <div>
              <Link
                href="/case-studies"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                Case Studies
              </Link>
            </div>
            <div>
              <Link
                href="/#services"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                Services
              </Link>
            </div>
            <div>
              <Link
                href="/book-a-call"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                Book a Call
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <div className="flex items-center gap-2">
              <Mail className="size-4" />
              <Link
                href="mailto:info@growwithkarannarang.in"
                className="opacity-60 hover:opacity-100 transition-opacity text-sm"
              >
                info@growwithkarannarang.in
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="size-4" />
              <Link
                href="tel:+916353361180"
                className="opacity-60 hover:opacity-100 transition-opacity text-sm"
              >
                +91 63533 61180
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="size-4" />
              <Link
                href="https://wa.me/916353361180"
                target="_blank"
                className="opacity-60 hover:opacity-100 transition-opacity text-sm"
              >
                WhatsApp
              </Link>
            </div>
            <div className="mt-2">
              <Link
                href="https://www.linkedin.com/in/karan-narang-744496225/"
                target="_blank"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 All rights reserved by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/karan-narang-744496225/"
              className="text-primary hover:underline"
            >
              Karan Narang
            </Link>
          </p>
          <p className="text-sm text-muted-foreground">
            Performance Marketing Specialist | Meta Partner
          </p>
        </section>
      </div>
    </footer>
  );
};
