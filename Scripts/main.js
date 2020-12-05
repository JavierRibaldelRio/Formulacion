//Para coger los datos de el json
var jsonDatosElementos = JSON.parse(jsonElementos);

var numeroElementosACoger = 8; //Numero de clases que vas a coger por rondas

var arrayClases = pasarJsonAClases(); //Array que contiene todas las clases


/**
 * El array aleatorios tiene una casilla por el numero de repeticiones
 * de cada elemento, por ejemplo si el oxigeno se repite 43 veces tienen
 * que haber 43 casillas con el numero de la casilla en el array de Clases
 */
var arrayAleatorios = crearArrayAleatorios(arrayClases);

var elementosDisponibles = crearArrayObjetosDisponibles(sacarAleatorios(arrayAleatorios), arrayClases); //Elementos ue te han tocado


//Funciones
//Convertir en array numerico el string de las valencias ya que del json vienen en forma de texto
function convertirArrayValencias(texto) {

    //Mirar si el input es un numero o otra cosa
    if (typeof texto === "number") {

        //Si es número es decir que solo hay un numero ya que si hubiera más de un número estaría separado por una coma y sería un texto

        return Array.from([texto]);

    }
    //Si no es un numero ejectura esto
    else {

        const coma = ","; //Almacena el elemento que partira el array

        //Crea un array que cada casilla se corresponde un trozo del string partido| se parte cada vez que encuentre una coma
        var arrayTexto = texto.split(coma);

        //Transforma las casilleas en numero
        for (var i = 0; i < arrayTexto.length; i++) {   //Coge la lonjitud del array y ejecuta el bucle a cada casilla del array

            arrayTexto[i] = Number(arrayTexto[i]);  //Hace que los textos pases a ser números, ya que los números negativos sonalmacenados en forma de textos y los numeros positivos son akmacenados en forma de número

        }

        return arrayTexto;      // Devuelve el  array con el texto ya transformado en una array
    }

}

//Convertir todos los elementos del json en clases de ojetos
function pasarJsonAClases() {

    var arrayContenedorObjetos = []; //Donde se guardaran las clases

    // Se ejecuta una vez por cada elemento del json, cada vez que se haga la varible i que hrá función de contador sera aumentada automáticamente "+1"
    for (var i = 0; i < jsonDatosElementos.length/*coger la lonjitud del json*/; i++) {

        //Almacena en una variable en nuevo objeto que va a crear de forma temporal
        var nuevoElemento =

            //constructor
            new Elemento(

                jsonDatosElementos[i].z,                                //Coge del elemento i la z y se la pasa al objeto
                jsonDatosElementos[i].nombre,                           //Coge del elemento i el nomabre y se la pasa al objeto
                jsonDatosElementos[i].sq,                               //Coge del elemento i el simbolo químco y se la pasa al objeto
                convertirArrayValencias(jsonDatosElementos[i].v),       //Coge del elemento i la el  texto de las valencias y los combierte en una array de numeros
                jsonDatosElementos[i].repeticion,                       //Coge del elemento i la repetición y se la pasa al objeto
                jsonDatosElementos[i].puntos,                           //Coge del elemento i los grupos y se la pasa al objeto
                jsonDatosElementos[i].grupo,                            //Coge del elemento i el grupo y se la pasa al objeto
                jsonDatosElementos[i].Tipo                             

            );

        arrayContenedorObjetos.push(nuevoElemento);     //Añade a el array el nuebo objeto que se a creado


    }

    return arrayContenedorObjetos;          //Devuelve el array que contiene todos los objetos

}

//Preparar números aleatorios a elejir, se añade tantas veces el elemento como repeticiones tenga
function crearArrayAleatorios(elementos) {

    var array = [];//Definir el Array que almacenra los numeros

    //REpetir una vez por cada elemento
    for (var i = 0; i < elementos.length; i++) {

        //Repetir tantas veces como numero de repeticiones tenga el elemento
        for (var j = 0; j < elementos[i].repeticion; j++) {

            array.push(i);    //Guardar el numero del elemento en el array que almacena los números

        }
    }

    return array;   //Devolver Array de aleatorios
}

//Crear Aleatorio se le pasan el minimo y el máximo
function random(min, max) {

    return Math.floor((Math.random() * (max - min + 1)) + min); //Devuelve el numero aleatorio

}

//Devuelve un array aleatorio en el cuan cada casilla corresponde al elemento que le ha tocado
function sacarAleatorios(arrayElementos) {

    var arrayNumeros = [];  //Crear el array

    //Repetir una vez por tantos numeros haya que repetir
    for (var i = 0; i < numeroElementosACoger; i++) {

        arrayNumeros.push(arrayElementos[random(0, arrayElementos.length - 1 /* -1 por que se empieza a contar en 0*/)]);    //Añadir al array ek ekemento que te ha tocado

    }

    return arrayNumeros;    //Devolver el array que te ha tocado

}

//Devuelve un array de los objuetos que te han tocado
function crearArrayObjetosDisponibles(arrayElementosNumerico, arrayClases) {

    //Ordenar el array de numeros
    arrayElementosNumerico = arrayElementosNumerico.sort(comparar); //La función es para que ordene bien

    //Craear un array con el tamaño de Elementos Numericos que es el numero de elmentos que te van a tocar
    var arrayVuelta = [arrayElementosNumerico.length];

    //Se ejecuta una vez por cada casilla del array
    for (var i = 0; i < arrayElementosNumerico.length; i++) {

         
        arrayVuelta[i] = arrayClases[arrayElementosNumerico[i]];

    }

    return arrayVuelta.sort();


    /**
     * 
     * En la informática para oredenar cosas de numeros se ordena mal, ya que ordena por 
     * cifras es decir; si tubiera que ordenar esto "2, 1, 100," el oren correcto sería:
     * 1 < 2 < 100 pero, el programa haría 1 < 100 < 2, ya que el 100 va antes que el 2 si miras de derecha ha izquierda
     */
    function comparar(a, b) {
        return a - b;
    }

}

