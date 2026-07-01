import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the sub-folder the site is served from so assets resolve
// (deployed to https://www.assignments4u.com/gpa-calculator/)
export default defineConfig({
  base: '/gpa-calculator/',
  plugins: [react()],
})
