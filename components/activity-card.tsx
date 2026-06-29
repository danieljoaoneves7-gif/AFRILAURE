'use client'

import Image from 'next/image'
import { ActivityMedia } from '@/lib/activities-data'
import { Play } from 'lucide-react'

interface ActivityCardProps {
  media: ActivityMedia
  onClick: () => void
}

export function ActivityCard({ media, onClick }: ActivityCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative h-64 w-full overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label={`Abrir ${media.title}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {media.type === 'image' ? (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={media.thumbnail || '/activities/default-video-thumb.png'}
                alt={media.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40" />

      {/* Play Icon for Videos */}
      {media.type === 'video' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-white/90 p-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white">
            <Play className="h-8 w-8 fill-primary text-primary" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-all duration-300">
        <h3 className="line-clamp-2 text-sm font-semibold text-white group-hover:text-primary transition-colors">
          {media.title}
        </h3>
        <p className="text-xs text-gray-200 mt-1">{new Date(media.date).toLocaleDateString('pt-PT')}</p>
      </div>
    </button>
  )
}
