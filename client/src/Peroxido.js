import descartarCartasUsadas from "./eliminarCompuestos";
import calcularPuntuacion from "./calcularPuntos";
import crearMapaCompuesto from "./crearMapaCompuesto";
import { prefijos } from "./palabrasClaves";
//Identifica el peróxido y procede en caso de que sea correcto
function identificarPeroxido(compuesto, banca) {

    console.log(compuesto, banca);

    const peroxido = 'peróxido';

    var compuestoSeparado = [...compuesto.split(" ")];       //Transforma el compuesto en un array, cada casilla corresponde a una palabra

    var numeroOxigenos;  //Almacena el número de oxígenos necesario

    var metal;      //almacena el objeto del metal

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

    //Hasta aguí tenemos el On Xx

    //Averigua cual es el siguiernte otro elemento
    for (var i = 0; i < banca.length; i++) {

        //Encuentra el elemento de dentro 
        if (compuestoSeparado[2].endsWith(banca[i].nombre.toLowerCase())) {


            metal = banca[i];

            i = banca.length + 2;

        }

    }



    // descartarCartasUsadas()

    // return calcularPuntuacion()
}

export default identificarPeroxido;