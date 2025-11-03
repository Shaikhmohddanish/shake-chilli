import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { BUSINESS_INFO } from "@/lib/constants"
import { generateLocalBusinessSchema, generateOrganizationSchema, generateWebsiteSchema, generateFAQSchema } from "@/lib/seo"
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
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.domain),
  title: {
    default: `Best Pizza & Burgers in Shilphata–Mumbra | ${BUSINESS_INFO.name} (Halal) | Free Delivery`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description:
    "Best Pizza, Burgers, Footlong Sandwiches & More in Shilphata, Mumbra. 4.7★ Rated Halal Restaurant near Al-Hidaya School. Free Home Delivery in 20-40min. Order: 7208-697-371. Fresh ingredients, premium quality, family-friendly dining.",
  keywords: [
    // Primary Keywords
    "best pizza in mumbra",
    "best burger in mumbra",
    "shake chilli mumbra",
    "shake chilli shilphata",
    
    // Location-based Keywords
    "pizza near shilphata",
    "burger near shilphata",
    "halal restaurant mumbra",
    "restaurant near al-hidaya school",
    "food near dosti mumbra",
    "pizza delivery mumbra bypass",
    "restaurant near shimla park",
    "food delivery kausa",
    "restaurant amrut nagar",
    
    // Product-specific Keywords
    "chicken tikka pizza mumbra",
    "veg pizza shilphata",
    "footlong sandwich mumbra",
    "best milkshake mumbra",
    "cold coffee shilphata",
    "mocktails near me",
    "garlic bread mumbra",
    "french fries delivery",
    
    // Service Keywords
    "free home delivery mumbra",
    "online food order mumbra",
    "pizza home delivery shilphata",
    "fast food delivery mumbra",
    "halal food near me",
    
    // Combo & Meal Keywords
    "combo meals mumbra",
    "family meal deals",
    "pizza burger combo",
    "student meal deals mumbra",
    
    // Quality & Feature Keywords
    "fresh pizza mumbra",
    "homemade pizza dough",
    "100% halal restaurant",
    "best cafe in mumbra",
    "late night food mumbra",
    
    // Long-tail Keywords
    "best pizza restaurant near al-hidaya school",
    "halal burger near dosti",
    "chicken pizza delivery mumbra",
    "veg footlong sandwich shilphata",
    "best restaurant for family mumbra",
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
    title: `Best Pizza & Burgers in Shilphata–Mumbra | ${BUSINESS_INFO.name} | Halal Restaurant`,
    description: "4.7★ Rated Halal Restaurant | Fresh Pizza, Juicy Burgers, Footlong Sandwiches, Starters, Coffee & More | Free Home Delivery in 20-40min | Order: 7208-697-371 | Near Al-Hidaya School, Shilphata | Menu: Pizza (Veg/Non-Veg), Burgers, Sandwiches, Garlic Bread, Fries, Milkshakes, Mocktails",
    images: [
      {
        url: "/images/shake-chilli-complete-pizza-menu-mumbra-shilphata.jpeg",
        width: 1200,
        height: 630,
        alt: `${BUSINESS_INFO.name} - Best Pizza & Burgers in Mumbra Shilphata - Complete Menu with Halal Food & Free Delivery`,
      },
      {
        url: "/images/pizza/Chicken tikka pizza.jpg",
        width: 800,
        height: 600,
        alt: "Best Chicken Tikka Pizza in Mumbra - Shake Chilli Restaurant",
      },
      {
        url: "/images/shake-chilli-logo.png",
        width: 400,
        height: 400,
        alt: "Shake Chilli Cafe & Restaurant Logo - Best Halal Food in Mumbra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Pizza & Burgers in Shilphata–Mumbra | ${BUSINESS_INFO.name}`,
    description: "4.7★ Rated Halal Restaurant | Fresh Pizza, Burgers, Sandwiches | Free Delivery 20-40min | 7208-697-371",
    images: ["/images/shake-chilli-complete-pizza-menu-mumbra-shilphata.jpeg"],
    creator: "@shakechilli",
    site: "@shakechilli",
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
  alternates: {
    canonical: BUSINESS_INFO.domain,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/images/shake-chilli-logo.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/images/shake-chilli-logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/images/shake-chilli-logo.png",
      },
    ],
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
  const localBusinessSchema = generateLocalBusinessSchema()
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebsiteSchema()
  const faqSchema = generateFAQSchema()

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Explicit Logo Link for Search Engines */}
        <link rel="icon" type="image/png" href="/images/shake-chilli-logo.png" />
        <link rel="apple-touch-icon" href="/images/shake-chilli-logo.png" />
        <link rel="shortcut icon" href="/images/shake-chilli-logo.png" />
        
        {/* Local Business Schema for Restaurant Details */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Organization Schema for Brand Recognition */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Website Schema with Sitelinks Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* FAQ Schema for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="antialiased">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
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
