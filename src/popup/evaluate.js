async function starEvaluation() {
    return new Promise((resolve, reject) => {
        chrome.devtools.inspectedWindow.eval(
            `starEvaluation()`,
            { useContentScriptContext: true }
            , (response,exception) => {
                console.log(response);
                console.log(exception);
                resolve(response);
            })
    });
}

async function evaluateACT() {
    return new Promise((resolve, reject) => {
        chrome.devtools.inspectedWindow.eval(
            `evaluateACT()`,
            { useContentScriptContext: true }
            , (response,exception) => {
                console.log(response);
                console.log(exception);
                resolve(response);
            })
    });
}

async function evaluateHTML() {
    return new Promise((resolve, reject) => {
        chrome.devtools.inspectedWindow.eval(
            `evaluateHTML()`,
            { useContentScriptContext: true }
            , (response,exception) => {
                console.log(response);
                console.log(exception);
                resolve(response);
            })
    });
}

async function evaluateBP() {
    return new Promise((resolve, reject) => {
        chrome.devtools.inspectedWindow.eval(
            `evaluateBP()`,
            { useContentScriptContext: true }
            , (response,exception) => {
                console.log(response);
                console.log(exception);
                resolve(response);
            })
    });
}

function evaluateCSS() {
    /*cssResult = chrome.devtools.inspectedWindow.eval(
        ` evaluateCSS()`,
        { useContentScriptContext: true }
      ); */
}

function endingEvaluation() {
    return new Promise((resolve, reject) => {
        chrome.devtools.inspectedWindow.eval(
            `endingEvaluation()`,
            { useContentScriptContext: true }
            , async (response) => {
                console.log(response);
                response.title = await getTitle();
                resolve(response);
            })
    });
}
async function getUrl() {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ type: 'url', tabId: chrome.devtools.inspectedWindow.tabId }, (response) => {
            console.log("response url" + response.url);
            resolve(response.url);
        })
    });
}
async function getTitle() {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ type: 'title', tabId: chrome.devtools.inspectedWindow.tabId }, (response) => {
            console.log("response title" + response.title);
            resolve(response.title);
        })
    });
}

