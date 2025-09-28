
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Heart, Library, Video } from 'lucide-react';

export default function Home() {
  const profileBanner = PlaceHolderImages.find(
    (p) => p.id === 'profile-banner'
  );
  const profileAvatar = PlaceHolderImages.find(
    (p) => p.id === 'profile-avatar'
  );

  return (
    <div className="flex min-h-screen flex-col items-center bg-background">
      <header className="flex w-full items-center justify-center border-b border-border bg-card py-2.5">
        <Image
          src="https://i.imgur.com/gY9k2Yy.png"
          alt="Logo Privacy"
          width={100}
          height={25}
          className="h-[25px] w-auto"
        />
      </header>

      <main className="w-full max-w-[850px] p-4 md:p-5">
        <div className="relative mb-20">
          <div className="relative overflow-hidden rounded-2xl bg-card shadow-lg">
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
                    <Image
                      src="https://i.imgur.com/vH4vK4r.png"
                      alt="lips"
                      width={24}
                      height={24}
                      className="ml-2.5 h-6 w-auto"
                    />
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

            {profileAvatar && (
              <div className="absolute -bottom-[65px] left-[25px]">
                <Image
                  src={profileAvatar.imageUrl}
                  alt={profileAvatar.description}
                  width={150}
                  height={150}
                  className="h-[150px] w-[150px] rounded-full border-[6px] border-background object-cover shadow-lg"
                  data-ai-hint={profileAvatar.imageHint}
                />
              </div>
            )}
          </div>
          <div className="rounded-2xl bg-card p-6 pt-[95px] shadow-lg">
            <div>
              <h2 className="text-xl font-bold text-foreground">
                melissamelmaia
              </h2>
              <p className="text-base text-muted-foreground">@melmaia</p>
            </div>
            <div className="mt-4 text-base/relaxed text-card-foreground">
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
      </main>
    </div>
  );
}
