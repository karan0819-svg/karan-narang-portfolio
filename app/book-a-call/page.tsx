/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call - Let's Grow Your Brand Together",
  description:
    "Schedule a free 30-minute strategy consultation with Karan Narang, a performance marketing specialist. Discuss your growth goals and discover how to scale your D2C brand profitably.",
  openGraph: {
    title: "Book a Call - Let's Grow Your Brand Together",
    description:
      "Schedule a free consultation to discuss your performance marketing strategy and growth goals.",
  },
};

export default function BookACallPage() {
  return (
    <div className="container py-24 sm:py-32">
      {/* Hero Section */}
      <section className="text-center mb-16 max-w-4xl mx-auto">
        <Badge variant="outline" className="mb-4">
          Free Consultation
        </Badge>
        <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6">
          Let's Grow Your Brand Together
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Schedule a free 30-minute strategy call to discuss your business goals
          and discover how performance marketing can accelerate your growth.
        </p>
      </section>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
        {/* Left Column - Calendar Embed Placeholder */}
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="size-6 text-primary" />
                Schedule Your Call
              </CardTitle>
              <CardDescription>
                Pick a time that works best for you
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Placeholder for Calendly/Cal.com embed */}
              <div className="bg-muted/30 rounded-lg p-12 text-center min-h-[500px] flex flex-col items-center justify-center">
                <Calendar className="size-16 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-6">
                  Calendar integration coming soon
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  In the meantime, please use one of the contact methods below
                  to schedule your consultation.
                </p>
                {/*
                  To integrate Calendly, add:
                  <div className="calendly-inline-widget" data-url="YOUR_CALENDLY_URL" style={{minWidth: '320px', height: '630px'}}></div>
                  And include the Calendly script in your layout or use a React component
                */}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Contact Methods & Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Alternative Contact Methods
            </h2>
            <p className="text-muted-foreground mb-6">
              Prefer a different way to connect? Reach out through any of these
              channels:
            </p>
          </div>

          {/* WhatsApp */}
          <Card className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageCircle className="size-5 text-primary" />
                </div>
                WhatsApp (Fastest Response)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Get an instant response on WhatsApp
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="https://wa.me/916353361180" target="_blank">
                  <MessageCircle className="mr-2 size-4" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="size-5 text-primary" />
                </div>
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Send me a detailed email about your project
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="mailto:info@growwithkarannarang.in">
                  <Mail className="mr-2 size-4" />
                  info@growwithkarannarang.in
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="size-5 text-primary" />
                </div>
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Prefer to talk directly? Give me a call
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="tel:+916353361180">
                  <Phone className="mr-2 size-4" />
                  +91 63533 61180
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* What to Expect Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              What to Expect on the Call
            </CardTitle>
            <CardDescription>
              Here's how we'll make the most of our 30 minutes together
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Understand Your Business Goals
                  </h3>
                  <p className="text-muted-foreground">
                    We'll discuss your current situation, challenges, and what
                    success looks like for your brand.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Review Your Current Marketing
                  </h3>
                  <p className="text-muted-foreground">
                    I'll analyze your existing campaigns and identify
                    opportunities for improvement and growth.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Actionable Strategy Recommendations
                  </h3>
                  <p className="text-muted-foreground">
                    You'll walk away with specific, data-driven recommendations
                    you can implement immediately.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    No Pressure, No Commitment
                  </h3>
                  <p className="text-muted-foreground">
                    This is a consultation, not a sales call. My goal is to
                    provide value whether we work together or not.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Is the consultation really free?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, absolutely! The initial 30-minute strategy call is
                completely free with no obligations. It's an opportunity for us
                to meet, discuss your goals, and see if we're a good fit.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                What should I prepare before the call?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Have your current marketing metrics ready (if available), your
                monthly budget range, and a clear idea of your growth goals.
                Don't worry if you don't have all the details—we'll figure it
                out together.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Which industries do you work with?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I specialize in D2C and e-commerce brands across 15+ niches
                including Fashion, Beauty, Health, Home & Living, and more. If
                you're selling online, I can help you grow.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                What happens after the call?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If we both feel it's a good fit, I'll send you a detailed
                proposal with strategy recommendations and pricing. If not,
                you'll still have valuable insights to implement on your own. No
                pressure either way.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
