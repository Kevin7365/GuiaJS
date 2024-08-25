const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function pregunta(pregunta) {
    return new Promise(resolve => readline.question(pregunta, resolve));
}

async function CalcularDescuentoViaje() {
    try {
        //Ingresamos los datos del empleado
        const origen = (await pregunta("Ingrese la ciudad de origen: ")).toLowerCase();
        const destino = (await pregunta("Ingrese el destino: ")).toLowerCase();

        let descuento = 0;
        if (origen === 'palma'){
            switch (destino) {
                case 'La costa del sol':
                    descuento = 0.05;
                    break;
                case 'Panchimalco':
                    descuento = 0.10;
                    break;
                case 'Puerto el triunfo':
                    descuento = 0.15;
                    break;
                default:
                    console.log("No hay descuentos disponibles para este destino");
            }
        } else {
            console.log("No hay descuento disponible desde este origen");
        }

        console.log(`Descuento aplicado: ${(descuento * 100).toFixed(2)}%`);
        

        //Aplicando los descuentos del cliente
        if (descuento > 0) {
            console.log("¡Felicidades! Ha conseguido un descuento en su viaje");
           if (descuento >= 0.10) {
                console.log("Considre aprovechar este gran descuento");
            }
        } else {
            console.log("Lo sentimos, no hay descuentos disponibles para este destino")
        }
    } catch (error) {
        console.error("Error:", error.mensaje);
    } finally {
        readline.close();
    }
}

CalcularDescuentoViaje();