import { createApp } from 'vue'
import App from './App.vue'

import gsap from 'gsap'
import responsiveImage from './directives/responsiveImage'
import 'normalize.css'
import '@/assets/scss/styles.scss'

const app = createApp(App)
app.provide('gsap', gsap)
app.directive('background', responsiveImage)
app.mount('#app')
