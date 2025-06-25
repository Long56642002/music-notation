import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { alphaTab } from "@coderline/alphatab/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), alphaTab()],
})
