module.exports = function(app) {


    app.route('/api/genres').get((req, res) => {
        app.app.controllers.getMusics.getMusicsAllGenre(app, req, res);

    });

};