import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { MENU_ITEMS } from "@/lib/menu-data"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { ProductCard } from "@/components/product-card"
import { FAQSection } from "@/components/faq-section"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Best Pizza in Shilphata, Mumbra | Veg & Non-Veg Pizza Near Me",
  description:
    "Best Pizza in Mumbra & Shilphata. Veg & Non-Veg pizzas with fresh toppings. Chicken Tikka, Margherita, BBQ Pizza. Halal. Free delivery near Al-Hidaya School, Dosti, Diva.",
  keywords: [
    "best pizza in mumbra",
    "pizza near shilphata",
    "chicken tikka pizza mumbra",
    "veg pizza near me",
    "halal pizza shilphata",
    "pizza delivery mumbra",
    "near al hidaya school",
  ],
}

export default function PizzaPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Pizza", url: "/pizza" },
  ])

  const vegPizzas = MENU_ITEMS.filter((item) => item.category === "pizza-veg")
  const nonVegPizzas = MENU_ITEMS.filter((item) => item.category === "pizza-non-veg")
  const specialPizzas = MENU_ITEMS.filter((item) => item.category === "pizza-special")

  const pizzaFAQs = [
    {
      question: "Which is the best pizza in Mumbra?",
      answer: "Shake Chilli serves the best pizza in Mumbra and Shilphata. Our Chicken Tikka Pizza and Margherita Pizza are customer favorites. We use fresh ingredients, hand-tossed dough, and 100% halal chicken. Located near Al-Hidaya School in Shilphata."
    },
    {
      question: "Do you deliver pizza to Diva and Dosti?",
      answer: "Yes! We offer free home delivery to Mumbra, Shilphata, Diva, Dosti, Shalimar and nearby areas. Hot and fresh pizza delivered to your doorstep in 30-45 minutes. Call us at 7208 697 371 to order."
    },
    {
      question: "Is your pizza halal?",
      answer: "Yes, all our pizzas are 100% halal. We use only halal-certified chicken and ingredients. Shake Chilli is a trusted halal restaurant in Mumbra and Shilphata."
    },
    {
      question: "What sizes are available?",
      answer: "Our pizzas are available in three sizes: Small (serves 1-2), Medium (serves 2-3), and Large (serves 3-4). Perfect for individuals, couples, and families in Mumbra and Shilphata."
    },
    {
      question: "Can I customize my pizza?",
      answer: "Yes! You can customize your pizza with extra toppings or remove ingredients. Call us at 7208 697 371 or 9082 990 187 to place a custom order. We are located near Al-Hidaya School in Shilphata."
    }
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="min-h-screen pt-20 md:pt-0">
        <section className="bg-foreground text-background py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">
              Best Pizza in Mumbra & Shilphata
            </h1>
            <p className="text-lg text-background/80 text-center max-w-3xl mx-auto text-pretty">
              Freshly baked pizzas with authentic Italian flavors and Indian spices. Choose from our wide range of veg
              and non-veg pizzas, all made with 100% halal ingredients. Available in Small, Medium, and Large sizes.
              Free delivery to Mumbra, Shilphata, Diva, Dosti, Shalimar and nearby areas.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Complete Pizza Menu with Prices</h2>
              <p className="text-center text-muted-foreground mb-8">
                View our full pizza menu including Veg Pizza, Non-Veg Pizza, Special Pizza, and 2-in-1 Pizza options.
                All prices shown for Small, Medium, and Large sizes.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/shake-chilli-complete-pizza-menu-mumbra-shilphata.jpeg"
                  alt="Shake Chilli Pizza Menu - Complete price list for vegetarian pizza (Margherita, Double Cheese, Fresh Veggie, Corn Delight, Paneer, Veg Veganza), non-vegetarian pizza (Chicken Tikka, Chicken Spicy, BBQ, Golden Delight, Chicken Vegenza, Chicken Italian, Mexican), special pizzas (Mamamia, 7G, 8G, Double Layer), and 2-in-1 combo pizzas in Mumbra Shilphata near Al-Hidaya School with home delivery"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                All pizzas available in S (Small), M (Medium), and L (Large) sizes. Free home delivery in Mumbra,
                Shilphata, Diva, Dosti areas.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#18a558]">Vegetarian Pizza</h2>
              <p className="text-muted-foreground mb-6">
                Our vegetarian pizzas are made with fresh vegetables, premium cheese, and our signature sauce. Perfect
                for vegetarians in Mumbra and Shilphata looking for delicious pizza options.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vegPizzas.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#e10600]">Non-Vegetarian Pizza</h2>
              <p className="text-muted-foreground mb-6">
                Our non-veg pizzas feature tender, juicy 100% halal chicken with authentic spices and fresh toppings.
                The best chicken pizza in Mumbra, Shilphata, and Diva. Try our famous Chicken Tikka Pizza!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nonVegPizzas.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#e10600]">Special Pizza</h2>
              <p className="text-muted-foreground mb-6">
                Our premium special pizzas are loaded with gourmet toppings and multiple cheese varieties. Perfect for
                celebrations and special occasions in Mumbra and Shilphata.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specialPizzas.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <FAQSection faqs={pizzaFAQs} />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
