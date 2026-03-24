'use client';

import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
const Globe = dynamic(() => import('./components/Globe'), { ssr: false });
import SpinButton from './components/SpinButton';
import Pin from './components/Pin';
import ResultPopup from './components/ResultPopup';
import countries from './data/countries';

export default function Home() {
  const [lastCountry, setLastCountry]     = useState(null);
  const [targetCountry, setTargetCountry] = useState(null);
  const [isSpinning, setIsSpinning]       = useState(false);
  const [isDisabled, setIsDisabled]       = useState(false);
  const [showPin, setShowPin]             = useState(false);
  const [showPopup, setShowPopup]         = useState(false);
  const [isLoading, setIsLoading]         = useState(false);
  const [funFact, setFunFact]             = useState(null);
  const [slackMessage, setSlackMessage]   = useState(null);

  // Hold the API promise so animation and fetch race each other
  const apiPromiseRef = useRef(null);

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
    setShowPopup(false);
    setFunFact(null);
    setSlackMessage(null);

    // Fire API call in parallel with the globe animation
    apiPromiseRef.current = fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ country: pick.name }),
    }).then((r) => r.json());
  }

  async function handleAnimationComplete() {
    setIsSpinning(false);
    setShowPin(true);

    // Wait 500ms then open popup in loading state
    await new Promise((r) => setTimeout(r, 500));
    setShowPopup(true);
    setIsLoading(true);
    setIsDisabled(false);

    // Await the API (may already be resolved)
    try {
      const data = await apiPromiseRef.current;
      setFunFact(data.fun_fact ?? null);
      setSlackMessage(data.slack_message ?? null);
    } catch {
      setFunFact("Ce pays est plein de surprises qui n'attendent que toi !");
      setSlackMessage(`Salut [Manager], j'ai absolument besoin de vacances en ${targetCountry?.name} ✈️🌍 C'est une urgence cosmique. Je reviendrai transformé(e) et ultra-motivé(e), promis ! 🙏`);
    } finally {
      setIsLoading(false);
    }
  }

  function handleClose() {
    setShowPopup(false);
  }

  function handleRelaunch() {
    setShowPopup(false);
    setShowPin(false);
    handleSpin();
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

      <div className="flex justify-center pb-16 pt-8">
        <SpinButton onClick={handleSpin} disabled={isDisabled} />
      </div>

      {showPopup && targetCountry && (
        <ResultPopup
          country={targetCountry}
          funFact={funFact}
          slackMessage={slackMessage}
          isLoading={isLoading}
          onClose={handleClose}
          onRelaunch={handleRelaunch}
        />
      )}
    </main>
  );
}
