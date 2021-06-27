
import extraerPrefijos from "./extraerPrefijo";
import { sulfuro } from "./palabrasClaves";
import { encontrarPrefijo } from "./funcionCompuesto";
import descartarCartasUsadas from "./eliminarCompuestos";
import crearMapaCompuesto from "./crearMapaCompuesto";

import { comprobarSiPuedeGenerarCompuestos } from "./funcionCompuesto";

//Función que comprueba si es un hidruro
function averiguarHalogenosYAnfigenos(texto, mapa, prefijoHidrogeno, elementosDisponibles) {

    //Array de cartas de todos los Halógenos y Anfígenos
    var cartasHidracidos = encontrarEnBancaAnfigenosYHalogenos();

    //Separa el texto en palabras y coge la primera
    var primerElemento = texto.split(" ")[0];

    //Almacena el elemento sin el prefijo
    var primerElementoSinPrefijoConSufijo = extraerPrefijos(primerElemento);

    //Almacena el prefijo del Primer Elemento
    var prefijoPrimerElemento;

    //Primer elmento almacenado correctamente
    var elemento1;

    for (var i = 0; i < cartasHidracidos.length; i++) {

        //Primer elemento
        switch (primerElementoSinPrefijoConSufijo.substr(0, 2)) {

            case cartasHidracidos[i].nombre.toLowerCase().substr(0, 2):

                elemento1 = cartasHidracidos[i].nombre.toLowerCase();

                break;

            case sulfuro.substr(0, 2):

                elemento1 = "azufre";

                break;
        }
    }

    if (elemento1 === undefined) {

        return false;

    }

    if (primerElemento.startsWith(elemento1.substr(0, 2)) || elemento1 === "azufre") {

        prefijoPrimerElemento = 1;
    }

    else {
        prefijoPrimerElemento = encontrarPrefijo(primerElemento.split(elemento1)[0]);


    }
    if (elemento1.grupo < 16) {

        return false;

    }


    const salida = comprobarSiPuedeGenerarCompuestos(elemento1, prefijoPrimerElemento, "hidrógeno", prefijoHidrogeno, mapa);

    if (typeof salida === "number") {

        const elementosUsados = ["hidrógeno", elemento1];

        const repeticionesElementosUsados = [prefijoHidrogeno, prefijoPrimerElemento];

        const mapaCompuesto = crearMapaCompuesto(elementosUsados, repeticionesElementosUsados);

        descartarCartasUsadas(mapaCompuesto, elementosDisponibles);

        return salida

    } else {


        return false

    }

    function encontrarEnBancaAnfigenosYHalogenos() {

        var arrayDeHidracidos = [];

        for (var i = 0; i < elementosDisponibles.length; i++) {

            if (elementosDisponibles[i].grupo === 16 || elementosDisponibles[i].grupo === 17) {

                arrayDeHidracidos.push(elementosDisponibles[i]);

            }

        }

        return arrayDeHidracidos;

    }

}

export default averiguarHalogenosYAnfigenos;