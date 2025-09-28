
'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export function ScrollPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [popupHasAppeared, setPopupHasAppeared] = useState(false);

  const checkScrollPosition = useCallback(() => {
    if (popupHasAppeared) return;

    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    
    if (scrollPosition >= pageHeight - 100) {
        setIsVisible(true);
        setPopupHasAppeared(true);
    }
  }, [popupHasAppeared]);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, [checkScrollPosition]);

  const hidePopup = () => {
    setIsVisible(false);
  };

  const handleActionClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    hidePopup();
    const targetId = event.currentTarget.getAttribute('href');
    if (targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
  };

  return (
    <div id="scroll-popup" className={`scroll-popup-overlay ${isVisible ? 'visible' : ''}`}>
        <div className="scroll-popup-box">
            <button className="close-popup-btn" onClick={hidePopup}>&times;</button>
            <div className="popup-content-inner">
                <Image src="https://i.imgur.com/gY9k2Yy.png" alt="Logo Privacy" width={120} height={25} className="popup-logo" />
                <h2>A melhor parte começa agora...</h2>
                <p>Você chegou até aqui, meu bem. Para ver o conteúdo que eu não ouso postar em nenhum outro lugar, assine e libere tudo. Sem censura. 😉</p>
                <a href="#assinaturas" className="popup-action-btn" onClick={handleActionClick}>Desbloquear Tudo 😈</a>
            </div>
        </div>
    </div>
  );
}

    