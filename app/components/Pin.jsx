'use client';

import { useEffect, useState } from 'react';

const styles = `
  @keyframes pinDrop {
    0%   { transform: translate(-50%, -100%) translateY(-120vh) scaleY(1.2); opacity: 0; }
    60%  { transform: translate(-50%, -100%) translateY(0) scaleY(1.05); opacity: 1; }
    72%  { transform: translate(-50%, -100%) translateY(-12px) scaleY(0.95); }
    84%  { transform: translate(-50%, -100%) translateY(0) scaleY(1.02); }
    93%  { transform: translate(-50%, -100%) translateY(-4px) scaleY(0.99); }
    100% { transform: translate(-50%, -100%) translateY(0) scaleY(1); }
  }

  @keyframes pinPulse {
    0%, 100% {
      transform: translate(-50%, -100%) scale(1);
      filter: drop-shadow(0 3px 8px rgba(192,57,43,0.35));
    }
    50% {
      transform: translate(-50%, -100%) scale(1.07);
      filter: drop-shadow(0 5px 16px rgba(255,80,80,0.65));
    }
  }

  .pin-svg {
    position: absolute;
    top: 0;
    left: 0;
    will-change: transform, filter;
    transform-origin: center bottom;
  }
`;

export default function Pin({ visible }) {
  const [phase, setPhase] = useState('drop');

  useEffect(() => {
    if (visible) setPhase('drop');
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <style>{styles}</style>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 0,
          height: 0,
          pointerEvents: 'none',
          zIndex: 10,
        }}
      >
        <svg
          className="pin-svg"
          style={{
            animation:
              phase === 'drop'
                ? 'pinDrop 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards'
                : 'pinPulse 2.5s ease-in-out infinite',
          }}
          onAnimationEnd={() => {
            if (phase === 'drop') setPhase('pulse');
          }}
          width="44"
          height="58"
          viewBox="0 0 44 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 2C12.059 2 4 10.059 4 20C4 32 22 56 22 56C22 56 40 32 40 20C40 10.059 31.941 2 22 2Z"
            fill="url(#pinGrad)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
          <circle cx="22" cy="20" r="7" fill="white" opacity="0.95" />
          <defs>
            <radialGradient id="pinGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ff6b6b" />
              <stop offset="100%" stopColor="#c0392b" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
