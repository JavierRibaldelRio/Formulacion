import { oxido } from './palabrasClaves';

import { noMetales } from './main';
import extraerPrefijos from './extraerPrefijo';
import nombresEquivalentes from './EquivalenciasNombres';

import comprobarSiHayElementoPorNombre from './comprobarSiHayPorNombre';
import buscarElementoEnMapa from './buscarEnMapCompuestos';
import comprobarOrdenCorrecto from './ComprobarOrden';

import comprobarCompuestoBinario from './compuestoBinario';


// Funcion que se ocupa de encontar las sales bianrias, su objetivo es:
// ejecutar la función de identificar compuestouna vez por cada tipo de sal 
// binaria que pueda encontrar

function comprobarSalesBinariasVolatiles(textoUsuario, mapaElementos, elementosDisponibles) {



    for (var i = 0; i < noMetales.length; i++) {

        if (textoUsuario.includes(noMetales[i].nuevoNombreElemento.toLowerCase()) && buscarElementoEnMapa(mapaElementos, noMetales[i].sq)) {

            //Zona de mirar si tiene el orden correcto de la z


            function comprobarSiEsCorrecto(texto, a) {

                //Guarda el nommbre del compuesto en forma de matriz de palabras
                var textoPartido = [];

                //almacena el elemento
                var textoSinPrefijo;

                //almacenara la salida de comproca Si hay elemento por nombre
                var salidaComprobarSiHayElementoPorNombre;

                //Quitar los espacios de palabra ha pricipio de  texto

                texto = texto.trim();

                //Recorta por espacios y lo combierte en un array de palabras
                textoPartido = texto.split(" ");

                //Extrae el prefijo de la última palabra de texto partido y lo almacena
                textoSinPrefijo = extraerPrefijos(textoPartido[textoPartido.length - 1]);

                //asigan ha salidaComprobarSiHayElementoPorNombre la salida de 
                salidaComprobarSiHayElementoPorNombre = comprobarSiHayElementoPorNombre(textoSinPrefijo, elementosDisponibles);

                if (salidaComprobarSiHayElementoPorNombre === false || salidaComprobarSiHayElementoPorNombre.nombre.toLowerCase() === nombresEquivalentes(oxido)) {

                    return false;

                } else {

                    //Almacena el primer elemento

                    var primerElmento = comprobarSiHayElementoPorNombre(nombresEquivalentes(noMetales[a].nuevoNombreElemento.toLowerCase()), elementosDisponibles);

                }


                return comprobarOrdenCorrecto(primerElmento, salidaComprobarSiHayElementoPorNombre);

            }

            //Cmprueba si es correcto el orden del texto del usuario
            if (comprobarSiEsCorrecto(textoUsuario, i) === false) {
                return false;
            }
            //Deveulve el resultado
            else {
                return comprobarCompuestoBinario(noMetales[i].nuevoNombreElemento.toLowerCase(), textoUsuario, mapaElementos, elementosDisponibles);

            }
        }

    }

    //Devuelve falso si no encuentra nada

    return false;

}

export default comprobarSalesBinariasVolatiles;