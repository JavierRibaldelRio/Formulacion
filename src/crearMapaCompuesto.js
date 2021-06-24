//Te dice los elementos usados para generar el compuesto
function crearMapaCompuesto(arrayNombre, arrayRepeticiones) {

    //Crear el mapa
    var mapa = new Map();

    //Repetir una vez por cada casilla del array
    for (var i = 0; i < arrayNombre.length; i++) {

        mapa.set(arrayNombre[i], arrayRepeticiones[i]);

    }

    return mapa;

}