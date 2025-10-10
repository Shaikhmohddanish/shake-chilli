import { Check, Truck, Leaf, Zap } from "lucide-react"

export function USPStrip() {
  const usps = [
    { icon: Leaf, text: "Freshly Baked Pizza" },
    { icon: Check, text: "100% Halal" },
    { icon: Truck, text: "Free Home Delivery" },
    { icon: Zap, text: "Near Shilphata, Mumbra, Diva" },
  ]

  return (
    <section className="border-y bg-muted/30 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {usps.map((usp, index) => (
            <div key={index} className="flex items-center gap-2">
              <usp.icon className="h-5 w-5 text-[#e10600]" />
              <span className="text-sm md:text-base font-medium">{usp.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
