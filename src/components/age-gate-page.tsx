
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { HomePageContent } from './home-page-content';

export function AgeGate() {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const ageGateDismissed = localStorage.getItem('ageGateDismissed');
    if (ageGateDismissed === 'true') {
      setIsVerified(true);
    }
  }, []);

  const handleEnter = () => {
    localStorage.setItem('ageGateDismissed', 'true');
    setIsVerified(true);
  };

  return (
    <>
      <div id="age-gate-page" className="age-gate-page" style={{ display: isVerified ? 'none' : 'flex' }}>
        <div className="age-gate-content">
          <Image src="https://i.postimg.cc/LXCqwCGJ/images-logo-1.png" alt="Logo Privacy" width={250} height={60} className="popup-logo mx-auto" />
          <p>Este site é uma comunidade adulta que contém material sexualmente explícito.</p>
          <p>Você deve ter 18 anos ou mais para entrar.</p>
          <Button className="age-gate-button" onClick={handleEnter}>Tenho 18 anos ou mais - Entrar</Button>
        </div>
      </div>

      <div id="main-content" className="main-content" style={{ display: isVerified ? 'block' : 'none' }}>
        <HomePageContent />
      </div>
    </>
  );
}
