const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function pregunta(pregunta) {
    return new Promise(resolve => readline.question(pregunta, resolve));
}

async function AnalisisEdadesEstudiantes() {
    try {
        //Crear las variables de cada uno de los turnos
        let sumaManana = 0, sumaTarde = 0, sumaNoche = 0;

        //Turno de la mañana
        for (let m = 0; m < 5; m++) {
            const edad = parseInt(await pregunta(`Ingrese la edad del estudiante ${m+1} del turno mañana: `));
            if (isNaN(edad) || edad <= 0) throw new Error("Por favor, ingrese una edad valida");
            sumaManana += edad;
        }
        //Turno de la tarde
        for (let m = 0; m < 6; m++) {
            const edad = parseInt(await pregunta(`Ingrese la edad del estudiante ${m+1} del turno tarde: `));
            sumaTarde += edad;
        }
        //Turno de la noche
        for (let m = 0; m < 11; m++) {
            const edad = parseInt(await pregunta(`Ingrese la edad del estudiante ${m+1} del turno tarde: `));
            sumaTarde += edad;
        }

        //Realizar los prodemios de cada uno de los turnos
        const promedioManana = sumaManana / 5;
        const promedioTarde = sumaTarde / 6;
        const promedioNoche = sumaNoche / 11;

        //Imprimir los resultados de los turnos
        console.log(`
            Promedio de edades turno mañana: ${promedioManana.toFixed(2)}
            Promedio de edades turno tarde: ${promedioTarde.toFixed(2)}
            Promedio de edades turno noche: ${promedioNoche.toFixed(2)}
        `);

        //Calculo de promedio total de edad general
        const promedioTotal = (sumaManana + sumaTarde + sumaNoche) / 22;
        console.log(`Promedio de edad general: ${promedioTotal.toFixed(2)}`);

        //Usamos el if y else if para verificar cuales de los numeros fueron la mayor cantidad
        if (promedioTotal < 18) {
            console.log("La mayoria de los estudiantes son menores de edad");
        } else if (promedioTotal >= 18 && promedioTotal < 25) {
            console.log("La mayoria de los estudiantes son jovenes adultos");
        } else {
            console.log("La mayoria de los estudiantes son adultos");
        } 
    } catch (error) {
        console.error("Error:", error.mensaje);
    } finally {
        readline.close();
    }
}

AnalisisEdadesEstudiantes();