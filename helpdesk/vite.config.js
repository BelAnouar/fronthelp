import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// https://vitejs.dev/config/
export default defineConfig({
    build: { manifest: true, outDir: './dist'},
    base:  '/',
    root: './src',
    plugins: [react()],
})


