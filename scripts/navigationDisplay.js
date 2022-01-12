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

    const calculadora1 = document.getElementById("calculadoraGeometrica");
    calculadora1.classList.remove("d-none");
    calculadora1.classList.add("d-flex");

    const navDescuentos = document.getElementById("navDescuentos");
    navDescuentos.classList.remove("active");

    const navPromedios = document.getElementById("navPromedios");
    navPromedios.classList.remove("active");

    const navSalarios = document.getElementById("navSalarios");
    navSalarios.classList.remove("active");

    const navGeometrica = document.getElementById("navGeometrica");
    navGeometrica.classList.add("active");

    const title = document.getElementById("headerTitle");
    title.innerText = "Calculadora Geométrica";
    const subtitle = document.getElementById("headerSubtitle");
    subtitle.innerText = "Primer práctica de JavaScript";
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

    const calculadora2 = document.getElementById("calculadoraDescuentos");
    calculadora2.classList.remove("d-none");
    calculadora2.classList.add("d-block");

    const navPromedios = document.getElementById("navPromedios");
    navPromedios.classList.remove("active");

    const navGeometrica = document.getElementById("navGeometrica");
    navGeometrica.classList.remove("active");

    const navSalarios = document.getElementById("navSalarios");
    navSalarios.classList.remove("active");

    const navDescuentos = document.getElementById("navDescuentos");
    navDescuentos.classList.add("active");

    const title = document.getElementById("headerTitle");
    title.innerText = "Calculadora de Descuentos";
    const subtitle = document.getElementById("headerSubtitle");
    subtitle.innerText = "Segunda práctica de JavaScript";
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

    const calculadora3 = document.getElementById("calculadoraPromedios");
    calculadora3.classList.remove("d-none");
    calculadora3.classList.add("d-block");

    const navDescuentos = document.getElementById("navDescuentos");
    navDescuentos.classList.remove("active");

    const navGeometrica = document.getElementById("navGeometrica");
    navGeometrica.classList.remove("active");

    const navSalarios = document.getElementById("navSalarios");
    navSalarios.classList.remove("active");

    const navPromedios = document.getElementById("navPromedios");
    navPromedios.classList.add("active");

    const title = document.getElementById("headerTitle");
    title.innerText = "Calculadora de Promedios";
    const subtitle = document.getElementById("headerSubtitle");
    subtitle.innerText = "Tercera práctica de JavaScript";
}

// Calculadora de Descuentos Pills para Ingresar el tipo descuento
function displayDescuento() {
    //Pills
    const cupon = document.getElementById("ingresoCupon");
    cupon.classList.remove("d-none");
    cupon.classList.add("d-block");
    const cuponPill = document.getElementById("menuCupon");
    cuponPill.classList.add("active");

    const ingresar = document.getElementById("ingresoDescuento");
    ingresar.classList.remove("d-block");
    ingresar.classList.add("d-none");
    const ingresoPill = document.getElementById("menuIngresar");
    ingresoPill.classList.remove("active");

    //Botones
    const botonCupon = document.getElementById("botonCupon");
    botonCupon.removeAttribute("disabled");
    botonCupon.classList.remove("btn-outline-secondary");
    botonCupon.classList.add("btn-outline-primary");

    const botonIngreso = document.getElementById("botonIngreso");
    botonIngreso.setAttribute("disabled", "");
    botonIngreso.classList.remove("btn-outline-primary");
    botonIngreso.classList.add("btn-outline-secondary");
}

// Calculadora de Descuentos usar cupón
function displayCupon() {
    //Pills
    const ingresar = document.getElementById("ingresoDescuento");
    ingresar.classList.remove("d-none");
    ingresar.classList.add("d-block");
    const ingresoPill = document.getElementById("menuIngresar");
    ingresoPill.classList.add("active");

    const cupon = document.getElementById("ingresoCupon");
    cupon.classList.remove("d-block");
    cupon.classList.add("d-none");
    const cuponPill = document.getElementById("menuCupon");
    cuponPill.classList.remove("active");

    //Botones
    const botonIngreso = document.getElementById("botonIngreso");
    botonIngreso.removeAttribute("disabled");
    botonIngreso.classList.remove("btn-outline-secondary");
    botonIngreso.classList.add("btn-outline-primary");

    const botonCupon = document.getElementById("botonCupon");
    botonCupon.setAttribute("disabled", "");
    botonCupon.classList.remove("btn-outline-primary");
    botonCupon.classList.add("btn-outline-secondary");
}

// CAlculadora de Salarios
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

    const calculadora4 = document.getElementById("calculadoraSalarios");
    calculadora4.classList.remove("d-none");
    calculadora4.classList.add("d-block");

    const navDescuentos = document.getElementById("navDescuentos");
    navDescuentos.classList.remove("active");

    const navPromedios = document.getElementById("navPromedios");
    navPromedios.classList.remove("active");

    const navGeometrica = document.getElementById("navGeometrica");
    navGeometrica.classList.remove("active");

    const navSalarios = document.getElementById("navSalarios");
    navSalarios.classList.add("active");

    const title = document.getElementById("headerTitle");
    title.innerText = "Calculadora de Mediana de Salarios";
    const subtitle = document.getElementById("headerSubtitle");
    subtitle.innerText = "Cuarta práctica de JavaScript";
}
