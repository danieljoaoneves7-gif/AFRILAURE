'use client'

import { useState, useMemo, useCallback } from 'react'
import { activitiesData, getAllActivities, getActivitiesByCategory, searchActivities, ActivityCategory, ActivityMedia } from '@/lib/activities-data'
import { ActivitiesSearch } from './activities-search'
import { ActivitiesFilter } from './activities-filter'
import { ActivitiesGallery } from './activities-gallery'
import { ActivitiesViewer } from './activities-viewer'

export function ActivitiesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory | 'todas'>('todas')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMedia, setSelectedMedia] = useState<ActivityMedia | null>(null)

  // Filter and search logic
  const filteredMedia = useMemo(() => {
    let result = selectedCategory === 'todas' ? getAllActivities() : getActivitiesByCategory(selectedCategory)

    if (searchQuery) {
      result = result.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return result
  }, [selectedCategory, searchQuery])

  const handleMediaClick = useCallback((media: ActivityMedia) => {
    setSelectedMedia(media)
  }, [])

  const handleCloseViewer = useCallback(() => {
    setSelectedMedia(null)
  }, [])

  // Get category stats
  const getCategoryStats = (category: ActivityCategory) => {
    const media = getActivitiesByCategory(category)
    return media.length
  }

  return (
    <>
      <section id="atividades" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">
              Galeria de Atividades
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore a riqueza de eventos, festivais, defesas, visitas de estudo e formaturas realizadas no nosso colégio
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 max-w-2xl mx-auto">
            <ActivitiesSearch
              onSearch={setSearchQuery}
              placeholder="Pesquise por nome, descrição ou categoria..."
            />
          </div>

          {/* Category Stats */}
          <div className="mb-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {activitiesData.map(section => (
              <div
                key={section.category}
                className={`p-4 rounded-lg text-center transition-all duration-200 cursor-pointer ${
                  selectedCategory === section.category
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary/50 text-foreground hover:bg-secondary'
                }`}
                onClick={() => {
                  setSelectedCategory(section.category)
                  setSearchQuery('')
                }}
              >
                <p className="font-semibold text-sm">{section.title}</p>
                <p className="text-xs opacity-75 mt-1">{getCategoryStats(section.category)} mídias</p>
              </div>
            ))}
            <div
              className={`p-4 rounded-lg text-center transition-all duration-200 cursor-pointer ${
                selectedCategory === 'todas'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary/50 text-foreground hover:bg-secondary'
              }`}
              onClick={() => {
                setSelectedCategory('todas')
                setSearchQuery('')
              }}
            >
              <p className="font-semibold text-sm">Todas</p>
              <p className="text-xs opacity-75 mt-1">{getAllActivities().length} mídias</p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="mb-12 flex justify-center">
            <ActivitiesFilter
              selectedCategory={selectedCategory}
              onCategoryChange={(category) => {
                setSelectedCategory(category)
                setSearchQuery('')
              }}
            />
          </div>

          {/* Results Info */}
          {searchQuery && (
            <div className="mb-6 text-center">
              <p className="text-sm text-muted-foreground">
                Encontradas <span className="font-semibold text-foreground">{filteredMedia.length}</span> atividade(s) para "{searchQuery}"
              </p>
            </div>
          )}

          {/* Gallery */}
          <ActivitiesGallery
            media={filteredMedia}
            onMediaClick={handleMediaClick}
          />

          {/* Footer Info */}
          <div className="mt-16 pt-12 border-t border-border text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Clique em qualquer imagem ou vídeo para visualizar em tela cheia
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <span>Use ESC para fechar</span>
              <span className="hidden sm:inline">•</span>
              <span>Use setas para navegar</span>
              <span className="hidden sm:inline">•</span>
              <span>Arraste no mobile</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Viewer */}
      {selectedMedia && (
        <ActivitiesViewer
          media={selectedMedia}
          allMedia={filteredMedia}
          onClose={handleCloseViewer}
        />
      )}
    </>
  )
}
