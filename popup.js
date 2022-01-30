const pushMessageToContent = function (message) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const tab = tabs[0]
        chrome.tabs.sendMessage(tab.id, message)
    })
}

pushMessageToContent('メッセージだとよ')