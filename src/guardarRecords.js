//Esta función se ocupa de guardar un record
import records from "./records.json";
//importa el archivo json
//Se ocupa de poder crear el json

const fs = require('fs');

// Almaciena el número de datos que ha de guardar

const numeroDePuntuacionesAGuardar = 10;


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
            nombre: nombreUsuario,

            puntos: puntos,

            numeroDeCompuestos: numeroDeCompuestos
        }

        if (numeroDePuntuacionesAGuardar <= recorsActuales.length) {
            //Elimina la última del array
            recorsActuales.pop();

        }

        //Añade al array el nuvo elemento

        recorsActuales.push(objetoNuevo);

        console.log(recorsActuales);


    }



    console.log(recorsActuales)

}



export default guardarPuntuacion;

