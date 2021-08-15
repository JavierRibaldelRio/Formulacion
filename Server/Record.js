var mongoose = require('mongoose'); //Importa la libreria de Mongo

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.x1t0q.mongodb.net/formulacion?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
var Schema = mongoose.Schema;

var recordsEsquema = new Schema({
    nick: { type: String, required: true, uniqued: true },

    puntos: { type: Number, required: true },

    compuestosGenerados: { type: Number, required: true }
})

module.exports = mongoose.model('Record', recordsEsquema);
