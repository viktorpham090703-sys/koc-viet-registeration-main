import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'

const config = defineConfig({
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    // Edge Functions emulation is disabled locally: @netlify/edge-functions-dev@2.0.1
    // spawns Deno with an '--allow-scripts' flag that current Deno rejects.
    // Production build output is unaffected.
    netlify({ dev: { edgeFunctions: { enabled: false } } }),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
