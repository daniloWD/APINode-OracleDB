module.exports = function(app) {
    app.route('/api/oracleDB/procondw').get((req, res) => {
        app.app.controllers.getProcon.getAllDadosProcon(app, req, res);
    });

};