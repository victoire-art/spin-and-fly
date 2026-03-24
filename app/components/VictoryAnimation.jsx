'use client';

const CONFETTI_COLORS = [
  '#FF6B6B','#FF8E53','#FFC857','#A8E063',
  '#56CCF2','#6C63FF','#F72585','#4CC9F0',
  '#7BF1A8','#FFB347','#C77DFF','#E9C46A',
];

const PARTICLES = Array.from({ length: 36 }, (_, i) => ({
  angle: i * 10,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  size: 6 + (i % 4) * 3,
  distance: 80 + (i % 5) * 40,
  delay: (i % 6) * 0.04,
  duration: 0.7 + (i % 4) * 0.15,
}));

const styles = `
  @keyframes burst {
    0%   { transform: translate(-50%,-50%) rotate(var(--a)) translateX(0)     scale(1);   opacity: 1; }
    70%  { opacity: 1; }
    100% { transform: translate(-50%,-50%) rotate(var(--a)) translateX(var(--d)) scale(0.4); opacity: 0; }
  }
  @keyframes victoryPop {
    0%   { transform: translate(-50%,-50%) scale(0.3); opacity: 0; }
    50%  { transform: translate(-50%,-50%) scale(1.15); opacity: 1; }
    70%  { transform: translate(-50%,-50%) scale(0.95); }
    100% { transform: translate(-50%,-50%) scale(1);   opacity: 1; }
  }
  @keyframes victoryFadeOut {
    0%   { opacity: 1; }
    100% { opacity: 0; pointer-events: none; }
  }
  .victory-wrapper {
    animation: victoryFadeOut 0.4s ease-in 1.4s forwards;
    will-change: opacity;
  }
  .victory-label {
    position: absolute;
    top: 50%; left: 50%;
    animation: victoryPop 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
    will-change: transform, opacity;
    text-align: center;
    pointer-events: none;
    white-space: nowrap;
  }
`;

export default function VictoryAnimation({ visible }) {
  if (!visible) return null;

  return (
    <>
      <style>{styles}</style>
      <div
        className="victory-wrapper"
        style={{
          position: 'absolute', inset: 0,
          pointerEvents: 'none', zIndex: 20,
          overflow: 'hidden',
        }}
      >
        {/* Confetti burst from center */}
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              width: p.size, height: p.size,
              borderRadius: i % 3 === 0 ? '50%' : '2px',
              background: p.color,
              '--a': `${p.angle}deg`,
              '--d': `${p.distance}px`,
              animation: `burst ${p.duration}s cubic-bezier(0.2,0.8,0.4,1) ${p.delay}s forwards`,
              willChange: 'transform, opacity',
              opacity: 0,
            }}
          />
        ))}

        {/* Central label */}
        <div className="victory-label">
          <div style={{ fontSize: '3.5rem', lineHeight: 1 }}>🎉</div>
          <div style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: '2rem',
            background: 'linear-gradient(135deg, #FFC857, #FF6B6B, #C77DFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginTop: '0.25rem',
            letterSpacing: '-0.02em',
          }}>
            Victoire !
          </div>
        </div>
      </div>
    </>
  );
}
