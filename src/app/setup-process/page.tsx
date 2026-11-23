import CompanySetupProcess from "@/components/CompanySetupProcess";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Simplified Process of Company Setup in UAE | TYPPRO",
  description:
    "Explore our streamlined 8-step process for business setup in the UAE, from business activity selection to banking setup.",
};

export default function SetupProcessPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#070a1e]">
      <Navbar />
      <div className="pt-20">
        <CompanySetupProcess />
      </div>
    </main>
  );
}
