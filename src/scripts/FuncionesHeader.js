    // Modal
    var ventanaModal6 = document.getElementById("ventanaModal6");
    ventanaModal6.addEventListener("show.bs.modal", function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget;
        // Extract info from data-bs-* attributes
        var tipoCert = button.getAttribute("data-bs-cert");

        switch (tipoCert) {
            case "HTMLCSS":
                var imgUrl = `<p>HTML y CSS</p>`;
                break;
            case "javascript":
                var imgUrl = `<p>JavaScript</p>`;
                break;
            case "webpack":
                var imgUrl = `<p>Webpack</p>`;
                break;
            case "SPA":
                var imgUrl = `
                <img
                src="./assets/images/spa-javascript.png"
                alt="Diploma de certificado"
                class="img-fluid"
            />`;
                break;
            default:
                var imgUrl = "No se encontró certificado para esta tecnología.";
        }

        // Update the modal's content.
        var modalTitle = ventanaModal6.querySelector(".modal-title");
        var modalBody = ventanaModal6.querySelector(".modal-body");

        modalTitle.textContent = "Presiona las flechas laterales para ver mas certificados";
        modalBody.innerHTML = imgUrl;
    });