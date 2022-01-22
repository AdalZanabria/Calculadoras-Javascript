import Routes from "./routes/index.routes.js";
import "@styles/style.css";
import NavBar from "@templates/NavBar.js";
import Footer from "@templates/Footer.js";
import Header from "@templates/Header";

(async function App() {
    const nav = null || document.querySelector(".navbar");
    const footer = null || document.querySelector(".footer");
    const header = null || document.querySelector("header");
    nav.innerHTML = await NavBar();
    navReload();
    footer.innerHTML = await Footer();
    toolTips();
    header.innerHTML = await Header();
    await Routes();
})();

// Utils
const toolTips = () => {
    var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
};

const navReload = () => {
    const navBrand = document.querySelector(".navbar-brand");
    navBrand.addEventListener("click", (_) => {
        location.reload();
    });
};
