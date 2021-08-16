var express = require('express');
const path = require('path');
var app = express();

var Record = require("./Record.js");
//Utiliza ejs
app.set('view engine', 'ejs');

//boddy parse

app.use(express.urlencoded({ extended: true }));


//Para usar la parte estatica

//Ordena
function ordenarArray(a, b) {

    return a.puntos - b.puntos

}

app.use("/comprobar", (req, res) => {

    let nick = req.query.nick;       //almacena el nombre

    let puntos = req.query.puntos;   //puntos

    let compuestosGenerados = req.query.compuestos;

    var nuevoRecord = new Record({ nick: nick, puntos: puntos, compuestosGenerados: compuestosGenerados });  //Cre el objeto de record


    //Busca a todas las personas
    Record.find({}, (err, todosLosRecords) => {



        //Si se ha producido un error
        if (err) {

            res.type("html").status(500).send(`Se a producido un error: ${err}`);
        } else {


            //Ordena por el numero
            todosLosRecords.sort(ordenarArray);

            //Comprueba si el nuvo record supera al ultimo

            if (todosLosRecords[0].puntos < nuevoRecord.puntos) {   //Si los puntos del usuario son mayores que el record

                //Elimina el ultimo
                Record.findOneAndRemove({ nick: todosLosRecords[0].nick }, (err) => {
                    if (err) {
                        res.type("html").status("500").send(`Se ha producido un error: ${err}`)
                    } else {



                        //Y guarda los datos del usuario
                        nuevoRecord.save((err) => {

                            if (err) {
                                res.type("html").send("Se a cometido un error" + err).status(500);
                            } else {
                                Record.find({}, (err, recordsGuardados) => {

                                    if (err) {
                                        res.type("html").status(500).send(`Se a producido un error: ${err}`);
                                    }
                                    else {
                                        //Permite el acceso a todas
                                        res.setHeader('Access-Control-Allow-Origin', '*');

                                        res.json(recordsGuardados.sort(ordenarArray).reverse());
                                    }
                                });

                            }

                        });


                    }
                });



            } else {

                res.setHeader('Access-Control-Allow-Origin', '*');

                res.json(todosLosRecords);
            }

        }
    }).sort({ 'puntos': 1 });     //ordena por puntuacion


});

//Traer records
app.use("/fetchrecords", (req, res) => {


    //Sacar todos
    Record.find({}, (err, todos) => {
        //Si jhay erro
        if (err) {

            //html : 500
            res.type("html").status(500);

            res.send(`Se ha producido un error: "${err}".`)

        } else {

            //Permite el accesio desde culaquier origen
            res.setHeader('Access-Control-Allow-Origin', '*');

            //Ordena los records de menor a mayor y despues invierte el orden

            todos.sort(ordenarArray).reverse();;

            //los devuelve todos
            res.json(todos);
        }


    })


})

app.use(express.static(path.resolve(__dirname, '../client/build')));

var puerto = 3001;

app.listen(puerto, () => {
    console.log('Listening on port ' + puerto);
});
