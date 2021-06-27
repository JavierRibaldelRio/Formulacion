//Función que sirve para barjar el array

//https://www.jstips.co/es_es/javascript/shuffle-an-array/

//Algoritmo de fiher-yates

function shuffle(arr) {

    var array = arr;

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export default shuffle;
