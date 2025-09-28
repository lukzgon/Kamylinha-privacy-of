
'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export function ScrollPopup() {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = useCallback(() => {
    // Usando o método mais confiável para altura total da página
    const pageHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.innerHeight + window.scrollY;
    const isPopupCurrentlyVisible = document.getElementById('scroll-popup')?.classList.contains('visible');

    console.log(`Verificando rolagem: Posição=${Math.round(scrollPosition)}, Altura Total=${pageHeight}, Pop-up Visível=${isVisible}`);
    
    // Gatilho quando o usuário estiver a 150 pixels do final
    if (scrollPosition >= pageHeight - 150 && !isPopupCurrentlyVisible) {
        console.log('%cATIVANDO O GATILHO! Mostrando pop-up.', 'color: green; font-weight: bold;');
        setIsVisible(true);
    }
  }, [isVisible]);

  useEffect(() => {
    console.log('--- SCRIPT DE DIAGNÓSTICO DO POP-UP INICIADO ---');
    const scrollPopupEl = document.getElementById('scroll-popup');
    const closePopupBtnEl = document.querySelector('.close-popup-btn');
    const popupActionBtnEl = document.querySelector('.popup-action-btn');

    if (scrollPopupEl && closePopupBtnEl && popupActionBtnEl) {
        console.log('Elementos do Pop-up encontrados com sucesso.');
    } else {
        console.error('ERRO: Um ou mais elementos do pop-up não foram encontrados. Verifique os IDs e classes no HTML.');
    }

    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, [checkScrollPosition]);

  const hidePopup = () => {
    console.log('%cFECHANDO O POP-UP! O gatilho agora pode ser ativado novamente.', 'color: red; font-weight: bold;');
    setIsVisible(false);
  };

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
