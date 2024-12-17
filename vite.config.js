import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react()],
    server: {
        host: '0.0.0.0', // Listen on all interfaces
        port: 5173, // Optional: Ensure the port matches your Docker setup
    }
})
