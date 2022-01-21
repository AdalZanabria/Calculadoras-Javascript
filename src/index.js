import NavBar from "./templates/NavBar.js";
import Header from "./templates/Header.js";
import Footer from "./templates/Footer.js";

(async function App() {
    const main = null || document.getElementById("main");
    const body = null || document.querySelector("body");
    body.prepend(NavBar);
    NavBar.after(Header);
    body.append(Footer);
})();
