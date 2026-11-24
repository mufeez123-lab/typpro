import EmptyLegs from "@/components/EmptyLegs";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Business Setup Packages & Special Offers | TYPPRO",
  description:
    "Explore cost-effective business setup packages, mainland licensing, free zone company registration, and Golden Visa offers in Dubai & UAE.",
};

export default function EmptyLegsPage() {
  return (
    <main className="relative min-h-screen w-full bg-white">
      <Navbar />
      <div className="pt-20">
        <EmptyLegs />
      </div>
    </main>
  );
}
