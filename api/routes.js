'use strict'
module.exports = function(app) {
    let controllers = require('./controllers/controllers');

    // todoList Routes
    app.route('/users')
        .get(controllers.get)
        .post(controllers.store);

    app.route('/user')
        .get(controllers.detail)
        .put(controllers.update)
        .delete(controllers.destroy);
}