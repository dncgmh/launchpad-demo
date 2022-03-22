import '@/assets/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faEnvelope,
  faInfoCircle,
  faKey,
  faLink,
  faNewspaper,
  faSignInAlt,
  faSignOutAlt,
  faUserCircle,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

library.add([
  faGoogle,
  faBars,
  faEnvelope,
  faKey,
  faUserCircle,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faInfoCircle,
  faTwitter,
  faTelegram,
  faLink,
  faNewspaper
] as any);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app');
