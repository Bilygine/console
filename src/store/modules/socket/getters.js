/**
 * RethinkDB Store getters
 */
export const getters = {
  /**
   * Return SocketIO
   * @returns {Object}
   */
  getIO: state => {
    return state.io;
  }
};
