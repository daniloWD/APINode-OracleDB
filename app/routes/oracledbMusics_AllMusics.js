module.exports = function(app) {
    app.route('/api/oracledb/musics')
    .get((req, res) => {

        app.app.controllers.getMusicsOracledb.getAllMusics(app, req, res);

    })
    
};