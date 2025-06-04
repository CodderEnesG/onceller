// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/", // vercel'de root domain olduğu için bu şekilde olmalı
  plugins: [react()],
});
