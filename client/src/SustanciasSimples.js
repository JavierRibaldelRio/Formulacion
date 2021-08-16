//Función que se ocupa de identificar si es una sustanci simple

function identificarSustanciasSimples(textoUsuario, elementosDisponibles, map) {

    ///////////////////////////////////////

    //Almacena el resultado

    var resultadoFuncion = false;

    //Pasa a minúsculas

    textoUsuario = textoUsuario.trim();

    //Quita espacios a principio de palabra

    textoUsuario = textoUsuario.toLowerCase();

    //Comprueba con todos el elementos
    for (let i = 0; i < elementosDisponibles.length; i++) {

        if (elementosDisponibles[i].nombre.toLowerCase() === textoUsuario) {

            //Se repite una vez por cada 
            for (var j = 0; j < elementosDisponibles[i].v.length; j++) {
                /*Los que tienen valencia -a*/          /*El oxígeno */                       /*El nitrógeno*/
                if (elementosDisponibles[i].v[j] === -1 || elementosDisponibles[i].z === 8 || elementosDisponibles[i].z === 7) {
                    var salida  //Alamacena los datos de resultado función
                    //Se repite una vez por cada elemento del map
                    map.forEach(function (valor, key) {
                        if (key.nombre.toLowerCase() === elementosDisponibles[i].nombre.toLowerCase()) {

                            if (valor >= 2) {
                                salida = elementosDisponibles[i];
                            }
                        }
                    });

                    resultadoFuncion = salida;

                }


            }

        }


    }

    return resultadoFuncion;
}

export default identificarSustanciasSimples;