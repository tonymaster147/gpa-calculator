import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub repo name so assets resolve on GitHub Pages
// (served from https://<user>.github.io/gpa-calculator/)
export default defineConfig({
  base: '/gpa-calculator/',
  plugins: [react()],
})
