var body = document.querySelector("body")

var loadingDiv = document.getElementById("loading")
var loadingOne = document.getElementById("loading-one")
var loadingTwo = document.getElementById("loading-two")
var loadingText = document.getElementById("loading-text")

if (typeof(Storage) !== "undefined") {
  // Code for localStorage/sessionStorage.
} else {
  // Sorry! No Web Storage support..
}

function adjustDOM(timeout) {
  setTimeout(() => {
    loadingDiv.remove()
    body.classList.remove("hide-overflow")
  }, timeout);
}

function loadingAnimation() {
  let adjustDOMTimeout = 0;
  
  if(!localStorage.getItem("loaded") == "true" || localStorage.getItem("loaded") == null) {
    adjustDOMTimeout = 4250
    console.log("Hi!")
    setTimeout(() => {
      loadingOne.style.width = 0
      loadingTwo.style.width = 0
      loadingText.style.opacity = 0
    }, 3000);
    
    localStorage.setItem("loaded", "true") 
  }
  
  adjustDOM(adjustDOMTimeout)
}

loadingAnimation();