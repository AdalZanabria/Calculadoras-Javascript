const CalculadoraGeometrica = () => {
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

    return view;
};
export default CalculadoraGeometrica;
