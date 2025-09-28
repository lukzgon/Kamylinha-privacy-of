
'use client';

import Image from 'next/image';
import { Heart, Library, Video, MessageSquare, Bookmark, PlayCircle, Expand, Lock, Camera, VideoIcon, MoreHorizontal, User, Tag, Image as ImageIcon, Film } from 'lucide-react';
import { Playfair_Display, Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { ScrollPopup } from './scroll-popup';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const fontPlayfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-headline',
});

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

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
          <span className={cn('plan-tag', isPopular ? 'popular-tag' : tag.className)}>
            {tag.text}
          </span>
        )}
      </div>
      <div className="plan-price"><strong>{price}</strong></div>
    </a>
  );
}

function FeedPost({ id, seed, likes, comments }: { id?: string; seed: number; likes: number; comments: number }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const avatarImage = PlaceHolderImages.find(img => img.id === 'profile-avatar');
  
  const handleLikeClick = () => {
    setIsLiked(prevIsLiked => {
      const newIsLiked = !prevIsLiked;
      setLikeCount(prevCount => (newIsLiked ? prevCount + 1 : prevCount - 1));
      return newIsLiked;
    });
  };

  return (
    <div id={id} className="feed-item">
        <div className="feed-item-header">
          <Image src={avatarImage?.imageUrl || "https://via.placeholder.com/40"} alt="Avatar" width={40} height={40} className="header-avatar" />
          <div className="header-names">
              <strong>euukamylinhasantos</strong>
              <span>@euukamylinhasantos</span>
          </div>
          <MoreHorizontal className="h-5 w-5 text-gray-500" />
        </div>
      <div className="feed-item-media">
          <Image src={`https://via.placeholder.com/400x500/${seed.toString(16)}${seed.toString(16)}${seed.toString(16)}/fff`} alt="Mídia Bloqueada" width={400} height={500} className="media-background" data-ai-hint="woman content" />
          <div className="locked-overlay">
              <div className="locked-icon">
                <Lock className="h-8 w-8" />
              </div>
              <div className="locked-stats">
                  <Heart className="h-4 w-4" />
                  <span className="locked-like-count">{likeCount}</span>
                  <MessageSquare className="h-4 w-4" />
                  <span>{comments}</span>
              </div>
          </div>
      </div>
      <div className="feed-item-actions">
          <div className="actions-left">
              <div className={cn("like-wrapper", { liked: isLiked })}>
                <button className={cn("action-btn like-btn", { active: isLiked })} onClick={handleLikeClick}>
                    <Heart className="material-symbols-outlined" />
                </button>
                <span className="like-count">{likeCount}</span>
              </div>
          </div>
      </div>
    </div>
  );
}


function MediaGridItem({ seed, type }: { seed: number; type: 'photo' | 'video' }) {
    const imageUrl = `https://via.placeholder.com/300x300/${seed.toString(16)}${seed.toString(16)}${seed.toString(16)}/fff`;
  return (
    <div className="media-item">
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
          <PlayCircle className="h-12 w-12 text-white" />
        ) : (
          <Expand className="h-12 w-12 text-white" />
        )}
      </div>
    </div>
  );
}

function MediaGrid() {
  const mediaItems = [
    { seed: 0xccc, type: 'photo' },
    { seed: 0xbbb, type: 'video' },
    { seed: 0xc9c9c9, type: 'photo' },
  ];

  return (
    <div className="media-grid">
      {mediaItems.map((item, index) => (
        <MediaGridItem key={index} seed={item.seed} type={item.type} />
      ))}
    </div>
  );
}


export function HomePageContent() {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  
  const bannerImage = PlaceHolderImages.find(img => img.id === 'profile-banner');
  const avatarImage = PlaceHolderImages.find(img => img.id === 'profile-avatar');

  const feedPosts = [
    { id: undefined, seed: 0xccc, likes: 248, comments: 126 },
    { id: undefined, seed: 0xbbb, likes: 549, comments: 362 },
    { id: undefined, seed: 0xd1d1d1, likes: 312, comments: 98 },
    { id: undefined, seed: 0xc9c9c9, likes: 488, comments: 210 },
    { id: undefined, seed: 0xdddddd, likes: 620, comments: 340 },
    { id: undefined, seed: 0xe0e0e0, likes: 199, comments: 85 },
    { id: 'popup-reset-card', seed: 0xd8d8d8, likes: 715, comments: 450 },
    { id: 'popup-trigger-card', seed: 0xe8e8e8, likes: 432, comments: 199 },
  ];
  

  return (
    <>
      <div className={cn("flex min-h-screen flex-col items-center bg-background font-body", fontInter.variable, fontPlayfair.variable)}>
        <header className="page-header">
          <Image
            src="https://i.imgur.com/gY9k2Yy.png"
            alt="Logo Privacy"
            width={125}
            height={24}
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
                                <span className="stat-item"><ImageIcon className="h-5 w-5 mr-1.5"/> 401</span>
                                <span className="stat-item"><Film className="h-5 w-5 mr-1.5"/> 438</span>
                                <span className="stat-item"><Heart className="h-5 w-5 mr-1.5"/> 229k</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src={avatarImage?.imageUrl || "https://i.postimg.cc/MGXbTBxx/photo-2025-09-26-22-20-19-1.jpg"} alt="Foto de Perfil" width={150} height={150} className="avatar" data-ai-hint={avatarImage?.imageHint || "woman portrait"} />
                <div className="profile-card-body">
                    <div className="username-section">
                        <h2>euukamylinhasantos</h2>
                        <p>@euukamylinhasantos</p>
                    </div>
                    <div className="description-wrapper">
                         <p className={cn("description-text", !isDescriptionExpanded && "collapsed")}>
                            Meu amor... não adianta resistir, eu sei que você quer... e eu tô aqui só pra te deixar maluco. 😈🍓 Por um valorzinho que nem dói... você vai ter acesso total ao meu lado mais safado e proibido. São mais de 800 fotos e vídeos, me mostrando como você nunca viu... peladinha, provocando, brincando... me tocando... só pra deixar a sua imaginação no talo. 💦👅 Tem conteúdo só meu, tem com as minhas amigas, tem eu fazendo o que você sempre sonhou... e olha... não tem censura, não tem frescura. Só pura safadeza, pra te deixar duro de vontade. 😈 E o melhor? Você fala comigo direto no chat...
                        </p>
                        <button className="read-more-btn" onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}>
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
                price="R$ 19,90"
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
            <TabsList className="feed-tabs justify-center">
              <TabsTrigger value="posts" className="tab-link">93 postagens</TabsTrigger>
              <TabsTrigger value="media" className="tab-link" disabled>412 mídias</TabsTrigger>
            </TabsList>
            <TabsContent value="posts" className="feed-content active">
              <div className="posts-grid">
                {feedPosts.map((post, index) => (
                  <FeedPost key={index} id={post.id} seed={post.seed} likes={post.likes} comments={post.comments} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="media" className="feed-content">
              <MediaGrid />
            </TabsContent>
          </Tabs>
        </main>
      </div>
      <ScrollPopup />
    </>
  );
}

    