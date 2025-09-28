import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Playfair_Display, PT_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Mel's Temptations",
  description: 'Sua dose diária de tentação.',
};

const fontPlayfair = Playfair_Display({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-headline',
});

const fontPtSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          'antialiased',
          fontPlayfair.variable,
          fontPtSans.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
