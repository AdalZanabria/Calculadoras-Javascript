const CalculadoraDescuentos = () => {
    const view = `
    <!--Calculadora de Descuentos-->
<section class="row mx-auto" id="calculadoraDescuentos">
    <h4>Ingresa el precio del producto seguido de su descuento:</h4>
    <form>
        <div class="form-floating mb-3">
            <input
                id="inputPrice"
                type="number"
                class="form-control"
                placeholder="5"
            />
            <label for="inputPrice" class="floatingInput">
                Precio del producto:
            </label>
        </div>

        <!--Pills select-->
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a
                    class="nav-link active"
                    aria-current="page"
                    href="#!"
                    id="menuIngresar"
                >
                    Ingresar descuento
                </a>
            </li>
            <li class="nav-item">
                <a
                    class="nav-link"
                    href="#!"
                    id="menuCupon"
                >
                    Usar cupón
                </a>
            </li>
        </ul>
        <!--Escribe el desceunto-->
        <div class="form-floating mb-3" id="ingresoDescuento">
            <input
                id="inputDiscount"
                type="number"
                class="form-control"
                placeholder="5"
            />
            <label for="inputDiscount" class="floatingInput">
                Descuento del producto:
            </label>
        </div>
        <!--Selecciona Cupón-->
        <div class="form-floating mb-3 d-none" id="ingresoCupon">
            <select
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
            >
                <option value="1">15% de descuento</option>
                <option value="2">25% de descuento</option>
                <option value="3">30% de descuento</option>
            </select>
            <label for="floatingSelect">Selecciona un cupón:</label>
        </div>

        <button
            type="button"
            class="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#ventanaModal2"
            data-bs-tipo="ingresado"
            id="botonIngreso"
        >
            Calcular el precio con descuento ingresado
        </button>
        <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-toggle="modal"
            data-bs-target="#ventanaModal2"
            data-bs-tipo="cupon"
            id="botonCupon"
            disabled
        >
            Calcular el precio con descuento de cupón
        </button>
    </form>
</section>

<!--Modal 2-->
<div
    class="modal fade"
    id="ventanaModal2"
    tabindex="-1"
    aria-labelledby="ventanaModal2"
    aria-hidden="true"
>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="ventanaModal2Label">Modal title</h5>
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
export default CalculadoraDescuentos;
