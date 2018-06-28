module.exports = function(app) {


    app.route('/api/genres/:genre').get((req, res) => {
        app.app.controllers.getMusics.getMusicsByGenre(app, req, res, req.params['genre']);

    });
};