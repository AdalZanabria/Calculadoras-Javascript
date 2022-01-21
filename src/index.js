import "@styles/style.css";
/*
import NavBar from "./templates/NavBar.js";
import Header from "./templates/Header.js";
import Footer from "./templates/Footer.js";
*/
(async function App() {
    const main = null || document.getElementById("main");
    main.innerHTML = await "Hola, mundo!";
    console.log("Hola, mundo!");
})();
