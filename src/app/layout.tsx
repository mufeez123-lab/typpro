import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
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
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full font-sans bg-[#a8111c] text-white selection:bg-white selection:text-[#b91420]">
        {children}
      </body>
    </html>
  );
}
