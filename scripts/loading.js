var body = document.querySelector("body")

var loadingDiv = document.getElementById("loading")
var loadingOne = document.getElementById("loading-one")
var loadingTwo = document.getElementById("loading-two")
var loadingText = document.getElementById("loading-text")

var menuDiv = document.getElementById("menu")
var presentationDiv = document.getElementById("presentation")
var projectsDiv = document.getElementById("projects")
var languageDiv = document.getElementById("language")

function adjustDOM(timeout) {
  setTimeout(() => {
    loadingDiv.remove()
    body.classList.remove("hide-overflow")
  }, timeout);
}

function loadingPageAnimation() {
  let adjustDOMTimeout = 0;

  if(typeof(Storage) !== "undefined" && (!localStorage.getItem("loaded") == "true" || localStorage.getItem("loaded") == null)) {
    loadingDiv.classList.remove("hide-div")
    adjustDOMTimeout = 3250

    setTimeout(() => {
      loadingOne.style.width = 0
      loadingTwo.style.width = 0
      loadingText.style.opacity = 0
    }, 2000);
    
    localStorage.setItem("loaded", "true") 
  }
  
  adjustDOM(adjustDOMTimeout)
}

function loadComponentsAnimation() {  
  setTimeout(() => {
    menuDiv.style.transform = "translate(0,0)"

    projectsDiv.style.transform = "rotate(-2deg) translate(0,0)"
    projectsDiv.style.opacity = 1

    presentationDiv.style.transform = "translate(0,0)"
    presentationDiv.style.opacity = 1

    languageDiv.style.left = "0px"
  }, 2000);

}

loadComponentsAnimation();
loadingPageAnimation();