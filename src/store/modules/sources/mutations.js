/**
 * Sources mutations
 */
// import Vue from "vue";
import * as types from "./mutation-types";

export const mutations = {
  /**
   * Type: SET_SOURCES
   * Setter for sources
   */
  [types.SET_SOURCES](state, sources) {
    state.sources = sources;
  },
  /**
   * Add a source to sources state
   * @param {*} state 
   * @param {*} source 
   */
  [types.ADD_SOURCE](state, source) {
    state.sources.push(source)
  },
  /**
   * Update a source
   */
  [types.UPDATE_SOURCE](state, newSource) {
    var index = state.sources.findIndex(source => source.id === newSource.id)
    state.sources.splice(index, 1, newSource)
  },
  /**
   * Delete a source
   * @param {*} state 
   * @param {*} source 
   */
  [types.DELETE_SOURCE](state, source) {
    let id = source.id
    var index = state.sources.findIndex(source => source.id === id)
    state.sources.splice(index, 1)
  },
  /**
   * Type: SET_SELECTED_SOURCE
   * Setter for sources
   */
  [types.SET_SELECTED_SOURCE](state, source) {
    state.list.selected = source;
  }
};
