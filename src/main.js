import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(store).use(router).use(PrimeVue).mount('#app');
