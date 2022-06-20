import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../styles/themes.css";
import "../styles/main-style.css";
import "../styles/res-1280px.css";
import "../styles/res-768px.css";
import "../styles/res-576px.css";
import "../styles/about-us.css";
import "../styles/wisata.css";
import "./Components/partial-import";
import main from "./event.js";
import App from "./views/app";

const app = new App({
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});

main();
