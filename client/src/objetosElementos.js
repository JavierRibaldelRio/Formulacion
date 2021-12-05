//Definir el objeto de elemento
function Elemento(z, nombre, sq, v, repeticion, puntos, grupo, tipo, metal) {

    //Constructor

    this.z = z; //Numero Massico

    this.nombre = nombre; //Nombre del elemento

    this.sq = sq.trim(); //Simbolo quimico 

    this.v = v; //Valencias

    this.repeticion = repeticion; //Repetición del elemento en el juego en el juego

    this.puntos = puntos; //Puntos de cada carta

    this.grupo = grupo;     //Columna en la tabla periódica

    this.tipo = tipo;   //El tipo de color...

    this.metal = metal; //INdica si es un metal

}

export default Elemento;
