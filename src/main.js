import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routes from './routes';
import store from './store';
import VueGeolocation  from 'vue-browser-geolocation';
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueGeolocation);
import VuePlaceAutocomplete from 'vue-place-autocomplete';
Vue.use(VuePlaceAutocomplete);
import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
  load: {
    key:"AIzaSyATvHmZt7QC4zwv64tWXhRvE9V6x_QuYzw"
  }

});

  const router = new VueRouter({
    mode:'history',
   routes: Routes
   
});
Vue.config.productionTip = false;

new Vue({
  store,
  router: router,
  el: "#app",
  render: h => h(App),
}).$mount('#app');
