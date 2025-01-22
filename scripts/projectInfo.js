var body = document.querySelector("body");
var projectInfoDiv = document.getElementById("project-info");
var menuDiv = document.getElementById("menu")

/* 
{
  "title": "text",
  "subtitle": "text",
  "progress": "done" | "in-progress",
  "main-image": "url",
  "main-image-description" : "text",
  "playstore-link": "link" | null,
  "github-link":  "link" | null,
  "screenshots": [{
    "url": "url",
    "type": "mobile" | desktop
  }]
}
*/

var selectedProjects = [
  {
    id: 0,
    title: "Galeria",
    subtitle: "Mobile",
    progress: "done",
    "main-image": "./public/galeria.png",
    "main-image-description": "galeria",
    "playstore-link": null,
    "github-link": "https://github.com/guilhermenakazato/app-galeria",
    screenshots: [
      {
        url: "./public/galeria/galeria1.png",
        type: "mobile",
      },
      {
        url: "./public/galeria/galeria2.png",
        type: "mobile",
      },
      {
        url: "./public/galeria/galeria3.png",
        type: "mobile",
      },
      {
        url: "./public/galeria/galeria4.png",
        type: "desktop",
      },
      {
        url: "./public/galeria/galeria5.png",
        type: "desktop",
      },
    ],
  },
  {
    id: 1,
    title: "PixelUI",
    subtitle: "Design System",
    progress: "in-progress",
    "main-image": "./public/pixelUI.jpg",
    "main-image-description": "pixel DS",
    screenshots: null,
    "playstore-link": null,
    "github-link": null,
  },
  {
    id: 2,
    title: "Cloud<br/>Radar",
    subtitle: "Mobile",
    progress: "in-progress",
    "main-image": "./public/pixel.jpg",
    "main-image-description": "pixel",
    screenshots: null,
    "playstore-link": null,
    "github-link": null,
  },
];

function generateSelectedProjects() {
  let selectedProjectsDiv = document.getElementById("selected-projects");

  selectedProjects.forEach((project) => {
    let onClickFunction =
      project.progress == "done"
        ? `onclick=showProjectInfoWindow(${project.id})`
        : "";
    let openOverlayDiv =
      project.progress == "done"
        ? `<div id="open-overlay">
        <div class="blur"></div>
        <span class="see-more-text">Ver</span>
     </div>`
        : `<div id="open-overlay">
        <span class="coming-soon-text">Em breve</span>
      </div>`;

    selectedProjectsDiv.innerHTML +=
      `
      <figure class="${project.progress} hide-overflow" ` +
      onClickFunction +
      `>
        <img src="${project["main-image"]}" alt="${project["main-image-description"]}">
        <figcaption>
          <h1>${project.title}</h1>
          <h2>${project.subtitle}</h2>
        </figcaption>
      ` +
      openOverlayDiv +
      `
      </figure>`;
  });
}

function generateProjectInfoDiv(projectId) {
  let project = selectedProjects[projectId];
  let closeText = localStorage.getItem("language") == "pt-BR" ? "Fechar" : "Close"

  let infoMenu = `
    <div id="project-info-container">
        <div id="project-info-menu">
          <div>
            <h1>${project.title.toUpperCase()}</h1>
            <h2>${project.subtitle}</h2>
          </div>
          <h2 id="close-text" onclick="closeProjectInfoWindow()">${closeText}</h2>
        </div>
        <div id="project-images">
        `;

  let images = "";
  project.screenshots.forEach((image) => {
    images += `
        <div>
            <img src="${image.url}" alt="Screenshot do projeto "${project.title}"" class="${image.type}-image" ondragstart="return false;">
        </div>
      `;
  });
  images += "</div>";

  let playstoreLink =
    project["playstore-link"] == null
      ? ""
      : `<a>
            <h2>Baixar projeto</h2>
            <img src="./public/playstore-logo.svg" alt="Playstore logo">
          </a>`;

  let githubLink =
    project["github-link"] == null
      ? ""
      : `
          <a href="https://github.com/guilhermenakazato/app-galeria" target="_blank" rel="noopener noreferrer">
            <h2>Github</h2>
            <img src="./public/github-logo.svg" alt="Github logo">
          </a>`;

  let links =
    `<div id="project-links">` +
    playstoreLink +
    githubLink +
    `</div>
      </div>`;

  projectInfoDiv.innerHTML = infoMenu + images + links;
  grabImagesToScroll();
}

function grabImagesToScroll() {
  var projectImageDiv = document.getElementById("project-images");
  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e) {
    projectImageDiv.style.cursor = "grabbing";
    projectImageDiv.style.userSprojectImageDivct = "none";

    pos = {
      left: projectImageDiv.scrollLeft,
      top: projectImageDiv.scrollTop,
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    projectImageDiv.scrollTop = pos.top - dy;
    projectImageDiv.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    projectImageDiv.style.cursor = "grab";
    projectImageDiv.style.removeProperty("user-select");

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  projectImageDiv.addEventListener("mousedown", mouseDownHandler);
}

function destroyProjectInfoDiv() {
  projectInfoDiv.innerHTML = "";
}

function closeProjectInfoWindow() {
  body.style.overflowY = "visible";
  projectInfoDiv.style.display = "none";
  projectInfoDiv.style.appearance = "hidden";

  destroyProjectInfoDiv();
  menuDiv.style.display = "flex"
}

function showProjectInfoWindow(projectId) {
  generateProjectInfoDiv(projectId);

  body.style.overflowY = "hidden";
  projectInfoDiv.style.display = "flex";
  projectInfoDiv.style.appearance = "auto";

  menuDiv.style.display = "none"
}

generateSelectedProjects();
