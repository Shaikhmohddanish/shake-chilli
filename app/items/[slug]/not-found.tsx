import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Item Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">Sorry, we couldn't find the item you're looking for.</p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/menu">View Full Menu</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
