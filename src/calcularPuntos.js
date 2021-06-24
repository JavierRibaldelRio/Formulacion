//Se le pasa un mapa de puntos y devuelve le número de puntos que se obtieneen al realizar ese compuesto
function calcularPuntuacion(mapaPuntos) {

    //Almacena la puntuación de salida
    var salida = 0;

    //Aplica a todos los elementos del Map

    mapaPuntos.forEach(function (key, valor) {

        //Variable donde se almacena el sumar

        salida = salida + valor.puntos * key;



    });
    return salida;

}

//Hace el mapa con el que se le manda a Mapa puntos

function crearMapaCompuestoPuntuacion(arrayCompuesto, arrayRepeticiones) {

    var mapa = new Map();

    for (var i = 0; i < arrayCompuesto.length; i++) {

        mapa.set(arrayCompuesto[i], arrayRepeticiones[i]);

    }

    return mapa;
}