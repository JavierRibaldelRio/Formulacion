// Funcion que se ocupa de encontar las sales bianrias, su objetivo es:
// ejecutar la función de identificar compuestouna vez por cada tipo de sal 
// binaria que pueda encontrar

function comprobarSalesBinarias(textoUsuario, mapaElementos, elementosDisponibles) {



    for (var i = 0; i < arrayAnfigenosHalogenos.length; i++) {

        if (textoUsuario.includes(arrayAnfigenosHalogenos[i].nuevoNombreElemento.toLowerCase()) && buscarElementoEnMapa(mapaElementos, arrayAnfigenosHalogenos[i].sq)) {

            //Zona de mirar si tiene el orden correcto de la z

            console.log(comprobarSiEsCorrecto(textoUsuario));

            function comprobarSiEsCorrecto(texto) {

                //Guarda el nommbre del compuesto en forma de matriz de palabras
                var textoPartido = [];

                //almacena el elemento
                var textoSinPrefijo;

                //almacenara la salida de comproca Si hay elemento por nombre
                var salidaComprobarSiHayElementoPorNombre;

                //Quitar los espacios de palabra ha pricipio de  texto

                texto = texto.trim();

                //Recorta por espacios y lo combierte en un array de palabras
                textoPartido = texto.split(" ");

                //Extrae el prefijo de la última palabra de texto partido y lo almacena
                textoSinPrefijo = extraerPrefijos(textoPartido[textoPartido.length - 1]);

                //asigan ha salidaComprobarSiHayElementoPorNombre la salida de 
                salidaComprobarSiHayElementoPorNombre = comprobarSiHayElementoPorNombre(textoSinPrefijo, elementosDisponibles);

                if (salidaComprobarSiHayElementoPorNombre === false) {

                    return false;

                } else {

                    //Almacena el primer elemento

                    var primerElmento = comprobarSiHayElementoPorNombre(nombresEquivalentes(arrayAnfigenosHalogenos[i].nuevoNombreElemento.toLowerCase()), elementosDisponibles);

                }



                console.log(primerElmento);

                console.log(salidaComprobarSiHayElementoPorNombre);

            }

            console.log(arrayAnfigenosHalogenos[i]);

            return comprobarCompuestoBinario(arrayAnfigenosHalogenos[i].nuevoNombreElemento.toLowerCase(), textoUsuario, mapaElementos, elementosDisponibles);


        }

    }

    //Devuelve falso si no encuentra nada

    return false;

}