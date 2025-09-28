
'use client';

import Image from 'next/image';
import { Heart, Library, Video, MessageSquare, Bookmark, PlayCircle, Expand, Lock } from 'lucide-react';
import { Playfair_Display, Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { ScrollPopup } from './scroll-popup';

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
  const popularStyles = isPopular
    ? 'bg-primary text-primary-foreground border-primary shadow-[0_6px_15px_rgba(255,106,0,0.35)] hover:bg-primary/90 hover:border-primary/90 hover:shadow-[0_8px_20px_rgba(255,106,0,0.5)] hover:-translate-y-[3px]'
    : 'border-primary text-primary bg-white shadow-[0_4px_10px_rgba(255,106,0,0.2)] hover:bg-[#FFF8F2] hover:border-orange-500 hover:text-primary hover:shadow-[0_6px_15px_rgba(255,106,0,0.3)] hover:-translate-y-0.5';

  return (
    <a
      href="#"
      className={cn(
        'plan-button flex items-center justify-between rounded-xl border-2 p-4 font-bold transition-all duration-200 ease-in-out active:scale-[0.98]',
        isPopular ? 'popular' : ''
      )}
    >
      <div className="plan-info flex items-center gap-2.5 text-base font-medium">
        <strong>{duration}</strong>
        {tag && (
          <span className={cn('plan-tag rounded-full px-2 py-1 text-[10px] font-bold uppercase leading-none tracking-wider', tag.className)}>
            {tag.text}
          </span>
        )}
      </div>
      <div className="plan-price text-base font-bold"><strong>{price}</strong></div>
    </a>
  );
}

function FeedPost({ seed, likes, comments }: { seed: number; likes: number; comments: number }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="feed-item">
      <div className="feed-item-header">
          <Image src="https://via.placeholder.com/40" alt="Avatar" width={40} height={40} className="header-avatar" />
          <div className="header-names">
              <strong>euukamylinhasantos</strong>
              <span>@euukamylinhasantos</span>
          </div>
          <span className="material-symbols-outlined">more_horiz</span>
      </div>
      <div className="feed-item-media">
          <Image src={`https://via.placeholder.com/400x500/${'c'.repeat(seed)}/fff`} alt="Mídia Bloqueada" width={400} height={500} className="media-background" />
          <div className="locked-overlay">
              <div className="locked-icon">
                  <span className="material-symbols-outlined">lock</span>
              </div>
              <div className="locked-stats">
                  <span className="material-symbols-outlined">favorite</span> {likes}
                  <span className="material-symbols-outlined">chat_bubble</span> {comments}
              </div>
          </div>
      </div>
      <div className="feed-item-actions">
          <div className="actions-left">
              <button className={cn("action-btn like-btn", { active: isLiked })} onClick={() => setIsLiked(!isLiked)}>
                  <span className="material-symbols-outlined">favorite</span>
              </button>
              <button className="action-btn comment-btn">
                  <span className="material-symbols-outlined">chat_bubble</span>
              </button>
          </div>
          <div className="actions-right">
              <button className={cn("action-btn bookmark-btn", { active: isBookmarked })} onClick={() => setIsBookmarked(!isBookmarked)}>
                  <span className="material-symbols-outlined">bookmark</span>
              </button>
          </div>
      </div>
    </div>
  );
}


function MediaGridItem({ seed, type }: { seed: number; type: 'photo' | 'video' }) {
  const colors = ['ccc', 'bbb', 'c9c9c9'];
  const color = colors[seed % colors.length];
  return (
    <div className="media-item">
      <Image
        src={`https://via.placeholder.com/300x300/${color}/fff`}
        alt="Mídia"
        width={300}
        height={300}
        className="object-cover"
      />
      <div className="media-overlay">
        {type === 'video' ? (
          <span className="material-symbols-outlined">play_circle</span>
        ) : (
          <span className="material-symbols-outlined">fullscreen</span>
        )}
      </div>
    </div>
  );
}

export function HomePageContent() {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const feedPosts = [
    { seed: 1, likes: 248, comments: 126 },
    { seed: 2, likes: 549, comments: 362 },
    { seed: 3, likes: 312, comments: 98 },
  ];
  
  const mediaItems = [
    { seed: 1, type: 'photo' },
    { seed: 2, type: 'video' },
    { seed: 3, type: 'photo' },
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
                    <Image src="https://via.placeholder.com/850x220/333/fff" alt="Banner do Perfil" width={850} height={220} className="banner-image" />
                    <div className="banner-overlay">
                        <div className="banner-text">
                            <h1>Kamylinha Santos</h1>
                            <div className="stats">
                                <span className="stat-item"><span className="material-symbols-outlined">photo_library</span> 401</span>
                                <span className="stat-item"><span className="material-symbols-outlined">videocam</span> 438</span>
                                <span className="stat-item"><span className="material-symbols-outlined">favorite</span> 229k</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src="https://via.placeholder.com/150" alt="Foto de Perfil" width={150} height={150} className="avatar" />
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
                tag={{ text: 'MAIS POPULAR', className: 'plan-tag popular-tag' }}
              />
              <h4 className="promotions-title">
                Promoções
              </h4>
               <Plan
                duration="1 Mês"
                price="R$ 19,90"
                tag={{ text: 'ECONOMIA', className: 'plan-tag economy-tag' }}
              />
              <Plan
                duration="3 Meses"
                price="R$ 29,90"
                tag={{ text: 'MELHOR OFERTA', className: 'plan-tag best-offer-tag' }}
              />
            </div>
          </div>

          <div className="feed-section">
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="feed-tabs">
                <TabsTrigger value="posts" className="tab-link" data-tab="posts">93 postagens</TabsTrigger>
                <TabsTrigger value="media" className="tab-link" data-tab="media">412 mídias</TabsTrigger>
              </TabsList>
              <TabsContent value="posts" id="posts" className="feed-content">
                <div className="posts-grid">
                  {feedPosts.map((post) => (
                    <FeedPost key={post.seed} seed={post.seed} likes={post.likes} comments={post.comments} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="media" id="media" className="feed-content">
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

    