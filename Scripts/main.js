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
    else
    
    {    

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
                jsonDatosElementos[i].grupo                             //Coge del elemento i el grupo y se la pasa al objeto

            );

        arrayContenedorObjetos.push(nuevoElemento);     //Añade a el array el nuebo objeto que se a creado


    }

    return arrayContenedorObjetos;          //Devuelve el array que contiene todos los objetos

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

