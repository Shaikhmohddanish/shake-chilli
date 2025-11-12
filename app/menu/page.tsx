import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { MENU_ITEMS } from "@/lib/menu-data"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { ProductCard } from "@/components/product-card"
import { Phone } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Menu & Prices | Pizza, Burgers, Sandwiches",
  description:
    "View our complete menu with prices. Best Pizza, Burgers, Footlong Sandwiches, Coffee, Milkshakes in Mumbra, Shilphata. Halal food with free delivery.",
  keywords: [
    "shake chilli menu",
    "pizza menu mumbra",
    "burger prices shilphata",
    "food menu near me",
    "halal restaurant menu",
  ],
  alternates: {
    canonical: "https://shakechillicafe.com/menu",
  },
  openGraph: {
    title: "Menu & Prices | Pizza, Burgers, Sandwiches",
    description: "View our complete menu with prices. Best Pizza, Burgers, Footlong Sandwiches, Coffee, Milkshakes in Mumbra, Shilphata. Halal food with free delivery.",
    url: "https://shakechillicafe.com/menu",
    type: "website",
    siteName: "Shake Chilli - Cafe & Restaurant",
    images: [
      {
        url: "https://shakechillicafe.com/logo-square.png",
        width: 156,
        height: 156,
        alt: "Shake Chilli Restaurant",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function MenuPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Menu", url: "/menu" },
  ])

  const categories = [
    { id: "pizza-veg", name: "Vegetarian Pizzas" },
    { id: "pizza-non-veg", name: "Non-Vegetarian Halal Pizzas" },
    { id: "pizza-special", name: "Special Premium Pizzas" },
    { id: "burger", name: "Fresh Burgers" },
    { id: "footlong-sandwich", name: "Footlong Sandwiches" },
    { id: "garlic-bread", name: "Garlic Bread" },
    { id: "coffee-hot", name: "Hot Coffee" },
    { id: "coffee-cold", name: "Cold Coffee" },
    { id: "milkshake", name: "Milkshakes" },
    { id: "mocktail", name: "Mocktails" },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main id="main-content" className="min-h-screen">
        <section className="bg-foreground text-background py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
              Best Restaurant Menu in Mumbra & Shilphata | Pizza, Burgers & More
            </h1>
            <p className="text-base md:text-lg text-background/80 text-center max-w-2xl mx-auto">
              Explore our full range of fresh pizzas, burgers, footlong sandwiches, and beverages at Shake Chilli Cafe & Pizzeria. Best halal food in Mumbra, Shilphata, Kausa, MM Valley, Dosti, Amrut Nagar. All items available for dine-in and
              delivery in 20-40 minutes! Bypass & Dosti (20min), Shimla Park & Kausa (40min), Station (60min).
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Complete Menu with Prices</h2>
            <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto text-sm md:text-base">
              Browse our full menu cards with detailed pricing for all items. Available for dine-in and free home
              delivery in Mumbra, Shilphata, Kausa, MM Valley, Dosti, Amrut Nagar, Mumbra Bypass, Y Junction, Millenium and nearby areas. Delivery time: Bypass area 20min, Shimla Park/Kausa/Amrut Nagar 40min, Station area 60min.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
              {/* Pizza Menu */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-center">Pizza Menu</h3>
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border-2 md:border-4 border-white">
                  <Image
                    src="/images/shake-chilli-complete-pizza-menu-mumbra-shilphata.jpeg"
                    alt="Shake Chilli Complete Pizza Menu Card - Vegetarian pizzas (Margherita ₹150-400, Double Cheese Margherita ₹180-420, Fresh Veggie ₹200-440, Corn Delight ₹220-460, Paneer ₹250-500, Veg Veganza ₹300-550), Non-Veg pizzas (Chicken Tikka ₹200-480, Chicken Spicy ₹240-500, BBQ ₹250-530, Golden Delight ₹300-580, Chicken Vegenza ₹350-630, Chicken Italian ₹380-660, Mexican ₹420-700), Special pizzas (Mamamia ₹480-750, 7G ₹500-780, 8G ₹550-820, Double Layer ₹600-870), 2-in-1 combo pizzas (Tikka X Spicy ₹250-540, Tikka X BBQ ₹260-550, Vegenza X Golden Delight ₹380-650, Italian X Spicy ₹400-680) available in Small Medium Large sizes in Mumbra Shilphata"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Combo Offers Menu */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-center">Combo Offers & Meals</h3>
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border-2 md:border-4 border-white">
                  <Image
                    src="/images/shake-chilli-combo-deals-family-meals-mumbra.jpeg"
                    alt="Shake Chilli Combo Offers Menu - Loot Combo (Veg Burger, French Fries, Mojito ₹180), Burger Meal (Chicken Burger, Fries, Mojito ₹200), Hunger Combo (Chicken Tikka Pizza Small, Chicken Burger, Fries, Mojito ₹400), Combo for Two (2 Chicken Burgers, Small Chicken Tikka Pizza, Fries, 2 Mojitos ₹540), Family Meal (4 Chicken Burgers, Large Chicken Tikka Pizza, Large Fries ₹750), Sandwich Meal (Footlong Sandwich 6 inch ₹140 12inch ₹250, Chicken Subway ₹160-280, Chicken Crispy ₹180-300), Chicken Nuggets Meal (Chicken Burger, Nuggets, Mojito ₹280), Chicken Tikka Pizza Small with Nuggets and Mojito ₹400, Slice Pizza Meals with burger/nuggets/mojito ₹200-330 in Mumbra Shilphata near Al-Hidaya School"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Burgers & Starters Menu */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-center">Burgers, Sandwiches & Starters</h3>
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border-2 md:border-4 border-white">
                  <Image
                    src="/images/shake-chilli-footlong-sandwich-wrap-menu-shilphata.jpeg"
                    alt="Shake Chilli Starters and Burgers Menu - Starters (Fries Salted Regular ₹80 Large ₹120, Fries Peri Peri ₹100-140, Cheesy Fries ₹120-180, Chicken Loaded Fries ₹200-300, Chicken Nuggets 6pcs ₹160, Chicken Popcorn 10pcs ₹150), Dessert (Tiramisu ₹180), Garlic Bread (Cheesy ₹150, Corn ₹170, Chicken ₹250), Footlong Sandwiches (Veg Subway 6inch ₹140 12inch ₹250, Chicken Subway ₹160-280, Chicken Crispy ₹180-300), Veg Burgers (Veg Burger ₹70, Veg Cheese Burst ₹100), Non-Veg Burgers (Chicken Burger ₹80, Xinger Burger ₹120, Chicken Cheese Burst ₹140) in Mumbra Shilphata with home delivery"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Coffee & Beverages Menu */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-center">Coffee, Shakes & Mocktails</h3>
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border-2 md:border-4 border-white">
                  <Image
                    src="/images/shake-chilli-coffee-milkshakes-mojito-menu-mumbra.jpeg"
                    alt="Shake Chilli Beverages Menu Card - Hot Coffee (Americano Black ₹50, Cappuccino ₹70, Flat White ₹90, Mocha ₹100, Irish Coffee ₹120, Hazelnut Coffee ₹120), Iced Coffee (Iced Americano ₹90, Iced Cappuccino ₹150, Creamy Iced Latte ₹170, Oreod Iced Latte ₹170, Irish Iced Latte ₹180, Hazelnut Iced Coffee ₹180, Caramel Iced Macchiato ₹200), Cold Coffee (Classic ₹100, Frappuccino ₹140, Cocoa Mocha ₹150), Milkshakes (Mango, Strawberry, Butterscotch, KitKat, Oreo, Chocolate all ₹120), Mocktails (Virgin Mojito, Watermelon, Green Apple, Kala Khatta, Blueberry, Spicy Mango, Orange, Litchi, Chilli Guava, Kiwi all ₹80), Special Mocktails (Blue Curacao, Bubble Gum, Pina Colada all ₹100) in Mumbra Shilphata"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="text-center mt-8 md:mt-12">
              <p className="text-muted-foreground mb-4 text-sm md:text-base">All items available for dine-in and free home delivery</p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
                <a
                  href="tel:7208697371"
                  className="inline-flex items-center justify-center gap-2 bg-[#e10600] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-[#c10500] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call: 7208 697 371
                </a>
                <a
                  href="tel:9082990187"
                  className="inline-flex items-center justify-center gap-2 bg-[#18a558] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-[#159048] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call: 9082 990 187
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            {categories.map((category) => {
              const items = MENU_ITEMS.filter((item) => item.category === category.id)
              if (items.length === 0) return null

              return (
                <div key={category.id} className="mb-12 md:mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 pb-2 border-b-2 border-[#e10600]">
                    Best {category.name} in Mumbra & Shilphata | Fresh {category.id.includes('veg') ? 'Vegetarian' : category.id.includes('non-veg') ? 'Halal Non-Vegetarian' : ''} Food
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {items.map((item) => (
                      <ProductCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
