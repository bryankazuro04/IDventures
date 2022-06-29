import App from "./views/app";

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
});

// SPA Generate App End

// Darkmode Button Toggle

const btnTheme = document.querySelector(".btn-theme");

btnTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
