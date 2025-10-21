import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vraj Choksi - Performance Marketing & Meta Ads Specialist",
    template: "%s | Vraj Choksi",
  },
  description:
    "Trusted Meta Partner driving ₹175 Crore+ in revenue for D2C brands. Expert in Meta Ads, performance marketing, and ROAS-focused scaling strategies.",
  keywords: [
    "Performance Marketing",
    "Meta Ads Specialist",
    "D2C Marketing",
    "E-commerce Growth",
    "Facebook Ads Expert",
    "Instagram Ads",
    "ROAS Optimization",
    "Digital Marketing Consultant",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
