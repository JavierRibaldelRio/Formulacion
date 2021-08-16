function sustituirTildes(texto){

    //Definir array con las vocales
    const vocales = ["a","e","i","o","u"];

    //Definir array con vocales con tilde
    const vocalesConTilde = ["á","é","í","ó","ú"];

    for(var i = 0; i < vocales.length;i++){

        //Contiene una vocal con tilde
        if(texto.includes(vocalesConTilde[i])){

            return texto.replace(vocalesConTilde[i],vocales[i]);

        }

    }

}