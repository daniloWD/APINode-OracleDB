module.exports = function(app) {


    app.route('/api/oracledb/genres').get((req, res) => {
        app.app.controllers.getMusicsOracledb.getMusicsAllGenre(app, req, res);

    });

};