//Calculadora Geométrica
function display1() {
    const calculadora2 = document.getElementById("calculadoraDescuentos");
    calculadora2.style.display = "none";

    const calculadora1 = document.getElementById("calculadoraGeometrica");
    calculadora1.style.display = "block";
}

function display2() {
    const calculadora1 = document.getElementById("calculadoraGeometrica");
    calculadora1.style.display = "none";

    const calculadora2 = document.getElementById("calculadoraDescuentos");
    calculadora2.style.display = "block";
}

function display3() {
    //Pills
    const cupon = document.getElementById("ingresoCupon");
    cupon.style.display = "block";
    const cuponPill = document.getElementById("menuCupon");
    cuponPill.classList.add("active");

    const ingresar = document.getElementById("ingresoDescuento");
    ingresar.style.display = "none";
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

function display4() {
    //Pills
    const ingresar = document.getElementById("ingresoDescuento");
    ingresar.style.display = "block";
    const ingresoPill = document.getElementById("menuIngresar");
    ingresoPill.classList.add("active");

    const cupon = document.getElementById("ingresoCupon");
    cupon.style.display = "none";
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
