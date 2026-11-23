import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Contact Us | TYPPRO",
  description:
    "Get in touch with our luxury aviation and business setup specialists 24/7.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#f7f8fb]">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
    </main>
  );
}
