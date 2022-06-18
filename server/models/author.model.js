const { Schema, model } = require('mongoose');

const authorSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Debe ingresar un nombre'],
        minlength: [10, 'Debe tener un nombre con mínimo 10 caracteres'],
        maxlength: [100, 'Descripción máxima de 100 caracteres']
    }    
})

const Author = model('Author', authorSchema);

module.exports = Author;