"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MENU_ITEMS, type MenuItem } from "@/lib/menu-data"
import { formatPrice, searchCache } from "@/lib/utils"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

interface SearchProps {
  className?: string
  onClose?: () => void
  showCloseButton?: boolean
}

export function SearchComponent({ className, onClose, showCloseButton = false }: SearchProps) {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<MenuItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("shake-chilli-recent-searches")
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved))
      } catch (error) {
        console.error("Error loading recent searches:", error)
      }
    }
  }, [])

  // Search functionality with caching
  useEffect(() => {
    if (query.trim().length === 0) {
      setSuggestions([])
      return
    }

    // Check cache first
    const cacheKey = query.toLowerCase().trim()
    const cached = searchCache.get(cacheKey)
    if (cached) {
      setSuggestions(cached)
      return
    }

    // Debounced search function
    const searchTimeout = setTimeout(() => {
      const searchTerm = query.toLowerCase()
      const filtered = MENU_ITEMS.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchTerm) ||
          item.description.toLowerCase().includes(searchTerm) ||
          item.categoryDisplay.toLowerCase().includes(searchTerm) ||
          item.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
          item.keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm))
        )
      }).slice(0, 8) // Limit to 8 suggestions

      // Cache the results
      searchCache.set(cacheKey, filtered)
      setSuggestions(filtered)
    }, 150) // 150ms debounce

    return () => clearTimeout(searchTimeout)
  }, [query])

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const saveRecentSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) return
    
    const updated = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 5)
    setRecentSearches(updated)
    localStorage.setItem("shake-chilli-recent-searches", JSON.stringify(updated))
  }

  const handleItemClick = (item: MenuItem) => {
    saveRecentSearch(query)
    setQuery("")
    setIsOpen(false)
    onClose?.()
  }

  const handleRecentSearchClick = (search: string) => {
    setQuery(search)
    inputRef.current?.focus()
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem("shake-chilli-recent-searches")
  }

  const handleClose = () => {
    setQuery("")
    setIsOpen(false)
    onClose?.()
  }

  return (
    <div ref={searchRef} className={cn("relative", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground/70 z-10" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search pizza, burgers, drinks..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-10 h-12 bg-background border border-border/60 focus:border-primary/50 transition-all text-foreground placeholder:text-muted-foreground shadow-sm focus:shadow-md"
        />
        {showCloseButton && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isOpen && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto shadow-xl border border-border/40 bg-background/98 backdrop-blur-xl">
          {query.trim().length === 0 ? (
            // Show recent searches when no query
            <div className="p-4">
              {recentSearches.length > 0 ? (
                <>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-muted-foreground">Recent Searches</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearRecentSearches}
                      className="h-auto p-1 text-xs text-muted-foreground hover:text-foreground"
                    >
                      Clear
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleRecentSearchClick(search)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-accent/50 transition-colors text-sm"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <Search className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Start typing to search our menu</p>
                </div>
              )}
            </div>
          ) : suggestions.length > 0 ? (
            // Show search results
            <div className="p-3">
              <div className="mb-3 px-2 py-1 bg-muted/20 rounded-lg">
                <span className="text-xs font-medium text-muted-foreground">
                  {suggestions.length} result{suggestions.length !== 1 ? 's' : ''} found
                </span>
              </div>
              <div className="space-y-1">
                {suggestions.map((item) => (
                  <Link
                    key={item.id}
                    href={`/items/${item.slug}`}
                    onClick={() => handleItemClick(item)}
                    className="block p-3 rounded-lg hover:bg-accent/50 transition-all duration-200 border border-transparent hover:border-border/20 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0 border border-border/20">
                      <Image
                        src={item.image}
                        alt={`${item.name} - best ${item.categoryDisplay.toLowerCase()} in mumbra near shilphata`}
                        fill
                        className="object-cover transition-transform duration-200 hover:scale-105"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm truncate text-foreground">{item.name}</h4>
                        {item.isVeg && (
                          <Badge variant="secondary" className="text-xs px-1.5 py-0.5 bg-green-100 text-green-700 border border-green-200">
                            Veg
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{item.description}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm font-semibold text-primary">{formatPrice(item.price)}</span>
                        <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">{item.categoryDisplay}</span>
                      </div>
                    </div>
                  </div>
                </Link>
                ))}
              </div>
            </div>
          ) : (
            // No results found
            <div className="p-8 text-center">
              <Search className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-1">No items found for "{query}"</p>
              <p className="text-xs text-muted-foreground">Try searching for pizza, burger, or drinks</p>
            </div>
          )}
        </Card>
      )}
    </div>
  )
}