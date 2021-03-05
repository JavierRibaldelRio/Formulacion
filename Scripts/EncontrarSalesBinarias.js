// Funcion que se ocupa de encontar las sales bianrias, su objetivo es:
// ejecutar la función de identificar compuestouna vez por cada tipo de sal 
// binaria que pueda encontrar

function comprobarSalesBinarias(textoUsuario,mapaElementos,elementosDisponibles){
    
    for(var i = 0; i < arrayAnfigenosHalogenos.length;i++){

        if (compuesto.includes(arrayAnfigenosHalogenos[i].nuevoNombreElemento.toLowerCase()) && buscarElementoEnMapa(mapElementos, arrayAnfigenosHalogenos[i].sq)) {

            console.log(arrayAnfigenosHalogenos[i]);

            return comprobarCompuestoBinario(arrayAnfigenosHalogenos[i].nuevoNombreElemento.toLowerCase(), textoUsuario, mapaElementos, elementosDisponibles);


        }

    }

    //Devuelve falso si no encuentra nada

    return false;

}