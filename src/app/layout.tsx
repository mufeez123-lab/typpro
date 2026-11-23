import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "TYPPRO | Helping You Build and Protect Your Wealth",
  description:
    "Award-winning financial planning rooted in trust, insight, and lasting relationships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${googleSans.variable} h-full antialiased`}>
      <body className="min-h-full font-sans bg-[#a8111c] text-white selection:bg-white selection:text-[#b91420]">
        {children}
      </body>
    </html>
  );
}
