
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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
    bgColor: string;
    textColor: string;
  };
};

function Plan({ duration, price, isPopular = false, tag }: PlanProps) {
  const popularStyles = isPopular
    ? 'bg-primary text-primary-foreground border-primary shadow-[0_6px_15px_rgba(255,106,0,0.35)] hover:bg-primary/90 hover:border-primary/90 hover:shadow-[0_8px_20px_rgba(255,106,0,0.5)] hover:-translate-y-[3px]'
    : 'border-primary text-primary bg-white shadow-[0_4px_10px_rgba(255,106,0,0.2)] hover:bg-[#FFF8F2] hover:border-orange-500 hover:text-primary hover:shadow-[0_6px_15px_rgba(255,106,0,0.3)] hover:-translate-y-0.5';

  return (
    <a
      href="#"
      className={`flex items-center justify-between rounded-xl border-2 p-4 font-bold transition-all duration-200 ease-in-out active:scale-[0.98] active:shadow-[0_2px_5px_rgba(255,106,0,0.3)] ${popularStyles}`}
    >
      <div className="flex items-center gap-2.5 text-base font-medium">
        <span>{duration}</span>
        {tag && (
          <span
            className={`rounded-full px-2 py-1 text-[10px] font-bold uppercase leading-none tracking-wider ${
              isPopular ? 'bg-white text-primary' : `${tag.bgColor} ${tag.textColor}`
            }`}
          >
            {tag.text}
          </span>
        )}
      </div>
      <div className="text-base font-bold">{price}</div>
    </a>
  );
}

function FeedPost({ seed, likes, comments }: { seed: number; likes: number; comments: number }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const profileAvatar = PlaceHolderImages.find((p) => p.id === 'profile-avatar');

  return (
    <Card className="feed-item">
      <div className="feed-item-header">
        {profileAvatar && (
          <Image
            src={profileAvatar.imageUrl}
            alt="Avatar"
            width={40}
            height={40}
            className="header-avatar"
          />
        )}
        <div className="header-names">
          <strong>Kamylinha Santos</strong>
          <span>@euukamylinhasantos</span>
        </div>
      </div>
      <div className="feed-item-media">
        <Image
          src={`https://picsum.photos/seed/feed${seed}/400/500`}
          alt="Mídia Bloqueada"
          fill
          className="media-background"
        />
        <div className="locked-overlay">
          <div className="locked-icon">
            <Lock className="h-8 w-8" />
          </div>
          <div className="locked-stats">
            <div className="flex items-center gap-1.5">
              <Heart className="h-5 w-5" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageSquare className="h-5 w-5" />
              <span>{comments}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="feed-item-actions">
          <div className="actions-left">
              <button className={cn("action-btn like-btn", isLiked && "active")} onClick={() => setIsLiked(!isLiked)}>
                  <span className="material-symbols-outlined">favorite</span>
              </button>
              <button className="action-btn comment-btn">
                  <span className="material-symbols-outlined">chat_bubble</span>
              </button>
          </div>
          <div className="actions-right">
              <button className={cn("action-btn bookmark-btn", isBookmarked && "active")} onClick={() => setIsBookmarked(!isBookmarked)}>
                  <span className="material-symbols-outlined">bookmark</span>
              </button>
          </div>
      </div>
    </Card>
  );
}

function MediaGridItem({ seed, type }: { seed: number; type: 'photo' | 'video' }) {
  return (
    <div className="media-item">
      <Image
        src={`https://picsum.photos/seed/media${seed}/300/300`}
        alt="Mídia"
        fill
        className="object-cover"
      />
      <div className="media-overlay">
        {type === 'video' ? (
          <PlayCircle className="h-10 w-10 text-white" />
        ) : (
          <Expand className="h-10 w-10 text-white" />
        )}
      </div>
    </div>
  );
}

export function HomePageContent() {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const profileBanner = PlaceHolderImages.find(
    (p) => p.id === 'profile-banner'
  );
  const profileAvatar = PlaceHolderImages.find(
    (p) => p.id === 'profile-avatar'
  );

  const plans: Omit<PlanProps, 'isPopular'>[] = [
    {
      duration: '1 Mês',
      price: 'R$ 19,90',
      tag: {
        text: 'Economia',
        bgColor: 'bg-orange-500',
        textColor: 'text-white',
      },
    },
    {
      duration: '3 Meses',
      price: 'R$ 29,90',
      tag: {
        text: 'Melhor oferta',
        bgColor: 'bg-orange-500',
        textColor: 'text-white',
      },
    },
  ];

  const feedPosts = [
    { seed: 1, likes: 248, comments: 126 },
    { seed: 2, likes: 549, comments: 362 },
    { seed: 3, likes: 312, comments: 98 },
    { seed: 4, likes: 488, comments: 210 },
    { seed: 5, likes: 620, comments: 340 },
    { seed: 6, likes: 199, comments: 85 },
    { seed: 7, likes: 715, comments: 450 },
    { seed: 8, likes: 432, comments: 199 },
  ];
  
  const mediaItems = [
    { seed: 1, type: 'photo' },
    { seed: 2, type: 'video' },
    { seed: 3, type: 'photo' },
    { seed: 4, type: 'photo' },
    { seed: 5, type: 'photo' },
    { seed: 6, type: 'video' },
    { seed: 7, type: 'photo' },
    { seed: 8, type: 'photo' },
    { seed: 9, type: 'photo' },
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
                {profileBanner && (
                  <Image
                    src={profileBanner.imageUrl}
                    alt={profileBanner.description}
                    width={850}
                    height={220}
                    className="banner-image"
                    data-ai-hint={profileBanner.imageHint}
                  />
                )}
                <div className="banner-overlay">
                  <div className="banner-text">
                    <h1>Kamylinha Santos</h1>
                    <div className="stats">
                      <span className="stat-item">
                        <Library className="h-5 w-5" /> 401
                      </span>
                      <span className="stat-item">
                        <Video className="h-5 w-5" /> 438
                      </span>
                      <span className="stat-item">
                        <Heart className="h-5 w-5 fill-current" /> 229k
                      </span>
                    </div>
                  </div>
                </div>
            </div>
            {profileAvatar && (
              <Image
                src={profileAvatar.imageUrl}
                alt={profileAvatar.description}
                width={150}
                height={150}
                className="avatar"
                data-ai-hint={profileAvatar.imageHint}
              />
            )}
            <div className="profile-card-body">
              <div className="username-section">
                <h2>Kamylinha Santos</h2>
                <p>@euukamylinhasantos</p>
              </div>
            </div>
          </div>
          
          <div className="info-card">
              <div className={cn("description-text", !isDescriptionExpanded && "collapsed")}>
                <p>
                  Meu amor... não adianta resistir, eu sei que você quer... e eu tô aqui só pra te deixar maluco. 😈🍓 Por um valorzinho que nem dói... você vai ter acesso total ao meu lado mais safado e proibido. São mais de 800 fotos e vídeos, me mostrando como você nunca viu... peladinha, provocando, brincando... me tocando... só pra deixar a sua imaginação no talo. 💦👅 Tem conteúdo só meu, tem com as minhas amigas, tem eu fazendo o que você sempre sonhou... e olha... não tem censura, não tem frescura. Só pura safadeza, pra te deixar duro de vontade. 😈 E o melhor? Você fala comigo direto no chat... Pode soltar a sua fantasia, seu desejo mais escondido... eu vou adorar saber. E dependendo de como você se soltar... quem sabe a gente não realiza junto?🤫 Assina agora e ainda tenha acesso a uma chamada exclusiva comigo... só eu e você, ao vivo, sem pressa, podendo falar... ou fazer... o que a gente quiser. 💫🎬 Não fica só se masturbando com a imaginação, bebê... vem ter o conteúdo real, vem sentir o meu tesão de perto. Porque aqui... eu tô pronta pra te provocar, te deixar louco... e te fazer gozar só de me ver. 🔥💦
                </p>
              </div>
              <button className="read-more-btn" onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}>
                {isDescriptionExpanded ? 'Ler menos' : 'Ler mais'}
              </button>
          </div>

          <div id="assinaturas" className="info-card">
            <h3>Assinaturas</h3>
            <div className="mt-4 flex flex-col gap-3">
              <Plan
                duration="7 Dias"
                price="R$ 9,90"
                isPopular={true}
                tag={{ text: 'MAIS POPULAR', bgColor: '', textColor: '' }}
              />
              <h4 className="promotions-title">
                Promoções
              </h4>
              {plans.map((plan, index) => (
                <Plan
                  key={index}
                  duration={plan.duration}
                  price={plan.price}
                  tag={plan.tag}
                />
              ))}
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

    