import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Pokédex',
        short_name: 'Pokedex',
        description: 'Sua pokédex!',
        theme_color: '#173EA5',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/assets/pikachu-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/pikachu-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/assets/pikachu-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
      }
    }),
  ],
})
