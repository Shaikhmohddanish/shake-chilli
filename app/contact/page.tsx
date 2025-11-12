import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { BUSINESS_INFO } from "@/lib/constants"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, MessageCircle, Mail } from "lucide-react"
import { getDirectionsUrl, getWhatsAppUrl } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Shake Chilli Mumbra, Shilphata | Call for Orders & Delivery",
  description:
    "Contact Shake Chilli for orders and delivery in Mumbra, Shilphata, Diva. Call 7208 697 371 or 9082 990 187. Near Al-Hidaya School. Open 11 AM - 11:30 PM.",
  keywords: [
    "shake chilli contact",
    "pizza delivery mumbra",
    "food order shilphata",
    "restaurant near al hidaya school",
    "halal food contact",
  ],
  alternates: {
    canonical: "https://shakechillicafe.com/contact",
  },
  openGraph: {
    title: "Contact Us | Shake Chilli Mumbra, Shilphata | Call for Orders & Delivery",
    description: "Contact Shake Chilli for orders and delivery in Mumbra, Shilphata, Diva. Call 7208 697 371 or 9082 990 187. Open 11 AM - 11:30 PM.",
    url: "https://shakechillicafe.com/contact",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main id="main-content" className="min-h-screen">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center text-white text-balance">
              Get in <span className="text-[#ffc857]">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl mx-auto text-pretty">
              Order now or reach out for any questions. We're here to serve you the best food in Mumbra and Shilphata!
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 -mt-16 relative z-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
              <div className="space-y-8">
                <Card className="shadow-card border-2 hover:border-primary/20 transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      Call Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Primary Number</p>
                      <a
                        href={`tel:${BUSINESS_INFO.phones.primary}`}
                        className="text-3xl font-bold text-primary hover:underline"
                      >
                        {BUSINESS_INFO.phones.display.primary}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Secondary Number</p>
                      <a
                        href={`tel:${BUSINESS_INFO.phones.secondary}`}
                        className="text-3xl font-bold text-primary hover:underline"
                      >
                        {BUSINESS_INFO.phones.display.secondary}
                      </a>
                    </div>
                    <Button className="w-full shadow-float text-lg py-6" asChild>
                      <a href={`tel:${BUSINESS_INFO.phones.primary}`}>
                        <Phone className="h-5 w-5" />
                        Call Now to Order
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-2 hover:border-[#25D366]/20 transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="p-3 rounded-xl bg-[#25D366]/10">
                        <MessageCircle className="h-6 w-6 text-[#25D366]" />
                      </div>
                      WhatsApp
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">Order directly via WhatsApp for quick and easy service</p>
                    <Button className="w-full bg-[#25D366] hover:bg-[#20BA5A] shadow-float text-lg py-6" asChild>
                      <a
                        href={getWhatsAppUrl(BUSINESS_INFO.phones.primary, "Hi! I want to order from Shake Chilli")}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-5 w-5" />
                        Message on WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-2 hover:border-primary/20 transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="p-3 rounded-xl bg-secondary/10">
                        <Clock className="h-6 w-6 text-secondary" />
                      </div>
                      Opening Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-lg">
                        <span className="font-semibold">Monday - Sunday</span>
                        <span className="text-muted-foreground">{BUSINESS_INFO.hours.display}</span>
                      </div>
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground text-sm px-4 py-2">
                        ✓ Open Now
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-2 hover:border-primary/20 transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      Our Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg">{BUSINESS_INFO.address.full}</p>
                    <Button variant="outline" className="w-full text-lg py-6 bg-transparent" asChild>
                      <a href={getDirectionsUrl(BUSINESS_INFO.address.full)} target="_blank" rel="noopener noreferrer">
                        <MapPin className="h-5 w-5" />
                        Get Directions
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="shadow-card border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      Send Us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-3">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold mb-3">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold mb-3">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                          placeholder="How can we help you?"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full shadow-float text-lg py-6">
                        Send Message
                      </Button>
                      <p className="text-sm text-muted-foreground text-center">
                        Or call us directly at {BUSINESS_INFO.phones.display.primary} for immediate assistance
                      </p>
                    </form>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Delivery Areas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">We deliver to the following areas:</p>
                    <div className="flex flex-wrap gap-3">
                      {BUSINESS_INFO.serviceAreas.map((area) => (
                        <Badge key={area} variant="secondary" className="text-sm px-4 py-2">
                          {area}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-6 p-4 bg-accent/50 rounded-xl">
                      ✓ Free home delivery within 2-3 km radius
                      <br />✓ Delivery time: 30-45 minutes
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
