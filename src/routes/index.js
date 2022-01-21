// Modules
import CalculadoraGeometrica from "../pages/CalculadoraGeometrica.js";
import CalculadoraDescuentos from "../pages/CalculadoraDescuentos.js";
import CalculadoraPromedios from "../pages/CalculadoraPromedios.js";
import CalculadoraSalarios from "../pages/CalculadoraSalarios.js";
import CalculadoraBasica from "../pages/CalculadoraBasica.js";

// DOM consts
const mainContainer = document.querySelector("#main");
const title = document.getElementById("headerTitle");
const subtitle = document.getElementById("headerSubtitle");
const welcomeArrow = document.querySelector("#welcomeArrow");
// NavBar consts
const navGeometrica = document.querySelector("#navGeometrica");
const navDescuentos = document.querySelector("#navDescuentos");
const navPromedios = document.querySelector("#navPromedios");
const navSalarios = document.querySelector("#navSalarios");
const navCalculadora = document.querySelector("#navCalculadora");

const ajax = async (view) => {
    try {
        console.log(view);
        mainContainer.innerHTML = await view;
    } catch (error) {
        console.log(error);
    }
};

// Calculadora Geométrica
navGeometrica.addEventListener("click", () => {
    ajax(CalculadoraGeometrica);

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
    ajax(CalculadoraDescuentos);

    mainContainer.classList.remove("d-none");
    welcomeArrow.classList.add("d-none");
    title.innerText = "Calculadora de Descuentos";
    subtitle.innerText = "Calcula el precio a pagar de productos con descuento";

    navGeometrica.classList.remove("active");
    navPromedios.classList.remove("active");
    navSalarios.classList.remove("active");
    navCalculadora.classList.remove("active");
    navDescuentos.classList.add("active");
});

// Calculadora de Promedios
navPromedios.addEventListener("click", () => {
    ajax(CalculadoraPromedios);

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
    ajax(CalculadoraSalarios);

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
    ajax(CalculadoraBasica);

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
