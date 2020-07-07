let pageStyleSheets = {};
let styleURLs = [];
let title = "";

async function starEvaluation() {
    return new Promise((resolve, reject) => {
        chrome.devtools.inspectedWindow.eval(
            `starEvaluation()`,
            { useContentScriptContext: true }
            , (response, exception) => {
                console.log(response);
                console.log(exception);
                styleURLs = response;
                resolve(response);
            })
    });
}

async function processData(){
    title = await getTitle();
   /* console.log(styleURLs);
    let url = await getUrl();
    console.log(url);
    let page = await getUnprocessedPage(url,styleURLs);
    console.log(page);
    let stylesheets = {};
    for (let csssource of Object.keys(page.css)) {
       
        stylesheets[csssource] = await page.css[csssource];

    }
    let dom = new Dom.Dom()
    console.log(stylesheets);
    console.log(await page.html);
    pageStyleSheets= await dom.getDOM(stylesheets, await page.html)
    pageStyleSheets =pageStyleSheets.stylesheets;*/
}

async function evaluateACT() {
    return new Promise((resolve, reject) => {
        chrome.devtools.inspectedWindow.eval(
            'evaluateACT('/*+JSON.stringify(pageStyleSheets)+*/+')',
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
    return new Promise((resolve, reject) => {
        chrome.devtools.inspectedWindow.eval(
            'evaluateCSS('+JSON.stringify(pageStyleSheets)+')',
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
                console.log(response);
                response.title = title;
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

async function getUnprocessedPage(url,styleURLs) {
    return new Promise((resolve, reject) => {
        chrome.devtools.inspectedWindow.getResources((contents) => {
            let css = {};
            let html;
            for (let content of contents) {
                let urlResource = content.url;
                if (styleURLs.includes(urlResource)) {
                    let value = getResourceContent(content);
                    css[urlResource] = value;
                }

                if (url === urlResource) {
                    console.log("html")
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
            console.log(content);
            resolve(content);
        });
    })
}


