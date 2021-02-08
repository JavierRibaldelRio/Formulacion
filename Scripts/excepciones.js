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

                if (valor.nombre.toLowerCase() === "oxigeno" && valor >= 3) {
                    console.log("Ozono");
                }


            })

            break;


    }

    return formulable;


}