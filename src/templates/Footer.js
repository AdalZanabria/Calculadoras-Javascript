const Footer = () => {
    const view = `
        <div class="row">
            <div
                class="col-md-4 col-12 d-flex flex-column justify-content-center align-items-center align-items-md-start mt-2"
            >
                <p class="text-center text-md-start text-light m-0">
                    Adalberto Zanabria Castro, 2022.
                </p>
                <p
                    class="text-center text-md-start text-light fw-light m-0 small"
                >
                    Este sitio fue creado como parte de mi
                    <a
                        href="#!"
                        data-bs-toggle="modal"
                        data-bs-target="#ventanaModal5"
                        >certificado en JavaScript.</a
                    >
                </p>
            </div>

            <div
                class="col-md-4 col-12 d-flex flex-column justify-content-center align-items-center mt-2"
            >
                <p class="m-0 text-light fw-light text-center small">
                    Este proyecto fue hecho con:
                </p>
                <div
                    class="d-flex justify-content-center align-items-center"
                >
                    <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="HTML5"
                        class="tt mx-2"
                    >
                        <i class="fab fa-html5"></i>
                    </span>
                    <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="CSS3"
                        class="tt mx-2"
                    >
                        <i class="fab fa-css3-alt"></i>
                    </span>
                    <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="JavaScript"
                        class="tt mx-2"
                    >
                        <i class="fab fa-js"></i>
                    </span>
                    <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Bootstrap"
                        class="tt mx-2"
                    >
                        <i class="fab fa-bootstrap"></i>
                    </span>
                    <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Ajax"
                        class="tt mx-2"
                    >
                        <i class="fas fa-sync-alt"></i>
                    </span>
                    <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Webpack"
                        class="tt mx-2"
                    >
                    <img class="si" height="16" width="16" src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/webpack.svg">
                    </span>
                    <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Babel"
                        class="tt mx-2"
                    >
                    <img class="si" height="16" width="16" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/babel.svg" />
                    </span>
                </div>
            </div>

            <div
                class="col-md-4 col-12 d-flex flex-column justify-content-center align-items-center align-items-md-end mt-2"
            >
                <p class="text-light fw-light small m-0">Github</p>
                <a
                    href="https://github.com/AdalZanabria"
                    class="text-light"
                    target="_blank"
                >
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>

    <!--Modal 5-->
        <div
            class="modal fade"
            id="ventanaModal5"
            tabindex="-1"
            aria-labelledby="ventanaModal5"
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
                        <img
                            src="./assets/images/diploma-javascript.jpg"
                            alt="Diploma de certificado"
                            class="img-fluid"
                        />
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
export default Footer;
