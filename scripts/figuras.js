// Código del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

// Código del triángulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//Código del círculo
function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio) {
    return radio * radio * Math.PI;
}

// Interacción con HTML

// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    return perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    return area;
}

// Triángulo
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("InputTriangulo1");
    const valor1 = Number(lado1.value);

    const lado2 = document.getElementById("InputTriangulo2");
    const valor2 = Number(lado2.value);

    const base = document.getElementById("InputTriangulo3");
    const valorBase = Number(base.value);

    const perimetro = perimetroTriangulo(valor1, valor2, valorBase);
    return perimetro;
}

function calcularAreaTriangulo() {
    const base = document.getElementById("InputTriangulo3");
    const valorBase = Number(base.value);

    const altura = document.getElementById("InputTriangulo4");
    const valorAltura = Number(altura.value);

    const area = areaTriangulo(valorBase, valorAltura);
    return area;
}

// Triangulo Isósceles
function calcularAlturaIsosceles() {
    const lado1 = document.getElementById("InputIsosceles1");
    const valor1 = Number(lado1.value);

    const lado2 = document.getElementById("InputIsosceles2");
    const valor2 = Number(lado2.value);

    const base = document.getElementById("InputIsosceles3");
    const valorBase = Number(base.value);

    if (valor1 === valor2) {
        const altura = Math.sqrt(valor1 * valor1 - (valorBase * valorBase) / 4);
        return altura;
    } else {
        return "Error: El triángulo no es isósceles.";
    }
}

// Circulo
function calcularPerimetroCirculo() {
    const radio = document.getElementById("InputCirculo");
    const valorRadio = Number(radio.value);

    const perimetro = perimetroCirculo(valorRadio);
    return perimetro;
}

function calcularAreaCirculo() {
    const radio = document.getElementById("InputCirculo");
    const valorRadio = Number(radio.value);

    const area = areaCirculo(valorRadio);
    return area;
}

// Modal
var ventanaModal1 = document.getElementById("ventanaModal1");
ventanaModal1.addEventListener("show.bs.modal", function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    var calculo = button.getAttribute("data-bs-calculo");
    var figura = button.getAttribute("data-bs-figura");
    var operacion = calculo + figura;

    switch (operacion) {
        case "perimetrotriangulo":
            var resultado = calcularPerimetroTriangulo();
            break;
        case "areatriangulo":
            var resultado = calcularAreaTriangulo();
            break;
        case "perimetrocuadrado":
            var resultado = calcularPerimetroCuadrado();
            break;
        case "areacuadrado":
            var resultado = calcularAreaCuadrado();
            break;
        case "perimetrocirculo":
            var resultado = calcularPerimetroCirculo();
            break;
        case "areacirculo":
            var resultado = calcularAreaCirculo();
            break;
        case "alturaisosceles":
            var resultado = calcularAlturaIsosceles();
            break;
        default:
            var resultado = "No se encontró caso.";
    }

    // Update the modal's content.
    var modalTitle = ventanaModal1.querySelector(".modal-title");
    var modalBody = ventanaModal1.querySelector(".modal-body");

    modalTitle.textContent = mayuscula(calculo) + " del " + figura;
    modalBody.textContent =
        "El " + calculo + " del " + figura + " es igual a: " + resultado;
});

// Primera letra en mayúscula
function mayuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
