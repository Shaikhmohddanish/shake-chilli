import { Button } from "@/components/ui/button"
import { Phone, MenuIcon, ArrowRight } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/constants"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      <div className="absolute inset-0 gradient-hero" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-06%20at%2020.13.46%20%283%29-ZYMunmOLhoPih1I9I0FnNK7WYcBKF6.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-4 md:mb-6">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs md:text-sm font-medium mb-4 md:mb-6">
              🔥 Awesome Taste in Every Bite
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 text-white text-balance leading-[1.1]">
            Best <span className="text-[#ffc857]">Pizza</span> & <span className="text-[#ffc857]">Burgers</span>
            <br />
            in Mumbra
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 text-pretty max-w-3xl mx-auto font-medium">
            Freshly baked pizzas, juicy burgers & delicious sandwiches delivered hot to your doorstep. 
            100% Halal certified with free home delivery across Mumbra, Shilphata, Diva & nearby areas.
          </p>
          
          {/* Additional Hero Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white text-center">
              <div className="text-2xl font-bold mb-1">4.7★</div>
              <div className="text-sm opacity-90">Customer Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white text-center">
              <div className="text-2xl font-bold mb-1">30min</div>
              <div className="text-sm opacity-90">Average Delivery</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white text-center">
              <div className="text-2xl font-bold mb-1">₹0</div>
              <div className="text-sm opacity-90">Delivery Charges</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Link 
              href="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-12 md:h-14 px-6 md:px-8 text-base md:text-lg bg-white text-primary hover:bg-white/90 shadow-float group"
            >
              <MenuIcon className="h-4 w-4 md:h-5 md:w-5" />
              View Full Menu
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phones.primary}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-12 md:h-14 px-6 md:px-8 text-base md:text-lg border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              {BUSINESS_INFO.phones.display.primary}
            </a>
          </div>

          <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-8 text-white/80 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-2xl">✓</span>
              <span>100% Halal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-2xl">✓</span>
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-2xl">✓</span>
              <span>Fresh Ingredients</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1.5 md:p-2">
          <div className="w-0.5 h-1.5 md:w-1 md:h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
