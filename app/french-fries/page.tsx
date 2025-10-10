import { Metadata } from "next"
import { ProductCard } from "@/components/product-card"
import { MENU_ITEMS } from "@/lib/menu-data"
import { BUSINESS_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: `French Fries - ${BUSINESS_INFO.name}`,
  description: `Crispy french fries, nuggets & starters at ${BUSINESS_INFO.name} in ${BUSINESS_INFO.address.area}. Order online for hot, golden fries delivered to your door.`,
  keywords: [
    "french fries",
    "crispy fries",
    "fries",
    "nuggets",
    "starters",
    "food delivery Mumbra",
    "food delivery Shilphata",
    BUSINESS_INFO.name
  ]
}

export default function FrenchFriesPage() {
  // Filter items that are french fries or related starters
  const friesItems = MENU_ITEMS.filter(item => 
    item.category === "french-fries" || 
    item.keywords.some(keyword => 
      keyword.includes("fries") || 
      keyword.includes("crispy") ||
      keyword.includes("potato")
    )
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Crispy <span className="text-primary">French Fries</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Golden, crispy french fries and delicious starters. Perfect for snacking 
              or sharing with friends and family.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {friesItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {friesItems.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                We&apos;re working on adding crispy french fries to our menu. 
                Check back soon or explore our other categories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out our complete menu or contact us for special requests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              View Full Menu
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-background border border-input px-8 py-3 hover:bg-muted transition-colors font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}