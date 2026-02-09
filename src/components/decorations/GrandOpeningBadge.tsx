import { PartyPopper } from "lucide-react";

const GrandOpeningBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-glow">
      <PartyPopper size={18} />
      <span>🎉 Grand Opening — We're Live!</span>
      <PartyPopper size={18} />
    </div>
  );
};

export default GrandOpeningBadge;
