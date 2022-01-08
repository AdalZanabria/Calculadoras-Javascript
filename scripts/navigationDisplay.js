//Nav Calculadora Geométrica
function display1() {
    const calculadora2 = document.getElementById("calculadoraDescuentos");
    calculadora2.classList.remove("d-block");
    calculadora2.classList.add("d-none");

    const calculadora1 = document.getElementById("calculadoraGeometrica");
    calculadora1.classList.remove("d-none");
    calculadora1.classList.add("d-flex");

    const title = document.getElementById("headerTitle");
    title.innerText = "Calculadora Geométrica";
    const subtitle = document.getElementById("headerSubtitle");
    subtitle.innerText = "Primer práctica de JavaScript";
}

//Nav Calculadora de Descuentos
function display2() {
    const calculadora1 = document.getElementById("calculadoraGeometrica");
    calculadora1.classList.remove("d-flex");
    calculadora1.classList.add("d-none");

    const calculadora2 = document.getElementById("calculadoraDescuentos");
    calculadora2.classList.remove("d-none");
    calculadora2.classList.add("d-block");

    const title = document.getElementById("headerTitle");
    title.innerText = "Calculadora de Descuentos";
    const subtitle = document.getElementById("headerSubtitle");
    subtitle.innerText = "Segunda práctica de JavaScript";
}

//Calculadora de Descuentos Ingresar descuento
function display3() {
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

//Calculadora de Descuentos usar cupón
function display4() {
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
