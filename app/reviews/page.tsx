import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Customer Reviews | Shake Chilli Mumbra, Shilphata | 4.8★ Rating",
  description:
    "Read customer reviews for Shake Chilli. 4.8/5 stars from 200+ customers in Mumbra, Shilphata, Kausa, MM Valley, Dosti. Best pizza, burgers & more. Near Al-Hidaya School.",
  keywords: [
    "shake chilli reviews",
    "best restaurant mumbra reviews",
    "pizza reviews shilphata",
    "customer feedback mumbra",
    "halal restaurant reviews",
  ],
  alternates: {
    canonical: "https://shakechillicafe.com/reviews",
  },
  openGraph: {
    title: "Customer Reviews | Shake Chilli Mumbra, Shilphata | 4.8★ Rating",
    description: "Read customer reviews for Shake Chilli. 4.8/5 stars from 200+ customers in Mumbra, Shilphata, Kausa, MM Valley, Dosti.",
    url: "https://shakechillicafe.com/reviews",
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

export default function ReviewsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Reviews", url: "/reviews" },
  ])

  const allReviews = [
    {
      name: "Arif Khan",
      location: "Mumbra",
      rating: 5,
      text: "Best pizza in Mumbra! The Chicken Tikka Pizza is absolutely delicious. Fresh ingredients and great taste. Highly recommended! Located conveniently near Al-Hidaya School.",
      date: "2 days ago",
      category: "Pizza",
    },
    {
      name: "Fatima Sheikh",
      location: "Shilphata",
      rating: 5,
      text: "Love their burgers! The Chicken Cheese Burst is so tasty. Great value for money. Will definitely order again. Best burger in Shilphata area.",
      date: "1 week ago",
      category: "Burgers",
    },
    {
      name: "Mohammed Ansari",
      location: "Kausa",
      rating: 5,
      text: "Fast delivery in just 12 minutes! Ordered the Family Meal combo and everyone loved it. Best restaurant near Kausa. The halal certification gives peace of mind.",
      date: "3 days ago",
      category: "Combos",
    },
    {
      name: "Ayesha Patel",
      location: "MM Valley",
      rating: 5,
      text: "The footlong sandwiches are amazing! Fresh veggies and generous portions. Perfect for lunch. Quick delivery to MM Valley, very convenient location.",
      date: "5 days ago",
      category: "Sandwiches",
    },
    {
      name: "Salman Qureshi",
      location: "Mumbra",
      rating: 5,
      text: "Best halal food in the area! Everything is fresh and delicious. The mojitos are also very refreshing. Highly recommend to everyone in Mumbra!",
      date: "1 week ago",
      category: "Overall",
    },
    {
      name: "Zainab Ahmed",
      location: "Shilphata",
      rating: 5,
      text: "Excellent coffee! The cappuccino is perfect. Great place to hang out with friends in Shilphata. Near Al-Hidaya School, easy to find.",
      date: "4 days ago",
      category: "Coffee",
    },
    {
      name: "Imran Shaikh",
      location: "Amrut Nagar",
      rating: 5,
      text: "The Veg Veganza pizza is loaded with toppings! Best vegetarian pizza I've had. Great quality and taste. Delivery to Amrut Nagar was super quick in 12 minutes and food was hot.",
      date: "6 days ago",
      category: "Pizza",
    },
    {
      name: "Nazia Khan",
      location: "Mumbra",
      rating: 5,
      text: "Love the cheese burst burgers! The cheese just oozes out. So delicious! Best burger place in Mumbra near Shalimar area.",
      date: "2 days ago",
      category: "Burgers",
    },
    {
      name: "Rashid Ali",
      location: "Shilphata",
      rating: 5,
      text: "The garlic bread is amazing! Perfectly crispy and cheesy. Great as a starter or side. Best garlic bread in Shilphata.",
      date: "1 week ago",
      category: "Starters",
    },
    {
      name: "Sana Patel",
      location: "Dosti",
      rating: 5,
      text: "Ordered the Hunger Combo and it was perfect! Pizza, burger, fries, and mojito - all delicious. Great value for money near Dosti.",
      date: "3 days ago",
      category: "Combos",
    },
    {
      name: "Aamir Sheikh",
      location: "Mumbra",
      rating: 5,
      text: "The Chicken Mexican Pizza is spicy and delicious! Perfect for those who love bold flavors. Best spicy pizza in Mumbra.",
      date: "5 days ago",
      category: "Pizza",
    },
    {
      name: "Rukhsar Khan",
      location: "Shilphata",
      rating: 5,
      text: "Fresh and tasty food! The quality is consistently good. I order regularly from Shake Chilli. Best restaurant in Shilphata near Al-Hidaya School.",
      date: "1 week ago",
      category: "Overall",
    },
    {
      name: "Farhan Ahmed",
      location: "Mumbra Bypass",
      rating: 5,
      text: "The milkshakes are thick and creamy! Tried the Oreo shake and it was amazing. Perfect dessert after a meal. Best shakes near Mumbra Bypass, delivered in 10 minutes!",
      date: "4 days ago",
      category: "Beverages",
    },
    {
      name: "Shabana Ansari",
      location: "Mumbra",
      rating: 5,
      text: "Great service and delicious food! The staff is friendly and helpful. Best dining experience in Mumbra. Highly recommend!",
      date: "6 days ago",
      category: "Overall",
    },
    {
      name: "Yusuf Patel",
      location: "Shilphata",
      rating: 5,
      text: "The BBQ Pizza is smoky and delicious! Love the BBQ sauce. Best BBQ pizza in Shilphata and Mumbra area.",
      date: "2 days ago",
      category: "Pizza",
    },
    {
      name: "Amina Sheikh",
      location: "Y Junction",
      rating: 5,
      text: "The Xinger Burger is crispy and spicy! Just the way I like it. Best zinger burger near Y Junction, super quick delivery!",
      date: "1 week ago",
      category: "Burgers",
    },
    {
      name: "Karim Ali",
      location: "Millenium",
      rating: 5,
      text: "Excellent food quality! Everything is made fresh. The halal certification is a big plus. Best halal restaurant near Millenium, delivered in 15 minutes.",
      date: "3 days ago",
      category: "Overall",
    },
    {
      name: "Farheen Khan",
      location: "Mumbra",
      rating: 5,
      text: "The Virgin Mojito is so refreshing! Perfect for hot days. Best mojito in Mumbra. Great place to chill with friends.",
      date: "5 days ago",
      category: "Beverages",
    },
    {
      name: "Asif Qureshi",
      location: "Shilphata",
      rating: 5,
      text: "The Double Layer Pizza is unique and delicious! Two layers of pizza goodness. Must try! Best special pizza in Shilphata.",
      date: "1 week ago",
      category: "Pizza",
    },
    {
      name: "Samira Patel",
      location: "Dosti",
      rating: 5,
      text: "Love the variety on the menu! Something for everyone. Great quality and taste. Best restaurant near Dosti for families.",
      date: "4 days ago",
      category: "Overall",
    },
  ]

  const categories = ["All", "Pizza", "Burgers", "Sandwiches", "Coffee", "Beverages", "Combos", "Starters", "Overall"]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main id="main-content" className="min-h-screen">
        <section className="bg-foreground text-background py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 fill-[#e10600] text-[#e10600]" />
                  ))}
                </div>
                <span className="text-4xl font-bold">4.8/5</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h1>
              <p className="text-lg text-background/80 max-w-2xl mx-auto">
                Read what our customers from Mumbra, Shilphata, Kausa, MM Valley, Dosti, Amrut Nagar, Mumbra Bypass, Y Junction, Millenium and nearby areas have to say about us. Over
                200+ happy customers! Delivered in just 10-15 minutes!
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="cursor-pointer hover:bg-[#e10600] hover:text-white"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allReviews.map((review, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#e10600] text-[#e10600]" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {review.category}
                    </Badge>
                    <p className="text-sm mb-4 text-pretty">{review.text}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-muted-foreground text-xs">{review.location}</p>
                      </div>
                      <p className="text-muted-foreground text-xs">{review.date}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
                  <p className="text-muted-foreground mb-6">
                    Have you tried our food? We'd love to hear from you! Your feedback helps us serve you better.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Call us at{" "}
                    <a href="tel:+917208697371" className="text-[#e10600] font-semibold hover:underline">
                      7208 697 371
                    </a>{" "}
                    to share your feedback or place an order.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
