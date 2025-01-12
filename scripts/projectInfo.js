var body = document.querySelector("body")
var projectInfoDiv = document.getElementById("project-info")

/* 
{
  "title": "text",
  "subtitle": "text",
  "progress": "done" | "in-progress",
  "main-image": "url",
  "main-image-description" : "text",
  "screenshots": "folder_url" | null
  "playstore-link": "link" | null
  "github-link":  "link" | null
}
*/

var selectedProjects = [{
  "id": 0,
  "title": "Galeria",
  "subtitle": "Mobile App",
  "progress": "done",
  "main-image": "./public/galeria.png",
  "main-image-description" : "galeria",
  "screenshots": "./public/galeria",
  "playstore-link": null,
  "github-link":  "https://github.com/guilhermenakazato/app-galeria", 
}, {
  "id": 1,
  "title": "PixelUI",
  "subtitle": "Design System<br/>Em Produção",
  "progress": "in-progress",
  "main-image": "./public/pixelUI.jpg",
  "main-image-description" : "pixel DS",
  "screenshots": null,
  "playstore-link": null,
  "github-link": null, 
}, {
  "id": 2,
  "title": "Previsão do<br/>Tempo",
  "subtitle": "Mobile App",
  "progress": "in-progress",
  "main-image": "./public/pixel.jpg",
  "main-image-description" : "pixel",
  "screenshots": null,
  "playstore-link": null,
  "github-link": null, 
}]

function generateSelectedProjects() {
  let selectedProjectsDiv = document.getElementById("selected-projects")

  selectedProjects.forEach((project) => {
    let onClickFunction = project.progress == "done" ? `onclick=showProjectInfoWindow(${project.id})` : ""
    let openOverlayDiv = project.progress == "done" ? 
    `<div id="open-overlay">
        <div class="blur"></div>
        <span>Ver</span>
     </div>` : 
     `<div id="open-overlay">
        <span>Em breve</span>
      </div>`

    selectedProjectsDiv.innerHTML += `
      <figure class="${project.progress} hide-overflow" ` + onClickFunction + `>
        <img src="${project["main-image"]}" alt="${project["main-image-description"]}">
        <figcaption>
          <h1>${project.title}</h1>
          <h2>${project.subtitle}</h2>
        </figcaption>
      ` + openOverlayDiv + `
      </figure>`
  })
}

function generateProjectInfoDiv(projectId) {
  let projectInfoDiv = document.getElementById("project-info")
  let project = selectedProjects[projectId]

  projectInfoDiv.innerHTML = `
    <div id="project-info-container">
      <div id="project-info-menu">
        <div>
          <h1>${project.title.toUpperCase()}</h1>
          <h2>${project.subtitle}</h2>
        </div>
        <h2 id="close-text" onclick="closeProjectInfoWindow()">Fechar</h2>
      </div>
      <div id="project-images">
        <div>
          <img src="./public/galeria/galeria1.png" alt="Screenshot do projeto Galeria" class="mobile-image">
        </div>
        <div>
          <img src="./public/galeria/galeria2.png" alt="Screenshot do projeto Galeria" class="mobile-image">
        </div>
        <div>
          <img src="./public/galeria/galeria3.png" alt="Screenshot do projeto Galeria" class="mobile-image">
        </div>
        <div>
          <img src="./public/galeria/galeria4.png" alt="Screenshot do projeto Galeria" class="desktop-image">
        </div>
        <div>
          <img src="./public/galeria/galeria5.png" alt="Screenshot do projeto Galeria" class="desktop-image">
        </div>
      </div>
      <div id="project-links">
        <a>
          <h2>Baixar projeto</h2>
          <img src="./public/playstore-logo.svg" alt="Playstore logo">
        </a>
        <a href="https://github.com/guilhermenakazato/app-galeria" target="_blank" rel="noopener noreferrer">
          <h2>Github</h2>
          <img src="./public/github-logo.svg" alt="Github logo">
        </a>
      </div>
    </div>
  `
}

function destroyProjectInfoDiv() {
  let projectInfoDiv = document.getElementById("project-info")
  projectInfoDiv.innerHTML = ""
}

function closeProjectInfoWindow() {
  body.style.overflowY = "visible"
  projectInfoDiv.style.display = "none"
  projectInfoDiv.style.appearance = "hidden"

  destroyProjectInfoDiv()
}

function showProjectInfoWindow(projectId) {
  generateProjectInfoDiv(projectId)

  body.style.overflowY = "hidden"
  projectInfoDiv.style.display = "flex"
  projectInfoDiv.style.appearance = "auto"
}

generateSelectedProjects()