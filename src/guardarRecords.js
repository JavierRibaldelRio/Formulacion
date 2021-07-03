//Esta función se ocupa de guardar un record
import records from "./records.json";
//importa el archivo json
//Se ocupa de poder crear el json

// Almaciena el número de datos que ha de guardar

const numeroDePuntuacionesAGuardar = 10;

//La función devuleve si ha podido entrar en la tabla de clasificación
/**
 * 0: No ha entrado
 * 
 * 1: El nombre esta repetido
 * 
 * 2: El nombre es muy corto minimo 4 caracteres o muy largo máximo 15 cáracteres
 * 
 * 3: El texto no es valido: no puede contener ni espacios ni simbolos
 * 
 * 4: Se ha ingresado correctamente
 *
 */

function guardarPuntuacion(nombreUsuario, puntos, numeroDeCompuestos) {

    var recordsActuales = [...records];

    //Almacena lo que va devolver la función
    var devolucion = 0;

    //ordena la matriz de objetos del json

    recordsActuales.sort(function (a, b) {
        if (a.puntos > b.puntos) {

            return -1;
        } else if (a.puntos === b.puntos) {
            return 0;
        } else {
            return +1;
        }
    })

    //Comprueba si ha entrado en el ranking

    if (recordsActuales[recordsActuales.length - 1].puntos < puntos) {
        let objetoNuevo = {
            nombre: nombreUsuario.trim(),

            puntos: puntos,

            numeroDeCompuestos: numeroDeCompuestos
        }

        if (numeroDePuntuacionesAGuardar <= recordsActuales.length) {
            //Elimina la última del array
            recordsActuales.pop();


            //comprobar que tenga la longitud minima y máxima
            if (nombreUsuario.length < 4 || nombreUsuario.length > 15) {
                devolucion = 2
            }
            else {

                //Comprueba que solo tiene números y letras

                if (/^[0-9A-Za-z]*$/.test(nombreUsuario) === true) {

                    //Compruba que no hay nadie con el mismo nombre en el ranking
                    if (recordsActuales.find(function (puntuacion) {

                        return puntuacion.nombre.toLocaleLowerCase() === nombreUsuario.toLocaleLowerCase().trim();

                    })) {

                        devolucion = 1;
                    }
                    else {

                        let jsonRecordsActuales;

                        //Lo añade a los records
                        recordsActuales.push(objetoNuevo);

                        //el valor que va a devolver

                        devolucion = 4;

                        //Guardar cambios en el json

                        jsonRecordsActuales = JSON.stringify(recordsActuales);


                    }
                }

                else {
                    devolucion = 3;
                }
            }
        }

        console.log(devolucion);

        return devolucion;

    }

    return devolucion;
}

export default guardarPuntuacion;
