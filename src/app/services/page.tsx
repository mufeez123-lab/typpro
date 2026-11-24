import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export const metadata = {
  title: "Business Setup & Corporate Services | TYPPRO",
  description:
    "Explore our full suite of PRO services, business licensing, tax accounting, and company formation in the UAE.",
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#f3f4f8] pt-20">
      <Navbar />
      <Services />
    </main>
  );
}
