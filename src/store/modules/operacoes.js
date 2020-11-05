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
        },
        setNavio(state, ship) {
            state.operations = ship.operacaoNavio ? ship.operacaoNavio : []
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
        },
        operacaoNavio(state, getters) {
            return state.operations.map(operation => {
                const record = getters.operations.find(element => element.id == operation.id)
                return {
                    id: operation.id,
                    os: record.os,
                    navio: record.navio,
                    cliente: record.cliente,
                    mercadoria: record.mercadoria,
                    terminal: record.terminal,
                    quantia: record.quantia,
                    tipo: record.tipo,
                    marca: record.marca,
                    responsavel: record.responsavel,
                    dosagem: record.dosagem,
                    metodo: record.metodo,
                    tempo: record.tempo,
                    destino: record.destino,
                    agencia: record.agencia,
                    eta: record.eta,
                    inspetora: record.inspetora,
                    despachante: record.despachante,
                    completed: record.completed,
                }
            })
        },

    }
}
