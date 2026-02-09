import { Sparkles } from "lucide-react";

const GrandOpeningBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[70] bg-primary text-primary-foreground py-2 text-center animate-fade-in">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base font-display font-bold tracking-wide">
        <Sparkles size={16} className="animate-pulse" />
        <span>🎉 WE'RE NOW OPEN! — Kampala's Newest Food Delivery Platform</span>
        <Sparkles size={16} className="animate-pulse" />
      </div>
    </div>
  );
};

export default GrandOpeningBanner;
