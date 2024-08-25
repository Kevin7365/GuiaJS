const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function pregunta(pregunta) {
    return new Promise(resolve => readline.question(pregunta, resolve));
}

async function AnalizarNumeros() {
    try {
        //Definir los numeros en diferentes areas
        let negativos = 0, positivos = 0, multiplos15 = 0, sumaPares = 0;

        for (let k = 0; k < 10; k++) {
            const number = parseInt(await pregunta(`Ingrese el numero ${k+1}: `));
            if (isNaN(number)) throw new Error(`El valor ingresado para el numero ${k+1} no es valido`);

            if (number < 0) negativos++;
            if (number > 0) positivos++;
            if (number % 15 === 0 && number !== 0) multiplos15++;
            if (number % 2 === 0) sumaPares += number;
        }

        //Imprimir los resultados de los numeros
        console.log(`
            Numeros negativos: ${negativos}
            Numeros positivos: $${positivos}
            Multiplos de 15: ${multiplos15}
            Suma de numeros pares: ${sumaPares}
        `);

        //Usamos el if y else if para verificar cuales de los numeros fueron la mayor cantidad
        if (positivos > negativos) {
            console.log("Se ingresaron mas numeros positivos que negativos");
        } else if (negativos < positivos) {
            console.log("Se ingresaron mas numeros negativos que positivos");
        } else {
            console.log("Se ingresaron igual cantidad de nuemros positivos y negativos")
        }

        if (multiplos15 > 0) {
            console.log(`El ${(multiplos15/10*100).toFixed(2)}% de los numeros son multiplos de 15`);
        }
    } catch (error) {
        console.error("Error:", error.mensaje);
    } finally {
        readline.close();
    }
}

AnalizarNumeros();