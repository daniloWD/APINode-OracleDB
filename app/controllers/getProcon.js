module.exports.getAllDadosProcon = function(app, req, res) {

    var Connection = app.config.oracledbConnection();
    var proconModel = new app.app.models.ProconDAO(Connection);

    proconModel.getAllDadosProcon(function(error, result) {

        res.send(result.rows);
    });

};

module.exports.getAllDadosProconCount = function(app, req, res) {

    var Connection = app.config.oracledbConnection();
    var proconModel = new app.app.models.ProconDAO(Connection);

    proconModel.getAllDadosProconCount(function(error, result) {

        res.send(result.rows);
    });

};

module.exports.getDadosProconByNameUF = function(app, req, res, requestedName, requestedUf) {

    var Connection = app.config.oracledbConnection();
    var proconModel = new app.app.models.ProconDAO(Connection);

    proconModel.getDadosProconByNameUF(requestedName, requestedUf, function(error, result) {

        res.send(result.rows);
    });

};

module.exports.getDadosProconByNameUFCount = function(app, req, res, requestedName, requestedUf) {

    var Connection = app.config.oracledbConnection();
    var proconModel = new app.app.models.ProconDAO(Connection);

    proconModel.getDadosProconByNameUFCount(requestedName, requestedUf, function(error, result) {
        res.send(result.rows);
    });

};