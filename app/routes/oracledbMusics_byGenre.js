module.exports = function(app) {


    app.route('/api/oracledb/genres/:genre').get((req, res) => {
        app.app.controllers.getMusicsOracledb.getMusicsByGenre(app, req, res, req.params['genre']);

    });
};