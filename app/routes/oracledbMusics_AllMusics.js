module.exports = function(app) {
    app.route('/api/musics').get((req, res) => {

        app.app.controllers.getMusics.getAllMusics(app, req, res);

    });
};