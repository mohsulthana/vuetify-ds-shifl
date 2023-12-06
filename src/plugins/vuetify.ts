/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@/styles/main.scss'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { ThemeDefinition, createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    'primary-blue-100': '#175878',
    'primary-blue-90': '#1A6D9E',
    'primary-blue-80': '#1A86BC',
    'primary-blue-70': '#0E9FDD',
    'primary-blue-60': '#2AB7F4',
    'primary-blue-50': '#6CCAF9',
    'primary-blue-40': '#A6DDFC',
    'primary-blue-30': '#C3E8FE',
    'primary-blue-20': '#E1F4FF',
    'primary-blue-10': '#F0F9FF',
  },
}
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme
    },
  },
})
