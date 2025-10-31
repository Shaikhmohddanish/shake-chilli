import Link from "next/link"
import { Phone, MapPin, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { BUSINESS_INFO } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <h3 className="text-xl md:text-2xl font-bold">
                <span>Shake</span>
                <span className="text-primary"> Chilli</span>
              </h3>
              <Badge variant="success" className="bg-secondary text-secondary-foreground text-xs">
                Halal
              </Badge>
            </div>
            <p className="text-sm text-background/80 mb-2 md:mb-4">{BUSINESS_INFO.tagline}</p>
            <p className="text-sm text-background/80">Best Pizza, Burgers & More in Shilphata, Mumbra</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Contact Us</h4>
            <div className="space-y-2 md:space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p className="text-background/80 text-xs md:text-sm">{BUSINESS_INFO.address.full}</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${BUSINESS_INFO.phones.primary}`}
                    className="text-background/80 hover:text-primary transition-colors text-xs md:text-sm"
                  >
                    {BUSINESS_INFO.phones.display.primary}
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phones.secondary}`}
                    className="text-background/80 hover:text-primary transition-colors text-xs md:text-sm"
                  >
                    {BUSINESS_INFO.phones.display.secondary}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <p className="text-background/80 text-xs md:text-sm">{BUSINESS_INFO.hours.display}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-1.5 md:gap-2 text-sm">
              <Link href="/menu" className="text-background/80 hover:text-primary transition-colors text-xs md:text-sm">
                Full Menu
              </Link>
              <Link href="/pizza" className="text-background/80 hover:text-primary transition-colors text-xs md:text-sm">
                Pizza
              </Link>
              <Link href="/burger" className="text-background/80 hover:text-primary transition-colors text-xs md:text-sm">
                Burgers
              </Link>
              <Link href="/how-to-reach" className="text-background/80 hover:text-primary transition-colors text-xs md:text-sm">
                How to Reach
              </Link>
              <Link href="/contact" className="text-background/80 hover:text-primary transition-colors text-xs md:text-sm">
                Contact
              </Link>
              <Link href="/reviews" className="text-background/80 hover:text-primary transition-colors text-xs md:text-sm">
                Reviews
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/20 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-background/60">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.fullName}. All rights reserved.
          </p>
          <p className="mt-1 md:mt-2">Serving Mumbra, Shilphata, Kausa, MM Valley, Dosti, Shimla Park, Shalimar, Amrut Nagar, Mumbra Bypass, Y Junction, Millenium & nearby areas</p>
          <p className="mt-1 text-primary font-medium">🚀 Fast delivery: Bypass & Shalimar (20 min) • Dosti (20 min) • Shimla Park & Kausa (40 min) • Amrut Nagar (40 min) • Station (60 min)</p>
          <p className="mt-1 text-sm">Open Daily: 12:00 PM - 3:00 AM</p>
        </div>
      </div>
    </footer>
  )
}
