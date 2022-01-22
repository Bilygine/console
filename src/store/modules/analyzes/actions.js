import * as mtypes from "./mutation-types";
import * as atypes from "./action-types";
/**
 * Analyzes actions
 */

export const actions = {
  
  /**
   * Triggered by socket
   * Response of 'GET_ANALYZES'
   */
  [atypes.SOCKET_RETRIEVE_ANALYZES]: async (store, analyzes) => {
    store.commit(mtypes.SET_ANALYZES, analyzes);
  },
  /**
   * Load all sources
   * @param {*} store
   */
  [atypes.SOCKET_UPDATE_ANALYZE]: async (store, changes)  => {
    //
    let mutation = mtypes.UPDATE_ANALYZE
    let data = changes.new_val
    //
    if (changes.old_val === null) {
      mutation = mtypes.ADD_ANALYZE
    } else if (changes.new_val === null) {
      throw new Error("Analyze seems deleted into rethinkDB");
    }
    //
    store.commit(mutation, data)
  },
};
