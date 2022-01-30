// const pushMessageToContent = function (message) {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         const tab = tabs[0]
//         chrome.tab.sendMessage(tab.id, message)
//     })
// }

// document.getElementById('button').addEventListener('click', function() {
//     const count = getCount()
//     pushMessageToContent({type: 'like', count: count})
// })

// const getCount = function() {
//     const input = document.getElementById('count')
//     return parseInt(input.value)
// }

const pushMessageToContent = function (message) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const tab = tabs[0]
      chrome.tabs.sendMessage(tab_id, message)
    })
   }
   
   document.getElementById('button').addEventListener('click', function() {
    const count = getCount()
    pushMessageToContent({type: 'like', count: count}) // ここを変更
   })
   
   const getCount = function () {
    const input = document.getElementById('count')
    return parseInt(input.value)
   }

