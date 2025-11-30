import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog/blog-data"
import { parseMarkdownToHtml } from "@/lib/markdown"
import { BlogContent } from "@/components/blog-content"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BUSINESS_INFO } from "@/lib/constants"
import { BlogShare } from "@/components/blog-share"
import { buildCanonicalPath, DEFAULT_ROBOTS } from "@/lib/seo"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author],
      images: [
        {
          url: post.image,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: buildCanonicalPath(`/blog/${post.slug}`),
    },
    robots: DEFAULT_ROBOTS,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Article Schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": `${BUSINESS_INFO.domain}${post.image}`,
    "datePublished": post.publishedDate,
    "dateModified": post.publishedDate,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": BUSINESS_INFO.domain
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${BUSINESS_INFO.domain}/logo-square.png`
      }
    },
    "keywords": post.tags.join(", "),
    "articleSection": post.category,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BUSINESS_INFO.domain}/blog/${post.slug}`
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Image */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 -mt-32 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/blog">
              <Button variant="ghost" className="mb-4 bg-background/80 backdrop-blur-sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            {/* Article Header */}
            <div className="bg-background rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{post.category}</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              
              <p className="text-xl text-muted-foreground mb-6">{post.description}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.publishedDate}>
                    {new Date(post.publishedDate).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div>By {post.author}</div>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Article Body */}
            <div className="bg-background rounded-lg shadow-lg p-8 md:p-12 mb-8">
              <BlogContent content={parseMarkdownToHtml(post.content)} />
            </div>

            {/* CTA Box */}
            <div className="bg-primary text-primary-foreground rounded-lg shadow-lg p-8 text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Order?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Experience the best food in Mumbra. Order now for free home delivery!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/menu">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    View Full Menu
                  </Button>
                </Link>
                <a href={`tel:${BUSINESS_INFO.phones.primary}`}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20">
                    Call: {BUSINESS_INFO.phones.display.primary}
                  </Button>
                </a>
              </div>
            </div>

            {/* Share Section */}
            <BlogShare 
              title={post.title}
              url={`${BUSINESS_INFO.domain}/blog/${post.slug}`}
            />
          </div>
        </article>

        {/* Related Posts Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">More Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getAllBlogPosts()
                  .filter(p => p.slug !== post.slug)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link 
                      key={relatedPost.slug} 
                      href={`/blog/${relatedPost.slug}`}
                      className="group"
                    >
                      <div className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative h-48">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.imageAlt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <Badge variant="secondary" className="mb-2">
                            {relatedPost.category}
                          </Badge>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {relatedPost.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
