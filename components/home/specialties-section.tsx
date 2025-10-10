import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Utensils, Coffee, Pizza, Sandwich } from "lucide-react"

export function SpecialtiesSection() {
  const specialties = [
    {
      icon: Pizza,
      title: "Authentic Pizzas",
      description: "Hand-tossed dough with premium toppings",
      items: ["Margherita", "Chicken Tikka", "BBQ Special", "Veg Veganza"],
      color: "text-[#e10600]",
      bgColor: "bg-[#e10600]/10"
    },
    {
      icon: Sandwich,
      title: "Fresh Burgers & Sandwiches", 
      description: "Juicy patties with crispy vegetables",
      items: ["Chicken Burger", "Veg Burger", "Footlong Sandwich", "Crispy Chicken"],
      color: "text-[#18a558]",
      bgColor: "bg-[#18a558]/10"
    },
    {
      icon: Coffee,
      title: "Premium Beverages",
      description: "Hot coffee, cold shakes, and mocktails",
      items: ["Cappuccino", "Cold Coffee", "Milkshakes", "Virgin Mojito"],
      color: "text-[#8b4513]",
      bgColor: "bg-[#8b4513]/10"
    },
    {
      icon: Utensils,
      title: "Combo Meals",
      description: "Value-packed combinations for families",
      items: ["Loot Combo", "Hunger Combo", "Family Meal", "Couple Combo"],
      color: "text-[#ff6b35]",
      bgColor: "bg-[#ff6b35]/10"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-accent/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-primary">Specialties</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Discover what makes Shake Chilli special – from our signature pizzas to refreshing beverages, 
            each category offers something unique for every taste preference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon
            return (
              <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${specialty.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-8 w-8 ${specialty.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {specialty.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {specialty.description}
                  </p>
                  <div className="space-y-2">
                    {specialty.items.map((item, itemIndex) => (
                      <Badge 
                        key={itemIndex} 
                        variant="secondary" 
                        className="text-xs mx-1"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            All our dishes are prepared with fresh ingredients and authentic recipes. 
            We offer both vegetarian and non-vegetarian options, with halal certification.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="text-sm">🌱 Vegetarian Options</Badge>
            <Badge variant="outline" className="text-sm">🥩 Non-Veg Delights</Badge>
            <Badge variant="outline" className="text-sm">🏺 Halal Certified</Badge>
            <Badge variant="outline" className="text-sm">🚚 Free Home Delivery</Badge>
            <Badge variant="outline" className="text-sm">⏰ Fast Service</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}