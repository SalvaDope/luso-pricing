"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
  category: string
  isLast?: boolean
}

export function FaqAccordion({ items, category, isLast = false }: FaqAccordionProps) {
  return (
    <div className={`space-y-2 ${isLast ? "mb-0" : ""}`}>
      <h2 className="text-2xl font-bold text-[#0eb49b]">{category}</h2>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left hover:text-[#0eb49b]">{item.question}</AccordionTrigger>
            <AccordionContent>
              <div className="prose dark:prose-invert max-w-none">
                {item.answer.split("•").map((part, i) => {
                  if (i === 0) return <p key={i}>{part}</p>
                  return <p key={i}>• {part}</p>
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
