"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { toast } from "sonner"
import type { MenuItem } from "@/lib/menu-data"

export interface CartItem {
  id: string
  itemId: string
  name: string
  size?: string
  price: number
  quantity: number
  item: MenuItem
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: MenuItem, size?: string, price?: number, quantity?: number) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('shake-chilli-cart')
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (error) {
        console.error('Error loading cart from localStorage:', error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shake-chilli-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: MenuItem, size?: string, price?: number, quantity: number = 1) => {
    const cartItemId = `${item.id}-${size || 'default'}`
    const itemPrice = price || (typeof item.price === 'number' ? item.price : 
      item.price.S || item.price.regular || item.price["6inch"] || 0)
    
    const existingItem = cart.find(cartItem => cartItem.id === cartItemId)

    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === cartItemId 
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      ))
      if (quantity === 1) {
        toast.success(`${item.name} quantity updated!`, {
          description: `${size ? `${size} - ` : ''}₹${itemPrice} each`,
          duration: 2000,
        })
      } else {
        toast.success(`${quantity} ${item.name} added to cart!`, {
          description: `${size ? `${size} - ` : ''}₹${itemPrice} each`,
          duration: 2000,
        })
      }
    } else {
      const newItem: CartItem = {
        id: cartItemId,
        itemId: item.id,
        name: item.name,
        size,
        price: itemPrice,
        quantity: quantity,
        item
      }
      setCart([...cart, newItem])
      toast.success(`${quantity > 1 ? `${quantity} ` : ''}${item.name} added to cart!`, {
        description: `${size ? `${size} - ` : ''}₹${itemPrice}${quantity > 1 ? ` each` : ''}`,
        duration: 2000,
      })
    }
  }

  const removeFromCart = (id: string) => {
    const item = cart.find(cartItem => cartItem.id === id)
    setCart(cart.filter(item => item.id !== id))
    if (item) {
      toast.info(`${item.name} removed from cart`)
    }
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity } : item
      ))
    }
  }

  const clearCart = () => {
    setCart([])
    toast.success("Cart cleared!")
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}