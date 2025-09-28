
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export function ScrollPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const isTriggerArmed = useRef(true);

  useEffect(() => {
    const triggerCard = document.getElementById('popup-trigger-card');
    const resetCard = document.getElementById('popup-reset-card');

    if (!triggerCard || !resetCard) {
      return;
    }

    const showPopup = () => {
      if (isTriggerArmed.current) {
        setIsVisible(true);
        isTriggerArmed.current = false;
      }
    };

    const triggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showPopup();
          }
        });
      },
      { threshold: 0.5 }
    );

    const resetObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isTriggerArmed.current = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    triggerObserver.observe(triggerCard);
    resetObserver.observe(resetCard);

    return () => {
      triggerObserver.unobserve(triggerCard);
      resetObserver.unobserve(resetCard);
    };
  }, []);

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
          block: 'start',
        });
      }
    }
  };

  return (
    <div
      id="scroll-popup"
      className={`scroll-popup-overlay ${isVisible ? 'visible' : ''}`}
    >
      <div className="scroll-popup-box">
        <button className="close-popup-btn" onClick={hidePopup}>
          &times;
        </button>
        <div className="popup-content-inner">
          <Image
            src="https://i.postimg.cc/LXCqwCGJ/images-logo-1.png"
            alt="Logo Privacy"
            width={120}
            height={25}
            className="popup-logo mx-auto"
          />
          <h2>A melhor parte começa agora...</h2>
          <p>
            Você chegou até aqui, meu bem. Para ver o conteúdo que eu não ouso
            postar em nenhum outro lugar, assine e libere tudo. Sem censura. 😉
          </p>
          <a
            href="#assinaturas"
            className="popup-action-btn"
            onClick={handleActionClick}
          >
            Desbloquear Tudo 😈
          </a>
        </div>
      </div>
    </div>
  );
}
