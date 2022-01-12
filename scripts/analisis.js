//Helpers
function salariosPersonas(lista) {
    return lista.map(function (persona) {
        return persona.salary;
    });
}

function salariosSorted(lista) {
    return lista.sort(function (salaryA, salaryB) {
        return salaryA - salaryB;
    }, 0);
}

// Mediana de salarios
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        personaMitad1 = lista[mitad - 1];
        personaMitad2 = lista[mitad];
        return (personaMitad1 + personaMitad2) / 2;
    } else {
        personaMitad = lista[mitad];
        return personaMitad;
    }
}

function medianaGeneral(lista) {
    return medianaSalarios(salariosSorted(salariosPersonas(lista)));
}

// Mediana del top porcentual
function medianaTopPorciento(lista, porciento) {
    const spliceStart =
        (salariosSorted(salariosPersonas(lista)).length * (100 - porciento)) /
        100;
    const spliceCount =
        salariosSorted(salariosPersonas(lista)).length - spliceStart;
    const salariosTop = salariosSorted(salariosPersonas(lista)).splice(
        spliceStart,
        spliceCount
    );
    return medianaSalarios(salariosTop);
}

// Lista de Personas Dinámicas
var numeroPersona = 2;
var personas = [];

const personasContainer = document.getElementById("personasContainer");
const agregarPersona = document.getElementById("agregarPersona");
const eliminarPersona = document.getElementById("eliminarPersona");

agregarPersona.onclick = function () {
    var personaDiv1 = document.querySelector("#personaDiv1");
    var nuevaPersona = personaDiv1.cloneNode(true);

    numeroPersona++;

    var span = nuevaPersona.getElementsByClassName("numeroPersona")[0];
    span.innerText = numeroPersona;

    nuevaPersona.id = "personaDiv" + numeroPersona;
    personasContainer.appendChild(nuevaPersona);
};

eliminarPersona.onclick = function () {
    if (numeroPersona > 2) {
        numeroPersona--;
        personas.pop;
    }
    var personasDivs = personasContainer.getElementsByClassName("personaDiv");
    if (personasDivs.length > 2) {
        personasContainer.removeChild(personasDivs[personasDivs.length - 1]);
    }
};

function llenarLista() {
    const numeroPersonas = personasContainer.childElementCount;
    var indexNombre = 0;
    var indexSalario = 1;
    for (var i = 0; i < numeroPersonas; i++) {
        personas.push({
            name: personasContainer.getElementsByTagName("input")[indexNombre]
                .value,
            salary: Number(
                personasContainer.getElementsByTagName("input")[indexSalario]
                    .value
            ),
        });

        indexNombre += 2;
        indexSalario += 2;
    }
}

const btnMedianaPorcentaje = document.getElementById("MediaPorcentaje");
const inputPorciento = document.getElementById("inputPorciento");

btnMedianaPorcentaje.onclick = function () {
    personas = [];
    llenarLista();
    console.log(medianaTopPorciento(personas, Number(inputPorciento.value)));
};
