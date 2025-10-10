"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatPriceAdvanced } from "@/lib/utils"
import { Star, Phone, ShoppingCart, Plus, Minus } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/constants"
import { useCart } from "@/contexts/cart-context"
import type { MenuItem } from "@/lib/menu-data"

interface ItemDetailsClientProps {
  item: MenuItem
}

export function ItemDetailsClient({ item }: ItemDetailsClientProps) {
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedPrice, setSelectedPrice] = useState<number>(0)
  const [quantity, setQuantity] = useState<number>(1)

  const priceInfo = formatPriceAdvanced(item.price)

  // Initialize selected size and price
  useEffect(() => {
    if (priceInfo.type === 'single') {
      setSelectedPrice(priceInfo.prices[0].price)
    } else if (priceInfo.prices.length > 0) {
      setSelectedSize(priceInfo.prices[0].size)
      setSelectedPrice(priceInfo.prices[0].price)
    }
  }, [priceInfo])

  const handleSizeChange = (size: string, price: number) => {
    setSelectedSize(size)
    setSelectedPrice(price)
  }

  const handleAddToCart = () => {
    addToCart(item, selectedSize, selectedPrice, quantity)
    setQuantity(1) // Reset quantity after adding
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1)

  return (
    <div>
      {/* Item Details and Size Selection */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
        {/* Image Section */}
        <div>
          <div className="aspect-square bg-muted rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">{item.isVeg ? "🍕" : "🍔"}</div>
              <h3 className="text-2xl font-bold text-muted-foreground">{item.name}</h3>
              <p className="text-muted-foreground mt-2">{item.categoryDisplay}</p>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div>
          <div className="flex items-start gap-2 mb-4">
            {item.isVeg && (
              <Badge variant="secondary" className="bg-[#18a558] text-white">
                🌱 Veg
              </Badge>
            )}
            {!item.isVeg && (
              <Badge variant="default" className="bg-[#e10600] text-white">
                🥩 Non-Veg
              </Badge>
            )}
            {item.isHalal && (
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                ✨ Halal
              </Badge>
            )}
            {item.isPopular && (
              <Badge variant="default" className="bg-[#e10600] text-white">
                ⭐ Popular
              </Badge>
            )}
          </div>

          <h1 className="text-4xl font-bold mb-4 text-balance">{item.name}</h1>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#e10600] text-[#e10600]" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.7/5</span>
            <span className="text-muted-foreground">(120 reviews)</span>
          </div>

          <p className="text-lg text-muted-foreground mb-6 text-pretty">{item.descriptionLong}</p>

          {/* Size Selection */}
          {priceInfo.type === 'multiple' && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Choose Size</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {priceInfo.prices.map((priceItem) => (
                  <button
                    key={priceItem.size}
                    type="button"
                    onClick={() => handleSizeChange(priceItem.size, priceItem.price)}
                    className={`p-4 rounded-xl border-2 transition-all text-center hover:scale-105 ${
                      selectedSize === priceItem.size
                        ? 'border-[#e10600] bg-[#e10600]/10 shadow-lg'
                        : 'border-gray-300 bg-white hover:border-[#e10600]/50 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-semibold text-sm text-gray-700">{priceItem.label}</div>
                    <div className="text-lg font-bold text-[#e10600]">₹{priceItem.price}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Quantity</h3>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={decrementQuantity}
                className="h-12 w-12 p-0 border-2 border-gray-300 hover:border-[#e10600] hover:bg-[#e10600]/10"
              >
                <Minus className="h-5 w-5" />
              </Button>
              <span className="text-2xl font-bold min-w-[50px] text-center">{quantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={incrementQuantity}
                className="h-12 w-12 p-0 border-2 border-gray-300 hover:border-[#e10600] hover:bg-[#e10600]/10"
              >
                <Plus className="h-5 w-5" />
              </Button>
              <span className="text-sm text-muted-foreground ml-4">
                Total: ₹{(selectedPrice || (priceInfo.type === 'single' ? priceInfo.prices[0].price : priceInfo.prices[0].price)) * quantity}
              </span>
            </div>
          </div>

          {/* Price Display */}
          <div className="text-3xl font-bold text-[#e10600] mb-6">
            ₹{selectedPrice || (priceInfo.type === 'single' ? priceInfo.prices[0].price : priceInfo.prices[0].price)}
          </div>

          {/* Add to Cart Button */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-[#e10600] hover:bg-[#c10500] text-white flex-1 h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl"
              onClick={handleAddToCart}
              disabled={priceInfo.type === 'multiple' && !selectedSize}
            >
              <ShoppingCart className="h-6 w-6 mr-2" />
              Add {quantity} to Cart - ₹{(selectedPrice || (priceInfo.type === 'single' ? priceInfo.prices[0].price : priceInfo.prices[0].price)) * quantity}
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-6 rounded-xl" asChild>
              <a href={`tel:${BUSINESS_INFO.phones.primary}`}>
                <Phone className="h-5 w-5 mr-2" />
                Call to Order
              </a>
            </Button>
          </div>

          <div className="bg-muted/50 rounded-xl p-6">
            <h3 className="font-semibold mb-3">Highlights</h3>
            <ul className="space-y-2">
              {item.tags.map((tag, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <span className="text-[#18a558]">✓</span>
                  <span className="capitalize">{tag}</span>
                </li>
              ))}
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#18a558]">✓</span>
                <span>Free delivery in Mumbra, Shilphata, Diva</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#18a558]">✓</span>
                <span>Made fresh to order</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}