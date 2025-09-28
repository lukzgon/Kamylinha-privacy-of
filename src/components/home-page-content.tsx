
'use client';

import Image from 'next/image';
import { Heart, Library, Video, MessageSquare, Bookmark, PlayCircle, Expand, Lock, MoreHorizontal, Camera, VideoIcon, Star } from 'lucide-react';
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

function FeedPost({ seed, likes, comments }: { seed: number; likes: number; comments: number }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const avatarImage = PlaceHolderImages.find(img => img.id === 'profile-avatar');

  return (
    <div className="feed-item">
      <div className="feed-item-header">
          {avatarImage && <Image src={avatarImage.imageUrl} alt="Avatar" width={40} height={40} className="header-avatar" />}
          <div className="header-names">
              <strong>euukamylinhasantos</strong>
              <span>@euukamylinhasantos</span>
          </div>
      </div>
      <div className="feed-item-media">
          <Image src={`https://picsum.photos/seed/${seed}/400/500`} alt="Mídia Bloqueada" width={400} height={500} className="media-background" data-ai-hint="woman content" />
          <div className="locked-overlay">
              <div className="locked-icon">
                <Lock className="h-8 w-8" />
              </div>
              <div className="locked-stats">
                  <div className="flex items-center gap-1.5">
                    <Heart className="h-4 w-4" /> {likes}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageSquare className="h-4 w-4" /> {comments}
                  </div>
              </div>
          </div>
      </div>
      <div className="feed-item-actions">
          <div className="actions-left">
              <button className={cn("action-btn like-btn", { active: isLiked })} onClick={() => setIsLiked(!isLiked)}>
                  <Heart className="material-symbols-outlined" />
              </button>
              <button className="action-btn comment-btn">
                  <MessageSquare className="material-symbols-outlined" />
              </button>
          </div>
          <div className="actions-right">
              <button className={cn("action-btn bookmark-btn", { active: isBookmarked })} onClick={() => setIsBookmarked(!isBookmarked)}>
                  <Bookmark className="material-symbols-outlined" />
              </button>
          </div>
      </div>
    </div>
  );
}


function MediaGridItem({ seed, type }: { seed: number; type: 'photo' | 'video' }) {
    const imageUrl = `https://picsum.photos/seed/${seed}/300/300`;
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

export function HomePageContent() {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  
  const bannerImage = PlaceHolderImages.find(img => img.id === 'profile-banner');
  const avatarImage = PlaceHolderImages.find(img => img.id === 'profile-avatar');

  const feedPosts = [
    { seed: 1, likes: 248, comments: 126 },
    { seed: 2, likes: 549, comments: 362 },
    { seed: 3, likes: 312, comments: 98 },
  ];
  
  const mediaItems = [
    { seed: 10, type: 'photo' },
    { seed: 11, type: 'video' },
    { seed: 12, type: 'photo' },
    { seed: 13, type: 'photo' },
    { seed: 14, type: 'photo' },
    { seed: 15, type: 'video' },
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
                    {bannerImage && <Image src={bannerImage.imageUrl} alt={bannerImage.description} width={850} height={220} className="banner-image" data-ai-hint={bannerImage.imageHint} />}
                    <div className="banner-overlay">
                        <div className="banner-text">
                            <h1>Kamylinha Santos</h1>
                            <div className="stats">
                                <span className="stat-item"><Camera className="h-5 w-5 mr-1.5"/> 401</span>
                                <span className="stat-item"><VideoIcon className="h-5 w-5 mr-1.5"/> 438</span>
                                <span className="stat-item"><Heart className="h-5 w-5 mr-1.5"/> 229k</span>
                            </div>
                        </div>
                    </div>
                </div>
                {avatarImage && <Image src="https://i.postimg.cc/MGXbTBxx/photo-2025-09-26-22-20-19-1.jpg" alt={avatarImage.description} width={150} height={150} className="avatar" data-ai-hint={avatarImage.imageHint} />}
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

          <div className="feed-section">
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="feed-tabs">
                <TabsTrigger value="posts" className="tab-link">93 postagens</TabsTrigger>
                <TabsTrigger value="media" className="tab-link">412 mídias</TabsTrigger>
              </TabsList>
              <TabsContent value="posts" className="feed-content">
                <div className="posts-grid">
                  {feedPosts.map((post) => (
                    <FeedPost key={post.seed} seed={post.seed} likes={post.likes} comments={post.comments} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="media" className="feed-content">
                <div className="media-grid mt-4">
                  {mediaItems.map((item) => (
                    <MediaGridItem key={item.seed} seed={item.seed} type={item.type as 'photo' | 'video'} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <ScrollPopup />
    </>
  );
}
