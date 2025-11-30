import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OfflinePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">You're Offline</h1>
            <h2 className="text-xl text-muted-foreground">No internet connection</h2>
          </div>
          
          <p className="text-sm text-muted-foreground">
            It looks like you've lost your internet connection. Please check your connection and try again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => window.location.reload()} variant="default">
              Retry
            </Button>
            <Link href="/">
              <Button variant="outline" className="w-full">
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
