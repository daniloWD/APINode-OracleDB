module.exports = function(app) {


    app.route('/api/oracleDB/procondw/count').get((req, res) => {

        app.app.controllers.getProcon.getAllDadosProconCount(app, req, res);

    });
};