import { createApp } from 'vue'
import App from './App.vue'
import directives from './derectives/index.js'

const app = createApp(App);

Object.keys(directives).forEach(name => app.directive(name, directives[name]));

app.mount('#app');