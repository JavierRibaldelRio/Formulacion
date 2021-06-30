//Esta función se ocupa de guardar un record
import records from "./records.json";
//importa el archivo json
//Se ocupa de poder crear el json

const fs = require('fs');

// Almaciena el número de datos que ha de guardar

const numeroDePuntuacionesAGuardar = 10;

//La función devuleve si ha podido entrar en la tabla de clasificación
/**
 * 0: No ha entrado
 * 
 * 1: El nombre esta repetido
 * 
 * 2: El nombre es muy corto minimo 4 caracteres
 * 
 * 3: El nombre es muy largo máximo 15 cáracteres
 * 
 * 4: El texto no es valido: no puede contener ni espacios ni simbolos
 * 
 * 5: Se ha ingresado correctamente
 *
 */

function guardarPuntuacion(nombreUsuario, puntos, numeroDeCompuestos) {

    var recorsActuales = [...records];

    //ordena la matriz de objetos del json

    recorsActuales.sort(function (a, b) {
        if (a.puntos > b.puntos) {

            return -1;
        } else if (a.puntos === b.puntos) {
            return 0;
        } else {
            return +1;
        }
    })

    //Comprueba si ha entrado en el ranking

    if (recorsActuales[recorsActuales.length - 1].puntos < puntos) {
        let objetoNuevo = {
            nombre: nombreUsuario.trim(),

            puntos: puntos,

            numeroDeCompuestos: numeroDeCompuestos
        }

        if (numeroDePuntuacionesAGuardar <= recorsActuales.length) {
            //Elimina la última del array
            recorsActuales.pop();


            //Comprovar que no alla nadie con el mismo nombre

            if (recorsActuales.find(function (puntuacion) {

                return puntuacion.nombre.toLocaleLowerCase() === nombreUsuario.toLocaleLowerCase().trim();

            })) {
                console.log(recorsActuales);

                return 1;
            }

        }

        //Añade al array el nuvo elemento

        recorsActuales.push(objetoNuevo);

        console.log(recorsActuales);


        return 1;

    }

    return 0;



    console.log(recorsActuales)

}



export default guardarPuntuacion;

