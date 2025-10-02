
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState, useEffect, useRef } from 'react';
import { ScrollPopup } from './scroll-popup';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollToTopButton } from './scroll-to-top-button';

type PlanProps = {
  duration: string;
  price: string;
  oldPrice?: string;
  isPopular?: boolean;
  tag?: {
    text: string;
    className: string;
  };
  href?: string;
};

function Plan({ duration, price, oldPrice, isPopular = false, tag, href = '#' }: PlanProps) {
  return (
    <a
      href={href}
      className={cn(
        'plan-button',
        isPopular ? 'popular' : ''
      )}
    >
      <div className="plan-info">
        <strong>{duration}</strong>
        {tag && (
            <span className={cn('plan-tag', tag.className)}>
              {tag.text}
            </span>
          )}
      </div>
      <div className="plan-price-group">
        {oldPrice && <span className="old-price">{oldPrice}</span>}
        <strong className="plan-price">{price}</strong>
      </div>
    </a>
  );
}

function FeedPost({ id, src, likes, comments, onMediaClick }: { id?: string; src: string; likes: number; comments: number; onMediaClick: () => void; }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(prev => !prev);
  };
  
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBookmarkClick = () => {
    setIsBookmarked(prevIsBookmarked => !prevIsBookmarked);
  };

  const avatarImage = PlaceHolderImages.find(img => img.id === 'profile-avatar');

  return (
    <div id={id} className="feed-item">
        <div className="feed-item-header">
          <Image src={avatarImage?.imageUrl || "https://via.placeholder.com/40"} alt="Avatar" width={40} height={40} className="header-avatar" />
          <div className="header-names">
              <strong>euukamylinhasantos</strong>
              <span>@euukamylinhasantos</span>
          </div>
          <span className="material-symbols-outlined">more_horiz</span>
        </div>
      <div className="feed-item-media" onClick={onMediaClick}>
          <Image src={src} alt="Mídia Bloqueada" fill style={{ objectFit: 'cover' }} data-ai-hint="woman content" />
          <div className="locked-overlay">
              <div className="locked-icon">
                <span className="material-symbols-outlined">lock</span>
              </div>
              <div className="locked-stats">
                  <span className="material-symbols-outlined">favorite</span>
                  <span className="locked-like-count">{likeCount}</span>
                  <span className="material-symbols-outlined">chat_bubble</span>
                  <span>{comments}</span>
              </div>
          </div>
      </div>
      <div className="feed-item-actions">
          <div className="actions-left">
              <button className={cn("action-btn like-btn", { active: isLiked })} onClick={handleLikeClick}>
                  <span className="material-symbols-outlined">favorite</span>
              </button>
              <button className="action-btn comment-btn"><span className="material-symbols-outlined">chat_bubble</span></button>
          </div>
          <div className="actions-right">
              <button className={cn("action-btn bookmark-btn", { active: isBookmarked })} onClick={handleBookmarkClick}>
                  <span className="material-symbols-outlined">bookmark</span>
              </button>
          </div>
      </div>
    </div>
  );
}


function MediaGridItem({ seed, type, onMediaClick }: { seed: number; type: 'photo' | 'video'; onMediaClick: () => void; }) {
    const imageUrl = `https://via.placeholder.com/300x300/${seed.toString(16)}${seed.toString(16)}${seed.toString(16)}/fff`;
  return (
    <div className="media-item" onClick={onMediaClick}>
      <Image
        src={imageUrl}
        alt="Mídia"
        width={300}
        height={300}
        className="object-cover"
        data-ai-hint="woman content"
      />
      <div className="media-overlay">
        {type === 'video' ? (
          <span className="material-symbols-outlined">play_circle</span>
        ) : (
          <span className="material-symbols-outlined">expand_content</span>
        )}
      </div>
    </div>
  );
}

function MediaGrid({ onMediaClick }: { onMediaClick: () => void }) {
  const mediaItems = [
    { seed: 0xccc, type: 'photo' },
    { seed: 0xbbb, type: 'video' },
    { seed: 0xc9c9c9, type: 'photo' },
  ];

  return (
    <div className="media-grid">
      {mediaItems.map((item, index) => (
        <MediaGridItem key={index} seed={item.seed} type={item.type} onMediaClick={onMediaClick} />
      ))}
    </div>
  );
}


export function HomePageContent() {
  const bannerImage = PlaceHolderImages.find(img => img.id === 'profile-banner');
  const avatarImage = PlaceHolderImages.find(img => img.id === 'profile-avatar');

  const [isBioExpanded, setIsBioExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const bioRef = useRef<HTMLDivElement>(null);

  const bioText = "A fofoca que te choca. 💣 Tudo sobre famosos, reality shows e os babados da internet. Se você não viu aqui, é porque ainda não aconteceu. Chegou primeiro, postou primeiro. ⚡️ Sua dose diária de notícias e fofocas dos famosos em tempo real. Aqui você descobre os segredos e as polêmicas antes de todo mundo. Prepare-se para o choque! Sem papas na língua e com prints na mão. 🤫 Trazemos o que os famosos não querem que você saiba. De cancelamentos a romances secretos, a gente te deixa chocado com a verdade. Siga por sua conta e risco. 😈";

  useEffect(() => {
    if (bioRef.current) {
        if (bioRef.current.scrollHeight > bioRef.current.clientHeight) {
            setShowReadMore(true);
        } else {
            setShowReadMore(false);
        }
    }
  }, [bioText]);

  const feedPosts = [
    { id: 'popup-reset-card', src: 'https://i.postimg.cc/CK3x6Bc3/photo-2025-08-28-16-37-19.jpg', likes: 1248, comments: 126 },
    { id: undefined, src: 'https://i.postimg.cc/DwxfFbm0/kamy02.gif', likes: 2312, comments: 88 },
  ];
  
  const handleMediaClick = () => {
    setIsPopupVisible(true);
  };
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <header className="page-header sticky top-0 bg-white z-20 shadow-md">
          <Image
            src="https://i.postimg.cc/LXCqwCGJ/images-logo-1.png"
            alt="Logo Privacy"
            width={150}
            height={35}
            className="logo"
          />
        </header>
      <div className="mx-auto">
        <main className="content">
            <div className="profile-card">
                <div className="banner">
                    <Image src={bannerImage?.imageUrl || "https://via.placeholder.com/850x280/333/fff"} alt="Banner do Perfil" width={850} height={360} className="banner-image" data-ai-hint={bannerImage?.imageHint || "woman beach"} />
                    <div className="banner-overlay">
                        <div className="banner-text">
                            <h1>Kamylinha Santos</h1>
                            <div className="stats">
                                <span className="stat-item"><span className="material-symbols-outlined">image</span> 67</span>
                                <span className="stat-item"><span className="material-symbols-outlined">movie</span> 82</span>
                                <span className="stat-item"><span className="material-symbols-outlined">favorite</span> 229k</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src={avatarImage?.imageUrl || "https://i.postimg.cc/MGXbTBxx/photo-2025-09-26-22-20-19-1.jpg"} alt="Foto de Perfil" width={150} height={150} className="avatar" data-ai-hint={avatarImage?.imageHint || "woman portrait"} />
                <div className="profile-card-body">
                    <div className="username-section">
                        <h2>Kamylinha Santos</h2>
                        <p>@euukamylinhasantos</p>
                    </div>
                    <div className="profile-bio">
                      <div ref={bioRef} className={cn("bio-text-container", { 'expanded': isBioExpanded })}>
                          <p className="full-bio-text whitespace-pre-wrap">
                            {bioText}
                          </p>
                      </div>
                      {showReadMore && !isBioExpanded && (
                        <button className="read-more-btn" onClick={() => setIsBioExpanded(true)}>
                            Ler mais
                        </button>
                      )}
                      {isBioExpanded && (
                          <button className="read-more-btn" onClick={() => setIsBioExpanded(false)}>
                              Ler menos
                          </button>
                      )}
                    </div>
                </div>
            </div>
          
          <div id="assinaturas" className="info-card">
            <h3>Assinaturas</h3>
            <div className="mt-4 flex flex-col gap-3">
              <Plan
                duration="15 Dias"
                price="R$ 9,90"
                oldPrice="R$ 19,90"
                isPopular={true}
                tag={{ text: 'MAIS POPULAR', className: 'popular-tag' }}
                href="https://www.ggcheckout.com/checkout/v2/FEafE7L5HOa0C5HXItAg"
              />
            </div>
            <h3 className="promotions-title">Promoções</h3>
            <div className="mt-4 flex flex-col gap-3">
               <Plan
                duration="1 Mês"
                price="R$ 17,90"
                oldPrice="R$ 29,90"
                tag={{ text: 'ECONOMIA', className: 'economy-tag' }}
                href="https://www.ggcheckout.com/checkout/v2/oT5Fw5yXz9g1d8C5P3Iq"
              />
              <Plan
                duration="3 Meses"
                price="R$ 27,90"
                oldPrice="R$ 59,90"
                tag={{ text: 'MELHOR OFERTA', className: 'best-offer-tag' }}
                href="https://www.ggcheckout.com/checkout/v2/L8hA9g2C1bF4E7jH6kIm"
              />
            </div>
          </div>

          <Tabs defaultValue="posts" className="feed-section">
            <TabsList className="feed-tabs">
              <TabsTrigger value="posts" className="tab-link active">67 postagens</TabsTrigger>
              <TabsTrigger value="media" className="tab-link" disabled>149 mídias</TabsTrigger>
            </TabsList>
            <TabsContent value="posts" className="feed-content active">
              <div className="posts-grid">
                {feedPosts.map((post, index) => (
                  <FeedPost key={index} id={post.id} src={post.src} likes={post.likes} comments={post.comments} onMediaClick={handleMediaClick} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="media" className="feed-content">
              <MediaGrid onMediaClick={handleMediaClick} />
            </TabsContent>
          </Tabs>
        </main>
      </div>
      <ScrollPopup isVisible={isPopupVisible} onClose={handleClosePopup} onShow={handleMediaClick} />
      <ScrollToTopButton />
    </>
  );
}

    
