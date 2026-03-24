'use client';

import { useState } from 'react';

const styles = `
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideUpSheet {
    from { opacity: 0; transform: translateY(100%); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    from { background-position: -400px 0; }
    to   { background-position:  400px 0; }
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes checkPop {
    0%   { transform: scale(1); }
    40%  { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  .popup-card {
    will-change: transform, opacity;
    animation: slideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  .skeleton {
    border-radius: 6px;
    background: linear-gradient(90deg,
      rgba(255,255,255,0.05) 25%,
      rgba(255,255,255,0.13) 50%,
      rgba(255,255,255,0.05) 75%);
    background-size: 400px 100%;
    animation: shimmer 1.4s ease-in-out infinite;
    will-change: background-position;
  }
  .content-fade {
    animation: fadeIn 0.3s ease-out forwards;
  }
  .copied-anim {
    animation: checkPop 0.3s ease-out forwards;
    display: inline-block;
  }

  @media (max-width: 640px) {
    .popup-card {
      position: fixed !important;
      bottom: 0 !important;
      left: 0 !important;
      right: 0 !important;
      max-width: 100% !important;
      width: 100% !important;
      border-radius: 1.25rem 1.25rem 0 0 !important;
      max-height: 85vh;
      overflow-y: auto;
      animation: slideUpSheet 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards !important;
    }
  }
`;

function Skeleton({ height = 16, width = '100%' }) {
  return <div className="skeleton" style={{ height, width, borderRadius: 6 }} />;
}

export default function ResultPopup({
  country,
  funFact,
  slackMessage,
  isLoading,
  onClose,
  onRelaunch,
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(slackMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <style>{styles}</style>

      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 50,
          background: 'rgba(0,0,0,0.65)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1rem',
        }}
      >
        {/* Card */}
        <div
          className="popup-card"
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '1.25rem',
            padding: '2rem',
            maxWidth: 480,
            width: '100%',
            position: 'relative',
          }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '1rem', right: '1rem',
              background: 'rgba(255,255,255,0.1)', border: 'none',
              borderRadius: '50%', width: 32, height: 32,
              color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.15s',
            }}
          >×</button>

          {/* Country header */}
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '3.5rem', lineHeight: 1.2 }}>{country.emoji}</div>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800, fontSize: '1.5rem',
              color: '#f0eaff', margin: '0.5rem 0 0',
              letterSpacing: '-0.01em',
            }}>
              {country.name}
            </h2>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.25rem' }} />

          {/* Fun fact */}
          <div style={{ marginBottom: '1.25rem' }}>
            <p style={{ fontWeight: 600, color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              🌍 Le savais-tu ?
            </p>
            {isLoading ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Skeleton height={14} />
                <Skeleton height={14} />
                <Skeleton height={14} width="65%" />
              </div>
            ) : (
              <p className="content-fade" style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {funFact}
              </p>
            )}
          </div>

          {/* Slack message */}
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontWeight: 600, color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              💬 Message pour ton manager
            </p>
            {isLoading ? (
              <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Skeleton height={13} />
                <Skeleton height={13} />
                <Skeleton height={13} />
                <Skeleton height={13} width="72%" />
              </div>
            ) : (
              <div className="content-fade" style={{
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '0.75rem', padding: '0.9rem',
                color: 'rgba(255,255,255,0.82)', fontSize: '0.88rem',
                lineHeight: 1.65, fontFamily: "'Outfit', sans-serif",
                whiteSpace: 'pre-wrap',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                {slackMessage}
              </div>
            )}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={handleCopy}
              disabled={isLoading}
              style={{
                flex: 1, padding: '0.75rem 1rem',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '9999px', color: 'white',
                fontFamily: "'Syne', sans-serif", fontWeight: 600,
                fontSize: '0.88rem', cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.35 : 1,
                transition: 'opacity 0.2s, border-color 0.2s',
                willChange: 'opacity',
              }}
            >
              {copied
                ? <span className="copied-anim">✅ Copié !</span>
                : '📋 Copier le message'}
            </button>
            <button
              onClick={onRelaunch}
              style={{
                flex: 1, padding: '0.75rem 1rem',
                background: 'linear-gradient(135deg, #ff6b35, #f72585)',
                border: 'none', borderRadius: '9999px',
                color: 'white', fontFamily: "'Syne', sans-serif",
                fontWeight: 700, fontSize: '0.88rem', cursor: 'pointer',
                boxShadow: '0 0 20px rgba(247,37,133,0.3)',
              }}
            >
              🎲 Relancer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
