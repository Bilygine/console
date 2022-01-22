/**
 * RethinkDB mutations
 */
// import Vue from "vue";
import * as types from "./mutation-types";

export const mutations = {
  /**
   * Type: SET_SOCKETIO
   * Setter for socketio
   */
  [types.SET_SOCKETIO](state, io) {
    state.io = io;
  }
};
