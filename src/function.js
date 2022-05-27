import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./styles/themes.css";
import "./styles/main-style.css";
import main from "./scripts/app-main.js";

const btnTheme = document.querySelector(".btn-theme");

btnTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

main();
