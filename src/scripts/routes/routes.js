import Home from "../views/pages/home";
import Explore from "../views/pages/explore";
import AboutUs from "../views/pages/about-us";
import Contact from "../views/pages/contact";
import Destination from "../views/pages/destination";

const routes = {
  "/": Home,
  "/explore": Explore,
  "/explore/:id": Destination,
  "/contact": Contact,
  "/about-us": AboutUs,
};

export default routes;
