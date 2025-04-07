import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
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
      </body>
    </html>
  );
}
