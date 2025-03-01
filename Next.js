// components/FontLoader.tsx
'use client';

import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Add this
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap', // Add this
  variable: '--font-roboto-mono',
});

export default function FontLoader() {
  return (
    <style jsx global>{`
      :root {
        --font-inter: ${inter.style.fontFamily};
        --font-roboto-mono: ${roboto_mono.style.fontFamily};
      }
    `}</style>
  );
}// components/FontLoader.tsx
'use client';

import localFont from 'next/font/local';

const myLocalFont = localFont({
  src: '../public/fonts/your-font.woff2',
  display: 'swap', // Add this
  variable: '--font-custom',
});

export default function FontLoader() {
  return (
    <style jsx global>{`
      :root {
        --font-custom: ${myLocalFont.style.fontFamily};
      }
    `}</style>
  );
}// components/FontLoader.tsx
'use client';

import localFont from 'next/font/local';

const myLocalFont = localFont({
  src: '../public/fonts/your-font.woff2',
  display: 'swap', // Add this
  variable: '--font-custom',
});

export default function FontLoader() {
  return (
    <style jsx global>{`
      :root {
        --font-custom: ${myLocalFont.style.fontFamily};
      }
    `}</style>
  );
}// app/layout.tsx
import FontLoader from '@/components/FontLoader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <FontLoader />
        {children}
      </body>
    </html>
  );
}
