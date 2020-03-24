import * as types from './mutation-types'

export default {
  [types.SETACT](state, payload) {
    state.act = payload
  },
  [types.SETEVAL](state, payload) {
    state.evaluated[payload.module] = payload.value;
  },
  [types.SETBP](state, payload) {
    state.bp = payload
  },
  [types.SETHTML](state, payload) {
    state.html = payload
  },
  [types.SETCSS](state, payload) {
    state.css = payload
  },
  [types.SETSUMMARY](state, payload) {

    state.summary = payload;
  },
  [types.SETFILTER](state, payload) {

    state.filter = payload;
  },
  [types.SETCURRENTRULE](state, payload) {
    console.log(state);
    state.currentRule = payload;
  },
  [types.RESET](state) {
    console.log(state);
    state.evaluated= {};
    state.act = {};
    state.bp={};
    state.html={};
    state.css={};
    state.summary={};
    state.filter = {};
    console.log(state);
  }
}
