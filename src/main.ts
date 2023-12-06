/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import SButton from '@/components/Button/SButton.vue'
import AppVue from './App.vue'

// Composables
import { App, createApp } from 'vue'

export default {
    install: (app: App) => {
        app.component('SButton', SButton)
    }
}

const app = createApp(AppVue)

registerPlugins(app)

import './styles/main.css'

app.mount('#app')
