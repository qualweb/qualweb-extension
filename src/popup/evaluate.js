let browser, currentPage, summary;

async function starEvaluation() {
    const puppeteer = require('puppeteer');
    // let cssArray = await getCSS(); // nao esquecer de fazer await
    browser = await puppeteer.connect({ browserURL: 'http://127.0.0.1:9222', defaultViewport: null });
    let pages = await browser.pages();
    let title = await getTitle();
    let url = await getUrl();
    summary = { passed: 0, failed: 0, warning: 0, inapplicable: 0, title: title };
    let act, html, css, bp, actResult, htmlResult, cssResult, bpResult;
    for (let page of pages) {
        if (await page.url() === url)
            currentPage = page;
    }
}

async function evaluateACT() {
    let act, actResult, result;
    act = new ACTRules.ACTRules();
    actResult = await act.execute({}, currentPage, []);
    addValuesToSummary(summary, actResult);
    console.log(summary);
    result = actResult.rules;
    return result;
}

async function evaluateHTML() {
    let html, htmlResult, result;
    html = new HTMLTechniques.HTMLTechniques();
    htmlResult = await html.execute(currentPage);
    console.log(htmlResult);
    addValuesToSummary(summary, htmlResult);
    result = htmlResult["techniques"];
    return result;
}

async function evaluateBP() {
    let bp, bpResult, result;
    bp = await new BestPractices.BestPractices();
    bpResult = await bp.execute(currentPage)
    addValuesToSummary(summary, bpResult);
    result = bpResult["best-practices"];
    return result;
}

async function evaluateCSS() {
    //TODO
}

async function endingEvaluation(){
    browser.disconnect();
    return summary;
}


async function evaluate(actEval, htmlEval, cssEval, bpEval) {
    console.log("act" + actEval);
    console.log("html" + htmlEval);
    console.log("css" + cssEval);
    console.log("bp" + bpEval)
    const puppeteer = require('puppeteer');
    let cssArray = await getCSS(); // nao esquecer de fazer await
    let browser = await puppeteer.connect({ browserURL: 'http://127.0.0.1:9222', defaultViewport: null });
    let pages = await browser.pages();
    let title = await getTitle();
    let url = await getUrl();
    let act, html, css, bp, actResult, htmlResult, cssResult, bpResult;
    let currentPage;

    for (let page of pages) {
        if (await page.url() === url)
            currentPage = page;
    }

    let summary = { passed: 0, failed: 0, warning: 0, inapplicable: 0, title: title };
    let result = { act: null, html: null, css: null, bp: null, summary: null };
    if (actEval) {
        act = new ACTRules.ACTRules();
        actResult = await act.execute({}, currentPage, []);
        addValuesToSummary(summary, actResult);
        console.log(summary);
        result.act = actResult.rules;
        console.log(actResult);
    } if (htmlEval) {
        html = new HTMLTechniques.HTMLTechniques();
        htmlResult = await html.execute(currentPage);
        console.log(htmlResult);
        addValuesToSummary(summary, htmlResult);
        result.html = htmlResult["techniques"];

    } if (cssEval) {
        //TODO

    } if (bpEval) {
        bp = await new BestPractices.BestPractices();
        bpResult = await bp.execute(currentPage)
        addValuesToSummary(summary, bpResult);
        result.bp = bpResult["best-practices"];

    }
    browser.disconnect();
    result.summary = summary
    console.log(result);
    return result;


}

function addValuesToSummary(summary, report) {
    summary.passed += report.metadata.passed;
    summary.failed += report.metadata.failed;
    summary.warning += report.metadata.warning;
    summary.inapplicable += report.metadata.inapplicable;
}

async function getIndex() {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ type: 'tabIndex', tabId: chrome.devtools.inspectedWindow.tabId }, (response) => {
            console.log("response " + response);
            resolve(response.index);
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

async function getUrl() {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ type: 'url', tabId: chrome.devtools.inspectedWindow.tabId }, (response) => {
            console.log("response url" + response.url);
            resolve(response.url);
        })
    });
}


async function getCSS() {
    return new Promise((resolve, reject) => {
        chrome.devtools.inspectedWindow.getResources((contents) => {
            let cssArray = [];
            for (let content of contents) {
                let url = content.url;
                if (url.substring(url.length - 4, url.length) === ".css") {
                    let value = getResourceContent(content);
                    cssArray.push(value);
                }
            }
            resolve(cssArray);
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