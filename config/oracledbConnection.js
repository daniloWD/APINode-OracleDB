var oracledb = require('oracledb');

var connOracle = function() {
    return oracledb.getConnection({
        user: "useruser", // Usuário do Oracle DB
        password: "senha", // Senha do Oracle DB
        connectString: "localhost/orcl" // Host e Banco de dados do Oracle DB
    });
};

module.exports = function() {
    return connOracle;
};