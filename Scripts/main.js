//Para coger los datos de el json
var jsonDatosElementos = JSON.parse(jsonElementos);

var elementos = pasarJsonAClases();

var arrayAleatorios = crearArrayAleatorios();


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

            new Elemento(

                jsonDatosElementos[i].a,
                jsonDatosElementos[i].nombre,
                jsonDatosElementos[i].sq,
                convertirArrayValencias(jsonDatosElementos[i].v),
                jsonDatosElementos[i].repeticion,
                jsonDatosElementos[i].puntos

            );

        arrayContenedorObjetos.push(nuevoElemento);


    }

    return arrayContenedorObjetos;

}

//Preparar números aleatorios, 
function crearArrayAleatorios(){

    var array = [];//Definir el Array

    //Guardar tantas veces en numero como repeticones haya
    for(var i = 0; i < elementos.length; i++){

        for(var j = 0; j < elementos[i].repeticion;j++){

            array.push(elementos[i].a);    //Guardar

        }
    }

    return array;
}

//Crear Aleatorio
function random(min, max){

    return Math.floor((Math.random()* (max - min  +1)) + min);

}

function sacarAleatorios(arrayElementos){


    
}