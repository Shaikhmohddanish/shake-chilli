"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext<{
  value: string | undefined
  onValueChange: (value: string) => void
}>({
  value: undefined,
  onValueChange: () => {},
})

const AccordionItemContext = React.createContext<string>("")

interface AccordionProps {
  type: "single"
  collapsible?: boolean
  children: React.ReactNode
  className?: string
}

export function Accordion({ children, className }: AccordionProps) {
  const [value, setValue] = React.useState<string | undefined>(undefined)

  const onValueChange = (newValue: string) => {
    setValue(current => current === newValue ? undefined : newValue)
  }

  return (
    <AccordionContext.Provider value={{ value, onValueChange }}>
      <div className={cn("space-y-3", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps {
  value: string
  children: React.ReactNode
  className?: string
}

export function AccordionItem({ value, children, className }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={value}>
      <div className={cn("border border-gray-200 rounded-xl bg-background hover:border-primary/30 transition-colors", className)} data-value={value}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
}

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { value: openValue, onValueChange } = React.useContext(AccordionContext)
  const itemValue = React.useContext(AccordionItemContext)
  const isOpen = openValue === itemValue

  return (
    <button
      className={cn(
        "flex w-full items-center justify-between p-5 md:p-6 text-left font-semibold transition-all hover:bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-900",
        className,
      )}
      onClick={() => onValueChange(itemValue)}
      aria-expanded={isOpen}
    >
      {children}
      <ChevronDown className={cn("h-5 w-5 transition-transform duration-200 text-gray-500", isOpen && "rotate-180 text-primary")} />
    </button>
  )
}

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}

export function AccordionContent({ children, className }: AccordionContentProps) {
  const { value: openValue } = React.useContext(AccordionContext)
  const itemValue = React.useContext(AccordionItemContext)
  const isOpen = openValue === itemValue

  if (!isOpen) return null

  return (
    <div className={cn("border-t border-gray-100 bg-gray-50/30", className)}>
      <div className="px-5 md:px-6 py-4 md:py-5 text-sm md:text-base text-gray-600 animate-in slide-in-from-top-1 duration-200">
        {children}
      </div>
    </div>
  )
}
