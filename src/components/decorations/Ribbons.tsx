const ribbonData = [
  { side: "left", top: "18%", color: "hsl(var(--primary))", width: "120px", delay: "0s" },
  { side: "left", top: "32%", color: "hsl(var(--foreground))", width: "80px", delay: "0.3s" },
  { side: "left", top: "45%", color: "hsl(var(--primary))", width: "100px", delay: "0.7s" },
  { side: "right", top: "15%", color: "hsl(var(--foreground))", width: "100px", delay: "0.2s" },
  { side: "right", top: "28%", color: "hsl(var(--primary))", width: "130px", delay: "0.5s" },
  { side: "right", top: "42%", color: "hsl(var(--foreground))", width: "90px", delay: "0.9s" },
];

const Ribbons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {ribbonData.map((r, i) => (
        <div
          key={i}
          className="absolute animate-[ribbon-wave_3s_ease-in-out_infinite]"
          style={{
            [r.side]: 0,
            top: r.top,
            animationDelay: r.delay,
          }}
        >
          <svg
            width={r.width}
            height="24"
            viewBox="0 0 120 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: r.side === "right" ? "scaleX(-1)" : undefined }}
          >
            <path
              d="M0 8 Q 20 0 40 8 Q 60 16 80 8 Q 100 0 120 8 L 120 16 Q 100 24 80 16 Q 60 8 40 16 Q 20 24 0 16 Z"
              fill={r.color}
              opacity="0.7"
            />
            {/* Curly tail */}
            <path
              d="M120 12 Q 125 6 130 12 Q 125 18 120 12"
              fill={r.color}
              opacity="0.5"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Ribbons;
