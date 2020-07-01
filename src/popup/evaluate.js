let pageStyleSheets = {};

async function starEvaluation() {
    let url = await getUrl();
    let page = await getUnprocessedPage(url);
    console.log(await page.html);
    let stylesheets = {};
    for (let csssource of Object.keys(page.css)) {
        console.log(csssource);
        console.log(await page.css[csssource]);
        stylesheets[csssource] = await page.css[csssource];

    }
    let dom = new Dom.Dom()
    pageStyleSheets= await dom.getDOM(stylesheets, await page.html)
    pageStyleSheets = JSON.stringify(pageStyleSheets.stylesheets);
    console.log(`evaluateACT('${pageStyleSheets}' )`);
    return new Promise((resolve, reject) => {
        chrome.devtools.inspectedWindow.eval(
            `starEvaluation()`,
            { useContentScriptContext: true }
            , (response, exception) => {
                console.log(response);
                console.log(exception);
                resolve(response);
            })
    });
}

async function evaluateACT() {
    return new Promise((resolve, reject) => {
        chrome.devtools.inspectedWindow.eval(
            `evaluateACT('${pageStyleSheets}')`,
            { useContentScriptContext: true }
            , (response, exception) => {
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
            , (response, exception) => {
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
            , (response, exception) => {
                console.log(response);
                console.log(exception);
                resolve(response);
            })
    });
}

async function evaluateCSS() {
    const cssTechniques = new CSSTechniques.CSSTechniques();
    let report = await cssTechniques.execute(pageStyleSheets);
    console.log(report);
    return report;
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

async function getUnprocessedPage(url) {
    return new Promise((resolve, reject) => {
        chrome.devtools.inspectedWindow.getResources((contents) => {
            let css = {};
            let html;
            for (let content of contents) {
                let urlResource = content.url;
                if (urlResource.substring(urlResource.length - 4, urlResource.length) === ".css") {
                    let value = getResourceContent(content);
                    css[urlResource] = value;
                }

                if (url === urlResource) {
                    html = getResourceContent(content)
                }
            }
            resolve({ css, html });
        });
    })
}


async function getResourceContent(content) {
    return new Promise((resolve, reject) => {
        content.getContent((content, encoding) => {
            resolve(content);
        });
    })
}


