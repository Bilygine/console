import Vue from "vue";
import Vuex from "vuex";
// import analyzes from "./modules/analyzes";
import socket from "./modules/socket";
import sources from "./modules/sources";
import analyzes from "./modules/analyzes";
import kontrolaiphe from './modules/kontrolaiphe'
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

/* Vuex: https://vuex.vuejs.org/ */
export default new Vuex.Store({
  modules: {
    analyzes,
    socket,
    sources,
    kontrolaiphe
  },
  strict: debug
});
