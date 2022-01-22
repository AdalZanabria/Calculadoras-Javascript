const CalculadoraGeometrica = async () => {
    const view = `
    <!--Calculadora Geométrica-->
<section class="row mx-auto" id="calculadoraGeometrica">
    <!--Triángulo-->
    <div class="col-sm-12 col-md-6 col-lg-3 mt-4">
        <div class="card neumorphism border-0">
            <div class="card-body">
                <div class="icon-container mx-auto">
                    <i class="bi bi-triangle display-6"></i>
                </div>
                <h2 class="card-title my-2 display-6 text-center">Triángulo</h2>

                <form>
                    <div class="d-flex flex-column justify-content-between">
                        <div class="form-floating mb-3">
                            <input
                                type="number"
                                class="form-control"
                                id="InputTriangulo1"
                                placeholder="5"
                            />
                            <label for="InputTriangulo1" class="floatingInput">
                                Medida del lado 1:
                            </label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="number"
                                class="form-control"
                                id="InputTriangulo2"
                                placeholder="5"
                            />
                            <label for="InputTriangulo2" class="floatingInput">
                                Medida del lado 2:
                            </label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="number"
                                class="form-control"
                                id="InputTriangulo3"
                                placeholder="5"
                            />
                            <label for="InputTriangulo3" class="floatingInput">
                                Medida de la base:
                            </label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="number"
                                class="form-control"
                                id="InputTriangulo4"
                                placeholder="5"
                            />
                            <label for="InputTriangulo4" class="floatingInput">
                                Medida de la altura:
                            </label>
                        </div>
                    </div>

                    <div class="d-flex justify-content-evenly">
                        <button
                            type="button"
                            class="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#ventanaModal1"
                            data-bs-calculo="perimetro"
                            data-bs-figura="triangulo"
                        >
                            Calcular perímetro
                        </button>
                        <button
                            type="button"
                            class="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#ventanaModal1"
                            data-bs-calculo="area"
                            data-bs-figura="triangulo"
                        >
                            Calcular área
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--Triangulo Isósceles-->
    <div class="col-sm-12 col-md-6 col-lg-3 mt-4">
        <div class="card neumorphism border-0">
            <div class="card-body">
                <div class="icon-container mx-auto">
                    <i class="bi bi-caret-up display-3"></i>
                </div>
                <h2 class="card-title my-2 display-6 text-center">
                    Triangulo Isósceles
                </h2>
                <form>
                    <div class="d-flex flex-column justify-content-between">
                        <div class="form-floating mb-3">
                            <input
                                type="number"
                                class="form-control"
                                id="InputIsosceles1"
                                placeholder="5"
                            />
                            <label for="InputIsosceles1" class="floatingInput">
                                Medida del lado 1:
                            </label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="number"
                                class="form-control"
                                id="InputIsosceles2"
                                placeholder="5"
                            />
                            <label for="InputIsosceles2" class="floatingInput">
                                Medida del lado 2:
                            </label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="number"
                                class="form-control"
                                id="InputIsosceles3"
                                placeholder="5"
                            />
                            <label for="InputIsosceles3" class="floatingInput">
                                Medida de la base:
                            </label>
                        </div>
                    </div>

                    <div class="d-flex justify-content-evenly">
                        <button
                            type="button"
                            class="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#ventanaModal1"
                            data-bs-calculo="altura"
                            data-bs-figura="isosceles"
                        >
                            Calcular Altura
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--Cuadrado-->
    <div class="col-sm-12 col-md-6 col-lg-3 mt-4">
        <div class="card neumorphism border-0">
            <div class="card-body">
                <div class="icon-container mx-auto">
                    <i class="bi bi-square display-6"></i>
                </div>
                <h2 class="card-title my-2 display-6 text-center">Cuadrado</h2>
                <form>
                    <div class="form-floating mb-3">
                        <input
                            type="number"
                            class="form-control"
                            id="InputCuadrado"
                            placeholder="5"
                        />
                        <label for="InputCuadrado" class="floatingInput">
                            Medida de los lados:
                        </label>
                    </div>

                    <div class="d-flex justify-content-evenly">
                        <button
                            type="button"
                            class="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#ventanaModal1"
                            data-bs-calculo="perimetro"
                            data-bs-figura="cuadrado"
                        >
                            Calcular perímetro
                        </button>
                        <button
                            type="button"
                            class="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#ventanaModal1"
                            data-bs-calculo="area"
                            data-bs-figura="cuadrado"
                        >
                            Calcular área
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--Circulo-->
    <div class="col-sm-12 col-md-6 col-lg-3 mt-4">
        <div class="card neumorphism border-0">
            <div class="card-body">
                <div class="icon-container mx-auto">
                    <i class="bi bi-circle display-6"></i>
                </div>
                <h2 class="card-title my-2 display-6 text-center">Círculo</h2>

                <form>
                    <div class="form-floating mb-3">
                        <input
                            type="number"
                            class="form-control"
                            id="InputCirculo"
                            placeholder="5"
                        />
                        <label for="InputCirculo" class="floatingInput">
                            Medida del radio:
                        </label>
                    </div>

                    <div class="d-flex justify-content-evenly">
                        <button
                            type="button"
                            class="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#ventanaModal1"
                            data-bs-calculo="perimetro"
                            data-bs-figura="circulo"
                        >
                            Calcular perímetro
                        </button>
                        <button
                            type="button"
                            class="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#ventanaModal1"
                            data-bs-calculo="area"
                            data-bs-figura="circulo"
                        >
                            Calcular área
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<!--Modal 1-->
<div
    class="modal fade"
    id="ventanaModal1"
    tabindex="-1"
    aria-labelledby="ventanaModal1"
    aria-hidden="true"
>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="ventanaModal1Label">Modal title</h5>
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

    // Código del cuadrado
    function perimetroCuadrado(lado) {
        return lado * 4;
    }

    function areaCuadrado(lado) {
        return lado * lado;
    }

    // Código del triángulo
    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    }

    function areaTriangulo(base, altura) {
        return (base * altura) / 2;
    }

    //Código del círculo
    function diametroCirculo(radio) {
        return radio * 2;
    }

    function perimetroCirculo(radio) {
        const diametro = diametroCirculo(radio);
        return diametro * Math.PI;
    }

    function areaCirculo(radio) {
        return radio * radio * Math.PI;
    }

    // Interacción con HTML

    // Cuadrado
    function calcularPerimetroCuadrado() {
        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const perimetro = perimetroCuadrado(value);
        return perimetro;
    }

    function calcularAreaCuadrado() {
        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const area = areaCuadrado(value);
        return area;
    }

    // Triángulo
    function calcularPerimetroTriangulo() {
        let perimetro;
        const lado1 = document.getElementById("InputTriangulo1");
        const valor1 = Number(lado1.value);

        const lado2 = document.getElementById("InputTriangulo2");
        const valor2 = Number(lado2.value);

        const base = document.getElementById("InputTriangulo3");
        const valorBase = Number(base.value);

        if (lado1.value === "" || lado2.value === "" || base.value === "") {
            perimetro =
                "Para calcular el perímetro, es necesario ingresar los dos lados y la base del triángulo.";
        } else {
            perimetro = perimetroTriangulo(valor1, valor2, valorBase);
        }
        return perimetro;
    }

    function calcularAreaTriangulo() {
        let area;
        const base = document.getElementById("InputTriangulo3");
        const valorBase = Number(base.value);

        const altura = document.getElementById("InputTriangulo4");
        const valorAltura = Number(altura.value);

        if (base.value === "" || altura.value === "") {
            area =
                "Para calcular el área, es necesario ingresar la base y la altura.";
        } else {
            area = areaTriangulo(valorBase, valorAltura);
        }

        return area;
    }

    // Triangulo Isósceles
    function calcularAlturaIsosceles() {
        const lado1 = document.getElementById("InputIsosceles1");
        const valor1 = Number(lado1.value);

        const lado2 = document.getElementById("InputIsosceles2");
        const valor2 = Number(lado2.value);

        const base = document.getElementById("InputIsosceles3");
        const valorBase = Number(base.value);

        if (valor1 === valor2) {
            const altura = Math.sqrt(
                valor1 * valor1 - (valorBase * valorBase) / 4
            );
            return altura;
        } else {
            return "Error: El triángulo no es isósceles.";
        }
    }

    // Circulo
    function calcularPerimetroCirculo() {
        const radio = document.getElementById("InputCirculo");
        const valorRadio = Number(radio.value);

        const perimetro = perimetroCirculo(valorRadio);
        return perimetro;
    }

    function calcularAreaCirculo() {
        const radio = document.getElementById("InputCirculo");
        const valorRadio = Number(radio.value);

        const area = areaCirculo(valorRadio);
        return area;
    }

    // Modal
    var ventanaModal1 = document.getElementById("ventanaModal1");
    ventanaModal1.addEventListener("show.bs.modal", function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget;
        // Extract info from data-bs-* attributes
        var calculo = button.getAttribute("data-bs-calculo");
        var figura = button.getAttribute("data-bs-figura");
        var operacion = calculo + figura;

        switch (operacion) {
            case "perimetrotriangulo":
                var resultado = calcularPerimetroTriangulo();
                break;
            case "areatriangulo":
                var resultado = calcularAreaTriangulo();
                break;
            case "perimetrocuadrado":
                var resultado = calcularPerimetroCuadrado();
                break;
            case "areacuadrado":
                var resultado = calcularAreaCuadrado();
                break;
            case "perimetrocirculo":
                var resultado = calcularPerimetroCirculo();
                break;
            case "areacirculo":
                var resultado = calcularAreaCirculo();
                break;
            case "alturaisosceles":
                var resultado = calcularAlturaIsosceles();
                break;
            default:
                var resultado = "No se encontró caso.";
        }

        // Update the modal's content.
        var modalTitle = ventanaModal1.querySelector(".modal-title");
        var modalBody = ventanaModal1.querySelector(".modal-body");

        modalTitle.textContent = mayuscula(calculo) + " del " + figura;
        modalBody.textContent =
            "El " + calculo + " del " + figura + " es igual a: " + resultado;
    });

    // Primera letra en mayúscula
    function mayuscula(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return view;
};
export default CalculadoraGeometrica;
