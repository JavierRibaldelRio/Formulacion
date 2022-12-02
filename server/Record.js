var mongoose = require('mongoose'); //Importa la libreria de Mongo

require('dotenv').config();



console.log('URI :>> ', URI);

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
var Schema = mongoose.Schema;

var recordsEsquema = new Schema({
    nick: { type: String, required: true, uniqued: true },

    puntos: { type: Number, required: true },

    compuestosGenerados: { type: Number, required: true }
})

module.exports = mongoose.model('Record', recordsEsquema);
