import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@styles/style.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import bootstrap, { Modal } from "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/solid";
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
import FuncionesCalculadoraSalarios from "./scripts/FuncionesCalculadoraSalarios";
import CalculadoraBasica from "./pages/CalculadoraBasica.js";
import FuncionesCalculadoraBasica from "./scripts/FuncionesCalculadoraBasica";

const mainContainer = document.querySelector("#main");

(async function App() {
    const nav = null || document.querySelector(".navbar");
    const footer = null || document.querySelector("footer");
    const header = null || document.querySelector("header");
    nav.innerHTML = await NavBar();
    navReload();
    header.innerHTML = await Header();
    NavRoutes();
    ModalHeader();
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
        mainContainer.innerHTML = await view;
        await model();
    } catch (error) {
        console.log("Error de función async: ", error);
    }
};

const NavRoutes = () => {
    // DOM consts
    const title = document.getElementById("headerTitle");
    const subtitle = document.getElementById("headerSubtitle");
    // NavBar consts
    const navGeometrica = document.querySelector("#navGeometrica");
    const navDescuentos = document.querySelector("#navDescuentos");
    const navPromedios = document.querySelector("#navPromedios");
    const navSalarios = document.querySelector("#navSalarios");
    const navCalculadora = document.querySelector("#navCalculadora");

    // Calculadora Geométrica
    navGeometrica.addEventListener("click", () => {
        routes(CalculadoraGeometrica(), FuncionesCalculadoraGeometrica);

        const welcomeArrow = document.getElementById("welcomeArrow");
        const certificados = document.querySelector("#certificados");
        certificados.classList.add("d-none");
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

        const welcomeArrow = document.getElementById("welcomeArrow");
        const certificados = document.querySelector("#certificados");
        certificados.classList.add("d-none");
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

        const welcomeArrow = document.getElementById("welcomeArrow");
        const certificados = document.querySelector("#certificados");
        certificados.classList.add("d-none");
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
    // Calculadora de Salarios
    navSalarios.addEventListener("click", () => {
        routes(CalculadoraSalarios(), FuncionesCalculadoraSalarios);

        const welcomeArrow = document.getElementById("welcomeArrow");
        const certificados = document.querySelector("#certificados");
        certificados.classList.add("d-none");
        mainContainer.classList.remove("d-none");
        welcomeArrow.classList.add("d-none");
        title.innerText = "Calculadora de Mediana de Salarios";
        subtitle.innerText =
            "Calcula la mediana del salario de un porcentaje de personas de una lista";

        navGeometrica.classList.remove("active");
        navDescuentos.classList.remove("active");
        navPromedios.classList.remove("active");
        navCalculadora.classList.remove("active");
        navSalarios.classList.add("active");
    });
    // Calculadora Básica
    navCalculadora.addEventListener("click", () => {
        routes(CalculadoraBasica(), FuncionesCalculadoraBasica);

        const welcomeArrow = document.getElementById("welcomeArrow");
        const certificados = document.querySelector("#certificados");
        certificados.classList.add("d-none");
        mainContainer.classList.remove("d-none");
        welcomeArrow.classList.add("d-none");
        title.innerText = "Calculadora Básica";
        subtitle.innerText = "Calculadora básica interactiva";

        navGeometrica.classList.remove("active");
        navDescuentos.classList.remove("active");
        navPromedios.classList.remove("active");
        navSalarios.classList.remove("active");
        navCalculadora.classList.add("active");
    });
};

// Modal Header
const ModalHeader = () => {
// Modal
var ventanaModal6 = document.getElementById("ventanaModal6");
ventanaModal6.addEventListener("show.bs.modal", function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    var tipoCert = button.getAttribute("data-bs-cert");

    switch (tipoCert) {
        case "HTMLCSS":
            var imgUrl = `
            <div id="carouselHTMLCSS" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselHTMLCSS" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselHTMLCSS" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselHTMLCSS" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./assets/images/frontend-developer-practico.jpg" class="d-block w-100" alt="Certificado de Frontend Práctico">
                    </div>
                    <div class="carousel-item">
                    <img src="./assets/images/frontend-developer.jpg" class="d-block w-100" alt="Certificado de Frontend">
                    </div>
                    <div class="carousel-item">
                    <img src="./assets/images/html-css.jpg" class="d-block w-100" alt="Certificado en HTML y CSS">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselHTMLCSS" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselHTMLCSS" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        `;
            break;
        case "javascript":
            var imgUrl = `
            <div id="carouselJavascript" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselJavascript" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselJavascript" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselJavascript" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselJavascript" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselJavascript" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./assets/images/javascript-practico.jpg" class="d-block w-100" alt="Certificado en Javascript Práctico">
                    </div>
                    <div class="carousel-item">
                    <img src="./assets/images/ecmascript-6.jpg" class="d-block w-100" alt="Certificado en ECMAScript 6+">
                    </div>
                    <div class="carousel-item">
                    <img src="./assets/images/javascript-basico.jpg" class="d-block w-100" alt="Certificado en JavaScript Básico">
                    </div>
                    <div class="carousel-item">
                    <img src="./assets/images/asincronismo-js.jpg" class="d-block w-100" alt="Certificado en Asincronismo en Javascript">
                    </div>
                    <div class="carousel-item">
                    <img src="./assets/images/javascript-scope.jpg" class="d-block w-100" alt="Certificado en Clossures y Scope en Javascript">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselJavascript" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselJavascript" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        `;
            break;
        case "webpack":
            var imgUrl = `
            <div id="carouselWebpack" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselWebpack" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselWebpack" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./assets/images/webpack.jpg" class="d-block w-100" alt="Certificado en Webpack">
                    </div>
                    <div class="carousel-item">
                    <img src="./assets/images/npm.jpg" class="d-block w-100" alt="Certificado en NPM">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselWebpack" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselWebpack" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        `;
            break;
        case "SPA":
            var imgUrl = `
            <img
            src="./assets/images/spa-javascript.jpg"
            alt="Diploma de certificado"
            class="img-fluid"
            alt="Certificado en NPM"
        />`;
            break;
        default:
            var imgUrl = "No se encontró certificado para esta tecnología.";
    }

    // Update the modal's content.
    var modalTitle = ventanaModal6.querySelector("#ventanaModal6Label");
    var modalBody = ventanaModal6.querySelector(".modal-body");
    if(tipoCert === "SPA"){
        modalTitle.innerText = "Certificado SPA";
    }else{
        modalTitle.innerText = "Presiona las flechas laterales para ver más certificados";
    }
    
    modalBody.innerHTML = imgUrl;
});
};