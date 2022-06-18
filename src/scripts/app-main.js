import "./Data/data-files.js";
import logo from "../media/logo.png";

// Import Logo Image
const banner = document.querySelector(".logo");
banner.setAttribute("src", `${logo}`);

// Theme Button Toggle
const btnTheme = document.querySelector(".btn-theme");

btnTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

const main = () => {
  // Main Program

  document.addEventListener("DOMContentLoaded", () => {
    // Panggil Main Function
  });
};

export default main;
