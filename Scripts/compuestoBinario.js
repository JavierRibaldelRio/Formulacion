function comprobarCompuestoBinario(compuestoBinarioABuscar, compuesto, mapElementos, elementos) {

    //Comprobar si el compuesto tiene las suficientes letras para valorarse

    if (compuesto.trim().split(" ").length != 3) {

        return false;

    }

    // console.log("Incluye hidruro");

    var binarioIncorrecto = true;   //para comprobar si hay que avisar al usuario de un error

    var primerPrefijo = prefijos[1];
    //Como el monoóxido lleva solo f
    if (compuestoBinarioABuscar === oxido) {
        primerPrefijo = "mon"
    }

    //Si lo es comprueba cuantas meleculas tiene de hidruro
    if (compuesto.startsWith(compuestoBinarioABuscar) || compuesto.startsWith(primerPrefijo + compuestoBinarioABuscar)) {

        // console.log("mono");

        const resultado = ejecucionBinario(1);  //Lo que se ha de ejecutar en caso de que sea un hidrudo

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
            if (compuesto.startsWith(prefijos[i] + compuestoBinarioABuscar)) {

                const resultado = ejecucionBinario(i);  //Lo que se ha de ejecutar en caso de que sea un hidrudo

                //Si es falso devuelves resultado
                if (false === resultado) {

                    return false;

                }

                //Si no es falso y es verdadero devuelves true
                else if (typeof resultado === "number") {

                    return resultado;

                }

                i = numeroDePrefijos; //Para que no lo comprueve más el for, de esa forma se deja de comprobar si el prefijo es el mismi
            }

        }

    }


    //Lo que se tiene que ejecutar si es un hidruro
    function ejecucionBinario(numero) {

        binarioIncorrecto = false;  // Para marcar que no ahí error

        var sal = averiguarCompuestoBinario(compuesto, mapElementos, numero, compuestoBinarioABuscar, elementos);

        // console.log(sal)

        if (typeof sal === "number") {


            return sal;


        } else {

            return false;

        }

    }
}

function averiguarCompuestoBinario(texto, mapa, prefijoBinario1, primerCompuesto, elementos) {

    var devolver = false;   //Almacena lo que se va ha devolver

    texto = texto.trim()    //Para quitar leos espacios a pricipio de palabra

    var textoSeparado = texto.split(" ");   //Para separar las palabras en meterlas en un array invididual

    // console.log(textoSeparado);

    var elemento = textoSeparado[2];    //coger el tercer trozo de el array de palabras torceadas

    var nombreSegundoElemento;

    var numeroPrefijoSegundoElemento;

    //Se ejecuta por cada casilla del mapa
    mapa.forEach(function (valor, key) {

        //Almacena el nombre del segundo compuesto
        const nombre = key.nombre/*Coger la propiedad*/.toLocaleLowerCase();    //Para pasar a minusculas

        //Si acaba con nombre
        if (elemento.endsWith(nombre)) {

            //Prefijo del 2º Elemnto

            var prefijoMultipicador = elemento.split(nombre)[0]; //Sacar el prefijo

            //Si no hay particula quiere decir que es 1(mono)
            if (prefijoMultipicador === "") {

                numeroPrefijoSegundoElemento = 1;      //Ya que si no hay nada es mono

            }

            //Para encontrar el prefijo               
            else {

                numeroPrefijoSegundoElemento = encontrarPrefijo(prefijoMultipicador);

            }

            // console.log(numeroPrefijoSegundoElemento);

            //Si número de prefijo es -1 [ERROR] o es de un grupo de los anfigenos o Halogenos
            if (numeroPrefijoSegundoElemento === -1) {

                return false;

            }

            if (key.grupo > 15 && hidruro === primerCompuesto) {
                return false;
            }
            //Devuelve -2

            //Asigna a la variable del mapa

            nombreSegundoElemento = nombre;

            //Dice si es posible combinar los introducidios, sumar y comprobar valencias
            devolver = comprobarSiPuedeGenerarCompuestos(nombresEquivalentes(primerCompuesto), prefijoBinario1, nombre, numeroPrefijoSegundoElemento, mapa);

        }

    });

    //Si es un numero
    if (typeof devolver === "number") {

        //Creamos la matriz del compuesto

        const elementosUsados = [nombresEquivalentes(primerCompuesto), nombreSegundoElemento.toLocaleLowerCase()];

        const repeticionesElementosUsados = [prefijoBinario1, numeroPrefijoSegundoElemento];

        const mapaCompuesto = crearMapaCompuesto(elementosUsados, repeticionesElementosUsados);

        deacartarCartasUsadas(mapaCompuesto, elementos);
    }

    return devolver;

}
