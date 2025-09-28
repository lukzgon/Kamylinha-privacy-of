import Image from 'next/image';
import { Camera, Heart, PlayCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Logo } from '@/components/logo';

export default function Home() {
  const profileBanner = PlaceHolderImages.find((p) => p.id === 'profile-banner');
  const profileAvatar = PlaceHolderImages.find((p) => p.id === 'profile-avatar');

  return (
    <div className="bg-background min-h-screen">
      <header className="py-6 flex justify-center">
        <Logo />
      </header>

      <main className="container mx-auto max-w-2xl px-4 pb-12 space-y-6">
        <Card>
          <CardContent className="p-0">
            <div className="relative h-[200px] w-full">
              {profileBanner && (
                <Image
                  src={profileBanner.imageUrl}
                  alt={profileBanner.description}
                  fill
                  className="object-cover rounded-t-lg"
                  data-ai-hint={profileBanner.imageHint}
                />
              )}
            </div>
            <div className="p-6 flex items-center -mt-20">
              <div className="flex-shrink-0">
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
              <div className="ml-6 flex-grow flex justify-between items-center pt-16">
                <h1 className="text-4xl font-headline font-bold">Mel Maia</h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-1.5 text-sm">
                    <PlayCircle className="w-5 h-5" /> 401
                  </span>
                  <span className="flex items-center gap-1.5 text-sm">
                    <Camera className="w-5 h-5" /> 438
                  </span>
                  <span className="flex items-center gap-1.5 text-sm">
                    <Heart className="w-5 h-5 fill-primary text-primary" /> 229k
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div>
              <h2 className="text-xl font-bold font-headline">melissamelmaia</h2>
              <p className="text-sm text-muted-foreground">@melmaia</p>
            </div>
            <div className="mt-4 text-sm/relaxed text-foreground/90">
              <p>
                Meu amor... não adianta resistir, eu sei que você quer... e eu tô
                aqui só pra te deixar maluco. 😈🍓 Por um valorzinho que nem dói...
                você vai ter acesso total ao meu lado mais safado e proibido. São
                mais de 800 fotos e vídeos, me mostrando como você nunca viu...
                peladinha, provocando, brincando... me tocando... só pra deixar a
                sua imaginação no talo. 💦👅 Tem conteúdo só meu, tem com as
                minhas amigas, tem eu fazendo o que você sempre sonhou... e
                olha... não tem censura, não tem frescura. Só pura safadeza, pra
                te deixar duro de vontade. 😈 E o melhor? Você fala comigo direto
                no chat... Pode soltar a sua fantasia, seu desejo mais
                escondido... eu vou adorar saber. E dependendo de como você se
                soltar... quem sabe a gente não realiza junto?🤫 Assina agora e
                ainda tenha acesso a uma chamada exclusiva comigo... só eu e
                você, ao vivo, sem pressa, podendo falar... ou fazer... o que a
                gente quiser. 💫🎬 Não fica só se masturbando com a imaginação,
                bebê... vem ter o conteúdo real, vem sentir o meu tesão de perto.
                Porque aqui... eu tô pronta pra te provocar, te deixar louco... e
                te fazer gozar só de me ver. 🔥💦
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
              <div className="flex justify-between items-baseline mt-2">
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
