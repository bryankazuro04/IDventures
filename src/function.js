import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./styles/themes.css";
import "./styles/main-style.css";
import "./styles/res-1280px.css";
import "./styles/res-768px.css";
import "./styles/res-576px.css";
import main from "./scripts/app-main.js";
import logo from "./media/logo.png";
import card1 from "./media/Air Terjun Situmurun.jpg";
import card2 from "./media/Air Terjun Situmurun.jpg";
import card3 from "./media/Air Terjun Situmurun.jpg";
import toba from "./media/DanauToba.png";

// Import Logo Image
const banner = document.querySelector(".logo");
banner.setAttribute("src", `${logo}`);

const cardImage1 = document.querySelector(".card-1");
const cardImage2 = document.querySelector(".card-2");
const cardImage3 = document.querySelector(".card-3");

cardImage1.setAttribute("src", `${card1}`);
cardImage2.setAttribute("src", `${card2}`);
cardImage3.setAttribute("src", `${card3}`);

const waterfall1 = document.querySelector(".waterfall-1");
const waterfall2 = document.querySelector(".waterfall-2");
const waterfall3 = document.querySelector(".waterfall-3");

waterfall1.setAttribute("src", `${card1}`);
waterfall2.setAttribute("src", `${card2}`);
waterfall3.setAttribute("src", `${card3}`);

const lake = document.querySelector(".lake");
lake.setAttribute("src", `${toba}`);

const highlight = document.querySelector(".highlight");
highlight.setAttribute("src", `${toba}`);

// Theme Button Toggle
const btnTheme = document.querySelector(".btn-theme");

btnTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

main();
