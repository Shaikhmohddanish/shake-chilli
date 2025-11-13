'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

interface BlogContentProps {
  content: string
}

export function BlogContent({ content }: BlogContentProps) {
  const router = useRouter()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[data-link="true"]')
      
      if (link) {
        e.preventDefault()
        const href = link.getAttribute('href')
        if (href) {
          router.push(href)
        }
      }
    }

    const contentElement = contentRef.current
    if (contentElement) {
      contentElement.addEventListener('click', handleLinkClick)
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener('click', handleLinkClick)
      }
    }
  }, [router])

  return (
    <div
      ref={contentRef}
      className="prose prose-lg max-w-none dark:prose-invert text-gray-700 dark:text-gray-300"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
