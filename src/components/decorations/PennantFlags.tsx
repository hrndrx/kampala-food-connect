const PennantFlags = () => {
  const flags = Array.from({ length: 20 });

  return (
    <div className="absolute top-0 left-0 right-0 z-30 overflow-hidden pointer-events-none">
      {/* String/rope */}
      <svg
        className="w-full h-16 md:h-20"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rope curve */}
        <path
          d="M-20 15 Q 300 55, 600 20 Q 900 -10, 1220 35"
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Pennant flags along the curve */}
        {flags.map((_, i) => {
          const t = (i + 0.5) / flags.length;
          // Approximate position along the bezier
          const x = t * 1200;
          const y =
            15 * (1 - t) * (1 - t) +
            2 * (1 - t) * t * (t < 0.5 ? 55 : -10) +
            t * t * (t < 0.5 ? 20 : 35);
          const isOrange = i % 2 === 0;

          return (
            <polygon
              key={i}
              points={`${x - 12},${y + 2} ${x + 12},${y + 2} ${x},${y + 38}`}
              fill={isOrange ? "hsl(var(--primary))" : "hsl(var(--foreground))"}
              opacity={0.9}
              className="animate-[sway_3s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default PennantFlags;
