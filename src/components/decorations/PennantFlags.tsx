import { useEffect, useState } from "react";

const PennantFlags = () => {
  const flags1 = Array.from({ length: 14 }, (_, i) => i);
  const flags2 = Array.from({ length: 12 }, (_, i) => i);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Fade out over the first 300px of scroll
      const newOpacity = Math.max(0, 1 - scrollY / 300);
      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (opacity <= 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] pointer-events-none overflow-hidden"
      style={{ opacity: opacity * 0.45, transition: "opacity 0.1s ease-out" }}
    >
      {/* First row of pennants */}
      <svg
        viewBox="0 0 1200 90"
        className="w-full h-20 md:h-28"
        preserveAspectRatio="none"
      >
        <path
          d="M-10,4 C200,8 350,52 600,48 C850,44 1000,12 1210,6"
          fill="none"
          stroke="hsl(var(--foreground) / 0.4)"
          strokeWidth="1.2"
        />
        {flags1.map((i) => {
          const t = i / (flags1.length - 1);
          const x = t * 1200;
          const y = 4 + Math.sin(t * Math.PI) * 44 * (1 - Math.abs(t - 0.5) * 0.3);
          const colors = ["hsl(var(--primary))", "hsl(var(--foreground))", "hsl(var(--tertiary))"];
          const color = colors[i % 3];
          const rotation = Math.sin(i * 1.7) * 6;
          // Vary sway speed per flag for realism
          const swayDuration = 3 + (i % 3) * 0.8;
          return (
            <g
              key={`f1-${i}`}
              className="animate-[sway_4s_ease-in-out_infinite]"
              style={{
                animationDuration: `${swayDuration}s`,
                animationDelay: `${i * 0.2}s`,
                transformOrigin: `${x}px ${y}px`,
              }}
            >
              <polygon
                points={`${x - 18},${y} ${x + 18},${y} ${x + rotation * 0.5},${y + 36}`}
                fill={color}
                opacity={0.7}
              />
            </g>
          );
        })}
      </svg>

      {/* Second row */}
      <svg
        viewBox="0 0 1200 80"
        className="w-full h-14 md:h-20 -mt-6"
        preserveAspectRatio="none"
      >
        <path
          d="M-10,6 C300,10 450,48 650,46 C900,42 1050,14 1210,8"
          fill="none"
          stroke="hsl(var(--foreground) / 0.3)"
          strokeWidth="1"
        />
        {flags2.map((i) => {
          const t = i / (flags2.length - 1);
          const x = t * 1200;
          const y = 6 + Math.sin(t * Math.PI) * 40 * (1 - Math.abs(t - 0.45) * 0.3);
          const colors = ["hsl(var(--foreground))", "hsl(var(--primary))", "hsl(var(--tertiary))"];
          const color = colors[i % 3];
          const rotation = Math.cos(i * 2.1) * 5;
          const swayDuration = 3.5 + (i % 3) * 0.7;
          return (
            <g
              key={`f2-${i}`}
              className="animate-[sway_4s_ease-in-out_infinite]"
              style={{
                animationDuration: `${swayDuration}s`,
                animationDelay: `${i * 0.22 + 0.4}s`,
                transformOrigin: `${x}px ${y}px`,
              }}
            >
              <polygon
                points={`${x - 16},${y} ${x + 16},${y} ${x + rotation * 0.4},${y + 30}`}
                fill={color}
                opacity={0.6}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default PennantFlags;
