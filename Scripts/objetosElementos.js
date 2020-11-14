function Elemento(a, nombre, sq, v, repeticion, puntos, comparar) {

    this.a = a; //Numero Massico

    this.nombre = nombre; //Nombre del elemento

    this.sq = sq; //Simbolo quimico 

    this.v = v; //Valencias

    this.repeticion = repeticion; //Repetición del compusto en el juego

    this.puntos = puntos; //Puntos de cada carta

    //Función que indica si el numero atomico es igual
    this.comparar = function (numeroAtomico) {

        if (numeroAtomico === a) {

            return true;
        }
         else { 
             
            return false; 
        }

    };



}
