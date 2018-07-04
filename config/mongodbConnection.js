var mongo = require('mongodb');

var connMongoDB = function() {
    var db = new mongo.Db(
        'essentia',
        new mongo.Server(
            'localhost', //string contendo o endereço do servidor
            27017, //porta de conexão
            {}
        ), {}
    );

    return db;
}

module.exports = function() {
    return connMongoDB;
}