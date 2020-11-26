//Funcion que comprueva si es posible crear este compuesto
function comprovarCompuesto(elementos, compuesto) {

    const errorCompuesto = "Este compuesto no se puede crear";

    //Cromprovar si compuesto no es un texto
    if (typeof compuesto != "string") {

        alert("Por favor inserte un valor valido.");

    }
    //si es un string
    else {

        compuesto = compuesto.toLocaleLowerCase();  //Pasa a minusculas

        const mapElementos = crearMap();

        //Comprueba si es un hidruro
        if (compuesto.includes(hidruro) && comprovarSiHayHidrogeno(mapElementos)) {

            console.log("Incluye hidruro");

            var hidruroIncorrecto = true;   //para comprovar si hay que avisar al usuario de un error

            //Si lo es comprueba cuantas meleculas tiene de hidruro
            if (compuesto.startsWith(hidruro) || compuesto.startsWith(prefijos[1] + hidruro)) {

                console.log("mono");

                ejecucionHidruro(1);

            } else {


                for (var i = 2; i < numeroDePrefijos; i++) {

                    if (compuesto.startsWith(prefijos[i] + hidruro)) {

                        ejecucionHidruro(i);

                        i = numeroDePrefijos; //Para que no lo comprueve más el For
                    }

                }





            }

            function ejecucionHidruro(numero) {

                hidruroIncorrecto = false;  // Para marcar que no ahí error

                var salida = averiguarCompuesto(compuesto, mapElementos, numero);

                if (salida === -1) {

                    alert(errorCompuesto);

                }
            }

        }

        alert(errorCompuesto);


    }


    //Funciones

    //Devuelve un mapa <objeto|Nº de repeticiones de ese objeto>
    function crearMap() {
        var mapaElementos = new Map();  //Map donde se almacenan el numero de repeticiones de cada elmento

        for (var i = 0; i < numeroElementosACoger; i++) {

            var elementoOriginal = elementos[i]; //Almacena el elemento origianl

            var k = j = i;

            var contador = 1;

            if (i < numeroElementosACoger - 1) {

                while (j < numeroElementosACoger - 1 && elementoOriginal.sq == elementos[1 + j].sq) {

                    i++;

                    k++;
                    j = k;
                    contador++;

                }
            }
            mapaElementos.set(elementoOriginal, contador);

        }

        return mapaElementos;
    }

    function averiguarCompuesto(texto, mapa, prefijoHidrogeno) {

        texto = texto.trim()    //Para quitar leos espacios a pricipio de palabra

        var textoSeparado = texto.split(" ");   //Para separar las palabras en meterlas en un array invididual

        console.log(textoSeparado);

        var elemento = textoSeparado[2];

        mapa.forEach(function (valor, key) {

            //Almacena el nombre del segundo compuesto
            const nombre = key.nombre/*Coger la propiedad*/.toLocaleLowerCase();    //Para pasar a minusculas

            if (elemento.endsWith(nombre)) {

                var numeroPrefijo;  //Prefijo del 2º Elemnto

                console.log("iguales");

                var prefijoMultipicador = elemento.split(nombre)[0]; //Sacar el prefijo

                //Para asegurarse de que es mono

                if (prefijoMultipicador === "") {

                    numeroPrefijo = 1;      //Ya que si no hay nada es mono

                } else {

                    numeroPrefijo = encontrarPrefijo(prefijoMultipicador);

                }

                console.log(numeroPrefijo);

                if (numeroPrefijo == -1) {

                    return -1;

                }



                if (-1 === comprovarSiPuedeGenerarCompuestos("hidrógeno", prefijoHidrogeno, nombre, numeroPrefijo, mapa)) {

                    return -1;

                }


            }

        });

        console.log(elemento);

    }

    //Funcion para comprovar que prefijo es

}

function encontrarPrefijo(particula) {

    var particula;

    for (var i = 1; i < numeroDePrefijos; i++) {

        if (particula == prefijos[i]) {

            particula = i;

            return particula;

        }

    }

    return -1;

}
//Funcion para saber si el usuario tiene los elementos necesarios para poder crear el compuesto
/*Hidrogeno*/   /*1*/                   /*Litio*/       /*1*/
function comprovarSiPuedeGenerarCompuestos(primeraPalabra, prefijoPrimeraPalabra, segundaPalabra, prefijoSegundaPalabra, mapa) {


    if (posibleTexto(primeraPalabra) && posibleTexto(segundaPalabra) && posibleNumero(prefijoPrimeraPalabra) && posibleNumero(prefijoSegundaPalabra)) {

        if (prefijoPrimeraPalabra + prefijoSegundaPalabra <= numeroDePrefijos) {

            if (comprovarSiEstanLosCompuestos(primeraPalabra, prefijoPrimeraPalabra, mapa) && comprovarSiEstanLosCompuestos(segundaPalabra, prefijoSegundaPalabra, mapa)) {


                function crearMapaCompuesto() {

                    var mapaCompuesto = new Map();

                    mapa.forEach(function (valor, key) {

                        anadir(primeraPalabra, pre)

                        function anadir(palabra, numero) {

                            if (key.nombre.toLocaleLowerCase() === palabra){

                                mapaCompuesto.set(key,numero);

                            }
                        }
                    });

                }

            }


        }

        else {
            return -1;
        }


    } else {

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

    //funcion para comprovar si esta el elemento

    function comprovarSiEstanLosCompuestos(nombre, numero, map) {

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

function comprovarSiHayHidrogeno(mapaElementos) {

    var devolver = false;

    //Mirar si el hidrogeno se encuentra en el mapa de los elementos
    mapaElementos.forEach(function (value, key) {

        const sqElemento = key.sq; //Para hacer Minusculas

        if (sqElemento === "H") {

            devolver = true;
        }
    });

    return devolver;

}
