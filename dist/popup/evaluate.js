async function starEvaluation() {
  return new Promise((resolve, reject) => {
    chrome.devtools.inspectedWindow.eval(
      `starEvaluation()`, { useContentScriptContext: true }, (response, exception) => {
        //window.console.log("response:", response);
        //window.console.log("exception:", exception);
        resolve(response);
      })
  });
}

async function evaluateACT() {
  return new Promise((resolve, reject) => {
    chrome.devtools.inspectedWindow.eval(
      'evaluateACT()', { useContentScriptContext: true }, (response, exception) => {
        window.console.log("evaluateACT", response);
        window.console.log("evaluateACT", exception);
        resolve(response);
      })
  });
}

async function evaluateWCAG() {
  return new Promise((resolve, reject) => {
    chrome.devtools.inspectedWindow.eval(
      `evaluateWCAG()`, { useContentScriptContext: true }, (response, exception) => {
        window.console.log("evaluateWCAG", response);
        window.console.log("evaluateWCAG", exception);
        resolve(response);
      })
  });
}

function endingEvaluation() {
  return new Promise((resolve, reject) => {
    chrome.devtools.inspectedWindow.eval(
      `endingEvaluation()`, { useContentScriptContext: true }, async(response) => {
        window.console.log("endingEvaluation", response);
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