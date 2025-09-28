
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export function AgeGatePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true);

  useEffect(() => {
    const ageGateDismissed = localStorage.getItem('ageGateDismissed');
    if (ageGateDismissed !== 'true') {
      setIsVisible(true);
      setIsDismissed(false);
    }
  }, []);

  const handleEnter = () => {
    localStorage.setItem('ageGateDismissed', 'true');
    setIsDismissed(true);
    // After the transition, hide the component completely
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-[#F5F3F2] p-4 transition-opacity duration-500 ease-in-out',
        isDismissed ? 'opacity-0' : 'opacity-100'
      )}
    >
      <div className="w-full max-w-lg text-center">
        <Image
          src="https://i.postimg.cc/LXCqwCGJ/images-logo-1.png"
          alt="Logo Privacy"
          width={200}
          height={48}
          className="mx-auto mb-8 h-auto"
        />
        <p className="mb-5 text-lg/relaxed font-medium text-slate-800">
          Este site é uma comunidade adulta que contém material sexualmente explícito.
        </p>
        <p className="mb-8 text-lg/relaxed font-medium text-slate-800">
          Você deve ter 18 anos ou mais para entrar.
        </p>
        <Button
          onClick={handleEnter}
          className="w-full max-w-md bg-[#E5B390] text-white hover:bg-[#D9A380] uppercase font-bold text-base"
          size="lg"
        >
          Tenho 18 anos ou mais - Entrar
        </Button>
      </div>
    </div>
  );
}
