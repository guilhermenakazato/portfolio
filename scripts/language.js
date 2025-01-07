var body = document.querySelector("body")
var languageDiv = document.getElementById("change-language")
var closeButton = document.getElementById("close-button")

function closeLanguageWindow() {
  body.style.overflowY = "visible"
  languageDiv.style.display = "none"
  languageDiv.style.appearance = "hidden"
}

function showLanguageWindow() {
  body.style.overflowY = "hidden"
  languageDiv.style.display = "flex"
  languageDiv.style.appearance = "auto"
}