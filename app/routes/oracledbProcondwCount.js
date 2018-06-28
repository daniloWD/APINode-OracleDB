module.exports = function(app) {


    app.route('/api/oracleDB/count').get((req, res) => {

        app.app.controllers.getProcon.getAllDadosProconCount(app, req, res);

    });
};