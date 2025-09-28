
'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

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
        <div className="scroll-popup-box">
            <button className="close-popup-btn" onClick={hidePopup}>&times;</button>
            <div className="popup-box-content">
                <Image src="https://i.imgur.com/gY9k2Yy.png" alt="Logo Privacy" width={150} height={30} className="mx-auto mb-4" />
                <h2>A melhor parte começa agora...</h2>
                <p>Você chegou até aqui, meu bem. Para ver o conteúdo que eu não ouso postar em nenhum outro lugar, assine e libere tudo. Sem censura. 😉</p>
                <a href="#assinaturas" className="popup-action-btn" onClick={hidePopup}>Desbloquear Tudo 😈</a>
            </div>
        </div>
    </div>
  );
}
