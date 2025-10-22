import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { MENU_ITEMS } from "@/lib/menu-data"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { ProductCard } from "@/components/product-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Best Milkshakes in Mumbra, Shilphata | Thick Shakes Near Me",
  description:
    "Best Milkshakes in Mumbra & Shilphata. Chocolate, Oreo, KitKat, Strawberry shakes. Thick & creamy. Near Al-Hidaya School. Free delivery to Diva, Dosti.",
  keywords: [
    "best milkshake in mumbra",
    "milkshake near shilphata",
    "chocolate shake mumbra",
    "oreo shake shilphata",
    "thick shake near me",
  ],
}

export default function MilkshakesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Milkshakes", url: "/milkshakes" },
  ])

  const milkshakes = MENU_ITEMS.filter((item) => item.category === "milkshake")

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="min-h-screen">
        <section className="bg-foreground text-background py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">
              Best Milkshakes in Mumbra & Shilphata
            </h1>
            <p className="text-lg text-background/80 text-center max-w-3xl mx-auto text-pretty">
              Thick, creamy milkshakes made with premium ingredients and fresh milk. From classic chocolate to Oreo and
              KitKat, we have flavors for everyone. Perfect treat in Mumbra, Shilphata, Diva, and nearby areas.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Milkshake Menu</h2>
              <p className="text-muted-foreground mb-6">
                Indulge in our delicious range of thick milkshakes. Perfect for dessert or a sweet treat any time of the
                day in Mumbra and Shilphata.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {milkshakes.map((item) => (
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
