const mainContainer = document.querySelector("main");
const title = document.getElementById("headerTitle");
const subtitle = document.getElementById("headerSubtitle");
const welcomeArrow = document.querySelector("#welcomeArrow");

const navGeometrica = document.querySelector("#navGeometrica");
const navDescuentos = document.querySelector("#navDescuentos");
const navPromedios = document.querySelector("#navPromedios");
const navSalarios = document.querySelector("#navSalarios");
const navCalculadora = document.querySelector("#navCalculadora");

const ajax = async (url, src) => {
    try {
        const data = await fetch(url);
        const contenido = await data.text();

        console.log(contenido);
        mainContainer.innerText = "";
        mainContainer.innerHTML = contenido;
        const script = document.createElement("script");
        script.src = src;
        mainContainer.appendChild(script);
    } catch (error) {
        console.log(error);
    }
};

// Calculadora Geométrica
navGeometrica.addEventListener("click", () => {
    ajax(
        "./views/calculadoraGeometrica.html",
        "./scripts/calculadoraGeometrica.js"
    );
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
    ajax(
        "./views/calculadoraDescuentos.html",
        "./scripts/calculadoraDescuentos.js"
    );
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
    ajax(
        "./views/calculadoraPromedios.html",
        "./scripts/calculadoraPromedios.js"
    );
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
    ajax(
        "./views/calculadoraSalarios.html",
        "./scripts/calculadoraSalarios.js"
    );
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
    ajax("./views/calculadoraBasica.html", "./scripts/calculadoraBasica.js");
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
