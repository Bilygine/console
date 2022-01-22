/**
 * Analyzes Store getters
 */
export const getters = {
  /**
   * Return all analyzes by specified source_id
   * @returns {Object[]}
   */
  getAnalyzesBySourceId: state => {
    return source_id => state.analyzes.filter(analyze =>{
      return analyze.source_id === source_id
    })
  },
};
