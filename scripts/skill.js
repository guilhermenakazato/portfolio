var frontendDiv = document.getElementById("frontend")
var backendDiv = document.getElementById("backend")

function switchShowingDiv(divClicked) {
  let mappedDivs = ["backend", "frontend"]
  let clickedDivId = mappedDivs[divClicked]
  
  let clickedDiv = document.getElementById(clickedDivId)
  let clickedDivH2 = document.querySelector(`#${clickedDivId} h2`)

  if(!clickedDiv.classList.contains("skill-infront")) {    
    let otherDivId = mappedDivs[Number(!divClicked)]
    let otherDiv = document.getElementById(otherDivId) 
    let otherDivH2 = document.querySelector(`#${otherDivId} h2`)

    clickedDiv.classList.add("skill-infront")
    clickedDiv.classList.remove("skill-behind")

    otherDiv.classList.remove("skill-infront")
    otherDiv.classList.add("skill-behind")

    otherDivH2.textContent = "+ " + otherDivH2.textContent
    clickedDivH2.textContent = clickedDivH2.textContent.split(" ")[1]
  }
}