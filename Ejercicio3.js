const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function pregunta(pregunta) {
    return new Promise(resolve => readline.question(pregunta, resolve));
}

async function CalcularAumento() {
    try {
        //Ingresamos los datos del empleado
        const nombre = await pregunta("Ingrese el nombre del empleado: ");
        if (!nombre) throw new Error("El nombre no puede estar vacio");

        const salario = parseFloat(await pregunta("Ingrese su salario actual: $"));
        if (isNaN(salario) || salario <= 0) throw new Error("Ingrese un salario valido");

        const categoria = (await pregunta("Ingrese la categoaria que usted desea (A, B, C, o D): "));

        const aumentos = {'A': 0.15, 'B': 0.30, 'C': 0.10, 'A': 0.20 };
        if (!aumentos.hasOwnProperty(categoria)) throw new Error("Categoria invalida");

        const porceaumento = aumentos[categoria];
        const aumento = salario * porceaumento;
        const newSalario = salario + aumento;

        //Imprimir los resultados del empleado
        console.log(`
            Empleado: ${nombre}
            Salario actual: $${salario.toFixed(2)}
            Categoria: ${categoria}
            Aumento: $${aumento.toFixed(2)}
            Nuevo salario: $${newSalario.toFixed(2)}
        `);

        //posibles casos que pueden ocurrir de acuerdo al nuevo salario
        if (newSalario > 5000) {
            console.log("Salario alto - realizar revision fiscal.");
        } else if (newSalario < 1000) {
            console.log("Salario bajo - realizar ajuste adicional.");
        }
    } catch (error) {
        console.error("Error:", error.mensaje);
    } finally {
        readline.close();
    }
}

CalcularAumento();