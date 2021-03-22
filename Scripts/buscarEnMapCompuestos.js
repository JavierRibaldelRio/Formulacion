function buscarElementoEnMapa(mapaElementos, letra) {

    var devolver = false;   //Lo que se devolvera

    //Mirar si el hidrogeno se encuentra en el mapa de los elementos
    mapaElementos.forEach(function (value, key) {

        const sqElemento = key.sq.trim(); //Coge de la clave y le quita los espacios al principio

        //Si el sq es igual a la del hidrógeno
        if (sqElemento === letra) {

            devolver = true;    //Cambia la devolución a true

        }
    });

    return devolver;    //Devue

}