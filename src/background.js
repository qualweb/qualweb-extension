
// Background page -- background.js
/*chrome.runtime.onConnect.addListener(function (devToolsConnection) {
    console.log("conected");*/
// assign the listener function to a variable so we can remove it later
let devToolsListener = (msg, sender, response) => {
    // console.log("recebida")
    if (msg.type === 'tabIndex') {
        // console.log(msg)
        chrome.tabs.get(parseInt(msg.tabId) , (tab) => {
            // console.log(tab.index);
            // console.log("resposta a sair")
            response({index:tab.index});
        })
    }
    if (msg.type === 'title') {
        // console.log(msg)
        chrome.tabs.get(parseInt(msg.tabId) , (tab) => {
            // console.log(tab.title);
            // console.log("title resposta a sair")
            response({title:tab.title});
        })
    }

    if (msg.type === 'url') {
        // console.log(msg)
        chrome.tabs.get(parseInt(msg.tabId) , (tab) => {
            // console.log(tab.title);
            // console.log("title resposta a sair")
            response({url:tab.url});
        })
    }
    return true;
}
// add the listener
chrome.runtime.onMessage.addListener(devToolsListener);

/* devToolsConnection.onDisconnect.addListener(function () {
     devToolsConnection.onMessage.removeListener(devToolsListener);
 });
});*/