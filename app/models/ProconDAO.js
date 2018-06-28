function ProconDAO(connection) {
    this._connection = connection;
};

ProconDAO.prototype.getAllDadosProcon = function(callback) {
    this._connection.then(function(conn) {
        return conn.execute(
            `SELECT e.RAZAO_SOCIAL,p.UF FROM empresa e JOIN procondw p ON (e.CNPJ = p.CNPJ) 
                WHERE e.RAZAO_SOCIAL LIKE :name
                 GROUP BY e.RAZAO_SOCIAL,p.UF 
                 ORDER BY p.UF `, ['%BANCO BRADESCO%'], { outFormat: conn.OBJEC }, callback);
    });
};

ProconDAO.prototype.getAllDadosProconCount = function(callback) {
    this._connection.then(function(conn) {
        return conn.execute(
            `SELECT COUNT(*) FROM empresa e JOIN procondw p ON (e.CNPJ = p.CNPJ) 
                        WHERE e.RAZAO_SOCIAL LIKE :name
                     `, ['%BANCO BRADESCO%'], { outFormat: conn.OBJEC }, callback)
    });
};

ProconDAO.prototype.getDadosProconByNameUF = function(requestedName, requestedUf, callback) {

    this._connection.then(function(conn) {
        return conn.execute(
            `SELECT * FROM procondw p JOIN empresa e ON (e.CNPJ = p.CNPJ) 
                        WHERE e.RAZAO_SOCIAL = :nome AND p.UF = :uf`, [requestedName, requestedUf], { outFormat: conn.OBJEC }, callback)
    });
};


ProconDAO.prototype.getDadosProconByNameUFCount = function(requestedName, requestedUf, callback) {
    this._connection.then(function(conn) {
        return conn.execute(
            `SELECT COUNT(*) FROM procondw p JOIN empresa e ON (e.CNPJ = p.CNPJ) 
            WHERE e.RAZAO_SOCIAL = :nome AND p.UF = :uf
         `, [requestedName, requestedUf], { outFormat: conn.OBJEC }, callback)
    });
};



module.exports = function() {
    return ProconDAO;
};