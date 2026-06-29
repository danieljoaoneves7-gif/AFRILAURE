'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ActivityMedia } from '@/lib/activities-data'
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react'

interface ActivitiesViewerProps {
  media: ActivityMedia
  allMedia: ActivityMedia[]
  onClose: () => void
}

export function ActivitiesViewer({ media, allMedia, onClose }: ActivitiesViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(allMedia.findIndex(m => m.id === media.id))
  const [zoom, setZoom] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)

  const currentMedia = allMedia[currentIndex]

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') handlePrevious()
      if (e.key === 'ArrowRight') handleNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % allMedia.length)
    setZoom(1)
  }, [allMedia.length])

  const handlePrevious = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + allMedia.length) % allMedia.length)
    setZoom(1)
  }, [allMedia.length])

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.5, 3))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.5, 1))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart(e.clientX)
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return
    setIsDragging(false)
    const dragEnd = e.clientX
    const diff = dragStart - dragEnd

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext()
      else handlePrevious()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm"
      onClick={e => e.target === e.currentTarget && onClose()}
      onMouseUp={handleMouseUp}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 p-4 sm:p-6">
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold text-white line-clamp-2">{currentMedia.title}</h2>
          <p className="text-sm text-gray-400 mt-1">
            {currentIndex + 1} de {allMedia.length}
          </p>
        </div>
        <button
          onClick={onClose}
          className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
          aria-label="Fechar visualizador"
        >
          <X className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center overflow-hidden p-4 sm:p-6">
        {currentMedia.type === 'image' ? (
          <div className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            style={{ overflow: zoom > 1 ? 'auto' : 'hidden' }}
          >
            <Image
              src={currentMedia.src}
              alt={currentMedia.alt}
              fill
              className="object-contain select-none transition-transform duration-200"
              style={{ transform: `scale(${zoom})` }}
              priority
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <iframe
              src={currentMedia.src}
              title={currentMedia.title}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>

      {/* Footer with Controls */}
      <div className="border-t border-white/10 bg-black/50 p-4 sm:p-6">
        {/* Description */}
        {currentMedia.description && (
          <div className="mb-4">
            <p className="text-sm text-gray-300">{currentMedia.description}</p>
            <p className="text-xs text-gray-400 mt-2">
              {new Date(currentMedia.date).toLocaleDateString('pt-PT')}
            </p>
          </div>
        )}

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Left Controls */}
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors disabled:opacity-50"
              aria-label="Anterior"
              disabled={allMedia.length <= 1}
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors disabled:opacity-50"
              aria-label="Próxima"
              disabled={allMedia.length <= 1}
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Zoom Controls (only for images) */}
          {currentMedia.type === 'image' && (
            <div className="flex gap-2">
              <button
                onClick={handleZoomOut}
                className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors disabled:opacity-50"
                aria-label="Reduzir zoom"
                disabled={zoom <= 1}
              >
                <ZoomOut className="h-5 w-5 text-white" />
              </button>
              <span className="flex items-center px-3 text-sm text-white">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors disabled:opacity-50"
                aria-label="Aumentar zoom"
                disabled={zoom >= 3}
              >
                <ZoomIn className="h-5 w-5 text-white" />
              </button>
            </div>
          )}

          {/* Right Side */}
          <div />
        </div>

        {/* Keyboard Hints */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          ESC para fechar • Setas para navegar • Arraste para navegar (mobile)
        </p>
      </div>
    </div>
  )
}
