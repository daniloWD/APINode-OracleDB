module.exports.getAllMusics = function(app, req, res) {

    var Connection = app.config.mongodbConnection();
    var MongodbMusicsDAO = new app.app.models.MongodbMusicsDAO(Connection);
    MongodbMusicsDAO.getAllMusics(res);

};

module.exports.getAllGenres = function(app, req, res) {

    var Connection = app.config.mongodbConnection();
    var MongodbMusicsDAO = new app.app.models.MongodbMusicsDAO(Connection);
    MongodbMusicsDAO.getAllGenres(res);

};

module.exports.insere = function(app, req, res, data) {
    console.log(data);
    var Connection = app.config.mongodbConnection();
    var MongodbMusicsDAO = new app.app.models.MongodbMusicsDAO(Connection);
    MongodbMusicsDAO.getAllGenres(res);

};