//Función que compruba las ecepciones
import comprobarCompuestoBinario from "./compuestoBinario";
import { crearMapaCompuestoPuntuacion } from "./calcularPuntos";
import calcularPuntuacion from "./calcularPuntos";
import comprobarCompuesto from "./funcionCompuesto";

import descartarCartasUsadas from "./eliminarCompuestos";
import crearMapaCompuesto from "./crearMapaCompuesto";
import comprobarSalesBinariasVolatiles from "./EncontrarSalesBinariasVolatiles";

import { oxido, hidruro, sal, metanoSistematico, amoniacoSistematico, aguaSistematica, aguaOxigenadaSistematica } from './palabrasClaves';


function identificarCompuestosExcepcionales(compuesto, mapaElementos, elementos) {

    //Comprueba si es formulable

    var formulable = false;

    switch (compuesto) {

        case "agua":

            //Le manda la formula de agua para comprobar que lo puede formular
            formulable = comprobarCompuestoBinario(oxido, aguaSistematica, mapaElementos, elementos);

            break;

        case "amoniaco":
            //Le manda la formula de agua para comprobar que lo puede formular
            formulable = comprobarCompuestoBinario(hidruro, amoniacoSistematico, mapaElementos, elementos);

            break;


        case "metano":
            formulable = comprobarCompuestoBinario(hidruro, metanoSistematico, mapaElementos, elementos);

            break;


        case "ozono":



            mapaElementos.forEach(function (clave, valor) {

                if (valor.nombre.toLowerCase() === "oxígeno" && clave >= 3) {


                    descartarCartasUsadas(crearMapaCompuesto(Array.from([valor.nombre.toLowerCase()]), Array.from([3])), elementos);

                    //Calcula la puntuacion
                    formulable = calcularPuntuacion(crearMapaCompuestoPuntuacion(Array.from([valor]), Array.from([3])));

                }


            });

            break;

        case "sal común":

            formulable = comprobarSalesBinariasVolatiles(sal, mapaElementos, elementos);

            break;

        case "agua oxigenada":

            formulable = comprobarCompuesto(elementos, aguaOxigenadaSistematica);

            break;


        default:
            formulable = false;
            break;


    }

    return formulable;

}

export default identificarCompuestosExcepcionales;