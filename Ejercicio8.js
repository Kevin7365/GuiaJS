const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function pregunta(pregunta) {
    return new Promise(resolve => readline.question(pregunta, resolve));
}

async function TablaMultiplicar() {
    try {
        //Pedir el usuario un numero para realizar la tabla de multiplicacion
        const num = parseInt(await pregunta("Ingrese el numero que desear ver la tabla de multiplicar: "));
        if (isNaN(num)) throw new Error("Por favor, ingrese un numero valido");


        //Realizar la tabla de multiplicar
        console.log(`Tablas de multiplicar del ${num}: `);
        for (let s = 0; s < 11; s++) {
            console.log(`${num} x ${s} = ${num * s}`);
        }

        //Verificar el numero de suma de os resultados pares e imapres
        let sumaPares = 0;
        let sumaImpares = 0;
        for (let s = 0; s < 10; s++) {
            const resultado = num * s;
            if (resultado % 2 === 0) {
                sumaPares += resultado;
            } else {
                sumaImpares += resultado;
            }
        }

        //Imprimir los resultados de los numeros pares e impares
        console.log(`\nSuma de resultados pares: ${sumaPares}`);
        console.log(`Suma de resultados impares: ${sumaImpares}`);

        //Usamos el if y else if para verificar cuales de los numeros fueron la mayor cantidad
        if (sumaPares > sumaImpares) {
            console.log("La suma de resultados pares es mayor");
        } else if (sumaImpares > sumaPares) {
            console.log("La suma de resultados impares es mayor");
        } else {
            console.log("La suma de resultados pares e impares son iguales.");
        }
    } catch (error) {
        console.error("Error:", error.mensaje);
    } finally {
        readline.close();
    }
}

TablaMultiplicar();