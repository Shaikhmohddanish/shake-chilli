import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { MENU_ITEMS } from "@/lib/menu-data"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { ProductCard } from "@/components/product-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Best Burgers in Mumbra, Shilphata | Chicken & Veg Burgers Near Me",
  description:
    "Best Burgers in Mumbra & Shilphata. Juicy chicken burgers, veg burgers, cheese burst. Halal. Free delivery near Al-Hidaya School, Dosti, Diva, Shalimar.",
  keywords: [
    "best burger in mumbra",
    "burger near shilphata",
    "chicken burger mumbra",
    "veg burger near me",
    "halal burger shilphata",
    "zinger burger mumbra",
  ],
}

export default function BurgerPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Burgers", url: "/burger" },
  ])

  const burgers = MENU_ITEMS.filter((item) => item.category === "burger")

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="min-h-screen">
        <section className="bg-foreground text-background py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">
              Best Burgers in Mumbra & Shilphata
            </h1>
            <p className="text-lg text-background/80 text-center max-w-3xl mx-auto text-pretty">
              Juicy, flavorful burgers made with fresh ingredients and 100% halal chicken. From classic chicken burgers
              to our signature Big ShakeChilli Burger, we have something for everyone. Free delivery to Mumbra,
              Shilphata, Diva, Dosti, Shalimar and nearby areas.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Burgers, Sandwiches & Starters Menu</h2>
              <p className="text-center text-muted-foreground mb-8">
                Complete menu with prices for burgers, footlong sandwiches, starters, garlic bread, and desserts.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/menu/shake-chilli-starters-burgers-sandwiches-menu-mumbra.jpeg"
                  alt="Shake Chilli Menu - Starters (Salted Fries, Peri Peri Fries, Cheesy Fries, Chicken Loaded Fries, Chicken Nuggets, Chicken Popcorn), Dessert (Tiramisu), Garlic Bread (Cheesy, Corn, Chicken), Footlong Sandwiches (Veg Subway, Chicken Subway, Chicken Crispy), Burgers (Veg Burger, Veg Cheese Burst, Chicken Burger, Xinger Burger, Chicken Cheese Burst, Big ShakeChilli Burger) in Mumbra Shilphata with prices and home delivery"
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
              <h2 className="text-3xl font-bold mb-6">Our Burger Collection</h2>
              <p className="text-muted-foreground mb-6">
                Every burger is made fresh to order with crispy patties, fresh vegetables, and our special sauces.
                Whether you prefer veg or non-veg, we have the perfect burger for you in Mumbra and Shilphata.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {burgers.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Which is the best burger in Mumbra?</AccordionTrigger>
                  <AccordionContent>
                    Shake Chilli serves the best burgers in Mumbra and Shilphata. Our Big ShakeChilli Burger and Xinger
                    Burger are customer favorites. Made with 100% halal chicken, fresh vegetables, and special sauces.
                    Located near Al-Hidaya School in Shilphata.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Are your burgers halal?</AccordionTrigger>
                  <AccordionContent>
                    Yes, all our chicken burgers are made with 100% halal-certified chicken. Shake Chilli is a trusted
                    halal restaurant in Mumbra and Shilphata. We also have delicious vegetarian burger options.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you have veg burger options?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We have Veg Burger and Veg Cheese Burst options. Both are made with crispy vegetable patties,
                    fresh toppings, and our special sauce. Perfect for vegetarians in Mumbra and Shilphata.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you deliver burgers to Diva and Dosti?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We offer free home delivery to Mumbra, Shilphata, Diva, Dosti, Shalimar and nearby areas. Hot
                    and fresh burgers delivered in 30-45 minutes. Call 7208 697 371 to order.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What makes your burgers special?</AccordionTrigger>
                  <AccordionContent>
                    Our burgers are made fresh to order with juicy patties, fresh vegetables, and our signature sauces.
                    We use 100% halal chicken and quality ingredients. The best burger experience in Mumbra, Shilphata,
                    and surrounding areas.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
