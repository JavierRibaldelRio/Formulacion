var express = require('express');
var app = express();

var Record = require("./Record.js");
//Utiliza ejs
app.set('view engine', 'ejs');

//boddy parse

app.use(express.urlencoded({ extended: true }));

//Para usar la parte estatica

app.use("/comprobar", (req, res) => {

    let nick = req.query.nick;       //almacena el nombre

    let puntos = req.query.puntos;   //puntos

    var nuevoRecord = new Record({ nick: nick, puntos: puntos });  //Cre el objeto de record

    console.log(nuevoRecord);

    //Busca a todas las personas
    Record.find({}, (err, todosLosRecords) => {



        //Si se ha producido un error
        if (err) {

            res.type("html").status(500).send(`Se a producido un error: ${err}`);
        } else {


            //Ordena por el numero
            todosLosRecords.sort((a, b) => {

                return a.puntos - b.puntos
            })

            console.log(todosLosRecords);

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

                                        res.json(recordsGuardados);
                                    }
                                });

                            }

                        });


                    }
                });



            } else {
                res.json(todosLosRecords);
            }

        }
    }).sort({ 'puntos': 1 });     //ordena por puntuacion


});

app.use('/public', express.static('public'));



app.listen(3000, () => {
    console.log('Listening on port 3000');
});
