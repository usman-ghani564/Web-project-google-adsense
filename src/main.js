import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import shareIt from "vue-share-it";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAV1UrnOtHLCZNBEAHRQKbye5AO8MUGNfU",
    libraries: "places",
  },
});

Vue.use(shareIt);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
