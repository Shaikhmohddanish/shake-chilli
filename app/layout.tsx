import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { BUSINESS_INFO } from "@/lib/constants"
import { generateLocalBusinessSchema } from "@/lib/seo"
import { PWAInstall } from "@/components/pwa-install"
import { CartProvider } from "@/contexts/cart-context"
import { FloatingCart } from "@/components/floating-cart"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
}

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.domain),
  title: {
    default: `Best Pizza & Burgers in Shilphata–Mumbra | ${BUSINESS_INFO.name} (Halal)`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description:
    "Best Pizza, Burgers, Footlong Sandwiches & More in Shilphata, Mumbra. 4.7★ Rated Halal Restaurant near Al-Hidaya School. Free Home Delivery 30min. Order Online: 7208-697-371",
  keywords: [
    "best pizza in mumbra",
    "pizza near shilphata",
    "halal restaurant mumbra",
    "burgers near me",
    "footlong sandwich shilphata",
    "best food in mumbra",
    "shake chilli",
    "pizza delivery mumbra",
    "coffee shop shilphata",
    "milkshakes mumbra",
    "mocktails near me",
    "chicken tikka pizza",
    "veg pizza mumbra",
    "combo meals shilphata",
    "family restaurant mumbra",
    "al-hidaya school restaurant",
    "near al hidaya school",
    "near dosti",
    "near shalimar",
  ],
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BUSINESS_INFO.domain,
    siteName: BUSINESS_INFO.fullName,
    title: `Best Pizza & Burgers in Shilphata–Mumbra | ${BUSINESS_INFO.name}`,
    description: "Best Pizza, Burgers, Footlong Sandwiches & More. Halal Restaurant with Free Home Delivery.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BUSINESS_INFO.name} - Best Pizza & Burgers in Mumbra`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Pizza & Burgers in Shilphata–Mumbra | ${BUSINESS_INFO.name}`,
    description: "Best Pizza, Burgers, Footlong Sandwiches & More. Halal Restaurant with Free Home Delivery.",
    images: ["/og-image.jpg"],
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
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Shake Chilli",
    "application-name": "Shake Chilli",
    "msapplication-TileColor": "#e10600",
    "msapplication-tap-highlight": "no",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = generateLocalBusinessSchema()

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased">
        <CartProvider>
          {children}
          <FloatingCart />
          <Toaster />
          <PWAInstall />
        </CartProvider>
      </body>
    </html>
  )
}
