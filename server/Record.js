var mongoose = require('mongoose'); //Importa la libreria de Mongo

require('dotenv').config();

const URI = process.env.MONGO_DB_URI;  //Almacena el URI

console.log(URI);

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
var Schema = mongoose.Schema;

var recordsEsquema = new Schema({
    nick: { type: String, required: true, uniqued: true },

    puntos: { type: Number, required: true },

    compuestosGenerados: { type: Number, required: true }
})

module.exports = mongoose.model('Record', recordsEsquema);
