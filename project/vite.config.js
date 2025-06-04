import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // bu, alt dizinlerde bile linklerin doğru çalışmasını sağlar
})
