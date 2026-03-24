'use client';

import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
const Globe = dynamic(() => import('./components/Globe'), { ssr: false });
import SpinButton from './components/SpinButton';
import Pin from './components/Pin';
import ResultPanel from './components/ResultPopup';
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

    apiPromiseRef.current = fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ country: pick.name }),
    }).then((r) => r.json());
  }

  function handleAnimationComplete() {
    setIsSpinning(false);
    setShowPin(true);

    setTimeout(() => {
      setShowPopup(true);
      setIsLoading(true);
      setIsDisabled(false);

      apiPromiseRef.current
        .then((data) => {
          setFunFact(data.fun_fact ?? null);
          setSlackMessage(data.slack_message ?? null);
        })
        .catch(() => {
          setFunFact("Ce pays est plein de surprises qui n'attendent que toi !");
          setSlackMessage("Salut Clara la boss, j'ai besoin de vacances de toute urgence. C'est une question de survie. ✈️🌍");
        })
        .finally(() => setIsLoading(false));
    }, 500);
  }

  function handleRelaunch() {
    setShowPopup(false);
    setShowPin(false);
    handleSpin();
  }

  return (
    <main style={{ height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ flexShrink: 0, paddingTop: '2rem', paddingBottom: '1rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, #c4b5fd 0%, #f0eaff 50%, #a78bfa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Spin & Fly ✈️
        </h1>
      </header>

      {/* Two-column body — fills remaining height */}
      <div style={{
        flex: 1,
        minHeight: 0,
        display: 'flex',
        alignItems: 'stretch',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* LEFT — Globe + button */}
        <div style={{
          flex: showPopup ? '0 0 55%' : '1',
          transition: 'flex 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          minWidth: 0,
          overflow: 'hidden',
        }}>
          <div style={{ position: 'relative', width: '100%', flex: 1, minHeight: 0 }}>
            <Globe
              targetCountry={targetCountry}
              isSpinning={isSpinning}
              onAnimationComplete={handleAnimationComplete}
            />
            <Pin visible={showPin} />
          </div>

          <div style={{ flexShrink: 0, paddingTop: '1rem', paddingBottom: '1.5rem' }}>
            <SpinButton onClick={handleSpin} disabled={isDisabled} />
          </div>
        </div>

        {/* RIGHT — Console panel */}
        {showPopup && targetCountry && (
          <div style={{
            flex: '0 0 45%',
            minWidth: 0,
            display: 'flex',
            alignItems: 'stretch',
            padding: '1rem 1.5rem 1.5rem 0.75rem',
          }}>
            <ResultPanel
              country={targetCountry}
              funFact={funFact}
              slackMessage={slackMessage}
              isLoading={isLoading}
              onClose={() => setShowPopup(false)}
              onRelaunch={handleRelaunch}
            />
          </div>
        )}
      </div>
    </main>
  );
}
