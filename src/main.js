import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'

import { createPinia } from 'pinia'
import { markRaw } from 'vue'

const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
