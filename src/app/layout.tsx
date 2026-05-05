import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "ArgeNext — Software Studio",
  description:
    "Web, mobil ve gömülü sistemler için uçtan uca dijital çözümler geliştiren küçük ama deneyimli bir yazılım stüdyosu.",
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
      </body>
    </html>
  );
}