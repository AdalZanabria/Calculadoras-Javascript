const Header = () => {
    const view = `
    <!--Header-->
            <header
                class="d-flex flex-column text-light justify-content-center align-items-center"
            >
                <i
                    class="fas fa-angle-double-up text-center fs-1 mb-4"
                    id="welcomeArrow"
                ></i>

                <h1 class="text-center" id="headerTitle">Bienvenido</h1>
                <p class="lead text-center" id="headerSubtitle">
                    Selecciona un tipo de calculadora desde el menu superior
                </p>
            </header>
            `;

    return view;
};
export default Header;
