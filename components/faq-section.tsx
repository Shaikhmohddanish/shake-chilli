"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  faqs: FAQ[]
  className?: string
}

export function FAQSection({ 
  title = "Frequently Asked Questions", 
  subtitle,
  faqs,
  className = ""
}: FAQSectionProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenFAQ(prev => prev === index ? null : index)
  }

  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openFAQ === index
          return (
            <div key={index} className={`rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen 
                ? 'bg-background border border-primary/25 shadow-sm' 
                : 'bg-background border border-gray-200 hover:border-primary/30'
            }`}>
              <button
                onClick={() => handleToggle(index)}
                className="w-full p-5 md:p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg md:text-xl font-semibold pr-4 text-gray-900">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 transition-transform duration-200">
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              {isOpen && (
                <div 
                  id={`faq-answer-${index}`}
                  className="border-t border-gray-100 bg-gray-50/30"
                  style={{ 
                    animation: 'fadeIn 0.2s ease-in-out'
                  }}
                >
                  <div className="px-5 md:px-6 py-4 md:py-5">
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}