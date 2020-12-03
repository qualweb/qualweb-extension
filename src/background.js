
// Background page -- background.js
/*chrome.runtime.onConnect.addListener(function (devToolsConnection) {
    console.log("conected");*/
// assign the listener function to a variable so we can remove it later
let devToolsListener = (msg, sender, response) => {
    console.log("recebida")
    if (msg.type === 'tabIndex') {
        console.log(msg)
        chrome.tabs.get(parseInt(msg.tabId), (tab) => {
            console.log(tab.index);
            console.log("resposta a sair")
            response({ index: tab.index });
        })
    }
    if (msg.type === 'title') {
        console.log(msg)
        chrome.tabs.get(parseInt(msg.tabId), (tab) => {
            console.log(tab.title);
            console.log("title resposta a sair")
            response({ title: tab.title });
        })
    }

    if (msg.type === 'url') {
        console.log(msg)
        chrome.tabs.get(parseInt(msg.tabId), (tab) => {
            console.log(tab.title);
            console.log("title resposta a sair")
            response({ url: tab.url });
        })
    }
    if (msg.type === 'injectScript') {
        chrome.tabs.executeScript(msg.tabId,
            { file: msg.scriptToInject }, (result) => {
                response({ msg });
            });
    }

    return true;
}
chrome.runtime.onMessage.addListener(devToolsListener);



// assign the listener function to a variable so we can remove it later
/*let devToolsListener = function (message, sender, sendResponse) {
    // Inject a content script into the identified tab
    console.log(message);
    chrome.tabs.executeScript(message.tabId,
        { file: message.scriptToInject }, () => {
            response({ result: message.scriptToInject });
        });
    return true;
}
// add the listener
chrome.runtime.onMessage.addListener(devToolsListener);*/

// add the listener


/* devToolsConnection.onDisconnect.addListener(function () {
     devToolsConnection.onMessage.removeListener(devToolsListener);
 });
});*/