module.exports.getAllMusics = function(app, req, res) {

    var Connection = app.config.oracledbConnection();
    var musicsModel = new app.app.models.MusicsDAO(Connection);

    musicsModel.getAllMusics(function(error, result) {

        res.send(result.rows);
    });

};

module.exports.getMusicsAllGenre = function(app, req, res) {

    var Connection = app.config.oracledbConnection();
    var musicsModel = new app.app.models.MusicsDAO(Connection);

    musicsModel.getMusicsAllGenre(function(error, result) {

        res.send(result.rows);
    });

};

module.exports.getMusicsByGenre = function(app, req, res, requestedGenre) {

    var Connection = app.config.oracledbConnection();
    var musicsModel = new app.app.models.MusicsDAO(Connection);


    musicsModel.getMusicsByGenre(requestedGenre, function(error, result) {

        res.send(result.rows);
    });

};

module.exports.getMusicsById = function(app, req, res, requestedId) {

    var Connection = app.config.oracledbConnection();
    var musicsModel = new app.app.models.MusicsDAO(Connection);


    musicsModel.getMusicsById(requestedId, function(error, result) {

        res.send(result.rows);
    });

};