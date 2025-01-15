var body = document.querySelector("body")

var loadingDiv = document.getElementById("loading")
var loadingOne = document.getElementById("loading-one")
var loadingTwo = document.getElementById("loading-two")
var loadingText = document.getElementById("loading-text")

var languageDiv = document.getElementById("language")
var menuDiv = document.getElementById("menu")
var presentationDiv = document.getElementById("presentation")
var projectsDiv = document.getElementById("projects")

function adjustDOM(timeout) {
  setTimeout(() => {
    loadingDiv.remove()
    body.classList.remove("hide-overflow")
  }, timeout);
}

function startAnimations() {
  let adjustDOMTimeout = 0;
  let animationShouldPlay = typeof(Storage) !== "undefined" && (!localStorage.getItem("loaded") == "true" || localStorage.getItem("loaded") == null)
  let componentStartTimeout = 0, componentEndTimeout = 0 

  if(animationShouldPlay) {
    adjustDOMTimeout = loadPageAnimation();
    componentStartTimeout = 2000
    componentEndTimeout = componentStartTimeout + 2000
  }
  
  loadComponentsAnimation(componentStartTimeout, componentEndTimeout)
  adjustDOM(adjustDOMTimeout)
}

function loadPageAnimation() {
  let newTimeout = 3250
  loadingDiv.classList.remove("hide-div")

  setTimeout(() => {
    loadingOne.style.width = 0
    loadingTwo.style.width = 0
    loadingText.style.opacity = 0
  }, 2000);
  
  localStorage.setItem("loaded", "true") 

  return newTimeout
}

function loadComponentsAnimation(startAnimationTimeout, endAnimationTimeout) {
  setTimeout(() => {
    projectsDiv.style.transition = "0s"
    presentationDiv.style.transition = "0s"
    menuDiv.style.transition = "0s"

    if(endAnimationTimeout == 0) {
      languageDiv.style.transition = "0s"

      setTimeout(() => {
        languageDiv.style.transition = "0.4s"
      }, 100);
    } else {
      languageDiv.style.transition = "0.4s"
    }
  }, endAnimationTimeout); 
  
  setTimeout(() => {
    menuDiv.style.opacity = 1

    projectsDiv.style.transform = "rotate(-2deg) translate(0,0)"
    projectsDiv.style.opacity = 1

    presentationDiv.style.transform = "translate(0,0)"
    presentationDiv.style.opacity = 1
    
    languageDiv.classList.remove("language-start")
    languageDiv.classList.add("language-end")
  }, startAnimationTimeout); 
}

startAnimations();