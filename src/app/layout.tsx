import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Mel's Temptations",
  description: 'Sua dose diária de tentação.',
};

const fontInter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "68d9e0c0051c28fc61a7d8c1";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></Script>
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
