export const getAllRulesFromModule = state => module => state[module]
export const getRuleWithCode = (state) => (code, module) => state[module][code]
export const getEvaluated = (state) => state["evaluated"]
export const getCurrentRule = (state) => {
    let currentRule = state.currentRule;
    return state[currentRule.module][currentRule.code];
}
export const getAllRuleCodeAndTitle = (state) => {
    let modules = Object.keys(state["evaluated"]);
    let evaluated = state["evaluated"];
    let filter = state["filter"];
    let keys, ruleOutcome;
    let rules = [];
    let value, moduleState;
    for (let module of modules) {
        if (evaluated[module] && filter[module]) {
            keys = Object.keys(state[module]);
            moduleState = state[module];
            for (let key of keys) {
                value = moduleState[key];
                ruleOutcome = value["metadata"]["outcome"];
                if (filter[ruleOutcome])
                    rules.push({ title: value["name"], code: value["code"], outcome: value["metadata"]["outcome"], module: module });
            }
        }
    }
    return rules;
}
export const getFirstRule = (state) => {
    console.log(state);
    let modules = Object.keys(state["evaluated"]);
    let evaluated = state["evaluated"];
    let filter = state["filter"];
    let keys;
    let value, moduleState, result;
    let done = false;
    let index, ruleOutcome;
    for (let module of modules) {
        index = 0;
        if (evaluated[module] && filter[module]) {
            keys = Object.keys(state[module]);
            moduleState = state[module];
            while (!done && index < keys.length) {
                value = moduleState[keys[index]];
                ruleOutcome = value["metadata"]["outcome"];
                if (filter[ruleOutcome]) {
                    result = { code: value["code"], module: module };
                    done = true;
                }
                index++;
            }
        }

    }

    return result;
}

export const getFilter = (state) => state.filter
export const getSummary = (state) => state.summary
export const getAllData = (state) => {
    return {
        summary: state.summary,
        act: state.act,
        bp: state.bp,
        html: state.html,
        css: state.css
    }
}

