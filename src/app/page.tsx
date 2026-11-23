import About from "@/components/About";
import BusinessSetup from "@/components/BusinessSetup";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <BusinessSetup />
      <About />
    </main>
  );
}
