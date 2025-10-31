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
    "@id": `${BUSINESS_INFO.domain}/#restaurant`,
    name: BUSINESS_INFO.fullName,
    alternateName: BUSINESS_INFO.name,
    image: [
      `${BUSINESS_INFO.domain}/images/shake-chilli-logo.png`,
      `${BUSINESS_INFO.domain}/images/pizza/Chicken tikka pizza.jpg`,
      `${BUSINESS_INFO.domain}/images/shake-chilli-complete-pizza-menu-mumbra-shilphata.jpeg`,
      `${BUSINESS_INFO.domain}/images/shake-chilli-food-display-counter-fresh-mumbra.jpeg`,
    ],
    logo: `${BUSINESS_INFO.domain}/images/shake-chilli-logo.png`,
    description:
      "Best Pizza, Burgers, Footlong Sandwiches, Starters & More in Shilphata, Mumbra. 4.7★ Rated Halal Restaurant with Free Home Delivery in 20-40 minutes. Complete Menu: Veg & Non-Veg Pizza, Juicy Burgers, Footlong Sandwiches, Garlic Bread, Crispy Fries, Hot & Cold Coffee, Milkshakes, Mocktails. Order Now: 7208-697-371",
    url: BUSINESS_INFO.domain,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.area,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.2183",
      longitude: "73.0478",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    hasMenu: `${BUSINESS_INFO.domain}/menu`,
    menu: {
      "@type": "Menu",
      name: "Shake Chilli Menu",
      description: "Complete menu with Pizza, Burgers, Sandwiches, Starters, Coffee, Milkshakes & More",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Pizza",
          description: "Fresh Veg & Non-Veg Pizzas with premium toppings",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Chicken Tikka Pizza",
              description: "Spicy chicken tikka with mozzarella and cheese sauce",
              offers: {
                "@type": "Offer",
                priceCurrency: "INR",
                price: "200-480",
              },
            },
            {
              "@type": "MenuItem",
              name: "Margherita Pizza Veg",
              description: "Classic veg pizza with mozzarella and white cheese sauce",
              offers: {
                "@type": "Offer",
                priceCurrency: "INR",
                price: "150-400",
              },
            },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Burgers",
          description: "Juicy burgers with crispy patties",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Chicken Burger",
              description: "Grilled chicken patty with fresh veggies",
              offers: {
                "@type": "Offer",
                priceCurrency: "INR",
                price: "80",
              },
            },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Footlong Sandwiches",
          description: "6-inch & 12-inch subway-style sandwiches",
        },
        {
          "@type": "MenuSection",
          name: "Starters",
          description: "Crispy fries, chicken popcorn & more",
        },
        {
          "@type": "MenuSection",
          name: "Coffee & Beverages",
          description: "Hot & Cold Coffee, Milkshakes, Mocktails",
        },
      ],
    },
    acceptsReservations: "False",
    paymentAccepted: "Cash, UPI, Online",
    currenciesAccepted: "INR",
    keywords: "best pizza mumbra, halal restaurant shilphata, burger delivery mumbra, free home delivery, pizza near me, best food mumbra, chicken tikka pizza, footlong sandwich, garlic bread, coffee shop",
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

// Organization Schema for brand recognition
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BUSINESS_INFO.domain}/#organization`,
    name: BUSINESS_INFO.fullName,
    alternateName: BUSINESS_INFO.name,
    url: BUSINESS_INFO.domain,
    logo: {
      "@type": "ImageObject",
      url: `${BUSINESS_INFO.domain}/icons/icon-512x512.png`,
      width: 512,
      height: 512,
    },
    image: `${BUSINESS_INFO.domain}/icons/icon-512x512.png`,
    description: "Best Pizza & Burgers in Shilphata, Mumbra. 4.7★ Rated Halal Restaurant with Free Home Delivery. Order Now: 7208-697-371",
    telephone: BUSINESS_INFO.phones.primary,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.area,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.pincode,
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/shakechilli",
      "https://www.facebook.com/shakechilli",
      "https://twitter.com/shakechilli",
    ],
  }
}

// Website Schema with Sitelinks Search Box
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS_INFO.domain}/#website`,
    url: BUSINESS_INFO.domain,
    name: BUSINESS_INFO.fullName,
    description: "Order Pizza, Burgers, Sandwiches & More Online. Free Home Delivery in Mumbra-Shilphata",
    publisher: {
      "@id": `${BUSINESS_INFO.domain}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BUSINESS_INFO.domain}/menu?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

// FAQ Schema for rich snippets
export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are Shake Chilli's delivery hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We deliver from 10:00 AM to 11:00 PM daily. Free home delivery within 20-40 minutes to Shilphata, Mumbra Bypass, Shimla Park, Kausa, and Amrut Nagar.",
        },
      },
      {
        "@type": "Question",
        name: "What types of pizza does Shake Chilli offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer both Veg and Non-Veg pizzas including Margherita, Chicken Tikka, Peri Peri Chicken, Farm House, Paneer Makhani, and more. All pizzas are 100% Halal with fresh dough made daily.",
        },
      },
      {
        "@type": "Question",
        name: "Does Shake Chilli serve Halal food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all our food is 100% Halal certified. We serve authentic Halal pizza, burgers, sandwiches, and more in Mumbra-Shilphata area.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum order for free delivery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer FREE home delivery with no minimum order. Delivery takes 20 minutes for Bypass area, 40 minutes for Shimla Park/Kausa/Amrut Nagar, and 60 minutes for Station area.",
        },
      },
      {
        "@type": "Question",
        name: "How can I order from Shake Chilli?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Call us at 7208-697-371 or 9372-197-068 to place your order. You can also visit our restaurant near Al-Hidaya School, Shilphata, Mumbra.",
        },
      },
    ],
  }
}
