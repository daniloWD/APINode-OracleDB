module.exports = function(app) {


    app.route('/api/oracledb/musics/:id')
    .get((req, res) => {
        app.app.controllers.getMusicsOracledb.getMusicsById(app, req, res, req.params['id']);

    });
};