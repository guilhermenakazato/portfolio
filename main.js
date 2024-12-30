var loadingDiv = document.getElementById("loading")
var loadingOne = document.getElementById("loading-one")
var loadingTwo = document.getElementById("loading-two")
var loadingText = document.getElementById("loading-text")

setTimeout(() => {
  loadingOne.style.width = 0
  loadingTwo.style.width = 0
  loadingText.style.opacity = 0
}, 3000) 

setTimeout(() => {
  loadingDiv.remove()
}, 4250); 