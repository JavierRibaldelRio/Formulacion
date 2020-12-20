//Funcion que comprueva si es posible crear este compuesto
function comprobarCompuesto(elementos, compuesto) {

    //Error que sacara por pantalla
    const errorCompuesto = "Este compuesto no se puede crear";

    //Cromprovar si compuesto no es un texto
    if (typeof compuesto != "string") {

        //Error
        alert("Por favor inserte un valor valido.");

        console.log(typeof compuesto);

    }
    //si es un string
    else {

        compuesto = compuesto.toLocaleLowerCase();  //Pasa a minusculas

        const mapElementos = crearMap();    //Crear el mapa de les elementos

        const compuestoPartido = compuesto.split(" ");

        //Comprueba si es un hidruro
        if (compuesto.includes(hidruro) && comprobarSiHayHidrogeno(mapElementos)) {

            // console.log("Incluye hidruro");

            var hidruroIncorrecto = true;   //para comprobar si hay que avisar al usuario de un error

            //Si lo es comprueba cuantas meleculas tiene de hidruro
            if (compuesto.startsWith(hidruro) || compuesto.startsWith(prefijos[1] + hidruro)) {

                // console.log("mono");

                const resultado = ejecucionHidruro(1);  //Lo que se ha de ejecutar en caso de que sea un hidrudo

                //Si es falso devuelves resultado
                if (false === resultado) {

                    return false;

                }

                //Si no es falso y es verdadero devuelves true
                else if (typeof resultado === "number") {

                    return resultado;

                }

            } else {

                //Se ejecuta una vez por cada prefijo
                for (var i = 2; i < numeroDePrefijos; i++) {

                    //Comprueba con que prefijos coinciden con el prefijo
                    if (compuesto.startsWith(prefijos[i] + hidruro)) {

                        const resultado = ejecucionHidruro(i);  //Lo que se ha de ejecutar en caso de que sea un hidrudo

                        //Si es falso devuelves resultado
                        if (false === resultado) {

                            return false;

                        }

                        //Si no es falso y es verdadero devuelves true
                        else if ( typeof resultado === "number") {

                            return resultado;

                        }

                        i = numeroDePrefijos; //Para que no lo comprueve más el for, de esa forma se deja de comprobar si el prefijo es el mismi
                    }

                }

            }


            //Lo que se tiene que ejecutar si es un hidruro
            function ejecucionHidruro(numero) {

                hidruroIncorrecto = false;  // Para marcar que no ahí error

                var sal = averiguarCompuestoHidruro(compuesto, mapElementos, numero);

                // console.log(sal)

                if ( typeof sal === "number") {


                    return sal;


                } else{

                    alert(errorCompuesto);  //Error

                    return false;

                }

            }

        }
        
        //comprobar si abace en uro
        else if (compuestoPartido[0].endsWith(sufijo16Y17) && compuestoPartido[2].endsWith("hidrógeno") && comprobarSiHayHidrogeno(mapElementos)) {

            console.log("AnfigenoHAlogeno");

            //Preparar datos para la función de averiguar

            //Coger la ultima palabra de el array, 
            const prefijoTexto = compuestoPartido[2].split("hidrógeno");

            var prefijo;

            if(prefijoTexto[0] === ""){

                prefijo = 1;

            }else{

                prefijo = encontrarPrefijo(prefijoTexto[0]);

            }

            return prefijo;

        }

        //Codigo de los compuestos de hidruros y las columnas 16 y17 

        alert(errorCompuesto);  //Error

        return false;

    }


    //Funciones

    //Devuelve un mapa <objeto|Nº de repeticiones de ese objeto>
    function crearMap() {

        var mapaElementos = new Map();  //Map donde se almacenan el numero de repeticiones de cada elmento

        //Se ejecuta una vez por el número de elementos que hay que coger
        for (var i = 0; i < numeroElementosACoger; i++) {

            var elementoOriginal = elementos[i]; //Almacena el elemento origianl

            var contador = 1;   //Cuenta cuantas veces se repite un elemento

            //si es igual al número 
            if (i < numeroElementosACoger - 1) {

                //repetira esto hasta que el elemento cambie
                while (i < numeroElementosACoger - 1 && elementoOriginal.sq == elementos[1 + i].sq) {

                    i++;

                    contador++;

                }

            }
            mapaElementos.set(elementoOriginal, contador);  //Añade al mapa

        }

        return mapaElementos;   //Retorna el mapa
    }

    function averiguarCompuestoHidruro(texto, mapa, prefijoHidrogeno) {

        var devolver = false;   //Almacena lo que se va ha devolver

        texto = texto.trim()    //Para quitar leos espacios a pricipio de palabra

        var textoSeparado = texto.split(" ");   //Para separar las palabras en meterlas en un array invididual

        // console.log(textoSeparado);

        var elemento = textoSeparado[2];    //coger el tercer trozo de el array de palabras torceadas

        //Se ejecuta por cada casilla del mapa
        mapa.forEach(function (valor, key) {

            //Almacena el nombre del segundo compuesto
            const nombre = key.nombre/*Coger la propiedad*/.toLocaleLowerCase();    //Para pasar a minusculas

            //Si acaba con nombre
            if (elemento.endsWith(nombre)) {

                var numeroPrefijo;  //Prefijo del 2º Elemnto

                // console.log("iguales");

                var prefijoMultipicador = elemento.split(nombre)[0]; //Sacar el prefijo

                //Si no hay particula quiere decir que es 1(mono)
                if (prefijoMultipicador === "") {

                    numeroPrefijo = 1;      //Ya que si no hay nada es mono

                }

                //Para encontrar el prefijo               
                else {

                    numeroPrefijo = encontrarPrefijo(prefijoMultipicador);

                }

                // console.log(numeroPrefijo);

                //Si número de prefijo es -1 [ERROR] o es de un grupo de los anfigenos o Halogenos
                if (numeroPrefijo === -1 ) {

                    return false;

                } 
                //Devuelve -2
                

                //Dice si es posible combinar los introducidios, sumar y comprobar valencias
                devolver = comprobarSiPuedeGenerarCompuestos("hidrógeno", prefijoHidrogeno, nombre, numeroPrefijo, mapa);

            }   

        });

        return devolver;

    }

    //Funcion para comprobar que prefijo es

}

//Devuelve que prefijo a sido a utilizado, por lo tanto el número
function encontrarPrefijo(particula) {

    //Se repirte una vez por el número de prefijos que haya
    for (var i = 1; i < numeroDePrefijos; i++) {

        //Si la particula es la misma que el prefijo
        if (particula == prefijos[i]) {

            return i;   //Devuelve el número de la particula

        }

    }

    return -1;

}

//Funcion para saber si el usuario tiene los elementos necesarios para poder crear el compuesto
/*Hidrogeno*/   /*1*/                   /*Litio*/       /*1*/
function comprobarSiPuedeGenerarCompuestos(primeraPalabra, prefijoPrimeraPalabra, segundaPalabra, prefijoSegundaPalabra, mapa) {

    //Mirar si tiene los formatos correctos (2 textos y 2 números)
    if (posibleTexto(primeraPalabra) && posibleTexto(segundaPalabra) && posibleNumero(prefijoPrimeraPalabra) && posibleNumero(prefijoSegundaPalabra)) {

        //Se asegura de que la suma de los dos prefijos es menor que al número total de prefijos
        if (prefijoPrimeraPalabra + prefijoSegundaPalabra <= numeroDePrefijos) {

            //Se asegura de que los compuestos estan
            if (comprobarSiEstanLosCompuestos(primeraPalabra, prefijoPrimeraPalabra, mapa) && comprobarSiEstanLosCompuestos(segundaPalabra, prefijoSegundaPalabra, mapa)) {

                var devol;

                var arrayCompuesto = crearArrayCompuesto(); //Crea un array corresponde al compuesto

                //Devolver el valor de neutro
                const devolver = neutro();

                if (devolver === true) {
                    devol = calcularPuntuacion(arrayCompuesto, prefijoPrimeraPalabra, prefijoSegundaPalabra);

                }

                else {
                    devol = false
                }

                return devol;

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

        }

        //Error
        else {
            return -1;
        }

        //Error    
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
