import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { BUSINESS_INFO } from "@/lib/constants"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Car, Train, Bus, Phone } from "lucide-react"
import { getDirectionsUrl } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to Reach Shake Chilli – Shilphata Mumbra | Directions & Parking",
  description:
    "Find directions to Shake Chilli in Shilphata, Mumbra. Near Al-Hidaya School, easy access from Dosti, Shalimar, Diva. Parking available. Call 7208 697 371.",
  keywords: [
    "shake chilli location",
    "directions to shake chilli",
    "near al hidaya school",
    "shilphata mumbra directions",
    "how to reach shake chilli",
  ],
}

export default function HowToReachPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "How to Reach", url: "/how-to-reach" },
  ])

  const landmarks = [
    {
      name: "Al-Hidaya School",
      distance: "50 meters",
      direction: "Our restaurant is right next to Al-Hidaya School in Silverline Enclave",
    },
    {
      name: "Dosti Area",
      distance: "1.5 km",
      direction: "Take the main road towards Shilphata, we're near the school",
    },
    {
      name: "Shalimar",
      distance: "2 km",
      direction: "Head towards Shilphata via the main road, look for Silverline Enclave",
    },
    {
      name: "Diva Railway Station",
      distance: "3 km",
      direction: "Take auto or cab towards Shilphata, ask for Al-Hidaya School",
    },
    {
      name: "Mumbra",
      distance: "2.5 km",
      direction: "Follow the road to Shilphata, we're in Silverline Enclave near the school",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="min-h-screen">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center text-white text-balance">
              Find <span className="text-[#ffc857]">Your Way</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl mx-auto text-pretty">
              Located in Shilphata, Mumbra near Al-Hidaya School with easy access from all nearby areas
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 -mt-16 relative z-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
              <div>
                <Card className="shadow-card border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      Our Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-soft">
                      <iframe
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(BUSINESS_INFO.address.full)}`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Shake Chilli Location Map"
                      />
                    </div>
                    <div className="space-y-3 p-4 bg-accent/50 rounded-xl">
                      <p className="font-bold text-lg">{BUSINESS_INFO.fullName}</p>
                      <p className="text-muted-foreground">{BUSINESS_INFO.address.full}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1 shadow-float text-base py-6" asChild>
                        <a
                          href={getDirectionsUrl(BUSINESS_INFO.address.full)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Navigation className="h-5 w-5" />
                          Open in Google Maps
                        </a>
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent text-base py-6" asChild>
                        <a href={`tel:${BUSINESS_INFO.phones.primary}`}>
                          <Phone className="h-5 w-5" />
                          Call for Directions
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="shadow-card border-2 hover:border-primary/20 transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Car className="h-6 w-6 text-primary" />
                      </div>
                      By Car / Auto
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 p-3 bg-accent/30 rounded-xl">
                        <span className="text-secondary text-xl mt-0.5">•</span>
                        <span className="text-base">
                          From Mumbra: Take the main road towards Shilphata. Look for Silverline Enclave near Al-Hidaya
                          School (approx 10 minutes)
                        </span>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-accent/30 rounded-xl">
                        <span className="text-secondary text-xl mt-0.5">•</span>
                        <span className="text-base">
                          From Diva: Head towards Shilphata via the main road. Ask locals for Al-Hidaya School (approx
                          15 minutes)
                        </span>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-accent/30 rounded-xl">
                        <span className="text-secondary text-xl mt-0.5">•</span>
                        <span className="text-base">
                          From Dosti/Shalimar: Follow signs to Shilphata. We're in Silverline Enclave (approx 10
                          minutes)
                        </span>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-accent/30 rounded-xl">
                        <span className="text-secondary text-xl mt-0.5">•</span>
                        <span className="text-base">Parking available near the restaurant</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-2 hover:border-primary/20 transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Train className="h-6 w-6 text-primary" />
                      </div>
                      By Train
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 p-3 bg-accent/30 rounded-xl">
                        <span className="text-secondary text-xl mt-0.5">•</span>
                        <span className="text-base">Nearest Station: Diva Railway Station (3 km away)</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-accent/30 rounded-xl">
                        <span className="text-secondary text-xl mt-0.5">•</span>
                        <span className="text-base">
                          From Diva Station: Take auto or cab to Shilphata, Al-Hidaya School area
                        </span>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-accent/30 rounded-xl">
                        <span className="text-secondary text-xl mt-0.5">•</span>
                        <span className="text-base">Travel time: 10-15 minutes from station</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-2 hover:border-primary/20 transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Bus className="h-6 w-6 text-primary" />
                      </div>
                      By Bus
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 p-3 bg-accent/30 rounded-xl">
                        <span className="text-secondary text-xl mt-0.5">•</span>
                        <span className="text-base">Local buses available from Mumbra, Diva, and Thane</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-accent/30 rounded-xl">
                        <span className="text-secondary text-xl mt-0.5">•</span>
                        <span className="text-base">Get down at Shilphata stop, walk to Silverline Enclave</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-accent/30 rounded-xl">
                        <span className="text-secondary text-xl mt-0.5">•</span>
                        <span className="text-base">Ask conductor for Al-Hidaya School stop</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
                Nearby <span className="text-primary">Landmarks</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {landmarks.map((landmark, index) => (
                  <Card
                    key={index}
                    className="shadow-card border-2 hover:border-primary/20 hover:-translate-y-1 transition-all"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">{landmark.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3 font-semibold">{landmark.distance}</p>
                          <p className="text-sm text-muted-foreground">{landmark.direction}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="shadow-card border-2">
              <CardHeader>
                <CardTitle className="text-3xl">Additional Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 bg-accent/30 rounded-xl">
                  <h3 className="font-bold text-xl mb-3">Parking</h3>
                  <p className="text-muted-foreground">
                    Limited parking available near the restaurant. Street parking also available in the area.
                  </p>
                </div>
                <div className="p-6 bg-accent/30 rounded-xl">
                  <h3 className="font-bold text-xl mb-3">Delivery Radius</h3>
                  <p className="text-muted-foreground">
                    We deliver within 2-3 km radius covering Mumbra, Shilphata, Diva, Dosti, Shalimar and nearby areas.
                    Free home delivery on all orders.
                  </p>
                </div>
                <div className="p-6 bg-accent/30 rounded-xl">
                  <h3 className="font-bold text-xl mb-3">Need Help?</h3>
                  <p className="text-muted-foreground mb-4">
                    Can't find us? Call us and we'll guide you to our location.
                  </p>
                  <Button className="shadow-float text-lg py-6" asChild>
                    <a href={`tel:${BUSINESS_INFO.phones.primary}`}>
                      <Phone className="h-5 w-5" />
                      Call {BUSINESS_INFO.phones.display.primary}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
