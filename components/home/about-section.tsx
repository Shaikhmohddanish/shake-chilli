import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Star } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/constants"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-primary">Shake Chilli</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Welcome to Shake Chilli – your neighborhood's favorite cafe and restaurant in Mumbra, Shilphata! 
            Since our establishment, we've been serving fresh, delicious food with a commitment to quality and taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          <Card className="border-2 hover:border-primary/20 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Quality Food</h3>
              </div>
              <p className="text-muted-foreground">
                We use only the freshest ingredients and authentic recipes to ensure every bite is delicious. 
                Our chefs prepare each dish with care and attention to detail.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/20 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Fast Service</h3>
              </div>
              <p className="text-muted-foreground">
                Quick preparation and delivery without compromising on quality. We understand you're hungry, 
                and we're here to serve you promptly.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/20 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Free Delivery</h3>
              </div>
              <p className="text-muted-foreground">
                Free home delivery in Mumbra, Shilphata, Kausa, MM Valley, Dosti, Shimla Park, Amrut Nagar and nearby areas. Delivery times: Bypass 20min, Shimla Park/Kausa 40min, Station 60min.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-accent/30 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Our Story
              </h3>
              <p className="text-muted-foreground mb-4">
                Located in the heart of Shilphata near Al-Hidaya School, Shake Chilli has become a beloved 
                dining destination for families and friends. We take pride in serving authentic flavors 
                that bring people together.
              </p>
              <p className="text-muted-foreground mb-6">
                From our signature pizzas to freshly brewed coffee, every item on our menu is crafted 
                with passion and served with a smile. We believe in creating memorable dining experiences 
                for our valued customers.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm">Halal Certified</Badge>
                <Badge variant="secondary" className="text-sm">Fresh Ingredients</Badge>
                <Badge variant="secondary" className="text-sm">Family Friendly</Badge>
                <Badge variant="secondary" className="text-sm">Hygenic Kitchen</Badge>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-background rounded-xl">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Call for Orders</p>
                  <p className="text-sm text-muted-foreground">{BUSINESS_INFO.phones.display.primary}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-background rounded-xl">
                <Clock className="h-5 w-5 text-secondary" />
                <div>
                  <p className="font-medium">Opening Hours</p>
                  <p className="text-sm text-muted-foreground">{BUSINESS_INFO.hours.display}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-background rounded-xl">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Visit Us</p>
                  <p className="text-sm text-muted-foreground">{BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.area}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}