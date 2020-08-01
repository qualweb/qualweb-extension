let borderStyle = "";
let outlineStyle = "";
let borderRadiusStyle = "";
let summary, currentPage;

function starEvaluation() {
    currentPage = new QWPage.QWPage(document, window,true);
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

function evaluateHTML() {
    let html, htmlResult, result;
    html = new HTMLTechniques.HTMLTechniques();
    let start = Date.now();
    console.log("Starting evaluation" + start);
    htmlResult = html.execute(currentPage, false, {});
    console.log("Ending evaluation html" + Math.floor((start - Date.now()) / 1000));
    console.log(htmlResult);
    addValuesToSummary(summary, htmlResult);
    result = htmlResult.assertions;
    return result;
}

function evaluateBP() {
    let bp, bpResult, result;
    bp = new BestPractices.BestPractices();
    let start = Date.now();
    console.log("Starting evaluation" + start);
    bpResult = bp.execute(currentPage)
    console.log("Ending evaluation bp" + Math.floor((start - Date.now()) / 1000));
    addValuesToSummary(summary, bpResult);
    result = bpResult.assertions;
    return result;
}

async function evaluateCSS() {
    const cssTechniques = new CSSTechniques.CSSTechniques();
    let report = await cssTechniques.execute();
    addValuesToSummary(summary, report);
    console.log(report);
    return report.assertions;
}

function endingEvaluation() {
    return summary;
}
function addValuesToSummary(summary, report) {
    summary.passed += report.metadata.passed;
    summary.failed += report.metadata.failed;
    summary.warning += report.metadata.warning;
    summary.inapplicable += report.metadata.inapplicable;
}


function highlightElement(selector) {
    let element = document.querySelector(selector);
    borderStyle = element.style.border;
    outlineStyle = element.style.outline;
    borderRadiusStyle = element.style.borderRadius;
    element.style.border = "1px dashed white";
    element.style.borderRadius = "0px";
    element.style.outline = "1px dashed black";

}

function turnOffhighlightElement(selector) {
    let element = document.querySelector(selector);
    element.style.border = borderStyle;
    element.style.borderRadius = borderRadiusStyle;
    element.style.outline = outlineStyle;
}

