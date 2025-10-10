import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { MENU_ITEMS } from "@/lib/menu-data"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { formatPrice } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Phone, MapPin } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/constants"
import { getDirectionsUrl } from "@/lib/utils"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return MENU_ITEMS.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const item = MENU_ITEMS.find((i) => i.slug === slug)

  if (!item) {
    return {
      title: "Item Not Found",
    }
  }

  return {
    title: `Best ${item.name} in Mumbra (Shilphata) | Price, Reviews & Photos`,
    description: `${item.descriptionLong.slice(0, 155)}... Order now from Shake Chilli near Al-Hidaya School.`,
    keywords: item.keywords,
  }
}

export default async function ItemDetailPage({ params }: PageProps) {
  const { slug } = await params
  const item = MENU_ITEMS.find((i) => i.slug === slug)

  if (!item) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Menu", url: "/menu" },
    { name: item.name, url: `/items/${item.slug}` },
  ])

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.name,
    description: item.descriptionLong,
    image: `${BUSINESS_INFO.domain}/placeholder.jpg`,
    offers: {
      "@type": "Offer",
      price: typeof item.price === "number" ? item.price : item.price.S || item.price.regular || item.price["6inch"],
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: BUSINESS_INFO.fullName,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "120",
      bestRating: "5",
      worstRating: "1",
    },
    review: sampleReviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.name,
      },
      datePublished: review.date,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: review.text,
    })),
  }

  const relatedItems = MENU_ITEMS.filter((i) => i.category === item.category && i.id !== item.id && i.isPopular).slice(
    0,
    3,
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Header />
      <main className="min-h-screen">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Image Section */}
              <div>
                <div className="aspect-square bg-muted rounded-2xl overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">{item.isVeg ? "🍕" : "🍔"}</div>
                    <h3 className="text-2xl font-bold text-muted-foreground">{item.name}</h3>
                    <p className="text-muted-foreground mt-2">{item.categoryDisplay}</p>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div>
                <div className="flex items-start gap-2 mb-4">
                  {item.isVeg && (
                    <Badge variant="success" className="bg-[#18a558] text-white">
                      Veg
                    </Badge>
                  )}
                  {!item.isVeg && (
                    <Badge variant="default" className="bg-[#e10600] text-white">
                      Non-Veg
                    </Badge>
                  )}
                  {item.isHalal && (
                    <Badge variant="success" className="bg-secondary text-secondary-foreground">
                      Halal
                    </Badge>
                  )}
                  {item.isPopular && (
                    <Badge variant="default" className="bg-[#e10600] text-white">
                      Popular
                    </Badge>
                  )}
                </div>

                <h1 className="text-4xl font-bold mb-4 text-balance">{item.name}</h1>

                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#e10600] text-[#e10600]" />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">4.7/5</span>
                  <span className="text-muted-foreground">(120 reviews)</span>
                </div>

                <div className="text-3xl font-bold text-[#e10600] mb-6">{formatPrice(item.price)}</div>

                <p className="text-lg text-muted-foreground mb-6 text-pretty">{item.descriptionLong}</p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-[#e10600] hover:bg-[#c10500]" asChild>
                    <a href={`tel:${BUSINESS_INFO.phones.primary}`}>
                      <Phone className="h-5 w-5" />
                      Call to Order
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href={getDirectionsUrl(BUSINESS_INFO.address.full)} target="_blank" rel="noopener noreferrer">
                      <MapPin className="h-5 w-5" />
                      Get Directions
                    </a>
                  </Button>
                </div>

                <div className="bg-muted/50 rounded-xl p-6">
                  <h3 className="font-semibold mb-3">Highlights</h3>
                  <ul className="space-y-2">
                    {item.tags.map((tag, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <span className="text-[#18a558]">✓</span>
                        <span className="capitalize">{tag}</span>
                      </li>
                    ))}
                    <li className="flex items-center gap-2 text-sm">
                      <span className="text-[#18a558]">✓</span>
                      <span>Free delivery in Mumbra, Shilphata, Diva</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="text-[#18a558]">✓</span>
                      <span>Made fresh to order</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sampleReviews.map((review, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#e10600] text-[#e10600]" />
                        ))}
                      </div>
                      <p className="text-sm mb-4 text-pretty">{review.text}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div>
                          <p className="font-semibold">{review.name}</p>
                          <p className="text-muted-foreground text-xs">{review.location}</p>
                        </div>
                        <p className="text-muted-foreground text-xs">{review.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Related Items */}
            {relatedItems.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedItems.map((relatedItem) => (
                    <Link key={relatedItem.id} href={`/items/${relatedItem.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{relatedItem.name}</h3>
                          <p className="text-sm text-muted-foreground mb-4">{relatedItem.description}</p>
                          <div className="text-lg font-bold text-[#e10600]">{formatPrice(relatedItem.price)}</div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}

const sampleReviews = [
  {
    name: "Arif Khan",
    location: "Mumbra",
    rating: 5,
    text: "Absolutely delicious! The best I've had in Mumbra. Fresh ingredients and perfect taste. Highly recommend ordering from Shake Chilli near Al-Hidaya School.",
    date: "2025-01-08",
  },
  {
    name: "Fatima Sheikh",
    location: "Shilphata",
    rating: 5,
    text: "Amazing quality and great value for money! Delivered hot and fresh to Shilphata. Will definitely order again. Best food near Dosti area.",
    date: "2025-01-07",
  },
  {
    name: "Mohammed Ansari",
    location: "Diva",
    rating: 5,
    text: "Fast delivery and excellent taste! The portion size is generous. Best restaurant for delivery in Diva and Mumbra area. Highly satisfied!",
    date: "2025-01-06",
  },
  {
    name: "Ayesha Patel",
    location: "Mumbra",
    rating: 5,
    text: "Love the freshness and quality! Everything is made to order. The best halal food in Mumbra and Shilphata. Near Shalimar, very convenient.",
    date: "2025-01-05",
  },
  {
    name: "Salman Qureshi",
    location: "Shilphata",
    rating: 5,
    text: "Consistently good quality! I order regularly from Shake Chilli. Always fresh, always delicious. Best food near Al-Hidaya School in Shilphata.",
    date: "2025-01-04",
  },
  {
    name: "Zainab Ahmed",
    location: "Diva",
    rating: 5,
    text: "Excellent taste and quick service! The food arrived hot and fresh. Best delivery service in Diva, Mumbra area. Highly recommend to everyone!",
    date: "2025-01-03",
  },
  {
    name: "Imran Shaikh",
    location: "Mumbra",
    rating: 4,
    text: "Very good quality and taste! Great portion sizes. One of the best restaurants in Mumbra near Dosti. Will order again soon.",
    date: "2025-01-02",
  },
  {
    name: "Nazia Khan",
    location: "Shilphata",
    rating: 5,
    text: "Perfect! Just what I was looking for. Fresh, tasty, and delivered on time to Shilphata. Best food near Shalimar area. Loved it!",
    date: "2025-01-01",
  },
  {
    name: "Rashid Ali",
    location: "Diva",
    rating: 5,
    text: "Outstanding quality! The best I've tried in the Diva and Mumbra area. Fresh ingredients and authentic taste. Highly recommended!",
    date: "2024-12-31",
  },
  {
    name: "Sana Patel",
    location: "Mumbra",
    rating: 5,
    text: "Delicious and worth every rupee! Great taste and quality. Best halal restaurant in Mumbra near Al-Hidaya School. Will definitely order again!",
    date: "2024-12-30",
  },
]
