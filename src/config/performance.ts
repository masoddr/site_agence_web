export const performanceConfig = {
  // Configuration des images
  images: {
    // Formats d'image supportés
    formats: ['webp', 'avif'],
    // Tailles d'image par défaut
    sizes: {
      thumbnail: { width: 150, height: 150 },
      small: { width: 300, height: 200 },
      medium: { width: 600, height: 400 },
      large: { width: 1200, height: 800 }
    },
    // Qualité de compression
    quality: 80
  },
  
  // Configuration du cache
  cache: {
    // Durée de cache par type de ressource
    durations: {
      static: '1 year',
      images: '1 month',
      fonts: '1 year',
      api: '1 hour'
    }
  },
  
  // Configuration du lazy loading
  lazyLoading: {
    // Distance de préchargement (en pixels)
    threshold: 200,
    // Délai de chargement (en ms)
    delay: 100
  },
  
  // Configuration des ressources critiques
  critical: {
    // Fichiers CSS critiques
    css: [
      '/styles/global.css'
    ],
    // Fichiers JS critiques
    js: []
  }
}; 