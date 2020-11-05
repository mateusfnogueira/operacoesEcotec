import Vue from 'vue'
import Vuex from 'vuex'

import action from './action'
import operations from './modules/operacoes'
import parametro from './modules/pametro'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  action,
  modules: {
    operations,
    parametro
  }
})
