import { MapPin, Clock, Truck, Zap, Rocket, PartyPopper } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BUSINESS_INFO } from "@/lib/constants"

export function DeliveryZones() {
  const deliveryZones = [
    {
      name: "Express Zone",
      time: "20 minutes",
      areas: BUSINESS_INFO.deliveryZones.fast.areas,
      icon: <Rocket className="w-5 h-5" />,
      color: "bg-green-50 border-green-200",
      textColor: "text-green-700",
    },
    {
      name: "Standard Zone",
      time: "40 minutes",
      areas: BUSINESS_INFO.deliveryZones.standard.areas,
      icon: <Zap className="w-5 h-5" />,
      color: "bg-blue-50 border-blue-200",
      textColor: "text-blue-700",
    },
    {
      name: "Extended Zone",
      time: "60 minutes",
      areas: BUSINESS_INFO.deliveryZones.extended.areas,
      icon: <Truck className="w-5 h-5" />,
      color: "bg-amber-50 border-amber-200",
      textColor: "text-amber-700",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Truck className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">FREE DELIVERY</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Fast Delivery <span className="text-primary">Across Mumbra</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We deliver hot, fresh food to your doorstep with zero delivery charges. Check your area's delivery time below!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {deliveryZones.map((zone, index) => (
              <Card key={index} className={`border-2 ${zone.color} hover:shadow-lg transition-all`}>
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{zone.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{zone.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className={`h-5 w-5 ${zone.textColor}`} />
                    <span className={`text-2xl font-bold ${zone.textColor}`}>{zone.time}</span>
                  </div>
                  <div className="space-y-2">
                    {zone.areas.map((area, areaIndex) => (
                      <div key={areaIndex} className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 text-center">
            <p className="text-lg font-semibold mb-2 flex items-center justify-center gap-2">
              <PartyPopper className="w-5 h-5 text-primary" />
              <span className="text-primary">FREE Delivery</span> on All Orders!
            </p>
            <p className="text-muted-foreground">
              No minimum order value. No hidden charges. Just delicious food delivered to your door.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
