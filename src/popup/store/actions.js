import * as types from './mutation-types';

export const setReport = (async function ({ commit },modules) {
  let report = await evaluate(modules.act, modules.html, modules.css, modules.bp);
  
  commit(types.SETACT, report.act);
  commit(types.SETHTML, report.html);
  commit(types.SETBP, report.bp);
  commit(types.SETCSS, report.css);
  commit(types.SETSUMMARY, report.summary);
  commit(types.SETEVAL, modules);
  commit(types.SETFILTER, "all outcomes");

});

export const setCurrentRule = ({ commit }, payload) => {
  commit(types.SETCURRENTRULE, payload)
}

export const setACT = ({ commit }, payload) => {
  commit(types.SETACT, payload)
}
export const setHTML = ({ commit }, payload) => {
  commit(types.SETHTML, payload)
}
export const setBP = ({ commit }, payload) => {
  commit(types.SETBP, payload)
}
export const setCSS = ({ commit }, payload) => {
  commit(types.SETCSS, payload)
}
export const setSummary = ({ commit }, payload) => {
  commit(types.SETSUMMARY, payload)
}
export const setEvaluated = ({ commit }, payload) => {
  commit(types.SETEVAL, payload)
}
export const setFilter = ({ commit }, payload) => {
  commit(types.SETFILTER, payload)
}

export const reset = ({ commit }) => {
  commit(types.RESET)
}

