import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Clock, Heart, Utensils, Award, Shield, Sparkles, Trophy, Zap, Star, UsersRound } from "lucide-react"
import Link from "next/link"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Users,
      number: "5000+",
      label: "Happy Customers",
      description: "Served with love and care"
    },
    {
      icon: Award,
      number: "4.7★",
      label: "Customer Rating",
      description: "Based on 200+ reviews"
    },
    {
      icon: Heart,
      number: "50+",
      label: "Menu Items",
      description: "Diverse food options"
    },
    {
      icon: Sparkles,
      number: "2+",
      label: "Years Experience",
      description: "Serving Mumbra & Shilphata"
    }
  ]

  const highlights = [
    { icon: <Trophy className="w-5 h-5" />, text: "Top-rated restaurant in Shilphata area" },
    { icon: <Award className="w-5 h-5" />, text: "Best Pizza in Mumbra according to customer reviews" },
    { icon: <Zap className="w-5 h-5" />, text: "Fastest delivery in the neighborhood" },
    { icon: <Heart className="w-5 h-5" />, text: "Most loved cafe near Al-Hidaya School" },
    { icon: <Star className="w-5 h-5" />, text: "Consistent quality and taste since day one" },
    { icon: <UsersRound className="w-5 h-5" />, text: "Family-friendly dining atmosphere" }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-primary">Shake Chilli</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We're not just another restaurant – we're your trusted food partner in Mumbra and Shilphata. 
            Here's what makes us special and why thousands of customers choose us every day.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {achievement.number}
                  </div>
                  <div className="font-semibold mb-1 text-sm md:text-base">
                    {achievement.label}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Highlights */}
        <div className="bg-background rounded-2xl p-6 md:p-8 border-2 border-accent">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            What Our Customers Say About Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors"
              >
                <span className="text-primary">{highlight.icon}</span>
                <span className="text-sm md:text-base font-medium">
                  {highlight.text}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made Shake Chilli their go-to destination 
              for delicious food, quick service, and memorable dining experiences in Mumbra and Shilphata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-lg">
                <Link href="/menu">
                  View Our Menu
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-lg">
                <Link href="/reviews">
                  Read All Reviews
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}