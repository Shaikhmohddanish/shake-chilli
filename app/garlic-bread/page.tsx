import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { ProductCard } from "@/components/product-card"
import { MENU_ITEMS } from "@/lib/menu-data"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { FAQSection } from "@/components/faq-section"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Best Garlic Bread in Mumbra, Shilphata | Cheesy Garlic Bread Near Me",
  description:
    "Best Garlic Bread in Mumbra & Shilphata. Cheesy, corn, paneer & chicken garlic bread. Fresh & homemade. Halal. Free delivery to Kausa, MM Valley, Dosti in 10-15 min.",
  keywords: [
    "garlic bread mumbra",
    "best garlic bread shilphata",
    "cheesy garlic bread mumbra",
    "chicken garlic bread near me",
    "corn garlic bread shilphata",
    "paneer garlic bread mumbra",
    "homemade garlic bread",
    "garlic bread delivery kausa",
  ],
}

export default function GarlicBreadPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Garlic Bread", url: "/garlic-bread" },
  ])

  const garlicBreadItems = MENU_ITEMS.filter((item) => item.category === "garlic-bread")

  const garlicBreadFAQs = [
    {
      question: "Which is the best garlic bread in Mumbra?",
      answer: "Shake Chilli serves the best garlic bread in Mumbra and Shilphata. Our Chicken Garlic Bread and Cheese Garlic Bread are customer favorites. Made with homemade dough, fresh ingredients, and real garlic paste. Located near Al-Hidaya School in Shilphata."
    },
    {
      question: "Is your garlic bread made fresh?",
      answer: "Yes! All our garlic bread is made fresh daily with homemade dough. We top it with real butter, fresh garlic paste, oregano, and premium mozzarella cheese. Baked to golden perfection every time in Mumbra and Shilphata."
    },
    {
      question: "Are your chicken items halal?",
      answer: "Yes, our Chicken Garlic Bread is made with 100% halal-certified chicken. Shake Chilli is a trusted halal restaurant in Mumbra and Shilphata. We also have delicious vegetarian garlic bread options."
    },
    {
      question: "What sizes are available?",
      answer: "Our garlic bread is available in Regular and Large sizes. Perfect for individuals, couples, or families in Mumbra and Shilphata. Great as a side dish or snack!"
    },
    {
      question: "How fast is delivery?",
      answer: "We offer super fast free home delivery to Mumbra, Shilphata, Kausa, MM Valley, Dosti, Amrut Nagar, Mumbra Bypass, Y Junction, Millenium and nearby areas. Hot and fresh garlic bread delivered in just 10-15 minutes! Call 7208 697 371 to order."
    }
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="min-h-screen">
        <section className="bg-foreground text-background py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">
              Best Garlic Bread in Mumbra & Shilphata
            </h1>
            <p className="text-lg text-background/80 text-center max-w-3xl mx-auto text-pretty">
              Freshly baked garlic bread made with homemade dough, real butter, and fresh garlic paste. Choose from
              cheesy, corn, paneer, veg, and chicken varieties. All made with premium ingredients and 100% halal chicken.
              Free delivery to Mumbra, Shilphata, Kausa, MM Valley, Dosti, Amrut Nagar and nearby areas in just 10-15 minutes!
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Starters, Burgers & Sandwiches Menu</h2>
              <p className="text-center text-muted-foreground mb-8">
                Complete menu with prices for garlic bread, starters, fries, burgers, and footlong sandwiches.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/menu/shake-chilli-starters-burgers-sandwiches-menu-mumbra.jpeg"
                  alt="Shake Chilli Menu - Garlic Bread (Cheese, Corn, Paneer, Veg, Chicken), Starters, French Fries, Burgers, Footlong Sandwiches in Mumbra Shilphata with prices and home delivery"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                All items available for dine-in and home delivery. Call 7208 697 371 or 9082 990 187 to order.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Garlic Bread Collection</h2>
              <p className="text-muted-foreground mb-6">
                Every garlic bread is made fresh to order with homemade dough, aromatic garlic, and quality toppings.
                Perfect as a side dish or snack for any meal in Mumbra and Shilphata.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {garlicBreadItems.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <FAQSection faqs={garlicBreadFAQs} />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}