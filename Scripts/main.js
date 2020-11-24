//Para coger los datos de el json
var jsonDatosElementos = JSON.parse(jsonElementos);

var numeroElementosACoger = 8; //Numero de clases por rondas

var arrayClases = pasarJsonAClases(); //Array que contiene todas las clases


/**
 * El array aleatorios tiene una casilla por el numero de repeticiones
 * de cada elemento, por ejemplo si el oxigeno se repite 43 veces tienen
 * que haber 43 casillas con el numero de la casilla en el array de Clases
 */
var arrayAleatorios = crearArrayAleatorios(arrayClases);

var elementosDisponibles = crearArrayObjetosDisponibles(sacarAleatorios(arrayAleatorios), arrayClases);


//Funciones
//Convertir en array numerico el string de las valencias
function convertirArrayValencias(texto) {

    //Mirar si el input es un numero o otra cosa
    if (typeof texto === "number") {

        return Array.from([texto]); //Convertir el numero en array

    } else {

        var coma = ","; //Almacena el elemento que partira el array
        //Crea un array  cada casilla se corresponde un trozo del string
        var arrayTexto = texto.split(coma);

        //Transforma las casilleas en numero
        for (var i = 0; i < arrayTexto.length; i++) {

            arrayTexto[i] = Number(arrayTexto[i]);

        }

        return arrayTexto;
    }

}

//Convertir todos los elementos en clases
function pasarJsonAClases() {

    var arrayContenedorObjetos = []; //Donde se guardaran las clases

    for (var i = 0; i < jsonDatosElementos.length; i++) {

        var nuevoElemento =

            //constructor
            new Elemento(

                jsonDatosElementos[i].z,
                jsonDatosElementos[i].nombre,
                jsonDatosElementos[i].sq,
                convertirArrayValencias(jsonDatosElementos[i].v),
                jsonDatosElementos[i].repeticion,
                jsonDatosElementos[i].puntos,
                jsonDatosElementos[i].grupo

            );

        arrayContenedorObjetos.push(nuevoElemento);


    }

    return arrayContenedorObjetos;

}

//Preparar números aleatorios, 
function crearArrayAleatorios(elementos) {

    var array = [];//Definir el Array

    //Guardar tantas veces en numero como repeticones haya
    for (var i = 0; i < elementos.length; i++) {

        for (var j = 0; j < elementos[i].repeticion; j++) {

            array.push(i);    //Guardar

        }
    }

    return array;
}

//Crear Aleatorio
function random(min, max) {

    return Math.floor((Math.random() * (max - min + 1)) + min);

}
//Devuelve un array de el numero de aleatorios pedidos
function sacarAleatorios(arrayElementos) {

    var arrayNumeros = [];

    for (var i = 0; i < numeroElementosACoger; i++) {

        arrayNumeros.push(arrayElementos[random(0, arrayElementos.length)]);

    }

    return arrayNumeros;

}

//Devuelve un array de los objuetos que te han tocado
function crearArrayObjetosDisponibles(arrayElementosNumerico, arrayClases) {

    //Ordenar
    arrayElementosNumerico = arrayElementosNumerico.sort(comparar);

    //Craear un array con el tamaño de Elementos Numericos
    var arrayVuelta = [arrayElementosNumerico.length];

    //Pasar las clases al array
    for (var i = 0; i < arrayElementosNumerico.length; i++) {

        arrayVuelta[i] = arrayClases[arrayElementosNumerico[i]];

    }

    return arrayVuelta.sort();

    function comparar(a, b) {
        return a - b;
    }

}

