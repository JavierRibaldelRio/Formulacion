var mongoose = require('mongoose'); //Importa la libreria de Mongo

var dovnet = require('dotenv').config();

const usuario = process.env.MONGO_DB_USERNAME;  //Almacena el usuario

const contra = process.env.MONGO_DB_PASSWORD;   //Almacena la contraseña

mongoose.connect(`mongodb+srv://${usuario}:${contra}@cluster0.x1t0q.mongodb.net/formulacion?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
var Schema = mongoose.Schema;

var recordsEsquema = new Schema({
    nick: { type: String, required: true, uniqued: true },

    puntos: { type: Number, required: true },

    compuestosGenerados: { type: Number, required: true }
})

module.exports = mongoose.model('Record', recordsEsquema);
