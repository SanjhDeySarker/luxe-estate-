import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Luxe Estate – Premium Luxury Real Estate',
  description: 'Curated luxury estates, timeless architecture, and unparalleled service for those who seek the extraordinary.',
  keywords: 'luxury real estate, premium properties, luxury homes, estate agency',
  authors: [{ name: 'Luxe Estate' }],
  openGraph: {
    title: 'Luxe Estate – Premium Luxury Real Estate',
    description: 'Discover curated estates and timeless architecture.',
    url: 'https://luxe-estate.com',
    siteName: 'Luxe Estate',
    images: [
      {
        url: 'https://luxe-estate.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}