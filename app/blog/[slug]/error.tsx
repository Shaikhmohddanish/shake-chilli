'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Blog error:', error)
  }, [error])

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Blog Post Error</h1>
            <h2 className="text-xl text-muted-foreground">Unable to load this article</h2>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Sorry, we couldn't load this blog post. Please try again or browse other articles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => reset()} variant="default">
              Try Again
            </Button>
            <Button onClick={() => window.location.href = '/blog'} variant="outline">
              View All Posts
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
