const NavBar = () => {
    const view = `
            <div class="container-fluid">
                <a class="navbar-brand border-end border-light px-3" href="#">
                    <i class="bi bi-calculator px-2"></i>
                    Calculadoras JavaScript
                </a>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggler"
                    aria-controls="navbarToggler"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i class="bi bi-list"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarToggler">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                id="navGeometrica"
                                aria-current="page"
                                href="#"
                                >Calculadora Geométrica
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                id="navDescuentos"
                                aria-current="page"
                                href="#"
                                >Calculadora de Descuentos
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                id="navPromedios"
                                aria-current="page"
                                href="#"
                                >Calculadora de Promedios
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                id="navSalarios"
                                aria-current="page"
                                href="#"
                                >Calculadora de Salarios
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                id="navCalculadora"
                                aria-current="page"
                                href="#"
                                >Calculadora Básica
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        `;

    return view;
};
export default NavBar;
