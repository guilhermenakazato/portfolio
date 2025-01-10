var body = document.querySelector("body")
var changeLanguageDiv = document.getElementById("change-language")
var closeButton = document.getElementById("close-button")

function closeLanguageWindow() {
  body.style.overflowY = "visible"
  changeLanguageDiv.style.display = "none"
  changeLanguageDiv.style.appearance = "hidden"
}

function showLanguageWindow() {
  body.style.overflowY = "hidden"
  changeLanguageDiv.style.display = "flex"
  changeLanguageDiv.style.appearance = "auto"
}