"use client"

import Link from "next/link"
import { Phone, MapPin, Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SearchComponent } from "@/components/search"
import { BUSINESS_INFO } from "@/lib/constants"
import { getDirectionsUrl } from "@/lib/utils"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 lg:gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 transition-transform group-hover:scale-110">
              <Image
                src="/images/shake-chilli-logo.png"
                alt="Shake Chilli Logo - Best Halal Restaurant in Mumbra Shilphata"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-lg lg:text-2xl font-bold leading-none">
                <span className="text-foreground">Shake</span>
                <span className="text-primary"> Chilli</span>
              </div>
              <span className="text-xs text-muted-foreground hidden sm:block">Cafe & Restaurant</span>
            </div>
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground text-xs hidden lg:flex">
              Halal
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link href="/menu" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Menu
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link href="/pizza" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Pizza
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link href="/burger" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Burgers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          </nav>

          {/* Desktop Search */}
          <div className="hidden lg:block flex-1 max-w-md">
            <SearchComponent />
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href={`tel:${BUSINESS_INFO.phones.primary}`}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-10 px-4 py-2 border border-input bg-transparent hover:bg-muted"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">{BUSINESS_INFO.phones.display.primary}</span>
            </a>
            <a 
              href={getDirectionsUrl(BUSINESS_INFO.address.full)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-float"
            >
              <MapPin className="h-4 w-4" />
              Directions
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileSearchOpen(true)}
              className="h-9 w-9 hover:bg-accent/50 transition-colors"
              aria-label="Search menu"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-9 w-9 hover:bg-accent/50 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0 flex flex-col">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-border/20">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8">
                      <Image
                        src="/images/shake-chilli-logo-brand-mumbra-restaurant.jpg"
                        alt="Shake Chilli Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-lg font-bold leading-none">
                        <span className="text-foreground">Shake</span>
                        <span className="text-primary"> Chilli</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Cafe & Restaurant</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 px-6 py-4">
                  <div className="space-y-1">
                    <Link 
                      href="/" 
                      className="flex items-center gap-3 px-3 py-3 text-base font-medium hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-lg">🏠</span>
                      Home
                    </Link>
                    <Link 
                      href="/menu" 
                      className="flex items-center gap-3 px-3 py-3 text-base font-medium hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-lg">📋</span>
                      Full Menu
                    </Link>
                    <Link 
                      href="/pizza" 
                      className="flex items-center gap-3 px-3 py-3 text-base font-medium hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-lg">🍕</span>
                      Pizza
                    </Link>
                    <Link 
                      href="/burger" 
                      className="flex items-center gap-3 px-3 py-3 text-base font-medium hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-lg">🍔</span>
                      Burgers & Starters
                    </Link>
                    <Link 
                      href="/coffee" 
                      className="flex items-center gap-3 px-3 py-3 text-base font-medium hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-lg">☕</span>
                      Coffee & Beverages
                    </Link>
                    <Link 
                      href="/contact" 
                      className="flex items-center gap-3 px-3 py-3 text-base font-medium hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-lg">📞</span>
                      Contact Us
                    </Link>
                  </div>
                </nav>

                {/* Mobile Action Buttons */}
                <div className="px-6 py-4 border-t border-border/20 bg-accent/10">
                  <div className="space-y-3">
                    <a 
                      href={`tel:${BUSINESS_INFO.phones.primary}`}
                      className="flex items-center justify-center gap-3 h-12 px-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-medium transition-colors shadow-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Phone className="h-4 w-4" />
                      Call {BUSINESS_INFO.phones.display.primary}
                    </a>
                    <a 
                      href={getDirectionsUrl(BUSINESS_INFO.address.full)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 h-12 px-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl font-medium transition-colors border border-border shadow-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <MapPin className="h-4 w-4" />
                      Get Directions
                    </a>
                  </div>
                  
                  {/* Business Info */}
                  <div className="mt-4 pt-4 border-t border-border/20">
                    <div className="text-center">
                      <p className="text-sm font-medium text-foreground">
                        {BUSINESS_INFO.address.area}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {BUSINESS_INFO.hours.display}
                      </p>
                      <div className="inline-flex items-center gap-1 mt-2 px-2 py-1 bg-secondary/20 rounded-full">
                        <span className="text-xs font-medium text-secondary">100% Halal</span>
                        <span className="text-xs">🥘</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Overlay */}
        {mobileSearchOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-border/20">
                <h2 className="text-lg font-semibold">Search Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileSearchOpen(false)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1 p-4">
                <SearchComponent
                  className="w-full"
                  onClose={() => setMobileSearchOpen(false)}
                  showCloseButton={false}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
