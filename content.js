const pushLikeBtn = function() {
    document.getElementsByClassName('Bxsh($bxsh-btn)')[4].click()
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === 'like') {
        let count = 0
        const id = setInterval(function (){
            pushLikeBtn()
            count++
            if(count >= message.count) {
                window.alert('終わったよ！')
                clearInterval(id)
             }
        }, 3000)
    }
    })