const PennantFlags = () => {
  const flags1 = Array.from({ length: 20 }, (_, i) => i);
  const flags2 = Array.from({ length: 18 }, (_, i) => i);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] pointer-events-none overflow-hidden">
      {/* First row of pennants */}
      <svg
        viewBox="0 0 1200 80"
        className="w-full h-16 md:h-20"
        preserveAspectRatio="none"
      >
        {/* String line - catenary curve */}
        <path
          d="M0,5 Q300,60 600,45 Q900,30 1200,5"
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeWidth="1.5"
        />
        {flags1.map((i) => {
          const t = i / (flags1.length - 1);
          const x = t * 1200;
          // Catenary curve y position
          const y = 5 + Math.sin(t * Math.PI) * 40 - t * 10 + 10;
          const isOrange = i % 2 === 0;
          return (
            <polygon
              key={`f1-${i}`}
              points={`${x - 15},${y} ${x + 15},${y} ${x},${y + 30}`}
              fill={isOrange ? "hsl(var(--primary))" : "hsl(var(--foreground))"}
              opacity={0.9}
              className="animate-[sway_3s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          );
        })}
      </svg>

      {/* Second row - slightly lower, offset */}
      <svg
        viewBox="0 0 1200 70"
        className="w-full h-12 md:h-16 -mt-4"
        preserveAspectRatio="none"
      >
        <path
          d="M0,8 Q400,55 700,50 Q1000,45 1200,8"
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeWidth="1.5"
        />
        {flags2.map((i) => {
          const t = i / (flags2.length - 1);
          const x = t * 1200;
          const y = 8 + Math.sin(t * Math.PI) * 42 - t * 5 + 5;
          const isOrange = i % 2 === 1;
          return (
            <polygon
              key={`f2-${i}`}
              points={`${x - 13},${y} ${x + 13},${y} ${x},${y + 26}`}
              fill={isOrange ? "hsl(var(--primary))" : "hsl(var(--foreground))"}
              opacity={0.85}
              className="animate-[sway_3s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.15 + 0.5}s` }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default PennantFlags;
