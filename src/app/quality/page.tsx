import Navbar from "@/components/Navbar";
import Quality from "@/components/Quality";

export const metadata = {
  title: "Easy Way to Book Private Jet | TYPPRO",
  description:
    "Booking a private jet has become easier and more accessible than ever, thanks to advancements in technology and the rise of on-demand.",
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
