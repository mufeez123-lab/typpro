import EmptyLegs from "@/components/EmptyLegs";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Great Deals on Empty Legs | JetSteals",
  description:
    "Looking for unbeatable private jet travel at a fraction of the cost? JetSteals offers exclusive Great Deals on Empty Legs.",
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
