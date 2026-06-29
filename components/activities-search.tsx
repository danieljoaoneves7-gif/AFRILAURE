'use client'

import { useState, useCallback } from 'react'
import { Search } from 'lucide-react'

interface ActivitiesSearchProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export function ActivitiesSearch({ onSearch, placeholder = 'Pesquisar atividades...' }: ActivitiesSearchProps) {
  const [query, setQuery] = useState('')

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setQuery(value)
      onSearch(value)
    },
    [onSearch]
  )

  const handleClear = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <div className="w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full rounded-lg border border-border bg-background pl-10 pr-10 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Limpar pesquisa"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
