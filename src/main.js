import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "./plugins/vuetify";
import router from "@/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faVideo,
  faPlus,
  faPlay,
  faTimes,
  faTachometerAlt,
  faPlayCircle,
  faCogs,
  faDownload,
  faCheck,
  faTrashAlt,
  faExclamationCircle,
  faUpload,
  faQuestionCircle,
  faCog,
  faSearch,
  faClock,
  faBoxes
} from "@fortawesome/free-solid-svg-icons/";
import store from "@/store";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; //Vuesax styles
import VueSocketIO from 'vue-socket.io';
import VueYoutube from 'vue-youtube'


const BRIDGE_SERVER = process.env.VUE_APP_BRIDGE_SERVER || 'http://localhost:5005';

Vue.use(new VueSocketIO({
  debug: process.env.NODE_ENV !== 'production',
  connection: BRIDGE_SERVER,
  vuex: {
      store,
      actionPrefix: 'SOCKET_'
  }
}))

Vue.use(Vuesax);
library.add(
  faPlus,
  faVideo,
  faPlay,
  faTimes,
  faTachometerAlt,
  faPlayCircle,
  faCogs,
  faDownload,
  faCheck,
  faTrashAlt,
  faExclamationCircle,
  faUpload,
  faQuestionCircle,
  faCog,
  faSearch,
  faClock,
  faBoxes
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(Vuetify);
Vue.config.productionTip = false;
Vue.use(VueYoutube)

/**
 * Temporary hashcode
 * 
 * @see http://stackoverflow.com/q/7616461/940217
 * @return {number}
 */
String.prototype.hashCode = function(){
  if (Array.prototype.reduce){
      return this.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
  } 
  var hash = 0;
  if (this.length === 0) return hash;
  for (var i = 0; i < this.length; i++) {
      var character  = this.charCodeAt(i);
      hash  = ((hash<<5)-hash)+character;
      hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

localStorage.clear()

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount("#app");

