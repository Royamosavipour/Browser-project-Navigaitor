window.addEventListener('load',()=>{
let userAgent=navigator.userAgent
let userBrowser=null
if (userAgent.match(/edg/i)) {
    userBrowser='edge'
}else if (userAgent.match(/firefox/i)) {
    userBrowser='firefox'
}else if (userAgent.match(/opr/i)) {
    userBrowser='opera'
}else if (userAgent.match(/chrome/i)) {
    userBrowser='chrome'
}else if (userAgent.match(/safari/i)) {
    userBrowser='safari'
}
let userBroserImg=document.querySelector(`.${userBrowser}`)
if (userBroserImg) {
    userBroserImg.style.opacity='1'
}




})