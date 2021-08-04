//Función que sribe para saver si el elemento se encuenttra en el array

import { comprobarSiPuedeGenerarCompuestos } from "./funcionCompuesto";

function comprobarSiHayElementoPorNombre(elementoABuscar/*texto*/, elementosPosibles/*Array*/) {

    //Lo que se va a devolver
    var valorADevolver;

    //Elimina espacios a principio y a final de palabra
    elementoABuscar = elementoABuscar.trim();

    //Pasa a minusculas
    elementoABuscar = elementoABuscar.toLowerCase();

    //Deveulve el objeto cumpla las condiciones
    valorADevolver = elementosPosibles.find(hayElemento);

    //si el valor de valorADevolver esta indefinido, es decir que no hay ningun elemento que cumpla las condicioenes devuelve falso
    if (valorADevolver === undefined) {

        valorADevolver = false;
    }


    return valorADevolver

    function hayElemento(elemento) {

        //Quita espacios y pas a minusculas
        return elemento.nombre.trim().toLowerCase() === elementoABuscar;

    }
}

export default comprobarSiHayElementoPorNombre;
