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
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileSearchOpen(true)}
              className="h-10 w-10"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-6">
                  <Link 
                    href="/" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/menu" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Menu
                  </Link>
                  <Link 
                    href="/pizza" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pizza
                  </Link>
                  <Link 
                    href="/burger" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Burgers
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  
                  <div className="flex flex-col gap-3 pt-6">
                    <a 
                      href={`tel:${BUSINESS_INFO.phones.primary}`}
                      className="inline-flex items-center justify-start gap-3 whitespace-nowrap rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-11 px-8 border border-input bg-background hover:bg-muted w-full"
                    >
                      <Phone className="h-5 w-5" />
                      Call {BUSINESS_INFO.phones.display.primary}
                    </a>
                    <a 
                      href={getDirectionsUrl(BUSINESS_INFO.address.full)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-start gap-3 whitespace-nowrap rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-11 px-8 bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                    >
                      <MapPin className="h-5 w-5" />
                      Get Directions
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Overlay */}
        {mobileSearchOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 pt-4">
              <SearchComponent
                className="w-full"
                onClose={() => setMobileSearchOpen(false)}
                showCloseButton={true}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
