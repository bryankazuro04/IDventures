import App from "./views/app";
import swRegister from "./utils/sw-register";

// SPA Generate App
const app = new App({
  content: document.querySelector("#mainContent"),
  navMenu: document.getElementsByClassName("nav-item"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});

// SPA Generate App End

// Darkmode Button Toggle

const btnTheme = document.querySelector(".btn-theme");
const prefersDarkScheme = window.matchMedia("prefers-color-scheme: light");
const currentTheme = localStorage.getItem("theme");
const bodyElement = document.body;

if (currentTheme === "light") {
  bodyElement.classList.toggle("light-theme");
} else if (currentTheme === "dark") {
  bodyElement.classList.toggle("dark-theme");
}

btnTheme.addEventListener("click", () => {
  if (prefersDarkScheme.matches) {
    bodyElement.classList.toggle("light-theme");
    bodyElement.classList.contains("light-theme") ? "light" : "dark";
  } else {
    bodyElement.classList.toggle("dark-theme");
    bodyElement.classList.contains("dark-theme") ? "dark" : "light";
  }
  localStorage.setItem("theme", bodyElement);
});

const aLinks = document.querySelectorAll("a");

aLinks.forEach((links) => {
  links.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
