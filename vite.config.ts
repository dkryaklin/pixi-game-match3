import { defineConfig } from "vite"

export default defineConfig(({ mode }) => ({
    server: {
        port: 5000,
        open: true,
    },
    base: mode === 'development' ? 'pixi-game-match3' : '/',
}))