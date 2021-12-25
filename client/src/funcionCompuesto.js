//Importaciones

import identificarSustanciasSimples from './SustanciasSimples';
import descartarCartasUsadas from './eliminarCompuestos';
import crearMapaCompuesto from './crearMapaCompuesto';
import calcularPuntuacion from './calcularPuntos';
import identificarCompuestosExcepcionales from './excepciones';
import comprobarCompuestoBinario from './compuestoBinario';
import './palabrasClaves'
import { hidruro, prefijos, oxido } from './palabrasClaves';
import buscarElementoEnMapa from './buscarEnMapCompuestos';
import { sufijo16Y17, hidrogeno, carbono } from './palabrasClaves';
import averiguarHalogenosYAnfigenos from './averiguarHalogenosAnfigenos';
import { numeroDePrefijos } from './palabrasClaves';
import { crearMapaCompuestoPuntuacion } from './calcularPuntos';
import comprobarSalesBinariasVolatiles from './EncontrarSalesBinariasVolatiles';
import identificarPeroxido from './Peroxido.js';




//Funcion que comprueva si es posible crear este compuesto
function comprobarCompuesto(elementos, compuesto) {

    //Cromprovar si compuesto no es un texto
    if (typeof compuesto != "string") {

        //Error

        console.log(typeof compuesto);

    }
    //si es un string
    else {

        compuesto = compuesto.trim(); //Quita si hay los primes y ultimos espacios

        compuesto = compuesto.toLocaleLowerCase();  //Pasa a minusculas

        const mapElementos = crearMap();    //Crear el mapa de les elementos

        const compuestoPartido = compuesto.split(" ");
        //Comprueba las sustancias simples

        if (compuestoPartido.length === 1) {

            var salidaSS = identificarSustanciasSimples(compuestoPartido[0], elementos, mapElementos);

            if (salidaSS !== false) {

                //Crea el mapa del compuesto
                var mapaCompuesto = new Map();

                //Añade el elemento al mapa
                mapaCompuesto.set(salidaSS, 2);

                //eliminar las cartas que han sido usadas
                descartarCartasUsadas(crearMapaCompuesto([salidaSS.nombre.toLocaleLowerCase()], [2]), elementos);

                //Devulve la puntuación 
                return calcularPuntuacion(mapaCompuesto);


            } else {

                return identificarCompuestosExcepcionales(compuesto, mapElementos, elementos);

            }




        }
        //Comprueba si es un hidruro
        else if (compuesto.includes(hidruro) && buscarElementoEnMapa(mapElementos, "H")) {

            return comprobarCompuestoBinario(hidruro, compuesto, mapElementos, elementos);

        }

        //comprobar si abace en uro
        else if (compuestoPartido[0].endsWith(sufijo16Y17) && compuestoPartido[2].endsWith("hidrógeno") && comprobarSiHayHidrogeno(mapElementos)) {

            console.log("AnfigenoHAlogeno");

            //Preparar datos para la función de averiguar

            //Coger la ultima palabra de el array, 
            const prefijoTexto = compuestoPartido[2].split("hidrógeno");

            //Almacena el prefijo del hidrogeno
            var prefijo;


            //Si no hay prefijo o es mono
            if (prefijoTexto[0] === "" || prefijoTexto === prefijos[1]) {

                prefijo = 1;

            }
            //es di
            else if (prefijoTexto[0] === prefijos[2]) {

                prefijo = 2;

            } else {
                return false;
            }

            const salida = averiguarHalogenosYAnfigenos(compuesto, mapElementos, prefijo, elementos);

            return salida;
        }

        else if (compuesto.includes(oxido) && buscarElementoEnMapa(mapElementos, "O")) {
            //Almacena la regex de el peróxido

            let regPeroxido = /peróxido de \w+/

            if (regPeroxido.test(compuesto)) {


                identificarPeroxido(compuesto, elementos, mapElementos);

            }
            else {

                //En caso de que se a un óxido
                return comprobarCompuestoBinario(oxido, compuesto, mapElementos, elementos);
            }
        }

        //Parte de sales binarias
        else {

            //MIra si es correcto y lo almacena
            let correcto = comprobarSalesBinariasVolatiles(compuesto, mapElementos, elementos);

            if (typeof correcto === "boolean") {

                return identificarCompuestosExcepcionales(compuesto, mapElementos, elementos);

            } else {

                return correcto;

            }

        }
    }

    //Funciones

    //Devuelve un mapa <objeto|Nº de repeticiones de ese objeto>
    function crearMap() {

        var mapaElementos = new Map();  //Map donde se almacenan el numero de repeticiones de cada elmento

        //Se ejecuta una vez por el número de elementos que hay que coger
        for (var i = 0; i < elementos.length; i++) {

            var elementoOriginal = elementos[i]; //Almacena el elemento origianl

            var contador = 1;   //Cuenta cuantas veces se repite un elemento

            //si es igual al número 
            if (i < elementos.length - 1) {

                //repetira esto hasta que el elemento cambie
                while (i < elementos.length - 1 && elementoOriginal.sq === elementos[1 + i].sq) {

                    i++;

                    contador++;

                }

            }
            mapaElementos.set(elementoOriginal, contador);  //Añade al mapa

        }

        return mapaElementos;   //Retorna el mapa
    }


    //Funcion para comprobar que prefijo es

}

//Devuelve que prefijo a sido a utilizado, por lo tanto el número
function encontrarPrefijo(particula) {

    //Se repirte una vez por el número de prefijos que haya
    for (var i = 1; i < numeroDePrefijos; i++) {

        //Si la particula es la misma que el prefijo
        if (particula.startsWith(prefijos[i])) {

            return i;   //Devuelve el número de la particula

        }

    }

    return -1;

}

//Funcion para saber si el usuario tiene los elementos necesarios para poder crear el compuesto
/*Hidrogeno*/   /*1*/                   /*Litio*/       /*1*/
function comprobarSiPuedeGenerarCompuestos(primeraPalabra, prefijoPrimeraPalabra, segundaPalabra, prefijoSegundaPalabra, mapa, calcularPuntosObtenidos = true) {

    //Mirar si tiene los formatos correctos (2 textos y 2 números)
    if (posibleTexto(primeraPalabra) && posibleTexto(segundaPalabra) && posibleNumero(prefijoPrimeraPalabra) && posibleNumero(prefijoSegundaPalabra)) {

        //Se asegura de que la suma de los dos prefijos es menor que al número total de prefijos

        //Eliminar los Nitrogenoides el carbonoide


        //Asegurarse de que el compuesto esta simplificado al máximo
        if (prefijoPrimeraPalabra > 1 && prefijoSegundaPalabra > 1) {

            //Almacena el valor maximo del número de oxidación

            var max, min;

            //Almacena el resultado de la división de max/min

            let division;

            //Si el mayor es primero
            if (prefijoPrimeraPalabra > prefijoSegundaPalabra) {

                max = prefijoPrimeraPalabra;

                min = prefijoSegundaPalabra;

            }
            //sino
            else {
                max = prefijoSegundaPalabra;

                min = prefijoPrimeraPalabra;

            }

            //Divide el máximo entre el mínimo
            division = max / min;

            console.log("funciona correctamente");

            console.info(division);

            //Si el valor de la division es igual a la prate entera de la división
            //Es decir comprueba si es entero o decimal

            if (division === Math.floor(division)/*Math.floor() saca la parte entera de la coma*/) {

                return false;

            }


        }

        //Se asegura de que los compuestos estan
        if (comprobarSiEstanLosCompuestos(primeraPalabra, prefijoPrimeraPalabra, mapa) && comprobarSiEstanLosCompuestos(segundaPalabra, prefijoSegundaPalabra, mapa)) {

            //Almaceno lo que se va ha devolver
            var devol;

            //Array de objetos que almacena los objetos utilizados para este compuesto
            var arrayCompuesto = crearArrayCompuesto(); //Crea un array corresponde al compuesto

            if (arrayCompuesto[0].nombre.toLocaleLowerCase() === hidrogeno) {

                console.log("CArbonoides,Nitrogenoides");

                if (arrayCompuesto[1].grupo === 15) {

                    if (prefijoPrimeraPalabra !== 3) {
                        return false;
                    }

                } else if (arrayCompuesto[1].nombre.toLocaleLowerCase() === carbono) {

                    if (prefijoPrimeraPalabra !== 4) {
                        return false;
                    }

                }

            }

            //Devolver el valor de neutro
            const devolver = neutro();

            //Si devolver es neutro
            if (devolver === true) {

                //Y calcularPuntuacionObtenida es igual a true

                if (calcularPuntosObtenidos === true) {

                    //Calcula puntaución, la cual requiere un mapa de el compuesto, para eso utilizo la función de crearMapaCompuesto la cual pide un array de elemen

                    devol = calcularPuntuacion(crearMapaCompuestoPuntuacion(arrayCompuesto, [prefijoPrimeraPalabra, prefijoSegundaPalabra]));

                }

                else {
                    devol = true;
                }

            }

            else {
                devol = false;
            }

            return devol;   ////Devuelve la puntuación

            //funcion que dice si da neutro (0) o estable

            function neutro() {

                var valencias1, valencias2;

                //Crea el array de valencias sumadas de cada elemento
                valencias1 = operar(arrayCompuesto[0].v, prefijoPrimeraPalabra);

                valencias2 = operar(arrayCompuesto[1].v, prefijoSegundaPalabra);

                //Comprueva si la suma de los arrays de valencias es neutro
                if (sumar(valencias1, valencias2)) {

                    return true;

                } else {

                    return -1;
                }

                //Suma todas las casillas de todos los arrays

                function sumar(array1, array2) {

                    //Coge la casilla indicada del array
                    for (var i = 0; i < array1.length; i++) {

                        //Coge la casilla indicada del 2º array
                        for (var j = 0; j < array2.length; j++) {

                            //Si la suma de los arrays es o deveulve true por que es neutro
                            if ((array1[i] + array2[j]) === 0) {

                                return true;
                            }
                        }
                    }

                    //Si no devuelve true devulve false
                    return false;
                }

                //Multiplica las valencias por el numero de repeticiones del elmetneo
                function operar(valencias, repeticiones) {

                    var arrayVuelta = [];   //El array que devolveras

                    // Se ejecuta una ve por cada casilla del array
                    for (var i = 0; i < valencias.length; i++) {

                        //Multiplica la casilla de la valencia por las repeticiones y la añade al array
                        arrayVuelta.push(valencias[i] * repeticiones);

                    }

                    return arrayVuelta;     //Multiplica el array

                }
            }

            //Función que estrae los datos necesarios
            function crearArrayCompuesto() {

                var arrayCompuesto = [];    //Crea el a el array

                //Se ejecuta una vez por cada elemento del array
                mapa.forEach(function (valor, key) {

                    anadir(primeraPalabra, key);

                });

                //Se ejecuta una vez por cada elemento del array

                mapa.forEach(function (valor, key) {

                    anadir(segundaPalabra, key);

                });

                //Añade el elemento al array
                function anadir(palabra, key) {
                    //Si es igual lo añade
                    if (key.nombre.toLocaleLowerCase() === palabra) {

                        arrayCompuesto.push(key);   //Añade al array la palabra

                    }
                }

                return arrayCompuesto;  // Devuelve el array
            }

        }



        //Error    
    }
    else {

        return -1;

    }


    //Comueva si es un texto
    function posibleTexto(text) {

        return typeof text === "string";

    }

    //Compreuva si es un numero

    function posibleNumero(numero) {

        return typeof numero === "number";

    }

    //funcion para comprobar si esta el elemento

    function comprobarSiEstanLosCompuestos(nombre, numero, map) {

        var devolucion = false; //Variable que será devuelta

        map.forEach(function (value, key) {


            //Comprueva si el elemento esta dentro del map  y tiene tantas repeticiones como es indicado por el prfijo

            if (key.nombre.toLocaleLowerCase() === nombre && value >= numero) {

                devolucion = true;

            }
        });

        return devolucion;

    }

}

//funcion àra coomprovar si hay hidrogeno

function comprobarSiHayHidrogeno(mapaElementos) {

    var devolver = false;   //Lo que se devolvera

    //Mirar si el hidrogeno se encuentra en el mapa de los elementos
    mapaElementos.forEach(function (value, key) {

        const sqElemento = key.sq; //Coge de la clave

        //Si el sq es igual a la del hidrógeno
        if (sqElemento === "H") {

            devolver = true;    //Cambia la devolución a true

        }
    });

    return devolver;    //Devuelve

}

export default comprobarCompuesto;
export { comprobarSiHayHidrogeno };
export { encontrarPrefijo, comprobarSiPuedeGenerarCompuestos };