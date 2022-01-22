const CalculadoraSalarios = () => {
    const view = `
    <!--Calculadora de Salarios-->
<section class="row mx-auto" id="calculadoraSalarios">
    <h4>
        Ingresa las personas a calcular su mediana total, y la mediana de un top
        porcentual de la lista:
    </h4>
    <div class="mb-3">
        <button type="button" class="btn btn-primary" id="agregarPersona">
            Agregar una persona
        </button>
        <button type="button" class="btn btn-danger" id="eliminarPersona">
            Eliminar una persona
        </button>
    </div>

    <div class="d-flex flex-wrap mt-4" id="personasContainer">
        <!--Persona 1-->
        <div class="neumorphism rounded p-2 m-2 personaDiv" id="personaDiv1">
            <p class="lead">Persona <span class="numeroPersona">1</span></p>
            <form>
                <div class="form-floating mb-3">
                    <input
                        id="inputNombre"
                        type="text"
                        class="form-control"
                        placeholder="Jose"
                        name="personaNombre[]"
                    />
                    <label for="inputNombre" class="floatingInput">
                        Nombre de la persona:
                    </label>
                </div>
                <div class="form-floating mb-3">
                    <input
                        id="inputSalario"
                        type="number"
                        class="form-control"
                        placeholder="500"
                        name="personaSalario[]"
                    />
                    <label for="inputNombre" class="floatingInput">
                        Salario de la persona:
                    </label>
                </div>
            </form>
        </div>

        <!--Persona 2-->
        <div class="neumorphism rounded p-2 m-2 personaDiv" id="personaDiv2">
            <p class="lead">Persona <span class="numeroPersona">2</span></p>
            <form>
                <div class="form-floating mb-3">
                    <input
                        id="inputNombre"
                        type="text"
                        class="form-control"
                        placeholder="Jose"
                        name="personaNombre[]"
                    />
                    <label for="inputNombre" class="floatingInput">
                        Nombre de la persona:
                    </label>
                </div>
                <div class="form-floating mb-3">
                    <input
                        id="inputSalario"
                        type="number"
                        class="form-control"
                        placeholder="500"
                        name="personaSalario[]"
                    />
                    <label for="inputNombre" class="floatingInput">
                        Salario de la persona:
                    </label>
                </div>
            </form>
        </div>
    </div>

    <div class="container">
        <div class="form-floating my-3">
            <input
                id="inputPorciento"
                type="number"
                class="form-control"
                placeholder="Ingresar porcentaje"
            />
            <label for="inputNombrePorcientoatingInput">
                Ingresar un porcentaje de la lista
            </label>
        </div>
        <button
            type="button"
            class="btn btn-outline-primary"
            id="MediaPorcentaje"
            data-bs-toggle="modal"
            data-bs-target="#ventanaModal4"
        >
            Mediana del porcentaje
        </button>
    </div>
</section>

<!--Modal 4-->
<div
    class="modal fade"
    id="ventanaModal4"
    tabindex="-1"
    aria-labelledby="ventanaModal4"
    aria-hidden="true"
>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="ventanaModal4Label">Modal title</h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-body b2">...</div>
            <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                >
                    Volver
                </button>
            </div>
        </div>
    </div>
</div>
`;

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

    return view;
};
export default CalculadoraSalarios;
