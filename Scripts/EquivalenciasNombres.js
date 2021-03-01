function nombresEquivalentes(nombre) {

    if (typeof nombre != "string") {

        return false;

    }

    nombre = nombre.toLocaleLowerCase();

    var nombreAutentico = "";

    //Si nombre es igual a ...
    switch (nombre) {
        //hidruro
        case hidruro:

            nombreAutentico = "hidrógeno";
            break;

        //oxido
        case oxido:
            nombreAutentico = "oxigeno";
            break;

    }

    for (var i = 0; i < arrayAnfigenosHalogenos.length; i++) {

        if (nombre === arrayAnfigenosHalogenos[i].nuevoNombreElemento) {



        }

    }

    return nombreAutentico;

}