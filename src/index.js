import "@styles/style.css";
import "@utils/events.js";
import NavBar from "./templates/NavBar.js";
import Footer from "./templates/Footer.js";
/*
import Header from "./templates/Header.js";
*/
(async function App() {
    const body = null || document.querySelector("body");
    const nav = null || document.querySelector(".navbar");
    const footer = null || document.querySelector(".footer");
    nav.innerHTML = await NavBar();
    footer.innerHTML = await Footer();
    reload();
})();
