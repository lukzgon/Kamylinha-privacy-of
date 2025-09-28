
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

export function AgeGatePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="w-full max-w-sm rounded-lg bg-card p-8 text-center shadow-lg">
        <Image
          src="https://i.postimg.cc/LXCqwCGJ/images-logo-1.png"
          alt="Logo Privacy"
          width={128}
          height={31}
          className="mx-auto mb-6 h-auto"
        />
        <p className="mb-2 text-base font-medium text-card-foreground">
          Este site é uma comunidade adulta que contém material sexualmente explícito.
        </p>
        <p className="mb-6 text-base font-medium text-card-foreground">
          Você deve ter 18 anos ou mais para entrar.
        </p>
        <Button onClick={handleEnter} className="w-full" size="lg">
          Tenho 18 anos ou mais - Entrar
        </Button>
      </div>
    </div>
  );
}
