export default {
    state: {
        completed: false
    },
    mutations: {
        setCompleted(state, operation) {
            state.completed = operation
        }
    }
}