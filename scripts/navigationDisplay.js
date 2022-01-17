// Nav Calculadora Geométrica
function displayGeometrica() {
    const calculadora2 = document.getElementById("calculadoraDescuentos");
    calculadora2.classList.remove("d-block");
    calculadora2.classList.add("d-none");

    const calculadora3 = document.getElementById("calculadoraPromedios");
    calculadora3.classList.remove("d-block");
    calculadora3.classList.add("d-none");

    const calculadora4 = document.getElementById("calculadoraSalarios");
    calculadora4.classList.remove("d-block");
    calculadora4.classList.add("d-none");

    const calculadora5 = document.getElementById("calculadoraBasica");
    calculadora5.classList.remove("d-flex");
    calculadora5.classList.add("d-none");

    const calculadora1 = document.getElementById("calculadoraGeometrica");
    calculadora1.classList.remove("d-none");
    calculadora1.classList.add("d-flex");

    const navDescuentos = document.getElementById("navDescuentos");
    const navPromedios = document.getElementById("navPromedios");
    const navSalarios = document.getElementById("navSalarios");
    const navCalculadora = document.getElementById("navCalculadora");
    const navGeometrica = document.getElementById("navGeometrica");

    navDescuentos.classList.remove("active");
    navPromedios.classList.remove("active");
    navSalarios.classList.remove("active");
    navCalculadora.classList.remove("active");
    navGeometrica.classList.add("active");

    const title = document.getElementById("headerTitle");
    title.innerText = "Calculadora Geométrica";
    const subtitle = document.getElementById("headerSubtitle");
    subtitle.innerText =
        "Calcula áreas y perímetros de figuras geométricas básicas";
}

// Nav Calculadora de Descuentos
function displayDescuentos() {
    const calculadora1 = document.getElementById("calculadoraGeometrica");
    calculadora1.classList.remove("d-flex");
    calculadora1.classList.add("d-none");

    const calculadora3 = document.getElementById("calculadoraPromedios");
    calculadora3.classList.remove("d-block");
    calculadora3.classList.add("d-none");

    const calculadora4 = document.getElementById("calculadoraSalarios");
    calculadora4.classList.remove("d-block");
    calculadora4.classList.add("d-none");

    const calculadora5 = document.getElementById("calculadoraBasica");
    calculadora5.classList.remove("d-flex");
    calculadora5.classList.add("d-none");

    const calculadora2 = document.getElementById("calculadoraDescuentos");
    calculadora2.classList.remove("d-none");
    calculadora2.classList.add("d-block");

    const navPromedios = document.getElementById("navPromedios");
    const navGeometrica = document.getElementById("navGeometrica");
    const navSalarios = document.getElementById("navSalarios");
    const navCalculadora = document.getElementById("navCalculadora");
    const navDescuentos = document.getElementById("navDescuentos");

    navGeometrica.classList.remove("active");
    navPromedios.classList.remove("active");
    navSalarios.classList.remove("active");
    navCalculadora.classList.remove("active");
    navDescuentos.classList.add("active");

    const title = document.getElementById("headerTitle");
    title.innerText = "Calculadora de Descuentos";
    const subtitle = document.getElementById("headerSubtitle");
    subtitle.innerText = "Calcula el precio a pagar de productos con descuento";
}

// Nav Calculadora de Promedios
function displayPromedios() {
    const calculadora1 = document.getElementById("calculadoraGeometrica");
    calculadora1.classList.remove("d-flex");
    calculadora1.classList.add("d-none");

    const calculadora2 = document.getElementById("calculadoraDescuentos");
    calculadora2.classList.remove("d-block");
    calculadora2.classList.add("d-none");

    const calculadora4 = document.getElementById("calculadoraSalarios");
    calculadora4.classList.remove("d-block");
    calculadora4.classList.add("d-none");

    const calculadora5 = document.getElementById("calculadoraBasica");
    calculadora5.classList.remove("d-flex");
    calculadora5.classList.add("d-none");

    const calculadora3 = document.getElementById("calculadoraPromedios");
    calculadora3.classList.remove("d-none");
    calculadora3.classList.add("d-block");

    const navDescuentos = document.getElementById("navDescuentos");
    const navGeometrica = document.getElementById("navGeometrica");
    const navSalarios = document.getElementById("navSalarios");
    const navCalculadora = document.getElementById("navCalculadora");
    const navPromedios = document.getElementById("navPromedios");

    navGeometrica.classList.remove("active");
    navDescuentos.classList.remove("active");
    navSalarios.classList.remove("active");
    navCalculadora.classList.remove("active");
    navPromedios.classList.add("active");

    const title = document.getElementById("headerTitle");
    title.innerText = "Calculadora de Promedios";
    const subtitle = document.getElementById("headerSubtitle");
    subtitle.innerText =
        "Calcula operaciones básicas de estadistica en base a una lista";
}

// Calculadora de Salarios
function displaySalarios() {
    const calculadora1 = document.getElementById("calculadoraGeometrica");
    calculadora1.classList.remove("d-flex");
    calculadora1.classList.add("d-none");

    const calculadora2 = document.getElementById("calculadoraDescuentos");
    calculadora2.classList.remove("d-block");
    calculadora2.classList.add("d-none");

    const calculadora3 = document.getElementById("calculadoraPromedios");
    calculadora3.classList.remove("d-block");
    calculadora3.classList.add("d-none");

    const calculadora5 = document.getElementById("calculadoraBasica");
    calculadora5.classList.remove("d-flex");
    calculadora5.classList.add("d-none");

    const calculadora4 = document.getElementById("calculadoraSalarios");
    calculadora4.classList.remove("d-none");
    calculadora4.classList.add("d-block");

    const navDescuentos = document.getElementById("navDescuentos");
    const navPromedios = document.getElementById("navPromedios");
    const navGeometrica = document.getElementById("navGeometrica");
    const navCalculadora = document.getElementById("navCalculadora");
    const navSalarios = document.getElementById("navSalarios");

    navGeometrica.classList.remove("active");
    navDescuentos.classList.remove("active");
    navPromedios.classList.remove("active");
    navCalculadora.classList.remove("active");
    navSalarios.classList.add("active");

    const title = document.getElementById("headerTitle");
    title.innerText = "Calculadora de Mediana de Salarios";
    const subtitle = document.getElementById("headerSubtitle");
    subtitle.innerText =
        "Calcula la mediana del salario de un porcentaje de personas de una lista";
}

// Calculadora Básica
function displayCalculadora() {
    const calculadora1 = document.getElementById("calculadoraGeometrica");
    calculadora1.classList.remove("d-flex");
    calculadora1.classList.add("d-none");

    const calculadora2 = document.getElementById("calculadoraDescuentos");
    calculadora2.classList.remove("d-block");
    calculadora2.classList.add("d-none");

    const calculadora3 = document.getElementById("calculadoraPromedios");
    calculadora3.classList.remove("d-block");
    calculadora3.classList.add("d-none");

    const calculadora4 = document.getElementById("calculadoraSalarios");
    calculadora4.classList.remove("d-block");
    calculadora4.classList.add("d-none");

    const calculadora5 = document.getElementById("calculadoraBasica");
    calculadora5.classList.remove("d-none");
    calculadora5.classList.add("d-flex");

    const navGeometrica = document.getElementById("navGeometrica");
    const navDescuentos = document.getElementById("navDescuentos");
    const navPromedios = document.getElementById("navPromedios");
    const navSalarios = document.getElementById("navSalarios");
    const navCalculadora = document.getElementById("navCalculadora");

    navGeometrica.classList.remove("active");
    navDescuentos.classList.remove("active");
    navPromedios.classList.remove("active");
    navSalarios.classList.remove("active");
    navCalculadora.classList.add("active");

    const title = document.getElementById("headerTitle");
    title.innerText = "Calculadora Básica";
    const subtitle = document.getElementById("headerSubtitle");
    subtitle.innerText = "Calculadora básica interactiva";
}
