/**
 * Results Store getters
 */
export const getters = {
  /**
   * Return all results
   * @returns {Object[]}
   */
  getResults: state => {
    return state.results
  },
  /**
   * Return all words
   * @returns {Object[]}
   */
  getWords: state => {
    return state.words
  },
};
