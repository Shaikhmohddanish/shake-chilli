import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Pizza, Sandwich, Coffee, Wine, Salad, UtensilsCrossed, ArrowRight } from "lucide-react"

export function CategoryGrid() {
  const categories = [
    {
      name: "Pizza",
      slug: "/pizza",
      icon: Pizza,
      description: "Veg & Non-Veg pizzas with fresh toppings",
      color: "text-[#e10600]",
    },
    {
      name: "Burgers",
      slug: "/burger",
      icon: UtensilsCrossed,
      description: "Juicy burgers with crispy patties",
      color: "text-[#18a558]",
    },
    {
      name: "Footlong Sandwich",
      slug: "/footlong-sandwich",
      icon: Sandwich,
      description: "6-inch & 12-inch subway-style sandwiches",
      color: "text-[#e10600]",
    },
    {
      name: "Garlic Bread",
      slug: "/garlic-bread",
      icon: Salad,
      description: "Cheesy, corn & chicken garlic bread",
      color: "text-[#18a558]",
    },
    {
      name: "French Fries",
      slug: "/french-fries",
      icon: Salad,
      description: "Crispy fries, nuggets & starters",
      color: "text-[#e10600]",
    },
    {
      name: "Coffee",
      slug: "/coffee",
      icon: Coffee,
      description: "Hot & cold coffee varieties",
      color: "text-[#18a558]",
    },
    {
      name: "Milkshakes",
      slug: "/milkshakes",
      icon: Wine,
      description: "Thick & creamy milkshakes",
      color: "text-[#e10600]",
    },
    {
      name: "Mocktails",
      slug: "/mojito",
      icon: Wine,
      description: "Refreshing virgin mojitos & mocktails",
      color: "text-[#18a558]",
    },
    {
      name: "Starters",
      slug: "/starters",
      icon: UtensilsCrossed,
      description: "Chicken nuggets, popcorn & more",
      color: "text-[#e10600]",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Explore Our <span className="text-primary">Menu</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            From authentic pizzas to juicy burgers, we serve the best food in Mumbra and Shilphata
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link key={category.slug} href={category.slug}>
              <Card className="h-full hover:shadow-card transition-all duration-300 cursor-pointer group border-2 hover:border-primary/20 hover:-translate-y-1">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div
                      className={`p-4 md:p-6 rounded-2xl bg-gradient-card group-hover:scale-110 transition-transform ${category.color} flex items-center justify-center`}
                    >
                      <category.icon className="h-8 w-8 md:h-10 md:w-10" />
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base">{category.description}</p>
                      <div className="flex items-center justify-center gap-2 text-primary font-medium group-hover:gap-3 transition-all pt-2">
                        <span className="text-sm md:text-base">Explore</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
