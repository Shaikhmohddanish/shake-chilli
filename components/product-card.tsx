"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatPriceAdvanced } from "@/lib/utils"
import { generateSEOAltText } from "@/lib/image-seo"
import { ArrowRight, ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import type { MenuItem } from "@/lib/menu-data"

interface ProductCardProps {
  item: MenuItem
}

export function ProductCard({ item }: ProductCardProps) {
  const { addToCart } = useCart()
  const priceInfo = formatPriceAdvanced(item.price)

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // For single price items, add directly to cart
    if (priceInfo.type === 'single') {
      addToCart(item, undefined, priceInfo.prices[0].price, 1)
    }
    // For multiple sizes, redirect to details page for size selection
  }
  
  return (
    <Card className="flex flex-col h-full hover:shadow-card transition-all duration-300 group border-2 hover:border-primary/20 hover:-translate-y-1 overflow-hidden">
      <div className="relative h-40 md:h-48 bg-gradient-card overflow-hidden">
        <Image
          src={item.image}
          alt={generateSEOAltText(item)}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
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
        <p className="text-muted-foreground mb-4 text-sm md:text-base text-pretty">{item.description}</p>
        
        {/* Simplified Pricing Display */}
        <div className="flex items-center justify-between">
          <div>
            {priceInfo.type === 'single' ? (
              <div className="text-2xl md:text-3xl font-bold text-primary">
                ₹{priceInfo.prices[0].price}
              </div>
            ) : (
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  Starting ₹{Math.min(...priceInfo.prices.map(p => p.price))}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Multiple sizes available
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="w-full space-y-2">
          {/* Quick Add for Single Price Items */}
          {priceInfo.type === 'single' && (
            <Button 
              className="w-full bg-[#e10600] hover:bg-[#c10500] h-12 md:h-14 font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300"
              onClick={handleQuickAdd}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart - ₹{priceInfo.prices[0].price}
            </Button>
          )}
          
          {/* View Details Button */}
          <Link 
            href={`/items/${item.slug}`} 
            className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-10 md:h-11 px-4 md:px-6 text-sm md:text-base bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02] group"
          >
            {priceInfo.type === 'multiple' ? 'View Sizes & Order' : 'View Details'}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
