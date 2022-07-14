const AuthorController = require('../controllers/author.controller');

module.exports = function(app) {
    app.post('/api/authors/create', AuthorController.createAuthor);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/authors/:id', AuthorController.getOneAuthor);
    app.put('/api/authors/edit/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/delete/:id', AuthorController.deleteAuthor);
};