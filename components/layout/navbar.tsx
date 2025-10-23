"use client";
import { ChevronsDown, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/#home",
    label: "Home",
  },
  {
    href: "/#services",
    label: "Services",
  },
  {
    href: "/case-studies",
    label: "Case Studies",
  },
  {
    href: "/about",
    label: "About",
  },
  // {
  //   href: "/#contact",
  //   label: "Contact",
  // },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const handleNavClick = (href: string) => {
    // Check if it's a hash link on homepage
    if (href.startsWith("/#") && pathname === "/") {
      const id = href.substring(2); // Remove '/#'
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const handleDesktopNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="shadow-smooth backdrop-blur-sm bg-card/95 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky z-40 rounded-2xl flex justify-between items-center p-3">
      <Link href="/" className="font-bold text-lg flex items-center">
        <ChevronsDown className="bg-gradient-to-tr from-primary via-secondary to-accent rounded-lg w-9 h-9 mr-2 text-white" />
        <span className=" inline">Vraj Choksi</span>
      </Link>

      {/* Desktop */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link
                  href={href}
                  className="text-base px-3 py-2 hover:text-primary transition-colors font-medium"
                  onClick={(e) => handleDesktopNavClick(e, href)}
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile */}
      <div className="lg:hidden !lg:flex items-center gap-2">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <ChevronsDown className="bg-gradient-to-tr from-primary via-secondary to-accent rounded-lg w-9 h-9 mr-2 text-white" />
                    Vraj Choksi
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col gap-2 pt-4">
              <Separator className="mb-2" />
              <Button
                asChild
                size="default"
                className="w-full font-bold text-white"
              >
                <Link href="/book-a-call" onClick={() => setIsOpen(false)}>
                  Book a Call
                </Link>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:flex items-center gap-3">
        <Button asChild size="default" className="font-bold text-white">
          <Link href="/book-a-call">Book a Call</Link>
        </Button>
      </div>
    </header>
  );
};
