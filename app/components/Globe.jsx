'use client';

import { useEffect, useRef, useState } from 'react';
import GlobeGL from 'react-globe.gl';

const COUNTRY_COLORS = [
  '#FF6B6B', '#FF8E53', '#FFC857', '#A8E063',
  '#56CCF2', '#6C63FF', '#F72585', '#4CC9F0',
  '#7BF1A8', '#FFB347', '#C77DFF', '#06D6A0',
  '#FF4D6D', '#F4A261', '#2EC4B6', '#E9C46A',
];

export default function Globe({ targetCountry, isSpinning, onAnimationComplete }) {
  const globeEl = useRef();
  const containerRef = useRef(null);
  const [countries, setCountries] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const animRef = useRef(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then((r) => r.json())
      .then((data) => setCountries(data.features));
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
    });
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  // Init auto-rotation
  useEffect(() => {
    if (!globeEl.current) return;
    const controls = globeEl.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;
    controls.enableDamping = true;
  }, []);

  // Spin animation
  useEffect(() => {
    if (!isSpinning || !targetCountry || !globeEl.current) return;

    if (animRef.current) cancelAnimationFrame(animRef.current);

    const controls = globeEl.current.controls();
    controls.enabled = false;
    controls.autoRotate = true;

    const SPIN_MS = 2000;   // full-speed spin
    const DECEL_MS = 800;   // deceleration ramp
    const MAX_SPEED = 12;
    const start = performance.now();
    let landingTriggered = false;

    const frame = (now) => {
      const elapsed = now - start;

      if (elapsed < SPIN_MS) {
        // Full speed
        controls.autoRotateSpeed = MAX_SPEED;
        animRef.current = requestAnimationFrame(frame);
      } else if (elapsed < SPIN_MS + DECEL_MS) {
        // Ease-out quad deceleration
        const t = (elapsed - SPIN_MS) / DECEL_MS;
        controls.autoRotateSpeed = MAX_SPEED * (1 - t * t);
        animRef.current = requestAnimationFrame(frame);
      } else if (!landingTriggered) {
        // Stop + smooth camera landing
        landingTriggered = true;
        controls.autoRotate = false;
        controls.autoRotateSpeed = 0;
        globeEl.current?.pointOfView(
          { lat: targetCountry.lat, lng: targetCountry.lng, altitude: 1.8 },
          1100
        );
        animRef.current = setTimeout(() => {
          controls.enabled = true;
          console.log('[Globe] calling onAnimationComplete');
          onAnimationComplete?.();
        }, 1150);
      }
    };

    animRef.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animRef.current);
      clearTimeout(animRef.current);
    };
  }, [isSpinning, targetCountry]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '58vh' }}>
      <GlobeGL
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="#0a1628"
        atmosphereColor="#3a86ff"
        atmosphereAltitude={0.15}
        polygonsData={countries}
        polygonCapColor={(feat) =>
          COUNTRY_COLORS[countries.indexOf(feat) % COUNTRY_COLORS.length]
        }
        polygonSideColor={() => 'rgba(0,0,0,0.15)'}
        polygonStrokeColor={() => 'rgba(255,255,255,0.08)'}
        polygonAltitude={0.008}
        polygonsTransitionDuration={0}
      />
    </div>
  );
}
