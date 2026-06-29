'use client'

import { ActivityCategory } from '@/lib/activities-data'

interface ActivitiesFilterProps {
  selectedCategory: ActivityCategory | 'todas'
  onCategoryChange: (category: ActivityCategory | 'todas') => void
}

const categories: { id: ActivityCategory | 'todas'; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'defesas', label: 'Defesas de Cursos' },
  { id: 'eventos', label: 'Eventos Escolares' },
  { id: 'festivais', label: 'Festivais' },
  { id: 'visitas', label: 'Visitas de Estudo' },
  { id: 'formaturas', label: 'Formaturas' },
]

export function ActivitiesFilter({ selectedCategory, onCategoryChange }: ActivitiesFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
            selectedCategory === category.id
              ? 'bg-primary text-primary-foreground shadow-md scale-105'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-sm'
          }`}
          aria-pressed={selectedCategory === category.id}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
