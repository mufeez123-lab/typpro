import Navbar from "@/components/Navbar";
import Quality from "@/components/Quality";

export const metadata = {
  title: "3 Simple Steps to Launch Your UAE Business | TYPPRO",
  description:
    "Discover how easy it is to register your company, get your trade license, and obtain residency visas in the UAE with TYPPRO.",
};

export default function QualityPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#0a101d]">
      <Navbar />
      <div className="pt-20">
        <Quality />
      </div>
    </main>
  );
}
