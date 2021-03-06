const FuncionesCalculadoraDescuentos = () => {
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
};
export default FuncionesCalculadoraDescuentos;
