import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { MouseSpotlight } from "@/components/MouseSpotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://argenext.com"),
  title: "ArgeNext — Software Studio",
  description:
    "Web, mobil ve gömülü sistemler için uçtan uca dijital çözümler geliştiren küçük ama deneyimli bir yazılım stüdyosu.",
  openGraph: {
    title: "ArgeNext — Software Studio",
    description:
      "Web, mobil ve gömülü sistemler için uçtan uca dijital çözümler.",
    url: "https://argenext.com",
    siteName: "ArgeNext",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArgeNext — Software Studio",
    description:
      "Web, mobil ve gömülü sistemler için uçtan uca dijital çözümler.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MouseSpotlight />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}