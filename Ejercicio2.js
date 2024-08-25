const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function pregunta(pregunta) {
    return new Promise(resolve => readline.question(pregunta, resolve));
}

async function calcularNotaFinal() {
    try {
        //Usamos el if_else para ingresar los datos
        const nombre = await pregunta("Ingrese el nombre del alumno: ");
        if (!nombre) throw new Error("El nombre no puede estar vacio");

        const carnet = await pregunta("Ingrese el carnet del alumno: ");
        if (!carnet) throw new Error("El carnet no ´puede estar vacio");

        const examen = parseFloat(await pregunta("Ingrese la nota del examen (20%): "));
        const tareas = parseFloat(await pregunta("Ingrese las notas de las tareas (40%): "));
        const asistencia = parseFloat(await pregunta("Ingrese las notas de la asistenecia (10%): "));
        const investigacion = parseFloat(await pregunta("Ingrese las notas de investigacion (30%): "));

        //Realizamos los calculos para obtener una nota final del alumno
        const notaFinal = (examen * 0.2 + tareas * 0.4 + asistencia * 0.1 + investigacion * 0.3).toFixed(2);

        //Imprimir los resultados obtenidos de parte del alumno
        console.log(`
            Alumno: ${nombre}
            Carnet: ${carnet}
            Nota final: ${notaFinal}
        `);

        let mensaje;
        switch (true) {
            case notaFinal >= 9:
                mensaje = "Excelente trabajo";
                break;
            case notaFinal >= 8:
                mensaje = "Muy buen trabajo";
                break;
            case notaFinal >= 7:
                mensaje = "Buen trabajo";
                break;
            default:
                mensaje= "Necesitas mejorar";
        }
        console.log(mensaje);
    } catch (error) {
        console.error("Error:", error.mensaje);
    } finally {
        readline.close();
    }
}

calcularNotaFinal();