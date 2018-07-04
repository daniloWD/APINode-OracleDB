function MongodbMusicsDAO(connection) {
    this._connection = connection;
};

MongodbMusicsDAO.prototype.getAllMusics = function(res) {
    this._connection.open(function(err, mongoclient) {
        mongoclient.collection("musicas", function(err, collection) {
            collection.find().toArray(function(err, result) {
                mongoclient.close();
                res.send(result);
                // console.log(result);
            });


        });
    });
};

MongodbMusicsDAO.prototype.getAllGenres = function(res) {
    this._connection.open(function(err, mongoclient) {
        mongoclient.collection("genres", function(err, collection) {
            collection.find().toArray(function(err, result) {
                mongoclient.close();
                res.send(result);
                // console.log(result);
            });


        });
    });
};


module.exports = function() {
    return MongodbMusicsDAO;
};