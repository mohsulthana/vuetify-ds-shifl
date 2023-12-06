import { App, Plugin } from 'vue'

import Button from './SButton.vue'

export default {
    install(Vue: App) {
        Vue.component('SButton', Button)
    }
} as Plugin

export { Button as DSButton }
