import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Contact Us | TYPPRO Business Setup & Document Clearing",
  description:
    "Get in touch with our Dubai business setup and PRO specialists. Office 301–312, LEADER REAL ESTATE L.L.C, Al Souq Al Kabeer, Bur Dubai. Phone: +971 56 820 4558.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full bg-white">
      <Navbar />
      <div className="pt-24 lg:pt-28">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
