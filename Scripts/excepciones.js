//Función que compruba las ecepciones

function identificarCompuestosExcepcionales(compuesto, mapaElementos, elementos) {

    //Comprueba si es formulable

    var formulable = false;

    switch (compuesto) {

        case "agua":

            //Le manda la formula de agua para comprobar que lo puede formular
            formulable = comprobarCompuestoBinario(oxido, aguaSistematica, mapaElementos, elementos);

            break;

        case "ozono":



            mapaElementos.forEach(function (clave, valor) {

                if (valor.nombre.toLowerCase() === "oxigeno" && clave >= 3) {


                    descartarCartasUsadas(crearMapaCompuesto(Array.from([valor.nombre.toLowerCase()]), Array.from([3])), elementos);

                    //Calcula la puntuacion
                    formulable = calcularPuntuacion(crearMapaCompuestoPuntuacion(Array.from([valor]), Array.from([3])));

                }


            });

            break;

        case "sal común":

            formulable = comprobarSalesBinarias(sal, mapaElementos, elementos);

            break;


    }

    return formulable;


}