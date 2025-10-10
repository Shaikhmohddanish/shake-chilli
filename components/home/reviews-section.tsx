import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

export function ReviewsSection() {
  const reviews = [
    {
      name: "Arif Khan",
      location: "Mumbra",
      rating: 5,
      text: "Best pizza in Mumbra! The Chicken Tikka Pizza is absolutely delicious. Fresh ingredients and great taste. Highly recommended!",
      date: "2 days ago",
    },
    {
      name: "Fatima Sheikh",
      location: "Shilphata",
      rating: 5,
      text: "Love their burgers! The Big ShakeChilli Burger is huge and so tasty. Great value for money. Will definitely order again.",
      date: "1 week ago",
    },
    {
      name: "Mohammed Ansari",
      location: "Diva",
      rating: 5,
      text: "Fast delivery and hot food! Ordered the Family Meal combo and everyone loved it. Best restaurant near Diva.",
      date: "3 days ago",
    },
    {
      name: "Ayesha Patel",
      location: "Dosti",
      rating: 5,
      text: "The footlong sandwiches are amazing! Fresh veggies and generous portions. Perfect for lunch. Near Dosti area.",
      date: "5 days ago",
    },
    {
      name: "Salman Qureshi",
      location: "Mumbra",
      rating: 5,
      text: "Best halal food in the area! Everything is fresh and delicious. The mojitos are also very refreshing. Highly recommend!",
      date: "1 week ago",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-[#e10600] text-[#e10600]" />
              ))}
            </div>
            <span className="text-2xl font-bold">4.8/5</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Loved by hundreds of customers in Mumbra, Shilphata, Diva and nearby areas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reviews.slice(0, 3).map((review, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#e10600] text-[#e10600]" />
                  ))}
                </div>
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
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/reviews">View All Reviews</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
