'use client';

const styles = `
  @keyframes shake {
    0%   { transform: translateX(0) rotate(0); }
    15%  { transform: translateX(-6px) rotate(-1deg); }
    30%  { transform: translateX(6px) rotate(1deg); }
    45%  { transform: translateX(-5px) rotate(-0.5deg); }
    60%  { transform: translateX(5px) rotate(0.5deg); }
    75%  { transform: translateX(-3px) rotate(0); }
    90%  { transform: translateX(3px) rotate(0); }
    100% { transform: translateX(0) rotate(0); }
  }

  @keyframes btnGlow {
    0%, 100% { box-shadow: 0 0 18px rgba(247,37,133,0.3), 0 4px 16px rgba(0,0,0,0.3); }
    50%       { box-shadow: 0 0 38px rgba(247,37,133,0.65), 0 6px 22px rgba(0,0,0,0.35); }
  }

  @keyframes dots {
    0%   { content: ''; }
    33%  { content: '.'; }
    66%  { content: '..'; }
    100% { content: '...'; }
  }

  .spin-btn {
    background: linear-gradient(135deg, #ff6b35, #f72585);
    color: white;
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    letter-spacing: 0.01em;
    will-change: transform, box-shadow;
    animation: btnGlow 3s ease-in-out infinite;
    transition: opacity 0.2s ease;
  }

  .spin-btn:not(:disabled):hover {
    animation: shake 0.45s ease forwards;
    box-shadow: 0 0 50px rgba(247,37,133,0.7), 0 6px 28px rgba(0,0,0,0.4);
  }

  .spin-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    animation: none;
    box-shadow: 0 0 14px rgba(247,37,133,0.2);
  }

  .spin-btn:disabled::after {
    content: '';
    animation: dots 1.2s steps(1) infinite;
  }
`;

export default function SpinButton({ onClick, disabled }) {
  return (
    <>
      <style>{styles}</style>
      <button className="spin-btn" onClick={onClick} disabled={disabled}>
        {disabled ? '✈️ En route' : '🎯 Où est-ce que je pars ?'}
      </button>
    </>
  );
}
