
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { HomePageContent } from './home-page-content';
import { cn } from '@/lib/utils';

export function AgeGate() {
  const [isVerified, setIsVerified] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const ageGateDismissed = localStorage.getItem('ageGateDismissed');
    if (ageGateDismissed === 'true') {
      setIsVerified(true);
      setIsContentVisible(true);
    }
  }, []);

  const handleEnter = () => {
    localStorage.setItem('ageGateDismissed', 'true');
    setIsVerified(true);
    setTimeout(() => setIsContentVisible(true), 50);
  };

  if (!isVerified) {
    return (
      <div id="age-gate-page" className="age-gate-page">
        <div className="age-gate-card">
          <Image src="https://i.postimg.cc/LXCqwCGJ/images-logo-1.png" alt="Logo Privacy" width={160} height={40} className="popup-logo mx-auto" />
          <h1>Você tem 18 anos ou mais?</h1>
          <Button id="age-gate-enter-button" className="age-gate-button" onClick={handleEnter}>Sim, tenho mais de 18 anos</Button>
          <p className="age-gate-disclaimer">
            Atenção: O conteúdo a seguir é explícito e destinado exclusivamente para maiores de 18 anos. Ao prosseguir, você confirma que possui idade legal e assume total responsabilidade por visualizar este material.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="main-content"
      className={cn(
        'transition-opacity duration-500',
        isContentVisible ? 'opacity-100' : 'opacity-0'
      )}
    >
      <HomePageContent />
    </div>
  );
}
