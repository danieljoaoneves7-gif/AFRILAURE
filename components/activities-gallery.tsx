'use client'

import { ActivityMedia } from '@/lib/activities-data'
import { ActivityCard } from './activity-card'

interface ActivitiesGalleryProps {
  media: ActivityMedia[]
  onMediaClick: (media: ActivityMedia) => void
}

export function ActivitiesGallery({ media, onMediaClick }: ActivitiesGalleryProps) {
  if (media.length === 0) {
    return (
      <div className="flex h-96 items-center justify-center rounded-lg border-2 border-dashed border-border bg-background/50">
        <div className="text-center">
          <p className="text-lg font-semibold text-foreground">Nenhuma atividade encontrada</p>
          <p className="text-sm text-muted-foreground mt-2">Tente ajustar seus filtros ou pesquisa</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {media.map(item => (
        <ActivityCard
          key={item.id}
          media={item}
          onClick={() => onMediaClick(item)}
        />
      ))}
    </div>
  )
}
