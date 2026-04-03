import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import BentoGrid from "@/components/BentoGrid";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <WhySection />
    <BentoGrid />
    <Testimonials />
    <CtaBanner />
    <Footer />
  </div>
);

export default Index;
