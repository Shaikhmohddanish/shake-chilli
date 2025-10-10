import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FeaturedCombos() {
  const combos = [
    {
      name: "Loot Combo",
      items: ["Veg Burger", "French Fries", "Mojito"],
      price: 180,
      badge: "Best Value",
      popular: true,
    },
    {
      name: "Burger Meal",
      items: ["Chicken Burger", "French Fries", "Mojito"],
      price: 200,
      badge: "Popular",
      popular: true,
    },
    {
      name: "Hunger Combo",
      items: ["Chicken Tikka Pizza (S)", "Chicken Burger", "French Fries (S)", "Mojito"],
      price: 400,
      badge: "Bestseller",
      popular: true,
    },
    {
      name: "Combo for Two",
      items: ["2 Chicken Burgers", "Chicken Tikka Pizza (S)", "French Fries (S)", "2 Mojitos"],
      price: 540,
      badge: "For Sharing",
      popular: false,
    },
    {
      name: "Family Meal",
      items: ["4 Chicken Burgers", "Chicken Tikka Pizza (L)", "French Fries (L)"],
      price: 750,
      badge: "Family Pack",
      popular: true,
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Featured <span className="text-primary">Combo Offers</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Save more with our special combo meals - perfect for individuals, couples, and families in Mumbra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {combos.map((combo) => (
            <Card
              key={combo.name}
              className="flex flex-col shadow-card border-2 hover:border-primary/20 hover:-translate-y-1 transition-all group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">{combo.name}</CardTitle>
                  {combo.popular && (
                    <Badge variant="default" className="bg-primary text-primary-foreground shadow-soft text-xs">
                      {combo.badge}
                    </Badge>
                  )}
                  {!combo.popular && (
                    <Badge variant="secondary" className="shadow-soft text-xs">
                      {combo.badge}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <ul className="space-y-2 md:space-y-3">
                  {combo.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3 p-2 bg-accent/30 rounded-lg">
                      <span className="text-secondary text-lg md:text-xl mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex items-center justify-between pt-4 md:pt-6 border-t">
                <div className="text-2xl md:text-3xl font-bold text-primary">₹{combo.price}</div>
                <Link 
                  href="/menu" 
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-9 px-3 md:h-10 md:px-4 text-sm md:text-base border border-input bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary group"
                >
                  Order Now
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
