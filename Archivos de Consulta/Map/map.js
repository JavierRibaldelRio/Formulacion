var mapaNuevo = new Map(); //Definir el map


//añadir cosas al map

mapaNuevo.set("Oxígen", 2);

mapaNuevo.set("Hidrogen", 2);

//Sacar cosas del map por clave

alert(mapaNuevo.get("Oxígen"));

mapaNuevo.forEach(function(valor, clave) {

    alert(valor + clave);

})