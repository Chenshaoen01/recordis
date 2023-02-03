import axios from 'axios';
import VueAxios from 'vue-axios';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'aos/dist/aos.css';

import 'bootstrap';

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
