var body = document.querySelector("body")
var projectInfoDiv = document.getElementById("project-info")

function closeProjectInfoWindow() {
  body.style.overflowY = "visible"
  projectInfoDiv.style.display = "none"
  projectInfoDiv.style.appearance = "hidden"
}

function showProjectInfoWindow() {
  console.log(projectInfoDiv)

  body.style.overflowY = "hidden"
  projectInfoDiv.style.display = "flex"
  projectInfoDiv.style.appearance = "auto"
}