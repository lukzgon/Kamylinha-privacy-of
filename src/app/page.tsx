
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Heart, Library, Video } from 'lucide-react';
import { Playfair_Display, Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

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

export default function Home() {
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
        bgColor: 'bg-[#d4edda]',
        textColor: 'text-[#155724]',
      },
    },
    {
      duration: '3 Meses',
      price: 'R$ 29,90',
      tag: {
        text: 'Melhor oferta',
        bgColor: 'bg-[#d1ecf1]',
        textColor: 'text-[#0c5460]',
      },
    },
  ];

  return (
    <div className={cn("flex min-h-screen flex-col items-center bg-background font-body", fontInter.variable, fontPlayfair.variable)}>
      <header className="flex w-full items-center justify-center border-b border-border bg-card py-2.5">
        <Image
          src="https://i.postimg.cc/LXCqwCGJ/images-logo-1.png"
          alt="Logo Privacy"
          width={154}
          height={38}
          className="h-auto w-auto"
        />
      </header>

      <main className="w-full max-w-[850px] p-4 md:p-5">
        <div className="mb-4 rounded-2xl bg-card shadow-lg">
          <div className="relative overflow-hidden rounded-t-2xl">
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
              <div className="absolute inset-0 flex flex-col justify-start bg-gradient-to-b from-black/70 to-transparent p-5">
                <div className="text-white [text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]">
                  <h1 className="flex items-center text-3xl font-bold">
                    Mel Maia
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

          <div className="p-6 pt-4">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-foreground">
                melissamelmaia
              </h2>
              <p className="text-base text-muted-foreground">@melmaia</p>
            </div>
            <div className="text-base/relaxed font-normal text-card-foreground">
              <p>
                Meu amor... não adianta resistir, eu sei que você quer... e eu
                tô aqui só pra te deixar maluco. 😈🍓 Por um valorzinho que nem
                dói... você vai ter acesso total ao meu lado mais safado e
                proibido. São mais de 800 fotos e vídeos, me mostrando como você
                nunca viu... peladinha, provocando, brincando... me tocando...
                só pra deixar a sua imaginação no talo. 💦👅 Tem conteúdo só
                meu, tem com as minhas amigas, tem eu fazendo o que você sempre
                sonhou...
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-card p-6 shadow-lg">
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
      </main>
    </div>
  );
}
