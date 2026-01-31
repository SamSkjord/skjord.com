import { createApp } from 'vue';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import 'bootstrap';
import './scss/styles.scss';

import App from './App.vue';
import router from './router';

import Card from '@/components/bootstrap/Card.vue';
import CardBody from '@/components/bootstrap/CardBody.vue';
const app = createApp(App);

app.component('Card', Card);
app.component('CardBody', CardBody);

app.use(router);
app.mount('#app');
