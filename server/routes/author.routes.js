const { getAllAuthors, createAuthor, getAuthor, updateAuthor, deleteAuthor } = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api/authors', getAllAuthors);
    app.get('/api/authors/:id', getAuthor);
    app.post('/api/authors', createAuthor);
    app.put('/api/authors/update/:id', updateAuthor);
    app.delete('/api/authors/delete/:id', deleteAuthor);
}
