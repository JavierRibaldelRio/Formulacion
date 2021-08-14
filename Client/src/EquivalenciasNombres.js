import { hidruro } from "./palabrasClaves";
import { oxido } from "./palabrasClaves";

import { noMetales, arrayClases } from './main'

import buscarElementoPorSimbolo from "./BuscarElementoConSimbolo";


function nombresEquivalentes(nombre) {

    if (typeof nombre != "string") {

        return false;

    }

    nombre = nombre.toLocaleLowerCase();

    var nombreAutentico = "";

    //Si nombre es igual a ...
    switch (nombre) {
        //hidruro
        case hidruro:

            nombreAutentico = "hidrógeno";
            break;

        //oxido
        case oxido:
            nombreAutentico = "oxígeno";
            break;

        default:
            //Repetir una vez por toda la longitud de array anfigenos alogenos
            for (var i = 0; i < noMetales.length; i++) {

                //Si el nombre actual es igual al nuevo nombre del elemento
                if (nombre === noMetales[i].nuevoNombreElemento.toLocaleLowerCase()) {

                    // Devolvemos el nombrea autentico (fluor, fluoruro) y lo pasamao a minusculas
                    nombreAutentico = buscarElementoPorSimbolo(arrayClases, noMetales[i].sq).nombre.toLocaleLowerCase();


                }

            }
            break;
    }


    return nombreAutentico;

}

export default nombresEquivalentes;