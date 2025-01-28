let contactSection;
let previousRatio = 0.0;
let menuDiv = document.getElementById("menu")
let mobileMenuDiv = document.getElementById("mobile-menu")
let bodyMenu = document.querySelector("body")
let mobileMenuWindowIsOpen = false

window.addEventListener("load", (event) => {
  contactSection = document.getElementById("call-me-maybe")
  
  createObserver();
}, false)

function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold:  0.2,
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(contactSection);
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    let currentRatio = entry.intersectionRatio 
    let threshold = observer.thresholds[0]

    if(currentRatio > previousRatio && currentRatio >= threshold) {
      hideMenu()
    } else {
      if(animationShouldPlay) {
        showMenu(2000)
      } else {
        if(currentRatio == 0) {
          showMenu(0,0)
        } else {
          showMenu()
        }
      }
    }

    previousRatio = currentRatio
  })
}

function hideMenu() {
  menuDiv.style.transition = "0.5s"
  menuDiv.style.opacity = 0
  menuDiv.style.visibility = "hidden"
}

function showMenu(startLoadAnimation = 0, showMenuTimeout = 500) {
  setTimeout(() => {
    menuDiv.style.visibility = "visible"
    menuDiv.style.opacity = 1
  }, startLoadAnimation);

  setTimeout(() => {
    menuDiv.style.transition = "0s"
  }, startLoadAnimation + showMenuTimeout);
}

function openMobileMenuWindow() {
  hideMenu()

  mobileMenuDiv.style.display = "flex"
  mobileMenuDiv.style.visibility = "visible"
  bodyMenu.style.overflowY = "hidden"
  mobileMenuWindowIsOpen = true
}

function closeMobileMenuWindow() { 
  showMenu(0,0)

  mobileMenuDiv.style.display = "none"
  mobileMenuDiv.style.visibility = "hidden"
  bodyMenu.style.overflowY = "visible"

  mobileMenuWindowIsOpen = false
}

function openContact() {
  if(mobileMenuWindowIsOpen) {
    closeMobileMenuWindow()
  }

  let contactId = "call-me-maybe"
  let contactSection = document.getElementById(contactId)
  window.location.hash = contactId
  contactSection.scrollIntoView()

  window.open("mailto:guilherme.fernandes23903@gmail.com", "_blank")
}

function goToSection(id) {
  closeMobileMenuWindow()

  let section = document.getElementById(id)
  window.location.hash = id
  section.scrollIntoView()
}