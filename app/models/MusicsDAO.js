function MusicsDAO(connection) {
    this._connection = connection;
};

MusicsDAO.prototype.getAllMusics = function(callback) {
    this._connection.then(function(conn) {
        conn.execute(
            `SELECT m.COD_MUSIC, m.STR_NAME, g.STR_GENRE, m.STR_LINK, m.STR_IMAGE,s.STR_SINGER
                FROM musics_api_node m JOIN singer s ON (m.cod_singer = s.cod_singer)
                JOIN genre g ON (m.COD_GENRE = g.COD_GENRE)`, [], { outFormat: conn.OBJEC }, callback);
    });
};

MusicsDAO.prototype.getMusicsAllGenre = function(callback) {
    this._connection.then(function(conn) {
        return conn.execute(
            `SELECT STR_GENRE FROM GENRE`, [], { outFormat: conn.OBJEC }, callback)
    });
};


MusicsDAO.prototype.getMusicsByGenre = function(requestedGenre, callback) {
    this._connection.then(function(conn) {

        conn.execute(
            ` SELECT m.COD_MUSIC, m.STR_NAME, g.STR_GENRE, m.STR_LINK, m.STR_IMAGE,s.STR_SINGER
                    FROM musics_api_node m JOIN singer s
                    ON (m.cod_singer = s.cod_singer)
                    JOIN genre g ON (m.COD_GENRE = g.COD_GENRE)
                    WHERE g.STR_GENRE = :genre`, [requestedGenre], { outFormat: conn.OBJEC }, callback);
    });
};

MusicsDAO.prototype.getMusicsById = function(requestedId, callback) {
    this._connection.then(function(conn) {
        return conn.execute(
            `SELECT m.COD_MUSIC, m.STR_NAME, g.STR_GENRE, m.STR_LINK, m.STR_IMAGE,s.STR_SINGER
            FROM musics_api_node m JOIN singer s
            ON (m.cod_singer = s.cod_singer)
            JOIN genre g ON (m.COD_GENRE = g.COD_GENRE)
            WHERE cod_music = :id`, [requestedId], { outFormat: conn.OBJEC }, callback);

    });
};


module.exports = function() {
    return MusicsDAO;
};