import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import FeatureSpotlight from "@/components/FeatureSpotlight";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <WhySection />
    <FeatureSpotlight />
    <CtaBanner />
    <Footer />
  </div>
);

export default Index;
