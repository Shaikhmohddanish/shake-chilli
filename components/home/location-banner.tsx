import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Zap } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/constants"
import { getDirectionsUrl } from "@/lib/utils"

export function LocationBanner() {
  return (
    <section className="py-16 md:py-24 bg-foreground text-background relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/images/backgrounds/location-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us Today</h2>
          <p className="text-lg text-background/80 mb-6">{BUSINESS_INFO.address.full}</p>
          <p className="text-background/80 mb-4">
            Near Al-Hidaya School, Shilphata | Easy access from Mumbra, Kausa, MM Valley, Dosti, Shimla Park, Shalimar, Amrut Nagar, Mumbra Bypass, Y Junction, Millenium
          </p>
          <p className="text-xl font-semibold text-primary mb-2 flex items-center justify-center gap-2">
            <Zap className="w-5 h-5" />
            Lightning Fast Delivery!
          </p>
          <p className="text-lg text-background/90 mb-8">
            Shalimar: 1 min • Dosti: 2 min • Shimla Park: 5-7 min • Others: 10-15 min
          </p>
          <p className="text-lg text-background/90 mb-8 flex items-center justify-center gap-2">
            <Clock className="w-5 h-5" />
            Open Daily: 12:00 PM - 3:00 AM
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href={getDirectionsUrl(BUSINESS_INFO.address.full)} target="_blank" rel="noopener noreferrer">
                <MapPin className="h-5 w-5" />
                Get Directions
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-background text-background hover:bg-background hover:text-foreground bg-transparent"
            >
              <a href={`tel:${BUSINESS_INFO.phones.primary}`}>
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
          <p className="text-sm text-background/60 mt-6">Open Daily: {BUSINESS_INFO.hours.display}</p>
        </div>
      </div>
    </section>
  )
}
