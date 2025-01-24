let contactSection;
let previousRatio = 0.0;
let menuDiv = document.getElementById("menu")

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
      menuDiv.style.transition = "0.5s"
      menuDiv.style.opacity = 0
      menuDiv.style.visibility = "hidden"
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

function showMenu(startLoadAnimation = 0, showMenuTimeout = 500) {
  setTimeout(() => {
    menuDiv.style.visibility = "visible"
    menuDiv.style.opacity = 1
  }, startLoadAnimation);

  setTimeout(() => {
    menuDiv.style.transition = "0s"
  }, startLoadAnimation + showMenuTimeout);
}