/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import './styles/style.css'

import { registerPlugins } from '@/plugins'
import { App, createApp } from 'vue'

const app = createApp(AppEntry)
// Plugins
registerPlugins(app)


// Components
import AppEntry from './App.vue'
import * as components from './components'

// Composables

const DSLibrary = {
    install(app: App) {
        for (const componentKey in components) {
            app.use((components as any)[componentKey])
        }
    }
}

export default DSLibrary

// export all components as vue plugin
export * from './components'

app.mount('#app')
