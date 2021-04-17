//Estaw función reproduce un sonido 
function reproducirSonido(correcto) {

    var audio;  //Almacena el audio que se va a reproducir

    if (correcto === true) {

        //Asigna a la variable audio el sonido de acertar
        audio = new Audio("Musica/Acertar/Sonido_Correcto.wav");

    }
    else {
        
        //Asigna a la variable audio el sonido de  errar

        audio = new Audio("Musica/Errar/Sonido_Errar.wav");
    }
    audio.play();

}