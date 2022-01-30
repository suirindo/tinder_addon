const pushMessageToContent = function (message) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const tab = tabs[0]
      chrome.tabs.sendMessage(tabs[0].id, message)
    })
   }

    const getCount = function () {
    const input = document.getElementById('count')
    return parseInt(input.value)
   }

   document.getElementById('button').addEventListener('click', function() {
    const count = getCount()
    pushMessageToContent({type: 'like', count: count}) 
   })



