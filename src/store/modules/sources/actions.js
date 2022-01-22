import * as mtypes from "./mutation-types";
import * as atypes from "./action-types";
import axios from 'axios';

/**
 * Sources actions
 */

var instance = axios.create({
  baseURL: process.env.VUE_APP_API_SERVER || "http://localhost:8181",
});

 
export const actions = {
  /**
   * Load all sources
   * @param {*} store
   */
  [atypes.SOCKET_RETRIEVE_SOURCES]: async (store, sources)  => {
    store.commit(mtypes.SET_SOURCES, sources);
  },
  /**
   * Load all sources
   * @param {*} store
   */
  [atypes.SOCKET_UPDATE_SOURCE]: async (store, changes)  => {
    //
    let mutation = mtypes.UPDATE_SOURCE
    let data = changes.new_val
    //
    if (changes.old_val === null) {
      mutation = mtypes.ADD_SOURCE
    } else if (changes.new_val === null) {
      mutation = mtypes.DELETE_SOURCE
      data = changes.old_val
    }
    store.commit(mutation, data)
  },
  /**
   * Add source
   * @param {*} store
   * @param {Object} source
   */
  [atypes.REGISTER_SOURCE]: (store, source) => {
    instance.post("/api/source", source)
  },
  /**
   * Delete source
   * @param {*} store
   * @param {Object} source
   */
  [atypes.DELETE_SOURCE]: (store, source) => {
    instance.delete("/api/source/" + source.id)
  }
};
