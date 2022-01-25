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
                
                <div class="container d-flex flex-column align-items-center" id="certificados">
                    <hr>
                    <p class="text-center">Este sitio fue creado como parte de mis siguientes certificados:</p>
                    <p class="small text-center">Haz click en cada categoría para ver los certificados</p>
                    <div class="row">
                        <div class="col-md-3">HTML y CSS</div>
                        <div class="col-md-3">JavaScript</div>
                        <div class="col-md-3">Webpack</div>
                        <div class="col-md-3">SPA</div>
                    </div>
                </div>
                
            `;

    return view;
};
export default Header;
