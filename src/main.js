import Vue from 'vue';
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from 'socket.io-client';
import $ from 'jquery';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './store';
import router from './router';
import App from './App.vue';
import MessageHandlerMixin from './mixins/MessageHandlerMixin';

Vue.mixin(MessageHandlerMixin);
global.$ = $;

/* FontAwesome */
fontawesome.library.add(solid);
Vue.component('font-awesome-icon', FontAwesomeIcon);

const socket = io('http://localhost:5005');

Vue.use(VueSocketIOExt, socket, { store })

/* App Mount */
Vue.config.productionTip = false;

new Vue({
  router,
	store,
	render: h => h(App)
}).$mount('#app');
