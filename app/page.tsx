import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { USPStrip } from "@/components/home/usp-strip"
import { CategoryGrid } from "@/components/home/category-grid"
import { FeaturedCombos } from "@/components/home/featured-combos"
import { AboutSection } from "@/components/home/about-section"
import { SpecialtiesSection } from "@/components/home/specialties-section"
import { WhyUs } from "@/components/home/why-us"
import { AchievementsSection } from "@/components/home/achievements-section"
import { ReviewsSection } from "@/components/home/reviews-section"
import { FAQSection } from "@/components/home/faq-section"
import { LocationBanner } from "@/components/home/location-banner"
import { FloatingCTA } from "@/components/floating-cta"
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/lib/seo"

export default function HomePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Home", url: "/" }])
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Header />
      <main>
        <Hero />
        <USPStrip />
        <CategoryGrid />
        <AboutSection />
        <SpecialtiesSection />
        <FeaturedCombos />
        <WhyUs />
        <AchievementsSection />
        <ReviewsSection />
        <FAQSection />
        <LocationBanner />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
