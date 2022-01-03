function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

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

// Modal
var ventanaModal2 = document.getElementById("ventanaModal2");
ventanaModal2.addEventListener("show.bs.modal", function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    const resultado = onClickButtonPriceDiscount();

    // Update the modal's content.
    var modalTitle = ventanaModal2.querySelector(".modal-title");
    var modalBody = ventanaModal2.querySelector(".modal-body");

    modalTitle.textContent = "El precio con descuento es de:";
    modalBody.textContent = resultado;
});
