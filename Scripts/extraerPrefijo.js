//Función que saca los prefijos de las palabras

function extraerPrefijos(textoElemento) {

    //Pasa el texto a minusculas
    textoElemento = textoElemento.toLowerCase();

    //Array donde Almacena la palabra
    var palabra = [];

    //Se repite una vex por cada prefijo
    for (var i = 1; i < prefijos.length; i++) {

        //Si empieza por el prefijo
        if (textoElemento.startsWith(prefijos[i])) {

            //lo quita
            palabra = textoElemento.split(prefijos[i]);

        }


    }

    if (palabra[1] === undefined) {
        
        return textoElemento;
    }

    return palabra[1];

}