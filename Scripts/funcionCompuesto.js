//Funcion que comprueva si es posible crear este compuesto
function comprovarCompuesto(elementos, compuesto) {

    const errorCompuesto = "Este compuesto no se puede crear";

    //Cromprovar si compuesto no es un texto
    if (typeof compuesto != "string") {

        alert("Por favor inserte un valor valido.");

    }
    //si no es un string
    else {

        compuesto = compuesto.toLocaleLowerCase();  //Pasa a minusculas

        const mapElementos = crearMap();

        //Comprueba si es un hidruro
        if (compuesto.includes(hidruro) && comprovarSiHayHidrogeno(mapElementos)) {

            console.log("Incluye hidruro");

            var hidruroIncorrecto = true;   //para comprovar si hay que avisar al usuario de un error

            //Si lo es comprueba cuantas meleculas tiene de hidruro
            if (compuesto.startsWith(hidruro) || compuesto.startsWith(prefijos[1] + hidruro)) {

                hidruroIncorrecto = false;  // Para marcar que no ahí error

                console.log("mono");

                averiguarCompuesto(compuesto, mapElementos);


            } else {


                for (var i = 2; i < numeroDePrefijos; i++) {

                    if (compuesto.startsWith(prefijos[i] + hidruro)) {

                        hidruroIncorrecto = false;  // Para marcar que no ahí error

                        averiguarCompuesto(compuesto, mapElementos);

                        i = numeroDePrefijos; //Para que no lo comprueve más el For
                    }

                }

                if (hidruroIncorrecto) {

                    alert(errorCompuesto);

                }

            }

        }

    }


    //Funciones

    //Devuelve un mapa <objeto|Nº de repeticiones de ese objeto>
    function crearMap() {
        var mapaElementos = new Map();  //Map donde se almacenan el numero de repeticiones de cada elmento

        for (var i = 0; i < numeroElementosACoger; i++) {

            var elementoOriginal = elementos[i]; //Almacena el elemento origianl

            var k = j = i;

            var contador = 1;

            if (i < numeroElementosACoger - 1) {

                while (j < numeroElementosACoger - 1 && elementoOriginal.sq == elementos[1 + j].sq) {

                    i++;

                    k++;
                    j = k;
                    contador++;

                }
            }
            mapaElementos.set(elementoOriginal, contador);

        }

        return mapaElementos;
    }

    function averiguarCompuesto(texto, mapa) {

        texto = texto.trim()    //Para quitar leos espacios a pricipio de palabra

        var textoSeparado = texto.split(" ");   //Para separar las palabras en meterlas en un array invididual
        
        console.log(textoSeparado);

        var elemento = textoSeparado[2];

        mapa.forEach(function (valor, key) {

            const nombre = key.nombre/*Coger la propiedad*/.toLocaleLowerCase();    //Para pasar a minusculas

            if (elemento.endsWith(nombre)) {

                var numeroPrefijo;

                console.log("iguales");

                var prefijoMultipicador = elemento.split(nombre)[0]; //Sacar el prefijo

                if(prefijoMultipicador === ""){

                    numeroPrefijo = 1;      //Ya que si no hay nada es mono

                }else{

                    numeroPrefijo = encontrarPrefijo(prefijoMultipicador);

                }



                console.log(numeroPrefijo);

                if(numeroPrefijo  == -1 ){

                    alert(errorCompuesto);

                }

            }

        });

        console.log(elemento);

    }

    //Funcion para comprovar que prefijo es
   
}

function encontrarPrefijo(particula){

    var particula;

    for(var i = 1; i < numeroDePrefijos; i++){

        if(particula == prefijos[i]){

            particula = i;

            return particula;

        }

    }

    return -1;

}
//Funcion para saber si el usuario tiene los elementos necesarios para poder crear el compuesto
                                            /*Hidrogeno*/   /*1*/                   /*Litio*/       /*1*/
function comprovarSiPuedeGenerarCompuestos(primeraPalabra, prefijoPrimeraPalabra,segundaPalabra, prefijoSegundaPalabra,mapa){


    if(posibleTexto(primeraPalabra) && posibleTexto(segundaPalabra) && posibleNumero(prefijoPrimeraPalabra) && posibleNumero(prefijoSegundaPalabra)){

        if(prefijoPrimeraPalabra + prefijoSegundaPalabra <= numeroDePrefijos){           
                      
            
            
        }
        
        else{
              
            alert(errorCompuesto);
            
        }
        


    } else{

        alert(errorCompuesto);


    }
    
     //Comprovar si hay tan
    function comprovar(mapa,compuestoAComprovar,prefijo){
     
        mapa.forEach(function(valor,key){
            
        });
        
    }
    //Comueva si es un texto
    function posibleTexto(text){

        return typeof text === "string";

    }

    //Compreuva si es un numero

    function posibleNumero(numero){

        return typeof numero === "number";

    }


}

//funcion àra coomprovar si hay hidrogeno

function comprovarSiHayHidrogeno(mapaElementos){

    //Mirar si el hidrogeno se encuentra en el mapa de los elementos
    mapaElementos.forEach(function(value,key){

        const sqElemento = key.sq.toLocaleLowerCase(); //Para hacer Minusculas

        if(sqElemento === "h"){

            return true;
        }
    });

    return false;

}
