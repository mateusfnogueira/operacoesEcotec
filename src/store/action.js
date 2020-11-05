import Vue from 'vue'

export default {
    loadNavio({ commit }) {
        Vue.prototype.$http('operacaoNavio.json').then(resp => {
            const data = resp.data
            if(data) {
                commit('setNavio', {
                    operations: data.operations
                })
            }
        })
    }
}