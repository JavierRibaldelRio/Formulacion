//Para coger los datos de el json
var jsonDatosElementos = JSON.parse(jsonElementos);

console.log(convertirArrayValencias(jsonDatosElementos[0].v));

console.log(convertirArrayValencias(jsonDatosElementos[1].v));



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