//Funcion que comprueva si es posible crear este compuesto
function comprovarCompuesto(elementos, compuesto) {

    const errorCompuesto = "Este compuesto no se puede crear";

    //Cromprovar si compuesto no es un texto
    if (typeof compuesto != "string") {

        alert("Por favor inserte un valor valido.");

    }

    else {

        compuesto = compuesto.toLocaleLowerCase();  //Pasa a minusculas

        var mapElementos = crearMap();

        //Comprueba si es un hidruro
        if (compuesto.includes(hidruro)) {

            console.log(1);

            //Si lo es comprueba cuantas meleculas tiene de hidruro
            if (compuesto.startsWith(hidruro) || compuesto.startsWith(prefijos[1] + hidruro)) {

                hidruroIncorrecto = false;  // Para marcar que no ahí error

                averiguarCompuesto(compuesto, mapElementos);

            } else {

                var hidruroIncorrecto = true;   //para comprovar si hay que avisar al usuario de un error

                for (var i = 2; i < numeroDePrefijos; i++) {

                    if (compuesto.startsWith(prefijos[i] + hidruro)) {

                        hidruroIncorrecto = false;  // Para marcar que no ahí error

                        averiguarCompuesto(compuesto, mapElementos);

                        i = numeroDePrefijos; //Para que no lo comprueve más el For
                    }

                }

                if (hidruroIncorrecto) {

                    alert(errorCompuesto);

                }

            }

        }

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

    function averiguarCompuesto(texto, mapa) {

        texto = texto.trim()    //Para quitar leos espacios a pricipio de palabra

        var textoSeparado = texto.split(" ");   //Para separar las palabras en meterlas en un array invididual

        var elemento = textoSeparado[2];

        mapa.forEach(function (valor, key) {

            var nombre = key.nombre.toLocaleLowerCase();    //Para pasar a minusculas

            if (elemento.endsWith(nombre)) {

                console.log("iguales");

                var prefijoMultipicador = elemento.split(nombre)[0];

                console.log(prefijoMultipicador);
            }

        });

        console.log(elemento);

    }

    //Funcion para comprovar que prefijo es

    function encontrarPrefijo(particula)



}
