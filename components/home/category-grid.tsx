import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Pizza, Sandwich, Coffee, Wine, Salad, UtensilsCrossed, ArrowRight } from "lucide-react"

interface Category {
  name: string
  slug: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  color: string
  bgImage: string | null
  bgGradient: string
}

export function CategoryGrid() {
  const categories = [
    {
      name: "Pizza",
      slug: "/pizza",
      icon: Pizza,
      description: "Veg & Non-Veg pizzas with fresh toppings",
      color: "text-[#e10600]",
      bgImage: "/images/pizza/Chicken tikka pizza.jpg",
      bgGradient: "from-red-500 to-orange-500",
    },
    {
      name: "Burgers",
      slug: "/burger",
      icon: UtensilsCrossed,
      description: "Juicy burgers with crispy patties",
      color: "text-[#18a558]",
      bgImage: "/images/burger/Chicken burger.jpg",
      bgGradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Footlong Sandwich",
      slug: "/footlong-sandwich",
      icon: Sandwich,
      description: "6-inch & 12-inch subway-style sandwiches",
      color: "text-[#e10600]",
      bgImage: "/images/sandwhich/Chicken footlong sandwhich .jpg",
      bgGradient: "from-yellow-500 to-orange-500",
    },
    {
      name: "Garlic Bread",
      slug: "/garlic-bread",
      icon: Salad,
      description: "Cheesy, corn & chicken garlic bread",
      color: "text-[#18a558]",
      bgImage: "/images/bread/Cheese garlic bread.jpg",
      bgGradient: "from-amber-500 to-yellow-500",
    },
    {
      name: "Starters",
      slug: "/starters",
      icon: Salad,
      description: "Crispy fries, chicken popcorn & starters",
      color: "text-[#e10600]",
      bgImage: "/images/starters/Cheesy fries.jpg",
      bgGradient: "from-yellow-600 to-orange-600",
    },
    {
      name: "Coffee",
      slug: "/coffee",
      icon: Coffee,
      description: "Hot & cold coffee varieties",
      color: "text-[#18a558]",
      bgImage: "/images/coffee/Classic cold coffee.jpg",
      bgGradient: "from-amber-800 to-yellow-800",
    },
    {
      name: "Milkshakes",
      slug: "/milkshakes",
      icon: Wine,
      description: "Thick & creamy milkshakes",
      color: "text-[#e10600]",
      bgImage: "/images/milkshakes/Chocolate milk shake.jpg",
      bgGradient: "from-pink-500 to-rose-500",
    },
    {
      name: "Mojitos & Mocktails",
      slug: "/mojito",
      icon: Wine,
      description: "12+ flavors: Virgin, Mango, Kiwi & more",
      color: "text-[#18a558]",
      bgImage: "/images/mocktails/Virgin mojito.jpg",
      bgGradient: "from-cyan-500 to-blue-500",
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
            <Link key={category.slug} href={category.slug} aria-label={`View ${category.name} menu - ${category.description}`}>
              <Card className="h-full hover:shadow-card transition-all duration-300 cursor-pointer group border-2 hover:border-primary/20 hover:-translate-y-1 overflow-hidden bg-white">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  {category.bgImage ? (
                    <Image
                      src={category.bgImage}
                      alt={`Best ${category.name} in Mumbra Shilphata - ${category.description} - Shake Chilli Cafe`}
                      fill
                      priority={category.name === "Pizza" || category.name === "Burgers"}
                      quality={80}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} transition-transform duration-300 group-hover:scale-105`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`p-4 md:p-6 rounded-2xl bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform ${category.color} flex items-center justify-center`}
                      aria-hidden="true"
                    >
                      <category.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col items-center text-center gap-4">
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
