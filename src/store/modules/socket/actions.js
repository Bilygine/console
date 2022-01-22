import * as atypes from "./action-types";
import Vue from 'vue';
/**
 * RethinkDB actions
 */

export const actions = {
  /**
   * Send a get_sources
   * @param {*} store
   */
  [atypes.GET_SOURCES]: async () => {
    Vue.prototype.$socket.emit('get_sources')
  },
  /**
   * Send a get_analyzes
   * @param {*} store
   */
  [atypes.GET_ANALYZES]: async () => {
    Vue.prototype.$socket.emit('get_analyzes')
  },
  /**
   * Send a search of sources
   * @param {*} store
   * @param {*} text
   */
  [atypes.SEARCH_SOURCES]: async (store, text) => {
    Vue.prototype.$socket.emit('search_sources', text);
  },
   /**
   * Send a search of occurences trough a source
   * @param {*} store
   * @param {*} text
   */
  [atypes.SEARCH_OCCURENCES]: async (store, payload) => {
    Vue.prototype.$socket.emit('search_words', payload);
  }
};
