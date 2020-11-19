//Funcion que comprueva si es posible crear este compuesto
function comprovarCompuesto(elementos, compuesto) {

    //Cromprovar si compuesto no es un texto
    if (typeof compuesto != "string") {

        alert("Por favor inserte un valor valido.")

    }

    else {
        compuesto = compuesto.toLocaleLowerCase();  //Pasa a minusculas

        var mapElementos = crearMap();

        //Comprueba si hes un hidruro
        if (compuesto.includes(hidruro)) {

            console.log(1);

            //Si lo es comprueba cuantas meleculas tiene de hidruro
            if (compuesto.startsWith(hidruro) || compuesto.startsWith(prefijos[1])) {
                
                console.log("1")

            } else if (compuesto.startsWith(prefijos[2])) {

                console.log("2")

            } else if (compuesto.startsWith(prefijos[3])) {

                console.log("3")

            } else if (compuesto.startsWith(prefijos[4])) {

                console.log("4")

            } else if (compuesto.startsWith(prefijos[5])) {

                console.log("5")

            } else if (compuesto.startsWith(prefijos[6])) {

                console.log("6")

            } else if (compuesto.startsWith(prefijos[7])) {

                console.log("7")

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

}