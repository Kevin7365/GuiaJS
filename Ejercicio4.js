const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function pregunta(pregunta) {
    return new Promise(resolve => readline.question(pregunta, resolve));
}

async function NumeroMayor() {
    try {
        //Ingresamos los datos del empleado
        const number1 = parseFloat(await pregunta("Ingrese el primer numero: "));
        const number2 = parseFloat(await pregunta("Ingrese el segundo numero: "));

        if (isNaN(number1) || isNaN(number2)) throw new Error("Ingrese de nuevo numeros validos.");

        const mayor = Math.max(number1, number2);
        console.log(`El numero mayor es: ${mayor}`);

        //Mostrará los resultados de acuerdo los numeros que el usuario ingreso
        if (number1 === number2) {
            console.log(`Los numeros son iguales.`);
        } else {
            const diferencia = Math.abs(number1 - number2);
            console.log(`La diferencia entre los numeros es: ${diferencia}`);
        }
    } catch (error) {
        console.error("Error:", error.mensaje);
    } finally {
        readline.close();
    }
}

NumeroMayor();