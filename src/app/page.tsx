import Image from 'next/image';
import { Camera, Heart, PlayCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const profileBanner = PlaceHolderImages.find((p) => p.id === 'profile-banner');
  const profileAvatar = PlaceHolderImages.find((p) => p.id === 'profile-avatar');

  return (
    <div className="bg-background min-h-screen">
      <header className="py-6 flex justify-center">
        <Image
          src="https://i.imgur.com/gY9k2Yy.png"
          alt="Logo Privacy"
          width={128}
          height={32}
          className="h-8 w-auto"
        />
      </header>

      <main className="container mx-auto max-w-2xl px-4 pb-12 space-y-6">
        <div className="relative">
          <div className="relative h-[250px] w-full">
            {profileBanner && (
              <Image
                src={profileBanner.imageUrl}
                alt={profileBanner.description}
                fill
                className="object-cover rounded-t-lg"
                data-ai-hint={profileBanner.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg" />
            <div className="absolute bottom-0 left-0 p-6 text-white flex items-end w-full">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                 {profileAvatar && (
                  <Image
                    src={profileAvatar.imageUrl}
                    alt={profileAvatar.description}
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-card bg-card"
                    data-ai-hint={profileAvatar.imageHint}
                  />
                )}
                </div>
              <div className="w-full flex justify-between items-center mt-16">
                 <h1 className="text-4xl font-headline font-bold flex items-center">
                   Mel Maia <img src="https://i.imgur.com/vH4vK4r.png" className="h-6 w-6 ml-2" alt="lips" />
                 </h1>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-sm">
                    <PlayCircle className="w-5 h-5" /> 401
                  </span>
                  <span className="flex items-center gap-1.5 text-sm">
                    <Camera className="w-5 h-5" /> 438
                  </span>
                  <span className="flex items-center gap-1.5 text-sm">
                    <Heart className="w-5 h-5 fill-white" /> 229k
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="pt-20">
          <CardContent className="p-6">
            <div>
              <h2 className="text-xl font-bold font-headline">melissamelmaia</h2>
              <p className="text-sm text-muted-foreground">@melmaia</p>
            </div>
            <div className="mt-4 text-sm/relaxed text-foreground/90">
              <p>
                Meu amor... não adianta resistir, eu sei que você quer... e eu tô aqui só pra te deixar maluco. 😈🍓 Por um valorzinho que nem dói... você vai ter acesso total ao meu lado mais safado e proibido. São mais de 800 fotos e vídeos, me mostrando como você nunca viu... peladinha, provocando, brincando... me tocando... só pra deixar a sua imaginação no talo. 💦👅 Tem conteúdo só meu, tem com as minhas amigas, tem eu fazendo o que você sempre sonhou...
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-2xl font-bold font-headline text-center">
              Assinaturas
            </h3>

            <a
              href="#"
              className="group block text-foreground no-underline p-4 rounded-lg border-2 border-primary shadow-lg transition-transform duration-300 hover:scale-105 bg-card"
            >
              <div className="flex justify-between items-center">
                <strong className="font-bold">7 Dias</strong>
                <Badge>MAIS POPULAR 🔥</Badge>
              </div>
              <div className="flex justify-between items-end mt-2">
                <div className="text-sm font-bold text-primary uppercase">
                  + BRINDE SURPRESA HOJE!
                </div>
                <strong className="text-2xl font-bold">R$ 9,90</strong>
              </div>
            </a>

            <h4 className="text-lg font-bold font-headline text-center pt-4">
              Promoções
            </h4>

            <a
              href="#"
              className="group block text-foreground no-underline p-4 rounded-lg border bg-card transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-between items-center">
                <strong className="font-bold">1 Mês</strong>
                <Badge variant="secondary">Economia</Badge>
              </div>
              <div className="text-right text-xl font-bold mt-2">
                <strong>R$ 19,90</strong>
              </div>
            </a>

            <a
              href="#"
              className="group block text-foreground no-underline p-4 rounded-lg border bg-card transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-between items-center">
                <strong className="font-bold">3 Meses</strong>
                <Badge variant="secondary">Melhor oferta</Badge>
              </div>
              <div className="text-right text-xl font-bold mt-2">
                <strong>R$ 29,90</strong>
              </div>
            </a>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
