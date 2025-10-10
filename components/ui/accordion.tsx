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
      <div className={cn("space-y-2", className)}>{children}</div>
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
      <div className={cn("border rounded-lg", className)} data-value={value}>
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
        "flex w-full items-center justify-between p-4 text-left font-medium transition-all hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20",
        className,
      )}
      onClick={() => onValueChange(itemValue)}
      aria-expanded={isOpen}
    >
      {children}
      <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
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
    <div className={cn("px-4 pb-4 pt-0 text-sm text-muted-foreground animate-in slide-in-from-top-1 duration-200", className)}>
      {children}
    </div>
  )
}
