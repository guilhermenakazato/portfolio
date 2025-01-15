var body = document.querySelector("body")
var changeLanguageDiv = document.getElementById("change-language")
var menuDiv = document.getElementById("menu")

function closeLanguageWindow() {
  body.style.overflowY = "visible"
  changeLanguageDiv.style.display = "none"
  changeLanguageDiv.style.appearance = "hidden"

  menuDiv.style.opacity = 1
}

function showLanguageWindow() {
  body.style.overflowY = "hidden"
  changeLanguageDiv.style.display = "flex"
  changeLanguageDiv.style.appearance = "auto"

  menuDiv.style.opacity = 0
}