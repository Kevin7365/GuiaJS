const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function pregunta(pregunta) {
    return new Promise(resolve => readline.question(pregunta, resolve));
}

async function AnalizarTemperatura() {
    try {
        //Ingresa la temperatura en Celsius
        const celsius = parseFloat(await pregunta("Ingrese la temperatura en Celsius: "));
        if (isNaN(celsius)) throw new Error("Por favor, ingrese una temperatura valida");
        
        //Formula para convertir de Celsius a Fahrenheit
        const fahrenheit = (celsius * 9/5) + 32;
        let mensaje;

        //Indica el nivel de la temperatura
        if (fahrenheit >= 14 && fahrenheit < 32) {
            mensaje = "Temperatura baja";
        } else if (fahrenheit >= 32 && fahrenheit < 68) {
            mensaje = "Temperatura adecuada";
        } else if (fahrenheit >= 68 && fahrenheit < 96) {
            mensaje = "Temperatura alta"
        } else {
            mensaje = "Temperatura extrema";
        }

        //Mostrar el resultado
        console.log(`${celsius}°C es igual a ${fahrenheit.toFixed(2)}°F. ${mensaje}`);
        
        switch (true) {
            case fahrenheit < 32:
                console.log("Precaucion: Riesgo de congelacion")
                break;
            case fahrenheit >= 100:
                console.log("Advertencia: Temperatura de ebullicion del agua")
                break;
        }

        //Analizar el tipo de temperatura de Celsius que ingresa el usuario
        if (celsius > 38) {
            console.log("Alerta: Temperatura corporal peligrosamente alta para humanos");
        } else if (celsius < 35) {
            console.log("Alerta: Temperatura corporal peligrosamente baja para humanos")
        }
    } catch (error) {
        console.error("Error:", error.mensaje);
    } finally {
        readline.close();
    }
}

AnalizarTemperatura();