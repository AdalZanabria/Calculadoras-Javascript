//Helpers
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }, 0
);

// Mediana de salarios
function medianaSalarios (lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        personaMitad1 = lista[mitad-1];
        personaMitad2 = lista[mitad];
        return (personaMitad1+personaMitad2) / 2;

    }else {
        personaMitad = lista[mitad];
        return personaMitad;
    }
};

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);
const medianaTop10Col = medianaSalarios(salariosColTop10);

