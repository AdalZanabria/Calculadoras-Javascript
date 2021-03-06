const CalculadoraSalarios = async () => {
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

    return view;
};
export default CalculadoraSalarios;
