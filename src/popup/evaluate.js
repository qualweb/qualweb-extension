async function starEvaluation() {
    return new Promise((resolve, reject) => {
        chrome.devtools.inspectedWindow.eval(
            `starEvaluation()`,
            { useContentScriptContext: true }
            , (response, exception) => {
                //console.log(response);
                //console.log(exception);
                resolve(response);
            })
    });
}

async function evaluateACT() {
    return new Promise((resolve, reject) => {
        chrome.devtools.inspectedWindow.eval(
            'evaluateACT()',
            { useContentScriptContext: true }
            , (response, exception) => {
                // console.log(response);
                // console.log(exception);
                resolve(response);
            })
    });
}

async function evaluateWCAG() {
    return new Promise((resolve, reject) => {
        chrome.devtools.inspectedWindow.eval(
            `evaluateWCAG()`,
            { useContentScriptContext: true }
            , (response, exception) => {
                // console.log(response);
                // console.log(exception);
                resolve(response);
            })
    });
}

function endingEvaluation() {
    return new Promise((resolve, reject) => {
        chrome.devtools.inspectedWindow.eval(
            `endingEvaluation()`,
            { useContentScriptContext: true }
            , async (response) => {
                //console.log(response);
                resolve(response);
            })
    });
}
async function getUrl() {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ type: 'url', tabId: chrome.devtools.inspectedWindow.tabId }, (response) => {
            //console.log("response url" + response.url);
            resolve(response.url);
        })
    });
}

