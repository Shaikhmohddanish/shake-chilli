import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { MENU_ITEMS } from "@/lib/menu-data"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { ProductCard } from "@/components/product-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Best Mojito & Mocktails in Mumbra, Shilphata | Virgin Mojito Near Me",
  description:
    "Best Mojito & Mocktails in Mumbra & Shilphata. Virgin Mojito, Watermelon, Blue Lagoon. Refreshing drinks. Near Al-Hidaya School. Free delivery to Diva.",
  keywords: [
    "best mojito in mumbra",
    "mojito near shilphata",
    "virgin mojito mumbra",
    "mocktail shilphata",
    "refreshing drinks near me",
  ],
}

export default function MojitoPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Mojito & Mocktails", url: "/mojito" },
  ])

  const mocktails = MENU_ITEMS.filter((item) => item.category === "mocktail")

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="min-h-screen">
        <section className="bg-foreground text-background py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">
              Best Mojito & Mocktails in Mumbra & Shilphata
            </h1>
            <p className="text-lg text-background/80 text-center max-w-3xl mx-auto text-pretty">
              Refreshing virgin mojitos and mocktails made with fresh mint, fruits, and premium ingredients. Perfect for
              beating the heat in Mumbra, Shilphata, Diva, Dosti, and nearby areas.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Mocktail Menu</h2>
              <p className="text-muted-foreground mb-6">
                Cool down with our refreshing range of mocktails. Made fresh to order with natural ingredients. The
                perfect drink for any occasion in Mumbra and Shilphata.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mocktails.map((item) => (
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
