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
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
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
