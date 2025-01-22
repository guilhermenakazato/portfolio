var body = document.querySelector("body")
var changeLanguageDiv = document.getElementById("change-language")
var menuDiv = document.getElementById("menu")
var chosenLanguage = "pt-BR";
var languageWindowClosed;

var uniqueStrings = {
  "en-US": {
    "my-name": "Hello, I'm Guilherme...",
    "my-job-position": "Fullstack<br/>Developer",
    "want-to-work": "Open to work",
    "still-doing-it": "IN DEVELOPMENT (2)",
    "job-title-expanded": "EMERGENT DEVELOPER, <span>FRONTEND</span> AND <span>BACKEND</span>",
    "more-job-title": "CREATING <span>MOBILE, DESKTOP</span> AND APPLYING <span>MODERN DESIGNS</span>",
    "spare-time": "IN MY SPARE TIME <span>GAME DEVELOPER</span>",
    "selected-projects-title": "SELECTED PROJECTS",
    "start-shortcut": "Start",
    "projects-shortcut": "Projects",
    "contact-shortcut": "Contact",
    "choose-your-language": "Choose a language",
    "chosen-language": "EN-US",
    "apply": "Apply",
    "get-in-touch": "Get in<br/>touch",
    "communication": "Communication",
    "teamwork": "Teamwork",
    "adaptability": "Adaptability",
    "adaptability-explanation": "Adaptability is an important soft skill that helps programmers to easily adjust to new technologies, methodologies, and project requisites.",
    "communication-explanation": "Communication is an important soft skill that allows programmers to have a better understanding of the product they are developing.",
    "teamwork-explanation": "Teamwork is an important soft skill that allows programmers to develop large scale projects, with the help of many collaborators.",
  },
  "pt-BR": {
    "my-name": "Olá, sou Guilherme...",    
    "my-job-position": "Desenvolvedor<br/>Full stack",
    "want-to-work": "Aberto a propostas",
    "still-doing-it": "EM PRODUÇÃO (2)",
    "job-title-expanded": "DESENVOLVEDOR EMERGENTE, <span>FRONT-END</span> E <span>BACK-END</span>",
    "more-job-title": "CRIANDO <span>MOBILE, DESKTOP</span> E APLICANDO <span>DESIGNS MODERNOS</span>",
    "spare-time": "NAS HORAS VAGAS <span>GAME DEVELOPER</span>",
    "selected-projects-title": "PROJETOS SELECIONADOS",
    "start-shortcut": "Início",
    "projects-shortcut": "Projetos",
    "contact-shortcut": "Contato",
    "choose-your-language": "Escolha uma língua",
    "chosen-language": "PT-BR",
    "apply": "Aplicar",
    "get-in-touch": "Entre em<br/>contato",
    "communication": "Comunicação",
    "teamwork": "Trabalho em equipe",
    "adaptability": "Adaptabilidade",
    "communication-explanation": "A comunicação é uma soft skill importante que permite que os programadores tenham um melhor entendimento do produto que estão desenvolvendo.",
    "teamwork-explanation": "O trabalho em equipe é uma soft skill importante que permite que os programadores desenvolvam projetos de grande escala, com a ajuda de vários colaboradores.",
    "adaptability-explanation": "A adaptabilidade é uma soft skill importante que permite que os programadores se ajustem facilmente a novas tecnologias, metodologias e requisitos de projeto.",
  }
}

var repeatedStrings = {
  "en-US": {
    "see-more-text": "Look",
    "coming-soon-text": "Soon...",
  }, 
  "pt-BR": {
    "see-more-text": "Ver",
    "coming-soon-text": "Em breve",
  }
}

function closeLanguageWindow() {
  body.style.overflowY = "visible"
  changeLanguageDiv.style.display = "none"
  changeLanguageDiv.style.appearance = "hidden"
  
  menuDiv.style.display = "flex"
  languageWindowClosed = true
}

function showLanguageWindow() {
  languageWindowClosed = false
  body.style.overflowY = "hidden"
  changeLanguageDiv.style.display = "flex"
  changeLanguageDiv.style.appearance = "auto"

  menuDiv.style.display = "none"
}

function storeLanguageValue(language) {
  localStorage.setItem("language", language)
  chosenLanguage = language
}

function getWebsiteLanguage() {
  let language;

  if(typeof(Storage) !== "undefined") {
    language = localStorage.getItem("language")

    if(language == null) {
      language = navigator.language || navigator.userLanguage;
      
      if(language == "en") language = "en-US"
      if(language == "pt") language = "pt-BR"
  
      storeLanguageValue(language)
    } else {
      chosenLanguage = language
    }
  }

  if(chosenLanguage != "pt-BR") {
    changeLanguageButtonStyle(chosenLanguage)
    changeLanguage()
  }
}

function changeLanguage() {
  let ids = Object.keys(uniqueStrings[chosenLanguage])
  let classnames = Object.keys(repeatedStrings[chosenLanguage])
  
  ids.forEach(id => {
    let elementWithText = document.getElementById(id)
    elementWithText.innerHTML = uniqueStrings[chosenLanguage][id]
  })

  classnames.forEach(classname => {
    let repeatedElementsWithText = document.getElementsByClassName(classname)
    
    for(let i = 0; i < repeatedElementsWithText.length; i++) {
      let textElement = repeatedElementsWithText[i]
      textElement.innerHTML = repeatedStrings[chosenLanguage][classname]
    }
  })
  
  if(!languageWindowClosed) closeLanguageWindow()
}

function changeLanguageButtonStyle(language) {
  let portugueseButton = document.getElementById("pt-BR-button")
  let englishButton = document.getElementById("en-US-button")

  if(!document.getElementById(`${language}-button`).classList.contains("selected-button")) {
    portugueseButton.classList.toggle("selected-button")
    portugueseButton.classList.toggle("unselected-button")

    englishButton.classList.toggle("selected-button")
    englishButton.classList.toggle("unselected-button")

    storeLanguageValue(language)
  } 
}

getWebsiteLanguage()