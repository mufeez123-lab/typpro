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
  title: "TYPPRO | UAE Business Setup, Licensing & PRO Services in Dubai",
  description:
    "Leading company formation and document clearing specialists in the UAE. Mainland, Free Zone, Offshore setups, Golden Visas, and corporate tax compliance.",
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
