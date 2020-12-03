async function starEvaluation() {
    console.log("injecting scripts")
    await injectScripts("content");
    await injectScripts("act");
    await injectScripts("wcag");
    await injectScripts("qwPage");
    console.log("fim")


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
                //console.log(response);
                //console.log(exception);
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
                console.log(response);
                console.log(exception);
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

async function getTitle() {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ type: 'title', tabId: chrome.devtools.inspectedWindow.tabId }, (response) => {
            console.log("response title" + response.title);
            resolve(response.title);
        })
    });
}
async function injectScripts(scriptToInject) {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({
            type: 'injectScript',
            tabId: chrome.devtools.inspectedWindow.tabId,
            scriptToInject: scriptToInject + ".js"
        }, (response, exception) => {
            console.log(response);
            console.log(exception);
            resolve(response);
        })
    });
}

