module.exports = function(app) {
    app.route('/api/oracleDB').get((req, res) => {
        app.app.controllers.getProcon.getAllDadosProcon(app, req, res);
    });

};