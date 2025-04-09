import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wretched Rose",
  description: "Come sit! I have much to discuss. Wretched Rose is a fast paced 3D Action Platformer Adventure where you must save Toymaker's tea party!",
  keywords: ['indie games', 'game development', 'wretched rose', 'rose', 'Alice in Wonderland', 'serenitydev', "serenity dev", "serenity_dev"],
  themeColor: '#04010A',
  icons: {
    icon:'/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
  },
  openGraph: {
    type: 'website',
    title: 'Wretched Rose',
    description: "Come sit! I have much to discuss. Wretched Rose is a fast paced 3D Action Platformer Adventure where you must save Toymaker's tea party!",
    locale: 'en_US',
    url: 'https://www.wretchedrose.com/',
    images: [
      {
        url: '/images/site/toymaker.png',
        width: 2086, // Optional: Specify width
        height: 2086, // Optional: Specify height
        alt: 'Toymaker - Mascot of Wretched Rose', // Optional: Specify alt text
      },
    ],
    
  },
  twitter: {
    card: 'summary', // Or 'summary', 'app', 'player'
    title: 'Wretched Rose',
    description: "Come sit! I have much to discuss. Wretched Rose is a fast paced 3D Action Platformer Adventure where you must save Toymaker's tea party!",
    site: '@Serenity_Dev', // Optional: Your website's Twitter handle
    creator: '@Serenity_Dev', // Optional: The creator's Twitter handle
    images: [
      {
        url: '/images/site/toymaker.png',
        width: 2086, // Optional: Specify width
        height: 2086, // Optional: Specify height
        alt: 'Toymaker - Mascot of Wretched Rose', // Optional: Specify alt text
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.serenitydev.net/games/wretched-rose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Parent Site
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://bsky.app/profile/serenitydev.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Dev's Bluesky
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://x.com/Serenity_Dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Dev's Twitter
          </a>
        </footer>
        <Image
            aria-hidden
            src="/images/renders/GardenScene.png"
            alt="Toymaker sitting in the garden"
            style={{ width: '100%', height: 'auto' , display: 'block', margin: 'auto'}}
            width={3840}
            height={1080}
            quality={95}
        />
        <Analytics />
      </body>
    </html>
  );
}
