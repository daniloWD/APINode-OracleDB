module.exports = function(app) {


    app.route('/api/musics/:id').get((req, res) => {
        app.app.controllers.getMusics.getMusicsById(app, req, res, req.params['id']);

    });
};