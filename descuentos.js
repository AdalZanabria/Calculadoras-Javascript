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
var ventanaModal = document.getElementById("ventanaModal");
ventanaModal.addEventListener("show.bs.modal", function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    var calculo = button.getAttribute("data-bs-calculo");

    // Update the modal's content.
    var modalTitle = ventanaModal.querySelector(".modal-title");
    var modalBody = ventanaModal.querySelector(".modal-body");

    modalTitle.textContent = "El precio con descuento es de:";
    modalBody.textContent =
        "El " + calculo + " del " + figura + " es igual a: " + resultado;
});
