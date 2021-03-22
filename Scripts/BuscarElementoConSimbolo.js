//Ha esta funcion le pasas el simbolo del elmento y te ha de devolver el elemento correspondiente

function buscarElementoPorSimbolo(arrayABuscar/*El array en el que vas a buscar*/, letra /*Letra que vas a buscar*/) {

    //Para saber cual cumple la comparación
    return arrayABuscar.find(igualSQ);

    //funcion para saver si el simbolo quimico es igual

    function igualSQ(objeto) {
        ///////////////////////////
        return objeto.sq.trim() === letra;
    }


}