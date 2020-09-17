export const getAllRulesFromModule = state => module => state[module]
export const getRuleWithCode = (state) => (code, module) => state[module][code]
export const getEvaluated = (state) => state["evaluated"]
export const getCurrentRule = (state) => {
    let resultNumber = getResultNumber(state);
    state.resultFilter = { passed: resultNumber.passed > 0, failed: resultNumber.failed > 0, warning: resultNumber.warning > 0, inapplicable: resultNumber.inapplicable > 0 }
    let currentRule = state.currentRule;
    let currentRuleData = state[currentRule.module][currentRule.code];
    let filter = state["filter"];
    let outcome = currentRuleData ["metadata"]["outcome"];
    let module = currentRule.module;
    if(filter[outcome] && filter[module]){
        return currentRuleData;
    }else{
        return null;
    }

}
export const getCurrentRuleResults = (state) => {
    let currentRule = state.currentRule;
    let rule = state[currentRule.module][currentRule.code];
    let filter = state.resultFilter;
    let results = rule.results;
    let newResults = [];
    for (let result of results) {
        if (filter[result.verdict]) {
            newResults.push(result);
        }
    }
    console.log(newResults)
    console.log("newResults")
    return newResults;
}

export const getResultNumber = (state) => {
    let currentRule = state.currentRule;
    let results = state[currentRule.module][currentRule.code].results;
    let resultNumber = { passed: 0, failed: 0, warning: 0, inapplicable: 0 }
    for (let result of results) {
        resultNumber[result.verdict]++;
    }
    return resultNumber;
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
export const getResultFilter = (state) => state.resultFilter
export const getFilter = (state) => state.filter
export const getHighlightActive = (state) => state.highlightActive
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

