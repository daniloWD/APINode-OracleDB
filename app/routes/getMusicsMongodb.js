module.exports = function(app) {
    app.route('/api/mongodb/musics')
    .get((req, res) => {

        app.app.controllers.getMusicsMongodb.getAllMusics(app, req, res);

    })
    .post(function (req, res) {
        app.app.controllers.setMusicsMongodb.setAllMusics(app, req, res);
    });

    app.route('/api/mongodb/genres').get((req, res) => {

        app.app.controllers.getMusicsMongodb.getAllGenres(app, req, res);

    });


};