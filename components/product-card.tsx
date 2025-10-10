import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import type { MenuItem } from "@/lib/menu-data"

interface ProductCardProps {
  item: MenuItem
}

export function ProductCard({ item }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-card transition-all duration-300 group border-2 hover:border-primary/20 hover:-translate-y-1 overflow-hidden">
      <div className="relative h-40 md:h-48 bg-gradient-card overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl opacity-20">
          {item.isVeg ? "🍕" : "🍔"}
        </div>
        <div className="absolute top-2 md:top-4 right-2 md:right-4 flex flex-col gap-2">
          {item.isVeg && (
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground shadow-soft text-xs">
              🌱 Veg
            </Badge>
          )}
          {item.isPopular && (
            <Badge variant="default" className="bg-primary text-primary-foreground shadow-soft text-xs">
              ⭐ Popular
            </Badge>
          )}
        </div>
      </div>

      <CardHeader className="pb-2 md:pb-3">
        <CardTitle className="text-lg md:text-xl leading-tight group-hover:text-primary transition-colors">{item.name}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 pt-0">
        <p className="text-muted-foreground mb-3 md:mb-4 text-sm md:text-base text-pretty">{item.description}</p>
        <div className="text-2xl md:text-3xl font-bold text-primary">{formatPrice(item.price)}</div>
      </CardContent>

      <CardFooter className="pt-0">
        <Link 
          href={`/items/${item.slug}`} 
          className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-9 md:h-10 px-3 md:px-4 text-sm md:text-base border border-input bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary group"
        >
          View Details
          <ArrowRight className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  )
}
