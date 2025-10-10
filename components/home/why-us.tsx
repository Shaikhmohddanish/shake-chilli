import { Flame, ShieldCheck, Truck, Clock } from "lucide-react"

export function WhyUs() {
  const features = [
    {
      icon: Flame,
      title: "Fresh Ingredients",
      description: "We use only the freshest ingredients and make our dough daily for the perfect pizza base",
    },
    {
      icon: ShieldCheck,
      title: "100% Halal",
      description: "All our meat products are certified halal, ensuring quality and peace of mind",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Free home delivery to Mumbra, Shilphata, Diva, Dosti, Shalimar and nearby areas",
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Hot and fresh food delivered to your doorstep in 30-45 minutes",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Shake Chilli?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The most trusted restaurant in Shilphata and Mumbra for quality food and service
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#e10600]/10 text-[#e10600] mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
