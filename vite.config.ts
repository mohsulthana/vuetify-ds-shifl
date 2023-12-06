// Plugins
import vue from '@vitejs/plugin-vue'
import ViteFonts from 'unplugin-fonts/vite'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'


// Utilities
import { fileURLToPath, URL } from 'node:url'
import * as path from "path"
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Roboto',
            styles: 'wght@100;300;400;500;700;900',
          },
        ],
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  server: {
    port: 3000,
  },
  build: {
    emptyOutDir: false,
    lib: {
      // src/main.ts is where we have exported the component(s)
      entry: path.resolve(__dirname, "src/main.ts"),
      formats: ['es'],
      name: "ShiflDSDraft",
      fileName: "shifl-ds-draft",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
