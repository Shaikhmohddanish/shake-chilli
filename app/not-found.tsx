import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Home, Menu } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. The page may have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="mr-2 h-5 w-5" />
                Go to Home
              </Button>
            </Link>
            <Link href="/menu">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Menu className="mr-2 h-5 w-5" />
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
