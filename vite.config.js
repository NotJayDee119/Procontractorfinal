import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Gzip compression
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024, // Only compress files larger than 1KB
      deleteOriginFile: false,
    }),
    // Brotli compression (better compression ratio)
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
      deleteOriginFile: false,
    }),
  ],
  base: '/', // Use absolute paths for Firebase hosting (change to './' only for WordPress embedding)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    // Copy public files to dist
    copyPublicDir: true,
    // Enable minification and compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2, // Multiple compression passes for smaller output
        ecma: 2020,
        module: true,
        toplevel: true,
        unsafe_arrows: true,
        unsafe_methods: true,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false, // Remove all comments
        ecma: 2020,
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Target modern browsers for smaller bundles
    target: 'es2020',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
        // Enable code splitting for better performance
        manualChunks: (id) => {
          // Vendor chunks for large libraries
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'framer-vendor';
            }
            if (id.includes('lenis')) {
              return 'lenis-vendor';
            }
            if (id.includes('@emailjs')) {
              return 'emailjs-vendor';
            }
            return 'vendor'; // Other dependencies
          }
          // Split portfolio images into separate chunk
          if (id.includes('Portfolio-optimized')) {
            return 'portfolio-images';
          }
        },
        // Compact output for smaller file sizes
        compact: true,
      }
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize CSS
    cssMinify: 'lightningcss',
    // Reduce asset inline size threshold for smaller main bundle
    assetsInlineLimit: 4096,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lenis'],
    // Enable esbuild optimization
    esbuildOptions: {
      target: 'es2020',
    },
  },
  // CSS optimization
  css: {
    devSourcemap: false,
  },
  // Enable esbuild for faster builds
  esbuild: {
    target: 'es2020',
    legalComments: 'none',
  },
})
