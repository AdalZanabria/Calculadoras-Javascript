const FuncionesCalculadoraSalarios = () => {
    // Fórmulas

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

    function esPar(numero) {
        return numero % 2 === 0;
    }

    // Mediana de salarios
    function medianaSalarios(lista) {
        const mitad = parseInt(lista.length / 2);

        if (esPar(lista.length)) {
            let personaMitad1 = lista[mitad - 1];
            let personaMitad2 = lista[mitad];
            return (personaMitad1 + personaMitad2) / 2;
        } else {
            let personaMitad = lista[mitad];
            return personaMitad;
        }
    }

    function medianaGeneral(lista) {
        return medianaSalarios(salariosSorted(salariosPersonas(lista)));
    }

    // Mediana del top porcentual
    function medianaTopPorciento(lista, porciento) {
        const spliceStart =
            (salariosSorted(salariosPersonas(lista)).length *
                (100 - porciento)) /
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

    var personasContainer = document.getElementById("personasContainer");
    var agregarPersona = document.getElementById("agregarPersona");
    var eliminarPersona = document.getElementById("eliminarPersona");

    agregarPersona.addEventListener("click", () => {
        var personaDiv1 = document.querySelector("#personaDiv1");
        var nuevaPersona = personaDiv1.cloneNode(true);

        numeroPersona++;

        var span = nuevaPersona.getElementsByClassName("numeroPersona")[0];
        span.innerText = numeroPersona;

        nuevaPersona.id = "personaDiv" + numeroPersona;
        personasContainer.appendChild(nuevaPersona);
    });

    eliminarPersona.addEventListener("click", () => {
        if (numeroPersona > 2) {
            numeroPersona--;
            personas.pop;
        }
        var personasDivs =
            personasContainer.getElementsByClassName("personaDiv");
        if (personasDivs.length > 2) {
            personasContainer.removeChild(
                personasDivs[personasDivs.length - 1]
            );
        }
    });

    function llenarLista() {
        const numeroPersonas = personasContainer.childElementCount;
        var indexNombre = 0;
        var indexSalario = 1;
        for (var i = 0; i < numeroPersonas; i++) {
            personas.push({
                name: personasContainer.getElementsByTagName("input")[
                    indexNombre
                ].value,
                salary: Number(
                    personasContainer.getElementsByTagName("input")[
                        indexSalario
                    ].value
                ),
            });

            indexNombre += 2;
            indexSalario += 2;
        }
    }

    // Ventana Modal
    var ventanaModal4 = document.getElementById("ventanaModal4");
    ventanaModal4.addEventListener("show.bs.modal", function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget;
        const inputPorciento = document.getElementById("inputPorciento");
        personas = [];
        llenarLista();
        var resultado = medianaTopPorciento(
            personas,
            Number(inputPorciento.value)
        );

        // Update the modal's content.
        var modalTitle = ventanaModal4.querySelector(".modal-title");
        var modalBody = ventanaModal4.querySelector(".modal-body");
        var modalBody2 = ventanaModal4.querySelector(".b2");

        modalTitle.textContent = "Mediana de la lista de personas";
        modalBody.textContent =
            "La mediana de las " +
            personas.length +
            " personas es igual a: $" +
            medianaGeneral(personas) +
            ".";
        modalBody2.textContent =
            "La mediana del top " +
            Number(inputPorciento.value) +
            "% de las personas es igual a: $" +
            resultado +
            ".";
    });
};
export default FuncionesCalculadoraSalarios;
