import { cartaRobada } from './main';
import { cartaRobarUsada } from './main';
import { cartasDisponibles } from './main';
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

                if (cartaRobada != undefined) {

                    if (elementosEnBanca[i + 1] === undefined) {
                        cartaRobarUsada = true;

                    }

                    //Si el nombre de la carta robada es igual a la clave   
                    else if (cartaRobada.nombre.toLocaleLowerCase() === clave && elementosEnBanca[i + 1].nombre.toLocaleLowerCase() != clave) {
                        cartaRobarUsada = true;

                    }
                }
                //Evitar la repetición del bucle

                i = 10;

            }
        }

    });

    totalDeCartasUsadas = sumarArray(arrayValores);

    cartasDisponibles = elementosEnBanca;

    if (cartasDisponibles.length < 8) {

        cartaRobarUsada = true

        const cartasARobar = 8 - cartasDisponibles.length;

        for (var i = 0; i < cartasARobar; i++) {

            //Añadir la primera carta a la banca
            cartasDisponibles.push(baraja.splice(2, 1)[0]);

            //Eliminar la segunda carta de la baraja

            //Prdena
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

export default descartarCartasUsadas;