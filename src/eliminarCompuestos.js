import baraja from './main';

//Función que elimina las cartas usadas

function descartarCartasUsadas(mapaCompuesto, elementosEnBanca) {

    var totalDeCartasUsadas;    //VAriable que almacena la suma de valores

    var arrayValores = [];   //Matriz que almacena todos los valores

    //El valor es el numero de repeticiones y la clave el elemento
    mapaCompuesto.forEach(function (valor, clave) {

        arrayValores.push(valor);

        for (var i = 0; i < elementosEnBanca.length; i++) {

            if (clave === elementosEnBanca[i].nombre.toLocaleLowerCase()) {

                elementosEnBanca.splice(i, valor);

                //Comprovar si carta robado no esta definida

                if (window.$cartaRobada != undefined) {

                    if (elementosEnBanca[i + 1] === undefined) {
                        window.$cartaRobarUsada = true;

                    }

                    //Si el nombre de la carta robada es igual a la clave   
                    else if (window.$cartaRobada.nombre.toLocaleLowerCase() === clave && elementosEnBanca[i + 1].nombre.toLocaleLowerCase() != clave) {
                        window.$cartaRobarUsada = true;

                    }
                }
                //Evitar la repetición del bucle

                i = 10;

            }
        }

    });

    totalDeCartasUsadas = sumarArray(arrayValores);

    window.$cartasDisponibles = elementosEnBanca;

    if (window.$cartasDisponibles.length < 8) {

        window.$cartaRobarUsada = true

        const cartasARobar = 8 - window.$cartasDisponibles.length;

        for (var i = 0; i < cartasARobar; i++) {

            //Añadir la primera carta a la banca
            window.$cartasDisponibles.push(baraja.splice(2, 1)[0]);

            //Eliminar la segunda carta de la baraja

            //Prdena
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

            console.log(window.$cartaRobarUsada);

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

export default descartarCartasUsadas;