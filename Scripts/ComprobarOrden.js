//Esta función se ocupa de indicar si el orden de los elementos a la hora de escribir el compuesto es correcot
function comprobarOrdenCorrecto(primerElmento, segundoElemento) {

    // si el frupo del segundo es mayor que eldel primero
    if (segundoElemento.grupo < primerElmento.grupo) {
        return true;
    }
    //Si el grupo del primer elemento es mayor que el del segundo
    else if (segundoElemento.grupo > primerElmento.grupo) {

        return false;

    }

    //Si son iguales

    else {

        //Si el número atómico del segundo elemento es mayor que el 1 es mayor que
        if (segundoElemento.z > primerElmento.z) {
            return true;
        } else {
            return false;
        }

    }

    return false;
}