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
  title: "Best Starters in Mumbra, Shilphata | French Fries, Chicken Popcorn Near Me",
  description:
    "Best Starters in Mumbra & Shilphata. Crispy french fries (salted, peri peri, cheesy), chicken loaded fries, chicken popcorn. Halal. Free delivery near Al-Hidaya School, Kausa, MM Valley in 10-15 min.",
  keywords: [
    "best starters in mumbra",
    "french fries shilphata",
    "chicken popcorn mumbra",
    "cheesy fries near me",
    "halal starters shilphata",
    "peri peri fries mumbra",
    "chicken loaded fries",
  ],
}

export default function StartersPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Starters", url: "/starters" },
  ])

  const starters = MENU_ITEMS.filter((item) => item.category === "starters")

  const startersFAQs = [
    {
      question: "Which is the best starter in Mumbra?",
      answer: "Shake Chilli serves the best starters in Mumbra and Shilphata. Our Cheesy Fries and Chicken Loaded Fries are customer favorites. Made with crispy golden fries and premium toppings. Located near Al-Hidaya School in Shilphata."
    },
    {
      question: "Are your chicken starters halal?",
      answer: "Yes, all our chicken starters (Chicken Loaded Fries and Chicken Popcorn) are made with 100% halal-certified chicken. Shake Chilli is a trusted halal restaurant in Mumbra and Shilphata."
    },
    {
      question: "What types of fries do you have?",
      answer: "We have 5 types of fries: French Fries Salted (₹80/₹120), French Fries Peri Peri (₹100/₹140), Cheesy Fries (₹120/₹180), and Chicken Loaded Fries (₹200/₹300). All made fresh and crispy!"
    },
    {
      question: "How fast is delivery?",
      answer: "We offer super fast free home delivery to Mumbra, Shilphata, Kausa, MM Valley, Dosti, Amrut Nagar, Mumbra Bypass, Y Junction, Millenium and nearby areas. Hot and crispy starters delivered in just 10-15 minutes! Call 7208 697 371 to order."
    },
    {
      question: "Can I order starters with pizza or burgers?",
      answer: "Yes! Our starters are perfect as sides with pizza, burgers, or sandwiches. We also have combo deals. Check out our full menu or call 7208 697 371 for combo offers."
    }
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main id="main-content" className="min-h-screen">
        <section className="bg-foreground text-background py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">
              Best Starters in Mumbra & Shilphata
            </h1>
            <p className="text-lg text-background/80 text-center max-w-3xl mx-auto text-pretty">
              Crispy, delicious starters made fresh to order. From classic french fries to loaded options with chicken
              and cheese. Free delivery to Mumbra, Shilphata, Kausa, MM Valley, Dosti, Amrut Nagar, Mumbra Bypass, Y
              Junction, Millenium and nearby areas in just 10-15 minutes!
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Starters, Burgers & Sandwiches Menu</h2>
              <p className="text-center text-muted-foreground mb-8">
                Complete menu with prices for starters, burgers, footlong sandwiches, and garlic bread.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/menu/shake-chilli-starters-burgers-sandwiches-menu-mumbra.jpeg"
                  alt="Shake Chilli Menu - Starters (Salted Fries 80/120, Peri Peri Fries 100/140, Cheesy Fries 120/180, Chicken Loaded Fries 200/300, Chicken Popcorn 10pcs 150), Garlic Bread, Footlong Sandwiches, Burgers in Mumbra Shilphata with prices and home delivery"
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
              <h2 className="text-3xl font-bold mb-6">Our Starters Collection</h2>
              <p className="text-muted-foreground mb-6">
                Every starter is made fresh to order with the finest ingredients. From crispy golden fries to loaded
                options with chicken and cheese. Perfect as a snack or to share with friends in Mumbra and Shilphata.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {starters.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <FAQSection faqs={startersFAQs} />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
