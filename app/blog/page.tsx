import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllBlogPosts } from "@/lib/blog/blog-data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/constants"
import { buildCanonicalPath, DEFAULT_ROBOTS } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Blog - Pizza, Cafe & Food Guide in Mumbra",
  description: "Discover the best pizza, cafes, birthday celebration spots, and halal food in Mumbra and Shilphata. Expert guides and tips from Shake Chilli.",
  keywords: [
    "best pizza near me",
    "best pizza in mumbra",
    "best cafe in mumbra",
    "best place for couples",
    "birthday celebration mumbra",
    "halal cafe mumbra",
    "food blog mumbra",
  ],
  openGraph: {
    title: "Blog - Best Pizza & Cafe Guide in Mumbra | Shake Chilli",
    description: "Discover the best pizza, cafes, and dining spots in Mumbra. Expert guides for couples, birthdays, and halal food lovers.",
    images: ["/images/shake-chilli-complete-pizza-menu-mumbra-shilphata.jpeg"],
  },
  alternates: {
    canonical: buildCanonicalPath("/blog"),
  },
  robots: DEFAULT_ROBOTS,
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Shake Chilli Blog
              </h1>
              <p className="text-xl text-muted-foreground">
                Your ultimate guide to the best food, cafes, and dining experiences in Mumbra & Shilphata
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </Link>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <CardTitle className="line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.publishedDate}>
                        {new Date(post.publishedDate).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience the Best Food in Mumbra?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Order now and taste why we're the top-rated restaurant in the area!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center px-8 py-3 bg-background text-primary rounded-lg font-semibold hover:bg-background/90 transition-colors"
              >
                View Menu
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phones.primary}`}
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
              >
                Call: {BUSINESS_INFO.phones.display.primary}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
