const mongoose = require('mongoose'); /////
const uniqueValidator = require('mongoose-unique-validator'); ///////PAQUETERIAS
const AutoIncrement = require('mongoose-sequence')(mongoose); ////

let Schema = mongoose.Schema; //CREACION DEL ESQUEMA 

let customerSchema = new Schema({

    firstName: {
        type: String,
        required: [true, 'Required FirstName']
    },
    lastName: {
        type: String,
        required: [true, 'Required LastName']
    },
    address: {
        type: String,
        required: [true, 'Required Adress']
    },
    city: {
        type: String,
        required: [true, 'Required City']
    },
    country: {
        type: String,
        required: [true, 'Required Country']
    },

    district: {
        type: String,
        required: [true, 'Required Distrit']

    },
    status: {
        type: Boolean,
        default: true
    }
});

//el esquema utilize el plugin
customerSchema.plugin(AutoIncrement, { inc_field: 'id' }, uniqueValidator, {
    message: '{PATH} Debe ser único y diferente'
});

//crea una coleccion
module.exports = mongoose.model('Customer', customerSchema);