import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { MENU_ITEMS } from "@/lib/menu-data"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { ProductCard } from "@/components/product-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Footlong Sandwiches in Mumbra, Shilphata | 6 Inch & 12 Inch Subway Style",
  description:
    "Best Footlong Sandwiches in Mumbra & Shilphata. Subway-style 6-inch & 12-inch sandwiches. Veg & Chicken options. Halal. Free delivery near Al-Hidaya School.",
  keywords: [
    "footlong sandwich mumbra",
    "subway sandwich shilphata",
    "6 inch sandwich near me",
    "12 inch sandwich mumbra",
    "halal sandwich shilphata",
  ],
}

export default function FootlongSandwichPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Footlong Sandwich", url: "/footlong-sandwich" },
  ])

  const sandwiches = MENU_ITEMS.filter((item) => item.category === "footlong-sandwich")

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="min-h-screen">
        <section className="bg-foreground text-background py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">
              Footlong Sandwiches in Mumbra & Shilphata
            </h1>
            <p className="text-lg text-background/80 text-center max-w-3xl mx-auto text-pretty">
              Subway-style footlong sandwiches made with freshly baked bread, crispy vegetables, cheese, and your choice
              of sauces. Available in 6-inch and 12-inch sizes. 100% halal chicken options. Free delivery to Mumbra,
              Shilphata, Diva, Dosti, Shalimar.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Sandwich Menu</h2>
              <p className="text-muted-foreground mb-6">
                Choose from our delicious range of footlong sandwiches. Perfect for a healthy lunch or dinner in Mumbra
                and Shilphata. Customize with your favorite vegetables and sauces.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sandwiches.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
