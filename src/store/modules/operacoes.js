export default {
  namespaced: true,
  state: {
    operations: []
  },
  mutations: {
      addOperacao(state, operation) {
          state.operations.push(operation)
      },
      delOperacao(state, operation) {
          state.operations.splice(operation, 1)
      },
      updOperacao(state, operation) {
          state.operations[operation].completed = !state.operations[operation].completed;
      }
  },
  actions: {
      addOperacao({ commit }, operation) {
          commit("addOperacao", operation)
      },
      delOperacao({ commit }, operation) {
          commit("delOperacao", operation)
      },
      updOperacao({ commit }, operation) {
          commit("updOperacao", operation)
      }
  }
}
