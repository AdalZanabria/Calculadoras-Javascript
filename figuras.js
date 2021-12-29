// Código del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm.");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm.");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrada + "cm².");

console.groupEnd();

// Código del triángulo
console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1
    + "cm, "
    + ladoTriangulo2
    + "cm y "
    + baseTriangulo
    + "cm."
    );

console.groupEnd();