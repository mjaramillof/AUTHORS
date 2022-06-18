const Author = require('../models/author.model');

module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .then(authors => res.json({ authors }))
        .catch(err => res.status(500).json({ error: err, msg: 'No se han encontrado su Autor' }));
};

module.exports.createAuthor = (req, res) => {
    console.log(req.body.author)
    Author.create(req.body.author)
        .then(newAuthor => res.json({ newAuthor }))
        .catch(err => res.status(500).json({ error: err, msg: 'No se ha podido crear el Autor' }));
}

module.exports.getAuthor = (req, res) => {
    Author.findById(req.params.id)
        .then(author => res.json({ author }))
        .catch(err => res.status(404).json({ error: err, msg: 'No hemos podido traerte la lista de Autores' }));
}

module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body.author, { new: true })
        .then(updatedAuthor => res.json({ updatedAuthor }))
        .catch(err => res.status(500).json({ msg: 'No hemos podido actualizar el Autor', error: err }))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json({ deleteConfirmation }))
        .catch(err => res.status(500).json({ msg: 'No hemos podido eliminar al autor', error: err }));
}

