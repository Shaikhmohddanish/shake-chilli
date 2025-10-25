import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { MENU_ITEMS } from "@/lib/menu-data"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { ProductCard } from "@/components/product-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Best Mojito & Mocktails in Mumbra, Shilphata | 12+ Flavors | Virgin Mojito Near Me",
  description:
    "Best Mojito & Mocktails in Mumbra & Shilphata. 12+ flavors: Virgin, Watermelon, Blue Curacao, Mango, Kiwi, Litchi, Pina Colada & more. Fresh ingredients. Near Al-Hidaya School. Free delivery.",
  keywords: [
    "best mojito in mumbra",
    "mojito near shilphata", 
    "virgin mojito mumbra",
    "watermelon mojito shilphata",
    "blue curacao mojito mumbra",
    "mango mojito near me",
    "kiwi mojito shilphata",
    "litchi mojito mumbra",
    "pina colada mojito near me",
    "blueberry mojito shilphata",
    "kala khatta mojito mumbra",
    "chilli guava mojito near me",
    "mocktail shilphata",
    "refreshing drinks near me",
    "fruit mojito mumbra",
    "shake chilli special drinks",
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
              Choose from 12+ refreshing mojito flavors including Virgin, Watermelon, Blue Curacao, Mango, Kiwi, Litchi, Pina Colada, Blueberry, and our signature Chilli Guava. Made with fresh mint, premium fruits, and natural ingredients. Perfect for beating the heat in Mumbra, Shilphata, Diva, Dosti, and nearby areas.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Complete Mojito & Mocktail Menu - 12+ Flavors</h2>
              <p className="text-muted-foreground mb-6">
                Cool down with our extensive range of 12+ mojito flavors and mocktails. From classic Virgin Mojito to exotic Litchi and our signature Chilli Guava special. Each drink is made fresh to order with premium natural ingredients, fresh mint, and real fruit pulps. The perfect refreshing drinks for any occasion in Mumbra and Shilphata.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mocktails.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">How many mojito flavors do you offer?</h3>
                <p className="text-muted-foreground">
                  We offer 12+ different mojito and mocktail flavors including Virgin Mojito, Watermelon, Blue Curacao, Green Apple, Orange, Litchi, Kiwi, Pina Colada, Blueberry, Spicy Mango, Kala Khatta, and our signature Chilli Guava Mojito.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">What makes your mojitos special?</h3>
                <p className="text-muted-foreground">
                  All our mojitos are made fresh to order with real fruit pulps, fresh mint leaves, premium ingredients, and natural flavors. No artificial colors or preservatives. Each mojito is muddled perfectly to extract maximum flavor from the mint and fruits.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Which is your most popular mojito flavor?</h3>
                <p className="text-muted-foreground">
                  Our Virgin Mojito, Watermelon Mojito, and Chilli Guava Mojito (signature special) are the most popular. The Pina Colada Mojito and Kala Khatta Mojito are also customer favorites, especially during summer months in Mumbra and Shilphata.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Do you deliver mojitos and mocktails?</h3>
                <p className="text-muted-foreground">
                  Yes! We offer free home delivery of all our mojitos and mocktails to Mumbra, Shilphata, Diva, Dosti, Shalimar, and nearby areas. Call 7208 697 371 to order your favorite refreshing drinks.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Are your mojitos suitable for all ages?</h3>
                <p className="text-muted-foreground">
                  Absolutely! All our mojitos are virgin (non-alcoholic) mocktails made with natural fruit juices, mint, lime, and soda water. They're perfect for families, kids, and anyone looking for refreshing, healthy drinks.
                </p>
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
