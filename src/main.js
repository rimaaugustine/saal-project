import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import Search from './Search.vue';
import Home from './Home.vue';
import Signup from './Signup.vue';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'


Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.component('app-footer', Footer);
Vue.component('app-navbar', Navbar);
Vue.component('app-search', Search );

const routes = [
  {path: '/', component: Home },
  {path: '/signup', component: Signup }
];

const router = new VueRouter( {
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
