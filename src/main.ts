import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import router from './router'
import axios from 'axios';

const app = createApp(App)

app.use(router)
// app.use(axios)
app.mount('#app')

