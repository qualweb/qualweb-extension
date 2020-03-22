import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export const defaultState = {
  summary: {},
  evaluated: {},
  filter: {},
  act: {},
  currentRule: {}
}


export default new Vuex.Store({
  state: {
    summary: {},
    evaluated: {},
    filter: {},
    act: {},
    currentRule: {}

  },
  getters,
  mutations,
  actions
})
