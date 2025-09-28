
'use client';

import { useState, useEffect, useCallback } from 'react';

export function ScrollPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);

  const checkScrollPosition = useCallback(() => {
    if (hasAppeared) return;

    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;

    if (scrollPosition >= pageHeight - 100) {
      setIsVisible(true);
      setHasAppeared(true);
    }
  }, [hasAppeared]);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, [checkScrollPosition]);

  const hidePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div id="scroll-popup" className={`scroll-popup ${isVisible ? 'visible' : ''}`}>
      <button className="close-popup-btn" onClick={hidePopup}>&times;</button>
      <div className="popup-box-content">
        <h2>Gostou do que viu?</h2>
        <p>Assine agora e desbloqueie todo o conteúdo exclusivo da Kamylinha Santos sem nenhuma censura.</p>
        <a href="#assinaturas" className="popup-action-btn" onClick={hidePopup}>Desbloquear Conteúdo Completo</a>
      </div>
    </div>
  );
}
