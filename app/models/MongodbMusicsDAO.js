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

MongodbMusicsDAO.prototype.setAllMusics = function(req,res, music) {
    this._connection.open(function (err, mongoclient) {
        mongoclient.collection('musicas', function (err, collection) {
            collection.insert({
                name: music.name,
                singer: music.singer
                }
                , function (err, records) {
                if (err) {
                    res.json({
                        'status': 'erro'
                    });
                } else {
                    res.json({
                        'status': 'foi postado com sucesso'
                    });
                }
                mongoclient.close();
            })
        })
    })
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