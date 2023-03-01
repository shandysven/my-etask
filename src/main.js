import { createApp } from 'vue'
import router from '@/router/index'
import { Tooltip } from 'flowbite'
import '@flaticon/flaticon-uicons/css/all/all.css'
import '@/assets/fonts/custom/font.css'
import 'simplebar-vue/dist/simplebar.min.css'
import '@/style.css'
import App from '@/App.vue'

import ResizeObserver from 'resize-observer-polyfill'
window.ResizeObserver = ResizeObserver;

var app = createApp(App)
app.use(router).mount('#app')

document.addEventListener("dom-reload", function() {
    Tooltip.start();
});