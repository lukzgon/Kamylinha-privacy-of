
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Heart, Library, Video, MoreHorizontal, Lock, MessageSquare, Bookmark } from 'lucide-react';
import { Playfair_Display, Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

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
  const profileAvatar = PlaceHolderImages.find((p) => p.id === 'profile-avatar');
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center gap-3 p-3">
        {profileAvatar && (
          <Image
            src={profileAvatar.imageUrl}
            alt="Avatar"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        )}
        <div className="flex-1">
          <p className="text-sm font-bold">euukamylinhasantos</p>
          <p className="text-xs text-muted-foreground">@euukamylinhasantos</p>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>
      <div className="relative aspect-[4/5] bg-gray-200">
        <Image
          src={`https://picsum.photos/seed/feed${seed}/400/500`}
          alt="Mídia Bloqueada"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white backdrop-blur-sm">
          <Lock className="h-12 w-12" />
          <div className="mt-4 flex items-center gap-4">
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
      <div className="flex items-center justify-start gap-2 p-3">
        <Button variant="ghost" size="icon">
          <Heart className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <MessageSquare className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="ml-auto">
          <Bookmark className="h-6 w-6" />
        </Button>
      </div>
    </Card>
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


  return (
    <>
      <div className={cn("flex min-h-screen flex-col items-center bg-background font-body", fontInter.variable, fontPlayfair.variable)}>
        <header className="flex w-full items-center justify-center border-b border-border bg-card py-2.5">
          <Image
            src="https://i.postimg.cc/LXCqwCGJ/images-logo-1.png"
            alt="Logo Privacy"
            width={125}
            height={24}
            className="h-auto w-auto"
          />
        </header>

        <main className="w-full max-w-[850px] p-4 md:p-5">
          <div className="mb-4 rounded-2xl bg-card shadow-lg overflow-hidden">
            <div className="relative">
              <div className="relative h-[220px] w-full">
                {profileBanner && (
                  <Image
                    src={profileBanner.imageUrl}
                    alt={profileBanner.description}
                    fill
                    className="object-cover"
                    data-ai-hint={profileBanner.imageHint}
                  />
                )}
                <div className="absolute inset-0 flex flex-col justify-start bg-gradient-to-b from-black/70 to-transparent p-5 rounded-b-lg">
                  <div className="text-white [text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]">
                    <h1 className="flex items-center text-3xl font-bold">
                      Kamylinha Santos
                    </h1>
                    <div className="mt-2 flex gap-5">
                      <span className="flex items-center gap-1.5 text-base font-medium">
                        <Library className="h-5 w-5" /> 401
                      </span>
                      <span className="flex items-center gap-1.5 text-base font-medium">
                        <Video className="h-5 w-5" /> 438
                      </span>
                      <span className="flex items-center gap-1.5 text-base font-medium">
                        <Heart className="h-5 w-5 fill-current" /> 229k
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {profileAvatar && (
                  <Image
                    src={profileAvatar.imageUrl}
                    alt={profileAvatar.description}
                    width={150}
                    height={150}
                    className="relative z-10 -mt-[75px] ml-6 h-[150px] w-[150px] rounded-full border-6 border-white object-cover"
                    data-ai-hint={profileAvatar.imageHint}
                  />
                )}
            </div>

            <div className="p-6 pt-4">
              <div className="mb-5">
                <h2 className="text-xl font-bold text-foreground">
                  euukamylinhasantos
                </h2>
                <p className="text-base text-muted-foreground">@euukamylinhasantos</p>
              </div>
              <div className="text-base/relaxed font-normal text-card-foreground">
                <p className={cn(!isDescriptionExpanded && 'line-clamp-3')}>
                  Meu amor... não adianta resistir, eu sei que você quer... e eu tô aqui só pra te deixar maluco. 😈🍓 Por um valorzinho que nem dói... você vai ter acesso total ao meu lado mais safado e proibido. São mais de 800 fotos e vídeos, me mostrando como você nunca viu... peladinha, provocando, brincando... me tocando... só pra deixar a sua imaginação no talo. 💦👅 Tem conteúdo só meu, tem com as minhas amigas, tem eu fazendo o que você sempre sonhou... e olha... não tem censura, não tem frescura. Só pura safadeza, pra te deixar duro de vontade. 😈 E o melhor? Você fala comigo direto no chat... Pode soltar a sua fantasia, seu desejo mais escondido... eu vou adorar saber. E dependendo de como você se soltar... quem sabe a gente não realiza junto?🤫 Assina agora e ainda tenha acesso a uma chamada exclusiva comigo... só eu e você, ao vivo, sem pressa, podendo falar... ou fazer... o que a gente quiser. 💫🎬 Não fica só se masturbando com a imaginação, bebê... vem ter o conteúdo real, vem sentir o meu tesão de perto. Porque aqui... eu tô pronta pra te provocar, te deixar louco... e te fazer gozar só de me ver. 🔥💦
                </p>
                <Button variant="link" className="p-0 h-auto text-primary" onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}>
                  {isDescriptionExpanded ? 'Ler menos' : 'Ler mais'}
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-6 shadow-lg mb-4">
            <h3 className="text-xl font-bold">Assinaturas</h3>
            <div className="mt-4 flex flex-col gap-3">
              <Plan
                duration="7 Dias"
                price="R$ 9,90"
                isPopular={true}
                tag={{ text: 'MAIS POPULAR', bgColor: '', textColor: '' }}
              />
              <h4 className="pt-4 text-sm font-bold uppercase text-muted-foreground">
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
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="posts">93 postagens</TabsTrigger>
                <TabsTrigger value="media">412 mídias</TabsTrigger>
              </TabsList>
              <TabsContent value="posts">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {feedPosts.map((post) => (
                    <FeedPost key={post.seed} seed={post.seed} likes={post.likes} comments={post.comments} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="media">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                   <p className="text-center col-span-2 text-muted-foreground">Conteúdo da aba de mídias.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </>
  );
}

    