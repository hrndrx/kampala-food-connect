import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import UserTypesSection from "@/components/sections/UserTypesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import RestaurantsSection from "@/components/sections/RestaurantsSection";
import CTASection from "@/components/sections/CTASection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ConnectSection from "@/components/sections/ConnectSection";
import PennantFlags from "@/components/decorations/PennantFlags";
import Balloons from "@/components/decorations/Balloons";
import GrandOpeningBanner from "@/components/decorations/GrandOpeningBanner";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <GrandOpeningBanner />
      <PennantFlags />
      <Balloons />
      <Navbar />
      <main>
        <HeroSection />
        <CTASection />
        <UserTypesSection />
        <HowItWorksSection />
        <RestaurantsSection />
        <TestimonialsSection />
        <TestimonialsSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
