var body = document.querySelector("body")

var loadingDiv = document.getElementById("loading")
var loadingOne = document.getElementById("loading-one")
var loadingTwo = document.getElementById("loading-two")
var loadingText = document.getElementById("loading-text")

function adjustDOM(timeout) {
  setTimeout(() => {
    loadingDiv.remove()
    body.classList.remove("hide-overflow")
  }, timeout);
}

function loadingAnimation() {
  let adjustDOMTimeout = 0;

  if(typeof(Storage) !== "undefined" && (!localStorage.getItem("loaded") == "true" || localStorage.getItem("loaded") == null)) {
    loadingDiv.classList.remove("hide-div")
    adjustDOMTimeout = 4250

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