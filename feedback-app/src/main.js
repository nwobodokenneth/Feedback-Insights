import { createApp } from 'vue'
import "./assets/tailwind.css";
import App from './App.vue'
import router from './router'
import { Line } from 'vue-chartjs'
import store from './store'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import "./assets/global.scss";
import VueFeather from "vue-feather";


const app = createApp(App);

app.component('Datepicker', Datepicker);
app.component("vue-feather", VueFeather);
app.component("line", Line);

app.use(store).use(router).mount('#app')
