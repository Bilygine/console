/**
 * Sources Store getters
 */
export const getters = {
  /**
   * Return all sources
   * @returns {Object[]}
   */
  getSources: state => {
    return state.sources;
  },
  /**
   * Return selected source ID
   * @returns {Integer}
   */
  getSelectedSource: state => {
    return state.list.selected;
  },
  /**
   * Returns true if a source is selected
   */
  hasSelectedSource: state => {
    return state.list.selected !== undefined;
  },
  getSourceById: state => {
    return id => state.sources.find(s => s.id === id);
  }
};
