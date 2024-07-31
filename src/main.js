import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/main.css'

import router from './router/index.js'

import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'
import VueAxios from 'vue-axios'
import AOS from 'aos';
import 'aos/dist/aos.css'
import popover from './directives/popover';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const app = createApp(App)

app.use(router)

app.use(store)

app.component('QuillEditor', QuillEditor)

app.use(VueAxios, axios)

AOS.init({
    duration: 1600
});

app.directive('popover', popover);

app.mount('#app')
