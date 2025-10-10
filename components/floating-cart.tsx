"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart, Plus, Minus, Trash2, MessageCircle } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { getWhatsAppUrl } from "@/lib/utils"
import { BUSINESS_INFO } from "@/lib/constants"
import { toast } from "sonner"
import Link from "next/link"

export function FloatingCart() {
  const { cart, updateQuantity, removeFromCart, clearCart, getTotalPrice, getTotalItems } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return ""

    const totalItems = getTotalItems()
    let message = `🍕 *Order from Shake Chilli*

Hi! I would like to place an order:

`
    
    cart.forEach((cartItem, index) => {
      message += `${index + 1}. *${cartItem.name}*`
      if (cartItem.size) {
        message += ` (${cartItem.size})`
      }
      message += `
   ₹${cartItem.price} × ${cartItem.quantity} = ₹${cartItem.price * cartItem.quantity}

`
    })
    
    message += `💰 *Total: ₹${getTotalPrice()}*
📦 *Items: ${totalItems}*

📍 *Delivery Address:* [Please specify]
📞 *Contact:* [Your phone number]

Please confirm availability and estimated delivery time. Thank you! 🙏`
    
    return message
  }

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage()
    const whatsappUrl = getWhatsAppUrl(BUSINESS_INFO.phones.primary, message)
    window.open(whatsappUrl, '_blank')
    toast.success("Opening WhatsApp...", {
      description: "Your order is ready to send!",
      duration: 3000,
    })
    setIsOpen(false)
    // Optionally clear cart after order
    // clearCart()
  }

  if (cart.length === 0) return null

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <div className="fixed bottom-24 right-4 z-50">
          <Button 
            size="lg" 
            className="bg-[#e10600] hover:bg-[#c10500] rounded-full h-16 w-16 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 relative flex items-center justify-center"
            aria-label="View Cart"
          >
            {/* Modern cart icon SVG */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
              <circle cx="9" cy="21" r="1.5" />
              <circle cx="18" cy="21" r="1.5" />
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
            </svg>
            <span 
              className="absolute -top-2 -right-2 bg-white text-[#e10600] border-2 border-[#e10600] h-7 w-7 rounded-full flex items-center justify-center text-base font-bold shadow-lg animate-bounce"
              style={{ minWidth: 28 }}
            >
              {getTotalItems()}
            </span>
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent className="w-[90vw] sm:w-[400px] md:w-[450px] max-w-md p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b bg-gradient-to-r from-[#e10600] to-[#c10500] text-white">
            <SheetTitle className="flex items-center gap-3 text-xl font-bold">
              <div className="bg-white/20 p-2 rounded-full">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <div>
                <div>Your Order</div>
                <div className="text-sm font-normal opacity-90">{cart.length} items • ₹{getTotalPrice()}</div>
              </div>
            </SheetTitle>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {cart.map((cartItem) => (
              <div key={cartItem.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  {/* Item Info */}
                  <div className="flex-1 min-w-0">
                    <Link 
                      href={`/items/${cartItem.item.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="font-semibold text-base hover:text-[#e10600] transition-colors block truncate text-gray-900 mb-1"
                    >
                      {cartItem.name}
                    </Link>
                    {cartItem.size && (
                      <div className="text-sm text-gray-600 mb-1">Size: {cartItem.size}</div>
                    )}
                    <div className="text-sm font-semibold text-[#e10600]">₹{cartItem.price} each</div>
                  </div>
                  
                  {/* Remove Button */}
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => removeFromCart(cartItem.id)}
                    className="text-gray-400 hover:text-red-600 hover:bg-red-50 h-8 w-8 p-0 rounded-full"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Quantity Controls & Price */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
                      className="h-8 w-8 p-0 rounded-full border-2 border-gray-200 hover:border-[#e10600] hover:bg-[#e10600] hover:text-white"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center font-bold text-lg">{cartItem.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
                      className="h-8 w-8 p-0 rounded-full border-2 border-gray-200 hover:border-[#e10600] hover:bg-[#e10600] hover:text-white"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div className="text-xl font-bold text-gray-900">
                    ₹{cartItem.price * cartItem.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer */}
          <div className="p-4 border-t bg-gray-50 space-y-4">
            <div className="flex justify-between items-center py-2">
              <span className="text-xl font-bold text-gray-900">Total Amount</span>
              <span className="text-2xl font-bold text-[#e10600]">₹{getTotalPrice()}</span>
            </div>
            
            <Button
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              onClick={handleWhatsAppOrder}
            >
              <MessageCircle className="h-6 w-6 mr-3" />
              Order via WhatsApp
            </Button>
            
            <Button
              variant="outline"
              className="w-full h-12 rounded-xl border-2 hover:bg-gray-100"
              onClick={clearCart}
            >
              Clear All Items
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}