import jsonNoMetales from './jsonNoMetales'
import jsonElementos from './jsonElementos'
import pasarAJsonAnfigenosHalogenos from './pasarjsonAnfigenosHalogenos';
import numeroDeCartas from './palabrasClaves';

import shuffle from './barajar';
import Elemento from './objetosElementos';
//Crea el array de sales binarias

const jsonDatosNoMetales = JSON.parse(jsonNoMetales);

const noMetales = pasarAJsonAnfigenosHalogenos(jsonDatosNoMetales);

//Para coger los datos de el json
var jsonDatosElementos = JSON.parse(jsonElementos);

var arrayClases = pasarJsonAClases(); //Array que contiene todas las clases

var puntos; //Almacena el número

var numeroElementosACoger = 8;

//Baraja barajada
window.$baraja = shuffle(crearBarajaOrdenada(arrayClases));

window.$cartasDisponibles = window.$baraja.splice(0, numeroDeCartas);

window.$cartasDisponibles.sort(function (a, b) {
    if (a.z > b.z) {
        return 1;
    }
    else if (a.z < b.z) {
        return -1;
    }
    else {
        return 0;
    }
});

window.$cartaRobarUsada = false

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
                jsonDatosElementos[i].tipo

            );

        arrayContenedorObjetos.push(nuevoElemento);     //Añade a el array el nuebo objeto que se a creado


    }

    return arrayContenedorObjetos;          //Devuelve el array que contiene todos los objetos

}

//Crea la baraja, es decir; añade un objeto por cada repetición
function crearBarajaOrdenada(elementos) {

    var array = [];//Definir el Array que almacenra los numeros

    //REpetir una vez por cada elemento
    for (var i = 0; i < elementos.length; i++) {

        //Repetir tantas veces como numero de repeticiones tenga el elemento
        for (var j = 0; j < elementos[i].repeticion; j++) {

            array.push(elementos[i]);    //Guardar el objeto del elemento en el array que almacena los números

        }
    }

    return array;   //Devolver Array de aleatorios
}

//Crear Aleatorio se le pasan el minimo y el máximo
function random(min, max) {

    return Math.floor((Math.random() * (max - min + 1)) + min); //Devuelve el numero aleatorio

}
export { noMetales, arrayClases };
