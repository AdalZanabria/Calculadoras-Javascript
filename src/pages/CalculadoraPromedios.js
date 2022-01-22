const CalculadoraPromedios = async () => {
    const view = `
    <!--Calculadora de Promedios-->
<section class="row mx-auto" id="calculadoraPromedios">
    <h4>Ingresa los números de la lista:</h4>
    <form>
        <div class="mb-3" id="inputsContainer">
            <input
                type="number"
                class="form-control"
                id="inputLista"
                name="array[]"
                placeholder="Ingresa un número"
            />
            <input
                type="number"
                class="form-control"
                id="inputLista"
                name="array[]"
                placeholder="Ingresa un número"
            />
        </div>
        <div class="mb-3">
            <button type="button" class="btn btn-primary" id="agregarInput">
                Agregar un número a la lista
            </button>
            <button type="button" class="btn btn-danger" id="eliminarInput">
                Eliminar un número a la lista
            </button>
        </div>

        <h4>Selecciona cálculo que quieres realizar:</h4>
        <div class="d-flex flex-row flex-wrap justify-content-start">
            <button
                type="button"
                class="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#ventanaModal3"
                data-bs-tipo="mediaAritmetica"
            >
                Media Aritmética
            </button>
            <button
                type="button"
                class="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#ventanaModal3"
                data-bs-tipo="mediaArmonica"
            >
                Media Armónica
            </button>
            <button
                type="button"
                class="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#ventanaModal3"
                data-bs-tipo="mediana"
            >
                Mediana
            </button>
            <button
                type="button"
                class="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#ventanaModal3"
                data-bs-tipo="moda"
            >
                Moda
            </button>
        </div>
    </form>
</section>

<!--Modal 3-->
<div
    class="modal fade"
    id="ventanaModal3"
    tabindex="-1"
    aria-labelledby="ventanaModal3"
    aria-hidden="true"
>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="ventanaModal3Label">Modal title</h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div class="modal-body">...</div>
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
export default CalculadoraPromedios;
