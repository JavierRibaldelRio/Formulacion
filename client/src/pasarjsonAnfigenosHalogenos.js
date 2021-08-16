//Se ocupa de pasar el json a 

import ElementoNoMetal from "./objetoNoMetal";

function pasarAJsonAnfigenosHalogenos(arrayJson) {

    var array = [];

    for (var i = 0; i < arrayJson.length; i++) {

        var nuevoElemento =
            new ElementoNoMetal(arrayJson[i].Nuevo_Nombre_Elemento, arrayJson[i].sq);

        array.push(nuevoElemento);
    }

    return array;

}

export default pasarAJsonAnfigenosHalogenos;