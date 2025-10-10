"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { BUSINESS_INFO } from "@/lib/constants"

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "Do you offer halal food?",
      answer: "Yes, absolutely! All our food is 100% halal certified. We ensure that all our ingredients and preparation methods meet halal standards, making it safe for Muslim customers to enjoy our delicious meals."
    },
    {
      question: "What are your delivery areas?",
      answer: `We provide free home delivery to Mumbra, Shilphata, Diva, Dosti, and nearby areas. Our delivery radius covers approximately 5km from our location near Al-Hidaya School in Shilphata.`
    },
    {
      question: "How long does delivery take?",
      answer: "Our average delivery time is 25-35 minutes, depending on your location and order size. We strive to deliver hot, fresh food as quickly as possible while maintaining quality."
    },
    {
      question: "Do you have vegetarian options?",
      answer: "Yes, we have an extensive vegetarian menu including veg pizzas (Margherita, Corn Delight, Paneer), veg burgers, veg sandwiches, and all our beverages. All veg items are clearly marked on our menu."
    },
    {
      question: "What are your operating hours?",
      answer: `We're open daily from ${BUSINESS_INFO.hours.display}. We serve fresh, hot food throughout these hours, and delivery is available during all operating hours.`
    }
  ]

  const handleToggle = (index: number) => {
    setOpenFAQ(prev => prev === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Got questions about our food, delivery, or services? Here are the most common questions 
              our customers ask about Shake Chilli.
            </p>
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

          <div className="mt-12 text-center">
            <div className="bg-accent/30 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our friendly team is here to help! 
                Give us a call or send us a message on WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${BUSINESS_INFO.phones.primary}`}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
                >
                  📞 Call: {BUSINESS_INFO.phones.display.primary}
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phones.primary.replace(/[^0-9]/g, "")}?text=Hi! I have a question about your menu.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#20BA5A] transition-colors"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}