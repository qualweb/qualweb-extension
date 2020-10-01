let selectorToStyle = {};
let summary, currentPage;

function starEvaluation() {
    currentPage = new QWPage.QWPage(document, window, true);
    summary = { passed: 0, failed: 0, warning: 0, inapplicable: 0, title: document.title };
}

function evaluateACT() {
    let act, actResult, result;
    act = new ACTRules.ACTRules();
    let start = Date.now();
    console.log("Starting evaluation" + start);
    actResult = act.execute([], currentPage, []);
    console.log("Ending evaluation act" + Math.floor((start - Date.now()) / 1000));
    addValuesToSummary(summary, actResult);
    console.log(summary);
    result = actResult.assertions;
    return result;
}

function evaluateWCAG() {
    let html, htmlResult, result;
    html = new WCAGTechniques.WCAGTechniques();
    let start = Date.now();
    console.log("Starting evaluation" + start);
    htmlResult = html.execute(currentPage, false, {});
    console.log("Ending evaluation WCAG" + Math.floor((start - Date.now()) / 1000));
    console.log(htmlResult);
    addValuesToSummary(summary, htmlResult);
    result = htmlResult.assertions;
    return result;
}

function endingEvaluation() {
    currentPage.cleanAllElements();
    return summary;
}
function addValuesToSummary(summary, report) {
    summary.passed += report.metadata.passed;
    summary.failed += report.metadata.failed;
    summary.warning += report.metadata.warning;
    summary.inapplicable += report.metadata.inapplicable;
}


function highlightElement(elements) {
    for (let elementResult of elements) {
        let selector = elementResult.pointer;
        let element = document.querySelector(selector);
        element.scrollIntoView();
        let style = {border:element.style.border,outline: element.style.outline, borderRadius:element.style.borderRadius}
        selectorToStyle[selector] = style;
        element.style.border = "1px dashed white";
        element.style.borderRadius = "0px";
        element.style.outline = "1px dashed black";
    }

}

function turnOffhighlightElement(elements) {
    for (let elementResult of elements) {
        let selector = elementResult.pointer;
        let element = document.querySelector(selector);
        let style =  selectorToStyle[selector];
        element.style.border = style.border;
        element.style.borderRadius =  style.borderRadius;
        element.style.outline = style.outline;
        selectorToStyle[selector]={};
    }
}

