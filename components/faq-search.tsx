"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface FaqSearchProps {
  onSearch: (query: string) => void
}

export function FaqSearch({ onSearch }: FaqSearchProps) {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    onSearch(newQuery)
  }

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input placeholder="Pesquisar perguntas frequentes..." value={query} onChange={handleSearch} className="pl-10" />
    </div>
  )
}
