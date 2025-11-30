'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function ItemError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Item error:', error)
  }, [error])

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Menu Item Error</h1>
            <h2 className="text-xl text-muted-foreground">Unable to load this item</h2>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Sorry, we couldn't load this menu item. Please try again or browse our full menu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => reset()} variant="default">
              Try Again
            </Button>
            <Button onClick={() => window.location.href = '/menu'} variant="outline">
              View Menu
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
