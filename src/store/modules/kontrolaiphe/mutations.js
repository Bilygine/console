/**
 * Results mutations
 */

import * as types from "./mutation-types";

export const mutations = {
  /**
   * Type: SET_RESULTS
   * Setter for results
   */
  [types.SET_RESULTS](state, results) {
    state.results = results;
  },
  /**
   * Type: SET_WORDS
   * Setter for words
   */
  [types.SET_WORDS](state, words) {
    if (words)
      state.words = words.map((e,i) => e = { ...e, "id": i });
  },
};
