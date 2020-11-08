//Para coger los datos de el json
var jsonDatosElementos = JSON.parse(jsonElementos);

var hidrogeno = new Elemento(jsonDatosElementos[0].a, jsonDatosElementos[0].nombre, jsonDatosElementos[0].sq, convertirArrayValencias(jsonDatosElementos[0].v), jsonDatosElementos[0].repeticion);



//Funciones
//Convertir en array numerico el string de las valencias
function convertirArrayValencias(texto) {

    //Mirar si el input es un numero o otra cosa
    if (typeof texto === "number") {

        return Array.from([texto]); //Convertir el numero en array

    } else {

        var coma = ","; //Almacena el elemento que partira el array
        //Crea un array  cada casilla se corresponde un trozo del string
        var arrayTexto = texto.split(coma);

        //Transforma las casilleas en numero
        for (var i = 0; i < arrayTexto.length; i++) {

            arrayTexto[i] = Number(arrayTexto[i]);

        }

        return arrayTexto;
    }

}

//Convertir todos los elementos en clases
function pasarJsonAClases() {

    var arrayContenedorObjetos = [];

    for (var i = 0; i < jsonDatosElementos.length; i++) {

        var nuevoElemento = new Elemento(jsonDatosElementos[i].a,
            jsonDatosElementos[i].nombre,
            jsonDatosElementos[i].sq,
            convertirArrayValencias(jsonDatosElementos[i].v),
            jsonDatosElementos[i].repeticion);

        arrayContenedorObjetos.push(nuevoElemento);


    }

    return arrayContenedorObjetos;

}