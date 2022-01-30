chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    window.alert(message)
})