import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const Plan = ({
  popular,
  period,
  price,
  bonus,
  economy,
  bestOffer,
}: {
  popular?: boolean;
  period: string;
  price: string;
  bonus?: string;
  economy?: boolean;
  bestOffer?: boolean;
}) => (
  <a
    href="#"
    className={cn(
      'group block text-foreground no-underline rounded-lg border border-border p-4 transition-colors hover:bg-accent',
      {
        'flex flex-col items-stretch !border-none !bg-primary !pb-2.5 !text-primary-foreground':
          popular,
      }
    )}
  >
    <div className={cn('flex items-center justify-between', { 'items-start': !popular })}>
      <div className={cn('flex flex-col gap-1.5', { 'flex-row items-center gap-2': popular })}>
        <strong className="font-bold">{period}</strong>
        {popular && <Badge className="bg-white !text-primary">MAIS POPULAR 🔥</Badge>}
        {economy && <Badge variant="secondary" className="bg-[#d4edda] text-[#155724]">Economia</Badge>}
        {bestOffer && <Badge variant="secondary" className="bg-[#d1ecf1] text-[#0c5460]">Melhor oferta</Badge>}
      </div>

      <strong className={cn('text-lg font-bold', { 'text-xl': !popular })}>
        {price}
      </strong>
    </div>
    {bonus && (
      <div className="mt-2.5 rounded-md bg-[#ff8528] py-1.5 text-center text-xs font-bold text-white">
        {bonus}
      </div>
    )}
  </a>
);

export default function Home() {
  const profileBanner = PlaceHolderImages.find((p) => p.id === 'profile-banner');
  const profileAvatar = PlaceHolderImages.find((p) => p.id === 'profile-avatar');

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
          <div className="relative h-[220px] w-full overflow-hidden rounded-2xl shadow-lg">
            {profileBanner && (
              <Image
                src={profileBanner.imageUrl}
                alt={profileBanner.description}
                fill
                className="object-cover"
                data-ai-hint={profileBanner.imageHint}
              />
            )}
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 from-0% to-transparent to-60%">
              <div className="flex w-full items-center justify-between p-5 text-white">
                <h1 className="flex items-center text-3xl font-bold [text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]">
                  Mel Maia
                </h1>
                <div className="flex gap-5">
                  <span className="flex items-center gap-1.5 rounded-lg bg-black/20 px-2.5 py-1 text-base font-medium">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span> 229k
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

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">melissamelmaia</h2>
              <p className="text-base text-muted-foreground">@melmaia</p>
            </div>
            <div className="mt-4 text-base/relaxed text-card-foreground">
              <p>
                Meu amor... não adianta resistir, eu sei que você quer... e eu tô aqui só pra te deixar maluco. 😈🍓 Por um valorzinho que nem dói... você vai ter acesso total ao meu lado mais safado e proibido. São mais de 800 fotos e vídeos, me mostrando como você nunca viu... peladinha, provocando, brincando... me tocando... só pra deixar a sua imaginação no talo. 💦👅 Tem conteúdo só meu, tem com as minhas amigas, tem eu fazendo o que você sempre sonhou...
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-4 shadow-lg">
          <CardContent className="p-6 space-y-2.5">
            <h3 className="text-xl font-bold">
              Assinaturas
            </h3>

            <Plan
              popular
              period="7 Dias"
              price="R$ 9,90"
              bonus="+ BRINDE SURPRESA HOJE!"
            />

            <h4 className="pt-4 text-sm font-bold uppercase text-muted-foreground">
              Promoções
            </h4>

            <Plan
              period="1 Mês"
              price="R$ 19,90"
              economy
            />

            <Plan
              period="3 Meses"
              price="R$ 29,90"
              bestOffer
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
