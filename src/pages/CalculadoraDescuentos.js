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

    // Fórmulas

    const botonIngreso = document.querySelector("#botonIngreso");
    botonIngreso.addEventListener("click", onClickButtonPriceDiscount2);
    const botonCupon = document.querySelector("#botonCupon");
    botonCupon.addEventListener("click", onClickButtonPriceDiscount);

    function calcularPrecioConDescuento(precio, descuento) {
        const porcentajePrecioConDescuento = 100 - descuento;
        const precioConDescuento =
            (precio * porcentajePrecioConDescuento) / 100;

        return precioConDescuento;
    }

    function onClickButtonPriceDiscount() {
        const inputPrice = document.getElementById("inputPrice");
        const priceValue = Number(inputPrice.value);
        const inputDiscount = document.getElementById("inputDiscount");
        const discountValue = Number(inputDiscount.value);

        const precioConDescuento = calcularPrecioConDescuento(
            priceValue,
            discountValue
        );
        return precioConDescuento;
    }

    function onClickButtonPriceDiscount2() {
        const inputPrice = document.getElementById("inputPrice");
        const priceValue = Number(inputPrice.value);
        const selectCupon = document.getElementById("floatingSelect");
        const cupon = Number(selectCupon.value);

        var descuento;
        switch (cupon) {
            case 1:
                descuento = 15;
                break;
            case 2:
                descuento = 25;
                break;
            case 3:
                descuento = 30;
                break;
            default:
                descuento = 0;
        }
        return calcularPrecioConDescuento(priceValue, descuento);
    }

    // Modal
    var ventanaModal2 = document.getElementById("ventanaModal2");
    ventanaModal2.addEventListener("show.bs.modal", function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget;
        // Extract info from data-bs-* attributes
        var tipoDescuento = button.getAttribute("data-bs-tipo");
        var resultado;

        if (tipoDescuento === "ingresado") {
            resultado = onClickButtonPriceDiscount();
        } else if (tipoDescuento === "cupon") {
            resultado = onClickButtonPriceDiscount2();
        }
        // Update the modal's content.
        var modalTitle = ventanaModal2.querySelector(".modal-title");
        var modalBody = ventanaModal2.querySelector(".modal-body");

        modalTitle.textContent = "El precio con descuento es de:";
        modalBody.textContent = "$ " + resultado;
    });

    // Calculadora de Descuentos Pills para Ingresar el tipo descuento
    const menuIngresar = document.querySelector("#menuIngresar");
    menuIngresar.addEventListener("click", displayCupon);
    const menuCupon = document.querySelector("#menuCupon");
    menuCupon.addEventListener("click", displayDescuento);

    function displayDescuento() {
        //Pills
        const cupon = document.getElementById("ingresoCupon");
        cupon.classList.remove("d-none");
        cupon.classList.add("d-block");

        menuCupon.classList.add("active");

        const ingresar = document.getElementById("ingresoDescuento");
        ingresar.classList.remove("d-block");
        ingresar.classList.add("d-none");

        menuIngresar.classList.remove("active");

        //Botones
        botonCupon.removeAttribute("disabled");
        botonCupon.classList.remove("btn-outline-secondary");
        botonCupon.classList.add("btn-outline-primary");

        botonIngreso.setAttribute("disabled", "");
        botonIngreso.classList.remove("btn-outline-primary");
        botonIngreso.classList.add("btn-outline-secondary");
    }

    // Calculadora de Descuentos usar cupón

    function displayCupon() {
        //Pills
        const ingresar = document.getElementById("ingresoDescuento");
        ingresar.classList.remove("d-none");
        ingresar.classList.add("d-block");

        menuIngresar.classList.add("active");

        const cupon = document.getElementById("ingresoCupon");
        cupon.classList.remove("d-block");
        cupon.classList.add("d-none");

        menuCupon.classList.remove("active");

        //Botones
        botonIngreso.removeAttribute("disabled");
        botonIngreso.classList.remove("btn-outline-secondary");
        botonIngreso.classList.add("btn-outline-primary");

        botonCupon.setAttribute("disabled", "");
        botonCupon.classList.remove("btn-outline-primary");
        botonCupon.classList.add("btn-outline-secondary");
    }

    return view;
};
export default CalculadoraDescuentos;
