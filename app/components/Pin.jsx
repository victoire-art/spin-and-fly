'use client';

import { useEffect, useState } from 'react';

const styles = `
  @keyframes pinDrop {
    0%   { transform: translate(-50%, -100%) translateY(-120vh) scaleY(1.3); opacity: 0; }
    65%  { transform: translate(-50%, -100%) translateY(0) scaleY(1); opacity: 1; }
    75%  { transform: translate(-50%, -100%) translateY(-14px) scaleY(0.94); }
    85%  { transform: translate(-50%, -100%) translateY(0) scaleY(1.04); }
    93%  { transform: translate(-50%, -100%) translateY(-5px) scaleY(0.98); }
    100% { transform: translate(-50%, -100%) translateY(0) scaleY(1); }
  }

  @keyframes pinPulse {
    0%, 100% {
      transform: translate(-50%, -100%) scale(1);
      filter: drop-shadow(0 4px 10px rgba(192,57,43,0.4));
    }
    50% {
      transform: translate(-50%, -100%) scale(1.12);
      filter: drop-shadow(0 6px 22px rgba(255,80,80,0.85));
    }
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
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transformOrigin: 'center bottom',
            animation:
              phase === 'drop'
                ? 'pinDrop 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards'
                : 'pinPulse 2s ease-in-out infinite',
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
