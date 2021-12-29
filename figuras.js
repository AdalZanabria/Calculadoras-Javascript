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
    return (radio * radio) * Math.PI;
}

// Interacción con HTML

// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
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
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("InputTriangulo3");
    const valorBase = Number(base.value);

    const altura = document.getElementById("InputTriangulo4");
    const valorAltura = Number(altura.value);

    const area = areaTriangulo(valorBase, valorAltura);
    alert(area);
}

// Circulo
function calcularPerimetroCirculo() {
    const radio = document.getElementById("InputCirculo");
    const valorRadio = Number(radio.value);

    const perimetro = perimetroCirculo(valorRadio);
    alert(perimetro);

}

function calcularAreaCirculo() {
    const radio = document.getElementById("InputCirculo");
    const valorRadio = Number(radio.value);

    const area = areaCirculo(valorRadio);
    alert(area);
}