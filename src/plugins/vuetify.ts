// @ts-nocheck
/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
const fullConfig = resolveConfig(tailwindConfig)

// Composables
import { ThemeDefinition, createVuetify } from 'vuetify'
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    'primary-blue-100': fullConfig.theme.accentColor.primary.blue['100'],
    'primary-blue-90': fullConfig.theme.accentColor.primary.blue['90'],
    'primary-blue-80': fullConfig.theme.accentColor.primary.blue['80'],
    'primary-blue-70': fullConfig.theme.accentColor.primary.blue['70'],
    'primary-blue-60': fullConfig.theme.accentColor.primary.blue['60'],
    'primary-blue-50': fullConfig.theme.accentColor.primary.blue['50'],
    'primary-blue-40': fullConfig.theme.accentColor.primary.blue['40'],
    'primary-blue-30': fullConfig.theme.accentColor.primary.blue['30'],
    'primary-blue-20': fullConfig.theme.accentColor.primary.blue['20'],
    'primary-blue-10': fullConfig.theme.accentColor.primary.blue['10'],
  },
}
export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme
    },
  },
})
