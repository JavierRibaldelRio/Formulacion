//Función que sirve para barjar el array

//https://www.jstips.co/es_es/javascript/shuffle-an-array/

//Algoritmo de fiher-yates

function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};
