import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Process />
        <Skills />
        <FAQ />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
