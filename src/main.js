import '@/scss/main.scss'
import '@/scss/utility.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

createApp(App)
    .use(router)
    .mount('#app')
