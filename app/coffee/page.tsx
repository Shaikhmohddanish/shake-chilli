import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { MENU_ITEMS } from "@/lib/menu-data"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { ProductCard } from "@/components/product-card"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Best Coffee in Mumbra, Shilphata | Hot & Cold Coffee Near Me",
  description:
    "Best Coffee in Mumbra & Shilphata. Cappuccino, Latte, Iced Coffee, Cold Coffee. Premium coffee beans. Near Al-Hidaya School. Free delivery to Diva, Dosti.",
  keywords: [
    "best coffee in mumbra",
    "coffee near shilphata",
    "cappuccino mumbra",
    "iced coffee shilphata",
    "cold coffee near me",
  ],
}

export default function CoffeePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Coffee", url: "/coffee" },
  ])

  const hotCoffee = MENU_ITEMS.filter((item) => item.category === "coffee-hot")
  const coldCoffee = MENU_ITEMS.filter((item) => item.category === "coffee-cold")

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="min-h-screen pt-20 md:pt-0">
        <section className="bg-foreground text-background py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">
              Best Coffee in Mumbra & Shilphata
            </h1>
            <p className="text-lg text-background/80 text-center max-w-3xl mx-auto text-pretty">
              Premium coffee made with the finest beans. From classic cappuccino to refreshing iced coffee, we have the
              perfect brew for every coffee lover in Mumbra, Shilphata, Diva, and nearby areas.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Coffee, Milkshakes & Mocktails Menu</h2>
              <p className="text-center text-muted-foreground mb-8">
                Complete beverage menu with prices for hot coffee, iced coffee, cold coffee, milkshakes, and mocktails.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/menu/shake-chilli-coffee-shakes-beverages-menu-mumbra.jpeg"
                  alt="Shake Chilli Beverages Menu - Hot Coffee (Americano Black Coffee, Cappuccino, Flat White, Mocha, Irish Coffee, Hazelnut Coffee), Iced Coffee (Iced Americano, Iced Cappuccino, Creamy Iced Latte, Oreod Iced Latte, Irish Iced Latte, Hazelnut Iced Coffee, Caramel Iced Macchiato), Cold Coffee (Classic Cold Coffee, Frappuccino, Cocoa Mocha), Milkshakes (Mango, Strawberry, Butterscotch, KitKat, Oreo, Chocolate), Mocktails (Virgin Mojito, Watermelon, Green Apple, Kala Khatta, Blueberry, Spicy Mango, Orange, Litchi, Chilli Guava, Kiwi, Blue Curacao, Bubble Gum, Pina Colada) in Mumbra Shilphata near Al-Hidaya School with home delivery"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                All beverages freshly prepared. Available for dine-in and home delivery in Mumbra, Shilphata, Diva,
                Dosti areas.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#e10600]">Hot Coffee</h2>
              <p className="text-muted-foreground mb-6">
                Warm, aromatic coffee perfect for any time of the day. Made with premium coffee beans and fresh milk.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotCoffee.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#18a558]">Cold Coffee</h2>
              <p className="text-muted-foreground mb-6">
                Refreshing iced coffee drinks perfect for hot days in Mumbra and Shilphata. Creamy, delicious, and
                energizing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coldCoffee.map((item) => (
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
