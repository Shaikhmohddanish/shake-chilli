import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price:
    | number
    | { S?: number; M?: number; L?: number; regular?: number; large?: number; "6inch"?: number; "12inch"?: number },
): string {
  if (typeof price === "number") {
    return `₹${price}`
  }

  const prices: string[] = []
  if (price.S) prices.push(`Small ₹${price.S}`)
  if (price.M) prices.push(`Medium ₹${price.M}`)
  if (price.L) prices.push(`Large ₹${price.L}`)
  if (price.regular) prices.push(`Regular ₹${price.regular}`)
  if (price.large) prices.push(`Large ₹${price.large}`)
  if (price["6inch"]) prices.push(`6" ₹${price["6inch"]}`)
  if (price["12inch"]) prices.push(`12" ₹${price["12inch"]}`)

  return prices.join(" • ")
}

// New function for advanced pricing display
export function formatPriceAdvanced(
  price:
    | number
    | { S?: number; M?: number; L?: number; regular?: number; large?: number; "6inch"?: number; "12inch"?: number },
): { type: 'single' | 'multiple', prices: Array<{ size: string, price: number, label: string }> } {
  if (typeof price === "number") {
    return {
      type: 'single',
      prices: [{ size: 'fixed', price, label: `₹${price}` }]
    }
  }

  const prices: Array<{ size: string, price: number, label: string }> = []
  
  if (price.S) prices.push({ size: 'S', price: price.S, label: 'Small' })
  if (price.M) prices.push({ size: 'M', price: price.M, label: 'Medium' })
  if (price.L) prices.push({ size: 'L', price: price.L, label: 'Large' })
  if (price.regular) prices.push({ size: 'R', price: price.regular, label: 'Regular' })
  if (price.large) prices.push({ size: 'L', price: price.large, label: 'Large' })
  if (price["6inch"]) prices.push({ size: '6"', price: price["6inch"], label: '6 Inch' })
  if (price["12inch"]) prices.push({ size: '12"', price: price["12inch"], label: '12 Inch' })

  return {
    type: 'multiple',
    prices
  }
}

export function getDirectionsUrl(address: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
}

export function getWhatsAppUrl(phone: string, message = ""): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "")
  return `https://wa.me/${cleanPhone}${message ? `?text=${encodeURIComponent(message)}` : ""}`
}

// Search cache utilities
export const searchCache = {
  set: (key: string, data: any, ttl = 3600000) => { // 1 hour default TTL
    try {
      const item = {
        data,
        timestamp: Date.now(),
        ttl
      }
      localStorage.setItem(`search_cache_${key}`, JSON.stringify(item))
    } catch (error) {
      console.error('Error caching search results:', error)
    }
  },

  get: (key: string) => {
    try {
      const item = localStorage.getItem(`search_cache_${key}`)
      if (!item) return null
      
      const parsed = JSON.parse(item)
      if (Date.now() - parsed.timestamp > parsed.ttl) {
        localStorage.removeItem(`search_cache_${key}`)
        return null
      }
      
      return parsed.data
    } catch (error) {
      console.error('Error retrieving cached search results:', error)
      return null
    }
  },

  clear: () => {
    try {
      const keys = Object.keys(localStorage)
      keys.forEach(key => {
        if (key.startsWith('search_cache_')) {
          localStorage.removeItem(key)
        }
      })
    } catch (error) {
      console.error('Error clearing search cache:', error)
    }
  }
}

// Debounce utility for search
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
