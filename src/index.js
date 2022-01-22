import "@styles/style.css";
import NavBar from "@templates/NavBar.js";
import Footer from "@templates/Footer.js";
import Header from "@templates/Header";

// Modules
import CalculadoraGeometrica from "./pages/CalculadoraGeometrica";
import FuncionesCalculadoraGeometrica from "./scripts/FuncionesCalculadoraGeometrica";
import CalculadoraDescuentos from "./pages/CalculadoraDescuentos.js";
import FuncionesCalculadoraDescuentos from "./scripts/FuncionesCalculadoraDescuentos";
import CalculadoraPromedios from "./pages/CalculadoraPromedios.js";
import FuncionesCalculadoraPromedio from "./scripts/FuncionesCalculadoraPromedios";
import CalculadoraSalarios from "./pages/CalculadoraSalarios.js";
import CalculadoraBasica from "./pages/CalculadoraBasica.js";

const mainContainer = document.querySelector("#main");

(async function App() {
    const nav = null || document.querySelector(".navbar");
    const footer = null || document.querySelector(".footer");
    const header = null || document.querySelector("header");
    nav.innerHTML = await NavBar();
    navReload();
    header.innerHTML = await Header();
    NavRoutes();
    footer.innerHTML = await Footer();
    toolTips();
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

// Router
const routes = async (view, model) => {
    try {
        console.log(view);
        mainContainer.innerHTML = await view;
        console.log(model);
        await model();
    } catch (error) {
        console.log("Error de función async: ", error);
    }
};

const NavRoutes = () => {
    // DOM consts
    const title = document.getElementById("headerTitle");
    const subtitle = document.getElementById("headerSubtitle");
    const welcomeArrow = document.querySelector("#welcomeArrow");
    // NavBar consts
    const navGeometrica = document.querySelector("#navGeometrica");
    const navDescuentos = document.querySelector("#navDescuentos");
    const navPromedios = document.querySelector("#navPromedios");
    const navSalarios = document.querySelector("#navSalarios");
    const navCalculadora = document.querySelector("#navCalculadora");

    // Calculadora Geométrica
    navGeometrica.addEventListener("click", () => {
        routes(CalculadoraGeometrica(), FuncionesCalculadoraGeometrica);

        mainContainer.classList.remove("d-none");
        welcomeArrow.classList.add("d-none");
        title.innerText = "Calculadora Geométrica";
        subtitle.innerText =
            "Calcula áreas y perímetros de figuras geométricas básicas";

        navDescuentos.classList.remove("active");
        navPromedios.classList.remove("active");
        navSalarios.classList.remove("active");
        navCalculadora.classList.remove("active");
        navGeometrica.classList.add("active");
    });
    // Calculadora de Descuentos
    navDescuentos.addEventListener("click", () => {
        routes(CalculadoraDescuentos(), FuncionesCalculadoraDescuentos);

        mainContainer.classList.remove("d-none");
        welcomeArrow.classList.add("d-none");
        title.innerText = "Calculadora de Descuentos";
        subtitle.innerText =
            "Calcula el precio a pagar de productos con descuento";

        navGeometrica.classList.remove("active");
        navPromedios.classList.remove("active");
        navSalarios.classList.remove("active");
        navCalculadora.classList.remove("active");
        navDescuentos.classList.add("active");
    });
    // Calculadora de Promedios
    navPromedios.addEventListener("click", () => {
        routes(CalculadoraPromedios(), FuncionesCalculadoraPromedio);

        mainContainer.classList.remove("d-none");
        welcomeArrow.classList.add("d-none");
        title.innerText = "Calculadora de Promedios";
        subtitle.innerText =
            "Calcula operaciones básicas de estadistica en base a una lista";

        navGeometrica.classList.remove("active");
        navDescuentos.classList.remove("active");
        navSalarios.classList.remove("active");
        navCalculadora.classList.remove("active");
        navPromedios.classList.add("active");
    });
};
