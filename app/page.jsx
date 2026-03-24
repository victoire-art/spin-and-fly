'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
const Globe = dynamic(() => import('./components/Globe'), { ssr: false });
import SpinButton from './components/SpinButton';
import Pin from './components/Pin';
import countries from './data/countries';

export default function Home() {
  const [lastCountry, setLastCountry] = useState(null);
  const [targetCountry, setTargetCountry] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPin, setShowPin] = useState(false);

  function handleSpin() {
    let pick;
    do {
      pick = countries[Math.floor(Math.random() * countries.length)];
    } while (lastCountry && pick.name === lastCountry.name);

    setLastCountry(pick);
    setTargetCountry(pick);
    setIsSpinning(true);
    setIsDisabled(true);
    setShowPin(false);
  }

  function handleAnimationComplete() {
    setIsSpinning(false);
    setIsDisabled(false);
    setShowPin(true);
    console.log(`Animation terminée, pays: ${targetCountry?.name}`);
  }

  return (
    <main className="flex flex-col min-h-screen">
      <header className="pt-14 pb-6 text-center">
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#f0eaff',
            letterSpacing: '-0.02em',
          }}
        >
          Spin & Fly ✈️
        </h1>
      </header>

      <section className="flex-1 flex items-center justify-center" style={{ position: 'relative' }}>
        <Globe
          targetCountry={targetCountry}
          isSpinning={isSpinning}
          onAnimationComplete={handleAnimationComplete}
        />
        <Pin visible={showPin} />
      </section>

      <div className="flex flex-col items-center gap-5 pb-16 pt-8">
        <SpinButton onClick={handleSpin} disabled={isDisabled} />
        {targetCountry && !isSpinning && (
          <p style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.3rem, 3vw, 2rem)',
            color: '#f0eaff',
            letterSpacing: '-0.01em',
          }}>
            {targetCountry.emoji} {targetCountry.name}
          </p>
        )}
      </div>
    </main>
  );
}
