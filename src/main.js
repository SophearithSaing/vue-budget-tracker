import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Button from 'primevue/button';

import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

const app = createApp(App);

app.component('Card', Card).component('Button', Button);

app.use(store).use(router).use(PrimeVue).mount('#app');
