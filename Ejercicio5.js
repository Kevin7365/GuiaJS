const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function pregunta(pregunta) {
    return new Promise(resolve => readline.question(pregunta, resolve));
}

async function CalcularDescuentoCoche() {
    try {
        //Ingresamos los datos del empleado
        const modelo = (await pregunta("Ingrese el modelo (Ford Fiesta, Ford Focus o Ford Escape): ")).toUpperCase();
        const precio = parseFloat(await pregunta("Ingrese el precio del coche: $"));
        
        if (isNaN(precio) || precio <= 0) throw new Error("Por favor, ingrese un precio valido");

        let descuento;
        switch (modelo) {
            case 'Ford Fiesta':
                descuento = 0.05;
                break;
            case 'Ford Focus':
                descuento = 0.10;
                break;
            case 'Ford Escape':
                descuento = 0.20;
                break;
            default:
                throw new Error("Modelo no reconocido");
        }

        //Imprimir los resultados del cliente
        const precioFinal = precio * (1 - descuento);
        console.log(`
            Coche selecionado: ${nombre}
            Descuento aplicado: ${(descuento * 100).toFixed(2)}%
            Precio original: ${precio.toFixed(2)}
            Precio final: $${precioFinal.toFixed(2)}
        `);

        //posibles casos que pueden ocurrir de acuerdo al nuevo salario
        if (precioFinal > 30000) {
            console.log("Realizar financiamientoa largo plazo.");
        } else if (precioFinal < 15000) {
            console.log("¡¡Excelente Oferta!!.");
        }
    } catch (error) {
        console.error("Error:", error.mensaje);
    } finally {
        readline.close();
    }
}

CalcularDescuentoCoche();