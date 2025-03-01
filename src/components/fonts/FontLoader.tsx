'use client';

import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
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
}
