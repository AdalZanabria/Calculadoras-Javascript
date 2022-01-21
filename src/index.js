import "@styles/style.css";
import "@utils/events.js";
import NavBar from "./templates/NavBar.js";
/*
import Header from "./templates/Header.js";
import Footer from "./templates/Footer.js";
*/
(async function App() {
    const body = null || document.querySelector("body");
    body.innerHTML = await NavBar();
    reload();
})();
