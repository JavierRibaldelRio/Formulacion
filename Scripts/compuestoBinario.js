function comprobarCompuestoBinario(compuestoBinarioABuscar, compuesto, mapElementos) {

    // console.log("Incluye hidruro");

    var binarioIncorrecto = true;   //para comprobar si hay que avisar al usuario de un error

    //Si lo es comprueba cuantas meleculas tiene de hidruro
    if (compuestoBinarioABuscar.startsWith(compuestoBinarioABuscar) || compuesto.startsWith(prefijos[1] + compuestoBinarioABuscar)) {

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

                const resultado = ejecucioBinario(i);  //Lo que se ha de ejecutar en caso de que sea un hidrudo

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

        var sal = averiguarCompuestoHidruro(compuesto, mapElementos, numero);

        // console.log(sal)

        if (typeof sal === "number") {


            return sal;


        } else {

            return false;

        }

    }
}