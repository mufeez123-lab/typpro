import About from "@/components/About";
import BlogNews from "@/components/BlogNews";
import BusinessSetup from "@/components/BusinessSetup";
import ChartersBenefits from "@/components/ChartersBenefits";
import CompanySetupProcess from "@/components/CompanySetupProcess";
import Contact from "@/components/Contact";
import EmptyLegs from "@/components/EmptyLegs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Quality from "@/components/Quality";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <BusinessSetup />
      <About />
      <Services />
      <Quality />
      <EmptyLegs />
      <CompanySetupProcess />
      <ChartersBenefits />
      <SuccessStories />
      <BlogNews />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
