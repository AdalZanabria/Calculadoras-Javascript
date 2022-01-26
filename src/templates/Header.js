const Header = () => {
    const view = `
                <i
                    class="fas fa-angle-double-up text-center fs-1 mb-4"
                    id="welcomeArrow"
                ></i>

                <h1 class="text-center" id="headerTitle">Bienvenido</h1>
                <p class="lead text-center" id="headerSubtitle">
                    Selecciona un tipo de calculadora desde el menu superior
                </p>
                
                <div class="container d-flex flex-column align-items-center mt-4" id="certificados">
                    <vr>
                    <p class="text-center">Este sitio fue creado como parte de mis siguientes certificados:</p>
                    <p class="small text-center">Haz click en cada categoría para ver los certificados</p>
                    <div class="row mt-4">
                        <div class="col-sm-6 col-md-3">
                            <div class="d-flex flex-column align-items-center certIcons">
                                <a href="#!" data-bs-toggle="modal" data-bs-target="#ventanaModal6" data-bs-cert="HTMLCSS">
                                    <i class="fas fa-code welcomeIcon"></i>
                                    <p class="lead">HTML/CSS</p>
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <a href="#!" data-bs-toggle="modal" data-bs-target="#ventanaModal6" data-bs-cert="javascript">
                                <div class="d-flex flex-column align-items-center certIcons">
                                    <i class="fab fa-js welcomeIcon"></i>
                                    <p class="lead">JavaScript</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <a href="#!" data-bs-toggle="modal" data-bs-target="#ventanaModal6" data-bs-cert="webpack">
                                <div class="d-flex flex-column align-items-center certIcons">
                                    <i class="fas fa-box-open welcomeIcon"></i>
                                    <p class="lead">
                                        Webpack
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <a href="#!" data-bs-toggle="modal" data-bs-target="#ventanaModal6" data-bs-cert="SPA">
                                <div class="d-flex flex-column align-items-center certIcons">
                                    <i class="fas fa-file-code welcomeIcon"></i>
                                    <p class="lead">SPA</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <!--Modal6-->
        <div
        class="modal fade"
        id="ventanaModal6"
        tabindex="-1"
        aria-labelledby="ventanaModal6"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <!--Insertar con innerhtml-->
                </div>
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
export default Header;