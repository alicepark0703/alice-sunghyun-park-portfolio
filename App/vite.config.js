import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Base path = repo name so GitHub Pages resolves assets correctly
  // e.g. https://alicepark0703.github.io/alice-sunghyun-park-portfolio/
  base: '/alice-sunghyun-park-portfolio/',
})
