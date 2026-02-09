const balloonData = [
  { left: "3%", delay: "0s", size: "w-10 h-12 md:w-14 md:h-16", color: "hsl(var(--primary))" },
  { left: "6%", delay: "0.4s", size: "w-8 h-10 md:w-10 md:h-12", color: "hsl(var(--foreground))" },
  { left: "1%", delay: "0.8s", size: "w-9 h-11 md:w-12 md:h-14", color: "hsl(var(--primary))" },
  { right: "3%", delay: "0.2s", size: "w-10 h-12 md:w-14 md:h-16", color: "hsl(var(--foreground))" },
  { right: "7%", delay: "0.6s", size: "w-8 h-10 md:w-11 md:h-13", color: "hsl(var(--primary))" },
  { right: "1%", delay: "1s", size: "w-9 h-11 md:w-12 md:h-14", color: "hsl(var(--foreground))" },
];

const Balloons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      {balloonData.map((b, i) => (
        <div
          key={i}
          className="absolute animate-[float-up_4s_ease-in-out_infinite]"
          style={{
            left: b.left,
            right: (b as any).right,
            top: `${12 + i * 6}%`,
            animationDelay: b.delay,
          }}
        >
          {/* Balloon body */}
          <svg
            className={b.size}
            viewBox="0 0 50 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="25" cy="22" rx="20" ry="22" fill={b.color} />
            {/* Shine */}
            <ellipse cx="18" cy="15" rx="5" ry="7" fill="white" opacity="0.25" />
            {/* Knot */}
            <polygon points="22,43 28,43 25,48" fill={b.color} />
            {/* String */}
            <path
              d="M25 48 Q 23 55 26 62 Q 24 58 25 65"
              stroke={b.color}
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Balloons;
