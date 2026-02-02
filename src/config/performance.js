// Performance Optimization Configuration
// This file contains all performance-related settings

export const performanceConfig = {
  // Image loading settings
  images: {
    lazyLoadOffset: 100, // Load images 100px before they enter viewport
    placeholderQuality: 10, // Low quality placeholder while loading
    compressionQuality: 80, // WebP compression quality
  },

  // Code splitting settings
  codeSplitting: {
    chunkSize: 500, // KB - target chunk size
    preloadRoutes: ['/', '/services', '/contact'], // Routes to preload
  },

  // Third-party scripts
  thirdPartyScripts: {
    elfsight: {
      defer: true,
      lazyLoad: true,
      loadOnScroll: true,
    },
  },

  // Animation settings
  animations: {
    reducedMotion: false, // Respect user's motion preferences
    smoothScrollDuration: 1.2, // seconds
  },

  // Cache settings
  cache: {
    maxAge: 31536000, // 1 year for static assets
    staleWhileRevalidate: 86400, // 1 day
  },
};

export default performanceConfig;
