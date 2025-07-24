class CodeGenerator {
    static #instance;
    #code;

    constructor() {
        // Si ya existe una instancia, se retorna la instancia guardada
        if (RenderCode.#instance) {
            return RenderCode.#instance;
        }

        // Si no existe, se guardar la instancia.
        // Además, se genera un código aleatorio para fines didácticos.
        this.#code = Math.random() * 10;
        RenderCode.#instance = this;
    }

    getCode() {
        return this.#code;
    }
}

// Se intentan crear múltiples instancias
const codeA = new CodeGenerator();
const codeB = new CodeGenerator();
const codeC = new CodeGenerator();

// Se imprime el mismo código porque es una sola instancia
console.log(codeA.getCode());
console.log(codeB.getCode());
console.log(codeC.getCode());
