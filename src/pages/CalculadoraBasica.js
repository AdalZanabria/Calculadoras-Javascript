const CalculadoraBasica = () => {
    const view = `
    <!--Calculadoira Básica-->
<section
    class="row mx-auto justify-content-center d-flex"
    id="calculadoraBasica"
>
    <div class="calculator-grid container col col-md-4 neumorphism">
        <div class="row output bg-dark bg-gradient border p-2 text-end">
            <div
                data-previous-operand
                class="previous-operand text-white-50 fw-light"
            ></div>
            <div
                data-current-operand
                class="current-operand text-white fw-bold fs-3"
            ></div>
        </div>
        <div class="row row-cols-4">
            <button data-all-clear class="btn btn-danger border fw-bold col-6">
                AC
            </button>
            <button data-delete class="btn btn-warning border fw-bold col">
                DEL
            </button>
            <button data-operation class="btn btn-secondary fw-bold border col">
                ÷
            </button>
            <button data-number class="btn btn-primary border col">1</button>
            <button data-number class="btn btn-primary border col">2</button>
            <button data-number class="btn btn-primary border col">3</button>
            <button data-operation class="btn btn-secondary fw-bold border col">
                *
            </button>
            <button data-number class="btn btn-primary border col">4</button>
            <button data-number class="btn btn-primary border col">6</button>
            <button data-number class="btn btn-primary border col">5</button>
            <button data-operation class="btn btn-secondary fw-bold border col">
                +
            </button>
            <button data-number class="btn btn-primary border col">7</button>
            <button data-number class="btn btn-primary border col">8</button>
            <button data-number class="btn btn-primary border col">9</button>
            <button data-operation class="btn btn-secondary fw-bold border col">
                -
            </button>
            <button data-number class="btn btn-primary border col">.</button>
            <button data-number class="btn btn-primary border col">0</button>
            <button data-equals class="btn btn-success border fw-bold col-6">
                =
            </button>
        </div>
    </div>
</section>
`;
    return view;
};
export default CalculadoraBasica;
