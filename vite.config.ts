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
      manifest: {
        name: 'Pokédex',
        short_name: 'Pokedex',
        description: 'Sua pokédex!',
        theme_color: '#173EA5',
        background_color: '#ffffff',
        display: 'standalone',
      }
    }),
  ],
})
