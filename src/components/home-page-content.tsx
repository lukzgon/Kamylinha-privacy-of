
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { ScrollPopup } from './scroll-popup';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollToTopButton } from './scroll-to-top-button';

type PlanProps = {
  duration: string;
  price: string;
  isPopular?: boolean;
  tag?: {
    text: string;
    className: string;
  };
};

function Plan({ duration, price, isPopular = false, tag }: PlanProps) {
  return (
    <a
      href="#"
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
      <div className="plan-price"><strong>{price}</strong></div>
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
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const bannerImage = PlaceHolderImages.find(img => img.id === 'profile-banner');
  const avatarImage = PlaceHolderImages.find(img => img.id === 'profile-avatar');

  const feedPosts = [
    { id: undefined, src: 'https://i.postimg.cc/Z51g67yK/photo-2025-09-24-18-41-28-1.jpg', likes: 248, comments: 126 },
    { id: undefined, src: 'https://via.placeholder.com/400x500/bbb/fff', likes: 549, comments: 362 },
    { id: undefined, src: 'https://via.placeholder.com/400x500/d1d1d1/fff', likes: 312, comments: 98 },
    { id: undefined, src: 'https://via.placeholder.com/400x500/c9c9c9/fff', likes: 488, comments: 210 },
    { id: undefined, src: 'https://via.placeholder.com/400x500/dddddd/fff', likes: 620, comments: 340 },
    { id: undefined, src: 'https://via.placeholder.com/400x500/e0e0e0/fff', likes: 199, comments: 85 },
    { id: 'popup-reset-card', src: 'https://via.placeholder.com/400x500/d8d8d8/fff', likes: 715, comments: 450 },
    { id: 'popup-trigger-card', src: 'https://via.placeholder.com/400x500/e8e8e8/fff', likes: 432, comments: 199 },
  ];
  
  const handleMediaClick = () => {
    setIsPopupVisible(true);
  };
  
  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded(prevState => !prevState);
  };

  return (
    <>
        <header className="page-header">
          <Image
            src="https://i.postimg.cc/LXCqwCGJ/images-logo-1.png"
            alt="Logo Privacy"
            width={150}
            height={35}
            className="logo"
          />
        </header>
      <main className="content">
          <div className="profile-card">
              <div className="banner">
                  <Image src={bannerImage?.imageUrl || "https://via.placeholder.com/850x220/333/fff"} alt="Banner do Perfil" width={850} height={220} className="banner-image" data-ai-hint={bannerImage?.imageHint || "woman beach"} />
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
                      <p>@euukamylinhasantos</p>                  </div>
                  <div className={cn("description-wrapper", !isDescriptionExpanded && "collapsed")}>
                       <p className="description-text">
                          Meu amor... não adianta resistir, eu sei que você quer... e eu tô aqui só pra te deixar maluco. 😈🍓 Por um valorzinho que nem dói... você vai ter acesso total ao meu lado mais safado e proibido. São mais de 800 fotos e vídeos, me mostrando como você nunca viu... peladinha, provocando, brincando... me tocando... só pra deixar a sua imaginação no talo. 💦👅 Tem conteúdo só meu, tem com as minhas amigas, tem eu fazendo o que você sempre sonhou... e olha... não tem censura, não tem frescura. Só pura safadeza, pra te deixar duro de vontade. 😈 E o melhor? Você fala comigo direto no chat...
                      </p>
                      <button className="read-more-btn" onClick={toggleDescription}>
                        {isDescriptionExpanded ? 'Ler menos' : 'Ler mais'}
                      </button>
                  </div>
              </div>
          </div>
        
        <div id="assinaturas" className="info-card">
          <h3>Assinaturas</h3>
          <div className="mt-4 flex flex-col gap-3">
            <Plan
              duration="7 Dias"
              price="R$ 9,90"
              isPopular={true}
              tag={{ text: 'MAIS POPULAR', className: 'popular-tag' }}
            />
            <h4 className="promotions-title">
              Promoções
            </h4>
             <Plan
              duration="1 Mês"
              price="R$ 15,90"
              tag={{ text: 'ECONOMIA', className: 'economy-tag' }}
            />
            <Plan
              duration="3 Meses"
              price="R$ 29,90"
              tag={{ text: 'MELHOR OFERTA', className: 'best-offer-tag' }}
            />
          </div>
        </div>

        <Tabs defaultValue="posts" className="feed-section">
          <TabsList className="feed-tabs">
            <TabsTrigger value="posts" className="tab-link active">62 postagens</TabsTrigger>
            <TabsTrigger value="media" className="tab-link" disabled>412 mídias</TabsTrigger>
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
      <ScrollPopup isVisible={isPopupVisible} onClose={handleClosePopup} onShow={handleMediaClick} />
      <ScrollToTopButton />
    </>
  );
}

    

    

