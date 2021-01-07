//Función que elimina las cartas usadas

function deacartarCartasUsadas(compuesto, elementosEnBanca) {

    var totalDeCartasUsadas;    //VAriable que almacena la suma de valores

    var arrayValores = [];   //Matriz que almacena todos los valores
    compuesto.forEach(function (valor, clave) {

        arrayValores.push(valor);

        for (var i = 0; i < elementosEnBanca.length; i++) {

            if (clave === elementosEnBanca[i].nombre.toLocaleLowerCase()) {

                elementosEnBanca.splice(i, valor);

                if (cartaRobada.nombre.toLocaleLowerCase() === clave && elementosEnBanca[i].nombre.toLocaleLowerCase() + 1 != clave) {

                    cartaRobarUsada = true;
                }

                //Evitar la repetición del bucle

                i = 10;

            }
        }

    });

    totalDeCartasUsadas = sumarArray(arrayValores);

    cartasDisponibles = elementosEnBanca;

    if (cartasDisponibles.length < 8) {

        const cartasARobar = 8 - cartasDisponibles.length;

        for (var i = 0; i < cartasARobar; i++) {

            //Añadir la primera carta a la banca
            cartasDisponibles.push(baraja[0]);

            baraja.splice(1, 1); //Eliminar la primera carta de la baraj

            cartasDisponibles.sort(function (a, b) {
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

            console.log(cartaRobarUsada);

        }

    }



}

//Funcion sumar un array

function sumarArray(arr) {


    var suma;

    for (var i = 0; i < arr.length; i++) {

        suma = + arr[i]

    }

    return suma;

}