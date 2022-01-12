//Helpers
const salariosCol = colombia.map(function (persona) {
    return persona.salary;
});

const salariosColSorted = salariosCol.sort(function (salaryA, salaryB) {
    return salaryA - salaryB;
}, 0);

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

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);
const medianaTop10Col = medianaSalarios(salariosColTop10);

// Personas Dinámicas
var numeroPersona = 2;
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
    }
    var personasDivs = personasContainer.getElementsByClassName("personaDiv");
    if (personasDivs.length > 2) {
        personasContainer.removeChild(personasDivs[personasDivs.length - 1]);
    }
};
