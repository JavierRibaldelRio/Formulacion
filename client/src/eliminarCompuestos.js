
//Función que elimina las cartas usadas


function descartarCartasUsadas(mapaCompuesto /*Forma del compuesto el map*/,
    elementosEnBanca /*Elementos que hay en total*/) {

    var arrayValores = [];   //Matriz que almacena todos los valores

    //El valor es el numero de repeticiones y la clave el elemento
    mapaCompuesto.forEach(function (valor, clave) {


        arrayValores.push(valor);

        for (var i = 0; i < elementosEnBanca.length; i++) {

            if (clave === elementosEnBanca[i].nombre.toLocaleLowerCase()) {

                elementosEnBanca.splice(i, valor);  //Corta las cartas necesarias

                //Comprovar si carta robado no esta definida

                if (window.$cartaRobada !== undefined) {

                    if (elementosEnBanca[i + 1] === undefined) {
                        window.$cartaRobarUsada = true;

                    }

                    //Si el nombre de la carta robada es igual a la clave   
                    else if (window.$cartaRobada.nombre.toLocaleLowerCase() === clave && elementosEnBanca[i + 1].nombre.toLocaleLowerCase() !== clave) {
                        window.$cartaRobarUsada = true;

                    }
                }
                //Evitar la repetición del bucle

                i = 10;

            }
        }

    });

    window.$cartasDisponibles = elementosEnBanca;

    if (window.$cartasDisponibles.length < 8) {

        window.$cartaRobarUsada = true

        const cartasARobar = 8 - window.$cartasDisponibles.length;

        for (var i = 0; i < cartasARobar; i++) {

            //Añadir la primera carta a la banca
            window.$cartasDisponibles.push(window.$baraja.splice(2, 1)[0]);

            //Eliminar la segunda carta de la baraja

            //Ordenalas crtas disponibles
            window.$cartasDisponibles.sort(function (a, b) {
                if (a.z > b.z) {
                    return 1;
                }
                else if (a.z < b.z) {
                    return -1;
                }
                else {
                    return 0;
                }
            });

        }

    }



}


export default descartarCartasUsadas;