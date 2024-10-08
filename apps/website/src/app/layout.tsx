import { DevMessage } from "@/components/dev-message";
import { Footer } from "@/components/footer";
import { FooterCTA } from "@/components/footer-cta";
import { Header } from "@/components/header";
import "@/styles/globals.css";
import { cn } from "@midday/ui/cn";
import "@midday/ui/globals.css";
import { Provider as Analytics } from "@midday/events/client";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { ReactElement } from "react";

const baseUrl = "http://www.oxcin.com";

export const preferredRegion = ["fra1", "sfo1", "iad1"];

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Oxcin | Unleash your tech stack",
    template: "%s | Oxcin",
  },
  description:
    "Oxcin helps you run your business smarter with your own customized tools",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)" }],
};

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${GeistSans.variable} ${GeistMono.variable}`,
          "bg-[#0C0C0C] overflow-x-hidden dark antialiased"
        )}
      >
        {/* <Header /> */}
        <main className="container mx-auto px-4 overflow-hidden md:overflow-visible">
          {children}
        </main>
        <FooterCTA />
        <Footer />
        <Analytics />
        <DevMessage />
      </body>
    </html>
  );
}
