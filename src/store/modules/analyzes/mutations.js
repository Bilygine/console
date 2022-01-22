/**
 * Analyzes mutations
 */

import * as types from "./mutation-types";

export const mutations = {
  /**
   * Type: SET_ANALYZES
   * Setter for analyzes
   */
  [types.SET_ANALYZES](state, analyzes) {
    state.analyzes = analyzes;
  },
  /**
   * Add an analyze to analyzes state
   * @param {*} state 
   * @param {*} analyze 
   */
  [types.ADD_ANALYZE](state, analyze) {
    state.analyzes.push(analyze)
  },
  /**
   * Update an analyze
   */
  [types.UPDATE_ANALYZE](state, newAnalyze) {
    var index = state.analyzes.findIndex(analyze => analyze.id === newAnalyze.id)
    state.analyzes.splice(index, 1, newAnalyze)
  },
};
