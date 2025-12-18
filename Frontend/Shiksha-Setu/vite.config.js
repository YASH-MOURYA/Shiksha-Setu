import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// You can remove this import if it's no longer used:
// import tailwindcss from '@tailwindcss/vite'; 

export default defineConfig({
  plugins: [
    react(),
    // REMOVED: tailwindcss(), 
  ],
});