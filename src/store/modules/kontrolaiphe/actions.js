import * as mtypes from "./mutation-types";
import * as atypes from "./action-types";
/**
 * Results actions
 */

export const actions = {
  
  /**
   * Triggered by socket
   * Response of 'SEARCH_SOURCE'
   */
  [atypes.SOCKET_RETRIEVE_SOURCES_SEARCH]: async (store, results) => {
    store.commit(mtypes.SET_RESULTS, results);
  },

  /**
   * Triggered by socket
   * Response of 'SEARCH_SOURCE'
   */
  [atypes.SOCKET_RETRIEVE_WORDS_SEARCH]: async (store, words) => {
    store.commit(mtypes.SET_WORDS, words);
  },
};
