
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'https://earthwisegrounding.com'),
  title: 'EMF Safe Haven - Protect Your Home from EMF Radiation | 24/7 Protection',
  description: 'Transform your home into an EMF-safe zone with the EMF Safe Haven device. Covers up to 50,000 sq ft, plugs into any grounded outlet. Get 4 FREE phone stickers (valued at $119.80) - Limited time offer!',
  keywords: 'EMF protection, electromagnetic field protection, EMF safe haven, home EMF shield, office EMF protection, grounding technology, EMF reduction, electromagnetic radiation protection',
  authors: [{ name: 'EarthWise Grounding' }],
  creator: 'EarthWise Grounding',
  publisher: 'EarthWise Grounding',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'EMF Safe Haven - Protect Your Home from EMF Radiation',
    description: 'Transform your home into an EMF-safe zone. Covers 50,000 sq ft. Get 4 FREE phone stickers worth $119.80. Limited time offer!',
    url: 'https://earthwisegrounding.com',
    siteName: 'EarthWise Grounding',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EMF Safe Haven - Home EMF Protection Device',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMF Safe Haven - Protect Your Home from EMF Radiation',
    description: 'Transform your home into an EMF-safe zone. Get 4 FREE phone stickers worth $119.80!',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
