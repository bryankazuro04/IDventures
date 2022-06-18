import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./styles/themes.css";
import "./styles/main-style.css";
import "./styles/res-1280px.css";
import "./styles/res-768px.css";
import "./styles/res-576px.css";
import "./scripts/Components/nav-inner";
import "./scripts/Components/carousel";
import "./scripts/Components/main-container";
import "./scripts/Components/destination-cards";
import main from "./scripts/app-main.js";
import logo from "./media/logo.png";

// Import Logo Image
const banner = document.querySelector(".logo");
banner.setAttribute("src", `${logo}`);

// Theme Button Toggle
const btnTheme = document.querySelector(".btn-theme");

btnTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

main();
