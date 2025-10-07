import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Wasteria Client - The Ultimate Ghost Client",
  description: "Fully undetectable Minecraft ghost client for 1.21+",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Wasteria Client - The Ultimate Ghost Client",
    description: "Fully undetectable Minecraft ghost client for 1.21+",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Wasteria Client Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wasteria Client - The Ultimate Ghost Client",
    description: "Fully undetectable Minecraft ghost client for 1.21+",
    images: ["/logo.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="preload" href="/fonts/wasteria.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body className="font-sans bg-black text-white">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
