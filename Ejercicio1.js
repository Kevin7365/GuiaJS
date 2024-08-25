const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function pregunta(pregunta) {
    return new Promise(resolve => readline.question(pregunta, resolve));
}

//Kevin Santiago Mate Pérez
async function verificarEdad() {
    try {
        const edad = parseInt(await pregunta("Ingrse su edad: "));
        if (isNaN(edad)) throw new Error("Por favor, ingrese nuevamento un numero válido.");

        const mensaje = edad >=18 ? "Es mayor de edad" : "No es mayor de edad.";
        console.log(mensaje);

        //Usamos las estructras de control
        switch (true) {
            case edad < 13:
                console.log("Es un niño/a");
                break;
            case edad < 18:
                console.log("Es un adolescente");
                break;
            case edad < 60:
                console.log("Es un adulto");
                break;
            default:
                console.log("Es un adulto mayor")
        }
            
    }catch (error) {
        console.error("Error:", error.messsage);
    } finally {
        readline.close();
    }
}

verificarEdad();