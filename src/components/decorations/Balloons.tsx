import { useEffect, useRef } from "react";

const Balloon = ({ color, style, delay }: { color: "orange" | "black"; style: React.CSSProperties; delay: number }) => {
  const fill = color === "orange" ? "hsl(var(--primary))" : "hsl(var(--foreground))";
  const highlight = color === "orange" ? "hsl(var(--primary-foreground) / 0.3)" : "hsl(0 0% 40% / 0.3)";

  return (
    <div className="absolute animate-[float-balloon_4s_ease-in-out_infinite]" style={{ ...style, animationDelay: `${delay}s` }}>
      <svg width="50" height="120" viewBox="0 0 50 120">
        <ellipse cx="25" cy="30" rx="22" ry="28" fill={fill} />
        <ellipse cx="18" cy="22" rx="6" ry="10" fill={highlight} />
        <polygon points="22,57 28,57 25,62" fill={fill} />
        <path d="M25,62 Q28,80 23,95 Q20,105 25,118" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      </svg>
    </div>
  );
};

const Balloons = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            const scrollY = window.scrollY;
            const o = scrollY < 100 ? 1 : Math.max(0, 1 - (scrollY - 100) / 500);
            containerRef.current.style.opacity = String(o);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[55] pointer-events-none overflow-hidden will-change-[opacity]" style={{ opacity: 1 }}>
      <Balloon color="orange" style={{ left: "2%", top: "15%" }} delay={0} />
      <Balloon color="black" style={{ left: "1%", top: "25%" }} delay={0.8} />
      <Balloon color="orange" style={{ left: "4%", top: "35%" }} delay={1.5} />
      <Balloon color="black" style={{ left: "0.5%", top: "50%" }} delay={0.3} />
      <Balloon color="orange" style={{ left: "3%", top: "65%" }} delay={1.2} />
      <Balloon color="black" style={{ right: "2%", top: "15%" }} delay={0.5} />
      <Balloon color="orange" style={{ right: "1%", top: "28%" }} delay={1.0} />
      <Balloon color="black" style={{ right: "4%", top: "40%" }} delay={0.2} />
      <Balloon color="orange" style={{ right: "0.5%", top: "55%" }} delay={1.8} />
      <Balloon color="black" style={{ right: "3%", top: "70%" }} delay={0.7} />
    </div>
  );
};

export default Balloons;
