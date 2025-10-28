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
  title: "Best French Fries & Starters in Mumbra, Shilphata | Crispy Fries Near Me",
  description:
    "Best French Fries & Starters in Mumbra & Shilphata. Salted fries, peri peri fries, cheesy fries, chicken popcorn & loaded fries. Halal. Free delivery to Kausa, MM Valley, Dosti in 10-15 min.",
  keywords: [
    "french fries mumbra",
    "best fries shilphata",
    "peri peri fries mumbra",
    "cheesy fries near me",
    "chicken popcorn mumbra",
    "loaded fries shilphata",
    "starters near me",
    "chicken overloaded fries",
    "crispy fries kausa",
  ],
}

export default function FrenchFriesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "French Fries & Starters", url: "/french-fries" },
  ])

  const friesItems = MENU_ITEMS.filter((item) => item.category === "french-fries")

  const friesFAQs = [
    {
      question: "Which is the best french fries in Mumbra?",
      answer: "Shake Chilli serves the best french fries in Mumbra and Shilphata. Our Chicken Overloaded Fries and Peri Peri Fries are customer favorites. Made with fresh potatoes, crispy fried, and topped with cheese and sauces. Located near Al-Hidaya School in Shilphata."
    },
    {
      question: "Are your chicken items halal?",
      answer: "Yes, all our chicken starters including Chicken Popcorn and Chicken Overloaded Fries are made with 100% halal-certified chicken. Shake Chilli is a trusted halal restaurant in Mumbra and Shilphata."
    },
    {
      question: "What starter options do you have?",
      answer: "We have amazing starters including Chicken Popcorn, Salted Fries, Peri Peri Fries, Cheesy Fries, and Chicken Overloaded Fries. Perfect for snacking or sharing with friends and family in Mumbra and Shilphata."
    },
    {
      question: "How fast is delivery?",
      answer: "We offer super fast free home delivery to Mumbra, Shilphata, Kausa, MM Valley, Dosti, Amrut Nagar, Mumbra Bypass, Y Junction, Millenium and nearby areas. Hot and crispy fries delivered in just 10-15 minutes! Call 7208 697 371 to order."
    },
    {
      question: "What makes your fries special?",
      answer: "Our fries are made fresh to order with quality potatoes, fried to golden perfection, and served hot. We offer various flavors from classic salted to peri peri, cheesy, and fully loaded options. The best french fries experience in Mumbra, Shilphata, and surrounding areas."
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
              Best French Fries & Starters in Mumbra & Shilphata
            </h1>
            <p className="text-lg text-background/80 text-center max-w-3xl mx-auto text-pretty">
              Crispy, golden french fries and delicious starters made fresh to order. From classic salted fries to
              loaded varieties with chicken and cheese. All chicken items are 100% halal. Free delivery to Mumbra,
              Shilphata, Kausa, MM Valley, Dosti, Amrut Nagar and nearby areas in just 10-15 minutes!
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Starters, Burgers & Sandwiches Menu</h2>
              <p className="text-center text-muted-foreground mb-8">
                Complete menu with prices for starters, fries, garlic bread, burgers, and footlong sandwiches.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/menu/shake-chilli-starters-burgers-sandwiches-menu-mumbra.jpeg"
                  alt="Shake Chilli Menu - French Fries & Starters (Salted Fries, Peri Peri Fries, Cheesy Fries, Chicken Loaded Fries, Chicken Popcorn), Garlic Bread, Footlong Sandwiches, Burgers in Mumbra Shilphata with prices and home delivery"
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
              <h2 className="text-3xl font-bold mb-6">Our French Fries & Starters Collection</h2>
              <p className="text-muted-foreground mb-6">
                Every item is made fresh to order with quality ingredients. From classic crispy fries to loaded
                varieties with chicken and cheese. Perfect for snacking or sharing in Mumbra and Shilphata.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {friesItems.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <FAQSection faqs={friesFAQs} />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}