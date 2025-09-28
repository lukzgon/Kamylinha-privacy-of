
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

export function AgeGate() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // This check needs to run only on the client.
    const ageGateDismissed = localStorage.getItem('ageGateDismissed');
    if (ageGateDismissed !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleEnter = () => {
    localStorage.setItem('ageGateDismissed', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup-overlay">
        <div className="popup-content">
            <Image src="https://i.postimg.cc/LXCqwCGJ/images-logo-1.png" alt="Logo Privacy" width={200} height={48} className="popup-logo mx-auto" />
            <p>Este site é uma comunidade adulta que contém material sexualmente explícito.</p>
            <p>Você deve ter 18 anos ou mais para entrar.</p>
            <Button id="age-gate-button" onClick={handleEnter}>Tenho 18 anos ou mais - Entrar</Button>
        </div>
    </div>
  );
}
