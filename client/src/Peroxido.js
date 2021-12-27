import descartarCartasUsadas from "./eliminarCompuestos";
import calcularPuntuacion, { crearMapaCompuestoPuntuacion } from "./calcularPuntos";
import crearMapaCompuesto from "./crearMapaCompuesto";
import { prefijos, oxido } from "./palabrasClaves";
import extraerPrefijos from "./extraerPrefijo";
import { comprobarSiPuedeGenerarCompuestos } from './funcionCompuesto';
import nombresEquivalentes from "./EquivalenciasNombres";

//Identifica el peróxido y procede en caso de que sea correcto
function identificarPeroxido(compuesto, banca, mapa) {

    console.log(compuesto, banca);

    const peroxido = 'peróxido';

    var compuestoSeparado = [...compuesto.split(" ")];       //Transforma el compuesto en un array, cada casilla corresponde a una palabra

    var numeroOxigenos;  //Almacena el número de oxígenos necesario

    var metal;      //almacena el objeto del metal

    var prefijoMetal;   //Almacena el predijo del metal

    var numeroDeMetales;    //Almacena el número de repeticiones de este metal

    //Si no tiene prefijo  o es mono
    if (compuesto.startsWith(peroxido) || compuesto.startsWith(prefijos[1])) {

        //El número de oxígenos es uno
        numeroOxigenos = 2;

    }
    //Si no
    else {
        //Prueba haber si empieza por el prefijo
        for (var i = 2; i < prefijos.length; i++) {

            //si el compuesto empieza por el prefijo elegiodo

            if (compuesto.startsWith(prefijos[i])) {

                let numeroDeOxigenosEnPeroxido = 2;    //Almacena el número de oxígenos que hay dentro de un peróxido

                numeroOxigenos = numeroDeOxigenosEnPeroxido * i;   //Multiplica ya que la i indica el número de péroxidos que han sido ultilizados 


            }
        }
    }

    //Averigua cual es el siguiernte otro elemento

    metal = extraerPrefijos(compuestoSeparado[2]);
    /* for (var i = 0; i < banca.length; i++) {

    //     //Encuentra el elemento de dentro 
    //     if (compuestoSeparado[2].endsWith(banca[i].nombre.toLowerCase())) {


    //         metal = banca[i];

    //         i = banca.length + 2;

    //     }

    // }
    console.log("No metal: " + metal + "Número de oxígenos: " + numeroOxigenos);*/

    //Averigua el subíndice del segundo elemento

    //Almacena el prefijo

    prefijoMetal = compuestoSeparado[2].split(metal);

    //Si no tiene prefijo
    if (prefijoMetal[0] === "") {

        numeroDeMetales = 1;
    }
    //en caso de que tenga prefijo
    else {
        for (var i = 1; i < prefijos.length; i++) {

            if (prefijoMetal[0] === prefijos[i]) {


                numeroDeMetales = i;
            }


        }

        if (prefijoMetal === undefined) {
            return false
        }

    }


    //Si el compuesto es estable
    if (comprobarSiPuedeGenerarCompuestos(nombresEquivalentes(oxido), numeroOxigenos / 2, metal, numeroDeMetales, mapa, false) === true) {

        //Crea un array del compuesto, almacena todos los elementos necesarios para hacer el compuesto

        let arrayCompuesto = [nombresEquivalentes(oxido), metal];

        //Almacena el número de repeticiones de cada elemento
        let arrayRepeticiones = [numeroOxigenos, numeroDeMetales];

        //Crea un mapa del compuesto
        let mapPeroxido = crearMapaCompuesto(arrayCompuesto, arrayRepeticiones);



        //Prepara el mapa de la puntuaciçón

        var elemento1;  //El elemento es el número 1

        var elemento2;  //El elemento número 2

        //Descubre cuales son los elementos necesario para hacer el compuesto
        mapa.forEach((key, valor) => {


            if (valor.nombre.toLowerCase() === metal.toLowerCase()) {

                elemento2 = valor;
            }

            if (valor.nombre.toLowerCase() === nombresEquivalentes(oxido).toLowerCase()) {

                elemento1 = valor;
            }

        });

        //Comprueba que el elemento es un metal y que no es hidrógeno
        if (elemento2.metal === false && elemento2.z !== 1) {
            return false;

        }

        //Elimina las cartas usadas

        descartarCartasUsadas(mapPeroxido, banca);




        //Devuelve la puntuación
        return calcularPuntuacion(crearMapaCompuestoPuntuacion([elemento1, elemento2], arrayRepeticiones));
    }

    else {
        return false;
    }
    // descartarCartasUsadas()

    // return calcularPuntuacion()
}

export default identificarPeroxido;