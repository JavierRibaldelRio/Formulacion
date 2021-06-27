const hidruro = "hidruro";  //hidruro

var prefijos = [8]; //Definir array con 8 casillas una por cada prefijo

prefijos[1] = "mono"; //1

prefijos[2] = "di";   //2

prefijos[3] = "tri";  //3

prefijos[4] = "tetra";  //4

prefijos[5] = "penta";  //5

prefijos[6] = "hexa";     //6

prefijos[7] = "hepta";  //7

const numeroDePrefijos = 7; //Siete porque no se pueden combinar más de siete cartas iguales

const halogenos = 16;   //Grupo de los Halógenos

const anfigenos = 17;   //Grupo de los anfígenos

//Almacena el sufjo que se le añade a cada elemento 

const sufijo16Y17 = "uro";  //Sin guión

//Almacena el autentico nombre de azufre por sulfuro

const sulfuro = "sulfuro";

const numeroDeCartas = 8;

//Almacena el numero de segundos de la notificación
const tiempoNotificacionSegundos = 5;

//Almacena la palabra de los  oxidos

const oxido = "óxido";

//Almacena la formula del agua
const aguaSistematica = "óxido de dihidrógeno";

//Almacena el hidrógeno
const hidrogeno = "hidrógeno";
//Almacena el carbono
const carbono = "carbono";

//almacena la sal común

const sal = "cloruro de sodio";

//Almacena la formula del amoniavo (NH3)

const amoniacoSistematico = "trihidruro de nitrógeno";

//Alamacena el metano en sistematica (CH4)

const metanoSistematico = "tetrahidruro de carbono";

export default numeroDeCartas;

export { tiempoNotificacionSegundos };
export { carbono, hidrogeno, sulfuro, prefijos, oxido, numeroDePrefijos, hidruro, sal, metanoSistematico, amoniacoSistematico, aguaSistematica, sufijo16Y17 };