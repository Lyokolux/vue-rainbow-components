import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  theme: {
    title: 'Vue Rainbow Components',
    favicon: 'favicon.ico'
  },
  plugins: [
    HstVue(),
  ],
})
