import { BUSINESS_INFO } from "./constants"

export interface SEOConfig {
  title: string
  description: string
  canonical?: string
  keywords?: string[]
  ogImage?: string
  jsonLd?: any
}

export function generateSEO(config: SEOConfig) {
  const {
    title,
    description,
    canonical = BUSINESS_INFO.domain,
    keywords = [],
    ogImage = `${BUSINESS_INFO.domain}/og-image.jpg`,
    jsonLd,
  } = config

  return {
    title,
    description,
    keywords: keywords.join(", "),
    canonical,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BUSINESS_INFO.fullName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    jsonLd,
  }
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: BUSINESS_INFO.fullName,
    image: `${BUSINESS_INFO.domain}/brand/logo.png`,
    description:
      "Best Pizza, Burgers, Sandwiches & More in Shilphata, Mumbra. Halal Restaurant with Free Home Delivery.",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.area,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.pincode,
      addressCountry: "IN",
    },
    telephone: BUSINESS_INFO.phones.primary,
    priceRange: BUSINESS_INFO.priceRange,
    servesCuisine: BUSINESS_INFO.cuisines,
    areaServed: BUSINESS_INFO.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: BUSINESS_INFO.hours.open,
      closes: BUSINESS_INFO.hours.close,
    },
    hasMenu: `${BUSINESS_INFO.domain}/menu`,
    acceptsReservations: "False",
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BUSINESS_INFO.domain}${item.url}`,
    })),
  }
}
