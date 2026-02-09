import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import UserTypesSection from "@/components/sections/UserTypesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import RestaurantsSection from "@/components/sections/RestaurantsSection";
import TrackingSection from "@/components/sections/TrackingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ConnectSection from "@/components/sections/ConnectSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <UserTypesSection />
        <HowItWorksSection />
        <RestaurantsSection />
        <TrackingSection />
        <TestimonialsSection />
        <ConnectSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
