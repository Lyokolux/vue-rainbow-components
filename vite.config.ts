import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import VueMacros from 'unplugin-vue-macros/vite'
import Vue from '@vitejs/plugin-vue'
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // allow type import in vue components
    VueMacros({
      plugins: {
        vue: Vue(),
      },
    }),
    // generate types
    dts({
      insertTypesEntry: true,
      tsConfigFilePath: './tsconfig.app.json',
      outputDir: './dist/types',
      include: [
        "env.d.ts",
        "src/*",
        "src/**/*.ts",
        "src/**/*.vue"
      ],
    }),],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      name: 'vue-rainbow-components',
      entry: 'src/index.ts',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue'
        }
      },
    },
    // Leave minification up to applications.
    minify: false
  }
})
