import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Mel's Temptations",
  description: 'Sua dose diária de tentação.',
};

const fontInter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
      </head>
      <body
        className={cn(
          'antialiased',
          fontInter.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
