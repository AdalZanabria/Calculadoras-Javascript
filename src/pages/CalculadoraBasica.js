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

    // Fórmulas

    var calculator = class Calculator {
        constructor(previousOperandTextElement, currentOperandTextElement) {
            this.previousOperandTextElement = previousOperandTextElement;
            this.currentOperandTextElement = currentOperandTextElement;
            this.clear();
        }

        clear() {
            this.currentOperand = "";
            this.previousOperand = "";
            this.operation = undefined;
        }
        delete() {
            this.currentOperand = this.currentOperand.toString().slice(0, -1);
        }
        appendNumber(number) {
            if (number === "." && this.currentOperand.includes(".")) return;
            this.currentOperand =
                this.currentOperand.toString() + number.toString();
        }
        chooseOperation(operation) {
            if (this.currentOperand === "") return;
            if (this.previousOperand !== "") {
                this.compute();
            }
            this.operation = operation;
            this.previousOperand = this.currentOperand;
            this.currentOperand = "";
        }
        compute() {
            let computation;
            const prev = parseFloat(this.previousOperand);
            const current = parseFloat(this.currentOperand);
            if (isNaN(prev) || isNaN(current)) return;
            switch (this.operation) {
                case "+":
                    computation = prev + current;
                    break;
                case "-":
                    computation = prev - current;
                    break;
                case "*":
                    computation = prev * current;
                    break;
                case "÷":
                    computation = prev / current;
                    break;
                default:
                    return;
            }
            this.currentOperand = computation;
            this.operation = undefined;
            this.previousOperand = "";
        }

        getDisplayNumber(number) {
            const stringNumber = number.toString();
            const integerDigits = parseFloat(stringNumber.split(".")[0]);
            const decimalDigits = stringNumber.split(".")[1];
            let integerDisplay;
            if (isNaN(integerDigits)) {
                integerDisplay = "";
            } else {
                integerDisplay = integerDigits.toLocaleString("en", {
                    maximumFractionDigits: 0,
                });
            }
            if (decimalDigits != null) {
                return `${integerDisplay}.${decimalDigits}`;
            } else {
                return integerDisplay;
            }
        }

        updateDisplay() {
            this.currentOperandTextElement.innerText = this.getDisplayNumber(
                this.currentOperand
            );
            if (this.operation != null) {
                this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
                    this.previousOperand
                )} ${this.operation}`;
            } else {
                this.previousOperandTextElement.innerText = "";
            }
        }
    };

    var operationButtons = document.querySelectorAll("[data-operation]");
    var numberButtons = document.querySelectorAll("[data-number]");
    var equalsButton = document.querySelector("[data-equals]");
    var deleteButton = document.querySelector("[data-delete]");
    var allClearButton = document.querySelector("[data-all-clear]");
    var previousOperandTextElement = document.querySelector(
        "[data-previous-operand]"
    );
    var currentOperandoTextElement = document.querySelector(
        "[data-current-operand]"
    );

    var calculator = new calculator(
        previousOperandTextElement,
        currentOperandoTextElement
    );

    numberButtons.forEach((button) => {
        button.addEventListener("click", () => {
            calculator.appendNumber(button.innerText);
            calculator.updateDisplay();
        });
    });

    operationButtons.forEach((button) => {
        button.addEventListener("click", () => {
            calculator.chooseOperation(button.innerText);
            calculator.updateDisplay();
        });
    });

    equalsButton.addEventListener("click", (button) => {
        calculator.compute();
        calculator.updateDisplay();
    });

    allClearButton.addEventListener("click", (button) => {
        calculator.clear();
        calculator.updateDisplay();
    });

    deleteButton.addEventListener("click", (button) => {
        calculator.delete();
        calculator.updateDisplay();
    });

    return view;
};
export default CalculadoraBasica;
