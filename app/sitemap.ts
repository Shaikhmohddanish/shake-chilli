import type { MetadataRoute } from "next"
import { BUSINESS_INFO } from "@/lib/constants"
import { getAllBlogPosts } from "@/lib/blog/blog-data"
import { MENU_ITEMS } from "@/lib/menu-data"

const STATIC_PATHS = [
  "/",
  "/menu",
  "/pizza",
  "/burger",
  "/footlong-sandwich",
  "/starters",
  "/garlic-bread",
  "/coffee",
  "/milkshakes",
  "/mojito",
  "/french-fries",
  "/how-to-reach",
  "/contact",
  "/reviews",
  "/blog",
] as const

function withBase(path: string) {
  const base = BUSINESS_INFO.domain.replace(/\/$/, "")
  return `${base}${path}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const nowIso = new Date().toISOString()

  const staticRoutes: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: withBase(path),
    lastModified: nowIso,
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1 : 0.9,
  }))

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: withBase(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedDate || nowIso).toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const menuItemRoutes: MetadataRoute.Sitemap = MENU_ITEMS.map((item) => ({
    url: withBase(`/items/${item.slug}`),
    lastModified: nowIso,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes, ...menuItemRoutes]
}
