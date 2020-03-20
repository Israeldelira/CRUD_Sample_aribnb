const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const AutoIncrement = require('mongoose-sequence')(mongoose);
let Schema = mongoose.Schema;
let CustJoinRenSchema = new Schema({

    id_Customer: {
        type: Number,
        ref: 'Customer',
        required: [true, 'Required ID']
    },
    id_propiedad: {
        type: String,
        ref: 'listingsAndReviews',
        required: [true, 'Required ID']
    },
    status: {
        type: Boolean,
        default: true
    }
});


rentaSchema.plugin(AutoIncrement, { inc_field: 'id_Renta' }, uniqueValidator, {
    message: '{PATH} Debe ser único y diferente'
});

module.exports = mongoose.model('CustJoinRen', CustJoinRenSchema);