let loadingDiv = document.getElementById("loading")
let loadingOne = document.getElementById("loading-one")
let loadingTwo = document.getElementById("loading-two")
let loadingText = document.getElementById("loading-text")

let loadingBody = document.querySelector("body")
let loadLanguageDiv = document.getElementById("language")
// let loadMenuDiv = document.getElementById("menu")
let loadPresentationDiv = document.getElementById("presentation")
let loadProjectsDiv = document.getElementById("projects")

// vo usar no hideMenu.js... deve ter algum jeito melhor mas eu n sei direito
// sou apenas um mero junior
var animationShouldPlay;

function adjustDOM(timeout) {
  setTimeout(() => {
    loadingDiv.remove()
    loadingBody.classList.remove("hide-overflow")
  }, timeout);
}

function startAnimations() {
  let adjustDOMTimeout = 0;
  animationShouldPlay = typeof(Storage) !== "undefined" && (!localStorage.getItem("loaded") == "true" || localStorage.getItem("loaded") == null)
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
    loadProjectsDiv.style.transition = "0s"
    loadPresentationDiv.style.transition = "0s"
    // loadMenuDiv.style.transition = "0s"

    if(endAnimationTimeout == 0) {
      loadLanguageDiv.style.transition = "0s"

      setTimeout(() => {
        loadLanguageDiv.style.transition = "0.4s"
      }, 100);
    } else {
      loadLanguageDiv.style.transition = "0.4s"
    }

    animationShouldPlay = false
  }, endAnimationTimeout); 
  
  setTimeout(() => {
    // loadMenuDiv.style.opacity = 1

    loadProjectsDiv.style.transform = "rotate(-2deg) translate(0,0)"
    loadProjectsDiv.style.opacity = 1

    loadPresentationDiv.style.transform = "translate(0,0)"
    loadPresentationDiv.style.opacity = 1
    
    loadLanguageDiv.classList.remove("language-start")
    loadLanguageDiv.classList.add("language-end")
  }, startAnimationTimeout); 
}

startAnimations();