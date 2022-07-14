const PlayerController = require('../controllers/player.controller');

module.exports = function(app) {
    app.post('/api/players/create', PlayerController.createPlayer);
    app.delete('/api/players/delete/:id', PlayerController.deletePlayer);
    app.get('/api/players/all', PlayerController.getAllPlayers);
}