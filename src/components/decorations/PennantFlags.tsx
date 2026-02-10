const PennantFlags = () => {
  const flags1 = Array.from({ length: 14 }, (_, i) => i);
  const flags2 = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] pointer-events-none overflow-hidden">
      {/* First row - deep sag */}
      <svg
        viewBox="0 0 1200 120"
        className="w-full h-20 md:h-24"
        preserveAspectRatio="none"
      >
        <path
          d="M0,2 C200,2 250,90 600,85 C950,80 1000,2 1200,2"
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeWidth="1.5"
        />
        {flags1.map((i) => {
          const t = i / (flags1.length - 1);
          const x = t * 1200;
          // Deep catenary sag
          const y = 2 + Math.sin(t * Math.PI) * 82 * (1 - Math.abs(t - 0.5) * 0.4);
          const isOrange = i % 2 === 0;
          const flagH = 22 + Math.sin(t * Math.PI) * 8;
          return (
            <polygon
              key={`f1-${i}`}
              points={`${x - 12},${y} ${x + 12},${y} ${x},${y + flagH}`}
              fill={isOrange ? "hsl(var(--primary))" : "hsl(var(--foreground))"}
              opacity={0.9}
              className="animate-[sway_3s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.15}s`, transformOrigin: `${x}px ${y}px` }}
            />
          );
        })}
      </svg>

      {/* Second row - offset, also saggy */}
      <svg
        viewBox="0 0 1200 100"
        className="w-full h-14 md:h-18 -mt-6"
        preserveAspectRatio="none"
      >
        <path
          d="M0,4 C300,4 350,75 650,72 C950,69 1050,4 1200,4"
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeWidth="1.2"
        />
        {flags2.map((i) => {
          const t = i / (flags2.length - 1);
          const x = t * 1200;
          const y = 4 + Math.sin(t * Math.PI) * 68 * (1 - Math.abs(t - 0.5) * 0.35);
          const isOrange = i % 2 === 1;
          const flagH = 18 + Math.sin(t * Math.PI) * 6;
          return (
            <polygon
              key={`f2-${i}`}
              points={`${x - 10},${y} ${x + 10},${y} ${x},${y + flagH}`}
              fill={isOrange ? "hsl(var(--primary))" : "hsl(var(--foreground))"}
              opacity={0.85}
              className="animate-[sway_3s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.2 + 0.5}s`, transformOrigin: `${x}px ${y}px` }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default PennantFlags;
