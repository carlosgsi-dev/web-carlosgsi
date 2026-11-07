// Archivo: js/language.js
const translations = {
  "es": {
    "skipContent": "Saltar al contenido",
    "role": "Desarrollador junior",
    "email": "Escríbeme",
    "contactPending": "Enlaces de contacto próximamente.",
    "aboutHeading": "</Sobre mí>",
    "aboutCopy": "Después de años trabajando en operaciones, análisis de fraude y soporte técnico en España, Reino Unido e Irlanda, acabé colaborando con desarrolladores y descubriendo que quería estar al otro lado del código. Así que decidí cambiar de rumbo y estudiar Desarrollo de Aplicaciones Multiplataforma (DAM).\n\nAhora estoy convirtiendo esa curiosidad en conocimientos de programación, combinando mi experiencia resolviendo problemas reales con las ganas de aprender, experimentar y construir software útil. Porque, después de tantos años solucionando incidencias, ha llegado el momento de crear algo más que respuestas a ellas.",
    "aboutPending": "Un primer esquema. Presentación personal pendiente.",
    "curriculum": "Currículum",
    "portfolio": "Portfolio",
    "projectsEyebrow": "Una selección de trabajos",
    "projectsHeading": "</Proyectos>",
    "projectsIntro": "Tres proyectos. Más detalles próximamente.",
    "projectOne": "Proyecto uno",
    "projectTwo": "Proyecto dos",
    "projectThree": "Proyecto tres",
    "project1Description": "Aplicación de escritorio JavaFX llamando a la API REST Open-Meteo. Utilizando peticiones HTTP asíncronas nativas y persistencia local del historial en formato JSON utilizando Jackson.",
    "project2Description": "Aplicación de escritorio JavaFX llamando a la API REST Open-Meteo. Utilizando peticiones HTTP asíncronas nativas y persistencia local del historial en formato JSON utilizando Jackson.",
    "project3Description": "Aplicación de escritorio JavaFX llamando a la API REST Open-Meteo. Utilizando peticiones HTTP asíncronas nativas y persistencia local del historial en formato JSON utilizando Jackson.",
    "viewRepository": "Ver en GitHub",
    "repositoryPending": "Repositorio próximamente.",
    "portfolioFooter": "© 2026 Carlos García · Diseño, desarrollo y alojamiento propios.",
    "backToTop": "Volver arriba ↑",
    "backToPortfolio": "← Volver al portfolio",
    "cvFooter": "Carlos Garcia · Currículum online",
    "homeTitle": "Carlos Garcia | Portfolio",
    "cvTitle": "Carlos García Sánchez-Infante | Currículum",
    "homeDescription": "Portfolio personal de Carlos Garcia. Una primera selección de proyectos y un currículum online.",
    "cvDescription": "Currículum de Carlos García Sánchez-Infante, estudiante de Desarrollo de Aplicaciones Multiplataforma.",
    "introduction": "Presentación",
    "avatarAlt": "Foto de Carlos García",
    "socialProfiles": "Perfiles sociales",
    "explorePortfolio": "Explorar el portfolio",
    "homeLink": "Carlos Garcia — inicio",
    "languageLabel": "Idioma",
    "spanish": "Español",
    "english": "Inglés",
    "themeToggle": "Cambiar tema"
  },
  "en": {
    "skipContent": "Skip to content",
    "role": "Junior developer",
    "email": "Email me",
    "contactPending": "Contact links coming soon.",
    "aboutHeading": "</About Me>",
    "aboutCopy" : "After years working in operations, fraud analysis and technical support across Spain, the UK and Ireland, I found myself working alongside developers and realised I wanted to be on the other side of the code. So I decided to change direction and study Multiplatform Application Development (DAM).\n\nI'm now turning that curiosity into programming skills, combining my experience solving real-world problems with a drive to learn, experiment and build useful software. After years of fixing issues, it's time to start building more than just solutions to them.",
    "aboutPending": "A first outline. Personal introduction to follow.",
    "curriculum": "Curriculum",
    "portfolio": "Portfolio",
    "projectsEyebrow": "A selection of work",
    "projectsHeading": "</Projects>",
    "projectsIntro": "Three projects. More details coming soon.",
    "projectOne": "Project One",
    "projectTwo": "Project Two",
    "projectThree": "Project Three",
    "project1Description": "JavaFX desktop application calling the Open-Meteo REST API. Utilizing native asynchronous HTTP requests and local history persistence in JSON format using Jackson.",
    "project2Description": "A short description of the project, the problem it solves, and the technologies used will go here.",
    "project3Description": "A short description of the project, the problem it solves, and the technologies used will go here.",
    "viewRepository": "View on GitHub",
    "repositoryPending": "Repository coming soon.",
    "portfolioFooter": "© 2026 Carlos García · Designed, built and hosted by me.",
    "backToTop": "Back to top ↑",
    "backToPortfolio": "← Back to portfolio",
    "cvFooter": "Carlos Garcia · Online résumé",
    "homeTitle": "Carlos Garcia | Portfolio",
    "cvTitle": "Carlos García Sánchez-Infante | Résumé",
    "homeDescription": "Carlos Garcia's personal portfolio. An initial selection of projects and an online curriculum.",
    "cvDescription": "Résumé of Carlos García Sánchez-Infante, Cross-Platform Application Development student.",
    "introduction": "Introduction",
    "avatarAlt": "Carlos' picture",
    "socialProfiles": "Social profiles",
    "explorePortfolio": "Explore the portfolio",
    "homeLink": "Carlos Garcia — home",
    "languageLabel": "Language",
    "spanish": "Spanish",
    "english": "English",
    "themeToggle": "Toggle theme"
  }
};

const storageKey = "portfolio-language";
const languageSelect = document.querySelector("#language-select");
const supportedLanguages = ["es", "en"];

function readLanguage() {
  const requestedLanguage = new URL(window.location.href).searchParams.get("lang");
  if (supportedLanguages.includes(requestedLanguage)) return requestedLanguage;
  try {
    const savedLanguage = localStorage.getItem(storageKey);
    if (supportedLanguages.includes(savedLanguage)) return savedLanguage;
  } catch {
    // Storage may be unavailable when opening local files or in private mode.
  }
  return "es";
}

function applyLanguage(language) {
  const selectedLanguage = supportedLanguages.includes(language) ? language : "es";
  const messages = translations[selectedLanguage];
  document.documentElement.lang = selectedLanguage;
  document.documentElement.dataset.lang = selectedLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (messages[element.dataset.i18n]) {
      element.textContent = messages[element.dataset.i18n];
    }
  });
  ["aria-label", "alt", "title", "content"].forEach((attribute) => {
    document.querySelectorAll(`[data-i18n-${attribute}]`).forEach((element) => {
      const key = element.getAttribute(`data-i18n-${attribute}`);
      if (messages[key]) {
        element.setAttribute(attribute, messages[key]);
      }
    });
  });
  if (languageSelect) {
    languageSelect.value = selectedLanguage;
  }

  // Carry the choice between HTML files even if browser storage is unavailable.
  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
    try {
      const target = new URL(href, window.location.href);
      if (target.origin === window.location.origin && /\/(index|cv)\.html$/.test(target.pathname)) {
        target.searchParams.set("lang", selectedLanguage);
        link.setAttribute("href", target.href);
      }
    } catch {
      // Ignore invalid URLs
    }
  });

  try {
    localStorage.setItem(storageKey, selectedLanguage);
  } catch {}
  try {
    const currentUrl = new URL(window.location.href);
    if (currentUrl.searchParams.has("lang")) {
      currentUrl.searchParams.set("lang", selectedLanguage);
      history.replaceState(null, "", currentUrl);
    }
  } catch {}
}

applyLanguage(readLanguage());
const langBar = document.querySelector(".language-bar");
if (langBar) langBar.hidden = false;
if (languageSelect) {
  languageSelect.addEventListener("change", (event) => applyLanguage(event.target.value));
}
window.addEventListener("pageshow", () => applyLanguage(readLanguage()));