import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreatorVerse",
  description:
    "The ultimate gathering for digital creators, innovators, and visionaries. Join us for inspiring talks, workshops, and networking opportunities.",
  generator: "Vortiqo Labs",
  keywords: [
    "CreatorVerse",
    "Digital Creators",
    "Innovation",
    "Networking",
    "Workshops",
    "Conference",
  ],
  authors: [{ name: "Vortiqo Labs" }],
  creator: "Vortiqo Labs",
  publisher: "Vortiqo Labs",
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
  openGraph: {
    title: "CreatorVerse - Digital Creators Summit",
    description:
      "Join the ultimate gathering for digital creators, innovators, and visionaries. March 15-16, 2024 in San Francisco.",
    url: "https://creatorverse.com",
    siteName: "CreatorVerse",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "CreatorVerse Summit 2024",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CreatorVerse - Digital Creators Summit",
    description:
      "Join the ultimate gathering for digital creators, innovators, and visionaries. March 15-16, 2024 in San Francisco.",
    images: ["/images/hero.jpg"],
    creator: "@creatorverse",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
