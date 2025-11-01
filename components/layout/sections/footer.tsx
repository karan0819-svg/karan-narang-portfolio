import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  ChevronsDownIcon,
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import LinkedInIcon from "@/components/icons/linkedin-icon";

export const FooterSection = () => {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-secondary/20 via-primary/15 to-secondary/25 py-16 md:py-24"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 lg:gap-x-10">
          <div className="col-span-full md:col-span-2">
            <Link href="/" className="flex font-bold items-center mb-4">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-secondary to-accent rounded-lg text-white" />
              <h3 className="text-2xl">Vraj Choksi</h3>
            </Link>
            <p className="text-muted-foreground mb-4">
              Performance Marketing & Meta Ads Specialist helping D2C brands
              scale profitably.
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
                href="mailto:info@growwithvrajchoksi.com"
                title="info@growwithvrajchoksi.com"
                className="block sm:max-w-[120px] md:max-w-[250px] truncate opacity-60 hover:opacity-100 transition-opacity text-sm"
              >
                contact@growwithvrajchoksi.com
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="size-4" />
              <Link
                href="tel:+916353361180"
                className="opacity-60 hover:opacity-100 transition-opacity text-sm"
              >
                +91 97127 14560
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="size-4" />
              <Link
                href="https://wa.me/918141483635"
                target="_blank"
                className="opacity-60 hover:opacity-100 transition-opacity text-sm"
              >
                WhatsApp
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="size-4" />
              <Link
                href="https://www.linkedin.com/in/vraj-choksi-13593a188/"
                target="_blank"
                className="opacity-60 hover:opacity-100 transition-opacity text-sm"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 All rights reserved by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/vraj-choksi-13593a188/"
              className="text-primary hover:underline"
            >
              Vraj Choksi
            </Link>
          </p>
          <p className="text-sm text-muted-foreground">
            Performance Marketing Specialist | Meta Partner
          </p>
        </div>
      </div>
    </footer>
  );
};
