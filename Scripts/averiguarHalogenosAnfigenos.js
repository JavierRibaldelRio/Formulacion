//Función que comprueba si es un hidruro
function averiguarHalogenosYAnfigenos(texto, mapa, prefijoHidrogeno) {

    //Array de cartas de todos los Halógenos y Anfígenos
    var cartasAnfigenoHalogenos = encontrarEnBancaAnfigenosYHalogenos();

    //Separa el texto en palabras y coge la primera
    var primerElemento = texto.split(" ")[0];

    //Almacena el elemento sin el prefijo
    var primerElementoSinPrefijoConSufijo = extraerPrefijos(primerElemento);

    //Almacena el prefijo del Primer Elemento
    var prefijoPrimerElemento;

    //Primer elmento almacenado correctamente
    var elemento1;

    for (var i = 0; i < cartasAnfigenoHalogenos.length; i++) {

        //Primer elemento
        switch (primerElementoSinPrefijoConSufijo.substr(0, 2)) {

            case cartasAnfigenoHalogenos[i].nombre.toLowerCase().substr(0, 2):

                elemento1 = cartasAnfigenoHalogenos[i].nombre.toLowerCase();

                break;

            case sulfuro.substr(0, 2):

                elemento1 = "azufre";

                break;
        }
    }

    if(elemento1 === undefined){

        return false;

    }

    if (primerElemento.startsWith(elemento1.substr(0,2)) || elemento1 === "azufre") {

        prefijoPrimerElemento = 1;
    }

    else {
        prefijoPrimerElemento = encontrarPrefijo(primerElemento.split(elemento1)[0]);
    }


    const salida = comprobarSiPuedeGenerarCompuestos(elemento1, prefijoPrimerElemento, "hidrógeno", prefijoHidrogeno,mapa);

    if(typeof salida === "number"){

        return salida

    }else{
        return false
    }

    function encontrarEnBancaAnfigenosYHalogenos() {

        var arrayDeAnfigenosYHalogenos = []; elemento1

        for (var i = 0; i < elementosDisponibles.length; i++) {

            if (elementosDisponibles[i].grupo === 16 || elementosDisponibles[i].grupo === 17) {

                arrayDeAnfigenosYHalogenos.push(elementosDisponibles[i]);

            }

        }

        return arrayDeAnfigenosYHalogenos;

    }


}