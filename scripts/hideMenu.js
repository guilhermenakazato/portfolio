var contactSection;
let previousRatio = 0.0;
var menuDiv = document.getElementById("menu")

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
      menuDiv.style.visibility = "visible"
      menuDiv.style.opacity = 1

      setTimeout(() => {
        menuDiv.style.transition = "0s"
      }, 500);
    }

    previousRatio = currentRatio
  })
}