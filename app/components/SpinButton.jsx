'use client';

const styles = `
  @keyframes shake {
    0%   { transform: translateX(0); }
    15%  { transform: translateX(-6px) rotate(-1deg); }
    30%  { transform: translateX(6px) rotate(1deg); }
    45%  { transform: translateX(-5px) rotate(-0.5deg); }
    60%  { transform: translateX(5px) rotate(0.5deg); }
    75%  { transform: translateX(-3px); }
    90%  { transform: translateX(3px); }
    100% { transform: translateX(0); }
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
    box-shadow: 0 0 24px rgba(247, 37, 133, 0.35), 0 4px 20px rgba(0,0,0,0.3);
    transition: box-shadow 0.2s ease, opacity 0.2s ease;
  }

  .spin-btn:not(:disabled):hover {
    animation: shake 0.45s ease;
    box-shadow: 0 0 44px rgba(247, 37, 133, 0.65), 0 6px 28px rgba(0,0,0,0.4);
  }

  .spin-btn:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export default function SpinButton({ onClick, disabled }) {
  return (
    <>
      <style>{styles}</style>
      <button className="spin-btn" onClick={onClick} disabled={disabled}>
        🎯 Où est-ce que je pars ?
      </button>
    </>
  );
}
