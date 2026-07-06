import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/cookie-consent";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Business Systems for Founders Ready to Scale`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "business operations optimization",
    "AI automation",
    "SOP documentation",
    "workflow automation",
    "business systemization",
    "operations consulting for founders",
  ],
  authors: [{ name: siteConfig.founder.name }],
  creator: siteConfig.name,
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Business Systems for Founders Ready to Scale`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Business Systems for Founders Ready to Scale`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${heading.variable} ${body.variable} ${mono.variable} font-body`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <OrganizationSchema />
          <LocalBusinessSchema />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
