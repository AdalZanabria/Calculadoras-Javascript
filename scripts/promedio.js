//Media Aritmética
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function (
        valorAcumulado = 0,
        nuevoElemento
    ) {
        return valorAcumulado + nuevoElemento;
    });

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Mediana
function esPar(numero) {
        return (numero % 2 === 0);
}

function calcularMediana(lista) {
    //Ordenar la lista de menor a mayor
    let listaOrdenada = lista.sort(function (a, b) {
        return a - b;
    });

    // Calcular la mited de la lista dividiendo su longitud entre 2, y cambiarlo a Int en caso de que de un número decimal
    const mitadLista = parseInt(listaOrdenada.length / 2);

    let mediana;

    // Si es par, calcular la media aritmética de los dos números que se encuentren en medio de la lista
    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElemento1y2;
    } else {
        //Si no es par, retornar el elemento en la mitad de la lista
        mediana = listaOrdenada[mitadLista];
    }

    return mediana;
}

// Moda
function calcularModa(lista) {
    const listaCount = {};

    lista.map(function (elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    });

    const listaArray = Object.entries(listaCount).sort(function (
        elementoA,
        elementoB
    ) {
        return elementoA[1] - elementoB[1];
    });

    const moda = listaArray[listaArray.length - 1];

    return moda[0];
}

// Media Armónica
function calcularMediaArmonica(lista) {
    var hayCero = false;
    lista.map(function (elemento) {
        if (elemento <= 0) {
            hayCero = true;
        }
    });

    if (hayCero == false) {
        const sumaLista = lista.reduce(function (
            valorAcumulado,
            nuevoElemento
        ) {
            return valorAcumulado + 1 / nuevoElemento;
        },
        0);
        return lista.length / sumaLista;
    } else {
        return "La media armónica no puede ser calculada si existe un 0 en la lista.";
    }
}

//Inputs dinámicos
const inputsContainer = document.getElementById("inputsContainer");
const agregarInput = document.getElementById("agregarInput");
const eliminarInput = document.getElementById("eliminarInput");

agregarInput.onclick = function () {
    var nuevoInput = document.createElement("input");
    nuevoInput.setAttribute("type", "number");
    nuevoInput.setAttribute("class", "form-control");
    nuevoInput.setAttribute("placeholder", "Ingresa un número");
    nuevoInput.setAttribute("name", "array[]");

    inputsContainer.appendChild(nuevoInput);
};

eliminarInput.onclick = function () {
    var inputTags = inputsContainer.getElementsByTagName("input");
    if (inputTags.length > 2) {
        inputsContainer.removeChild(inputTags[inputTags.length - 1]);
    }
};

// Crear array
function crearArray() {
    const inputs = document.getElementsByName("array[]");
    var array = [];
    for (var i = 0; i < inputs.length; i++) {
        array.push(Number(inputs[i].value));
    }
    return array;
}

// Ventana Modal
var ventanaModal3 = document.getElementById("ventanaModal3");
ventanaModal3.addEventListener("show.bs.modal", function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    var tipoPromedio = button.getAttribute("data-bs-tipo");
    var resultado;

    switch (tipoPromedio){
        case "mediaAritmetica":
            resultado = calcularMediaAritmetica(crearArray());
            break;
        case "mediaArmonica":
            resultado = calcularMediaArmonica(crearArray());
            break;
        case "mediana":
            resultado = calcularMediana(crearArray());
            break;
        case "moda":
            resultado = calcularModa(crearArray());
            break;
        default:
            resultado = "Operación no encontrada."
            break;
    }
    // Update the modal's content.
    var modalTitle = ventanaModal3.querySelector(".modal-title");
    var modalBody = ventanaModal3.querySelector(".modal-body");

    modalTitle.textContent = "La " + tipoPromedio + " es igual a: ";
    modalBody.textContent = resultado;
});