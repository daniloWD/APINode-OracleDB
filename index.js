const express = require('express');
const app = express();
const server = require('http').createServer(app);
// const script = require('./infra/myscript.js');
var oracledb = require('oracledb');
var dados = [];
var dados2 = {};


app.route('/api/oracleDB').get((req, res) => {
    oracledb.getConnection(

            {
                user: "useruser",
                password: "senha",
                connectString: "localhost/orcl"
            })
        .then(function(conn) {
            return conn.execute(
                    `SELECT STRRAZAOSOCIAL,UF  
      FROM PROCONBASE
      WHERE STRRAZAOSOCIAL LIKE :nome 
      GROUP BY STRRAZAOSOCIAL,UF 
      ORDER BY UF  `, ['%BANCO BRADESCO%'], // bind value for :nome
                )
                .then(function(result) {
                    dados = result.rows;

                    res.send(dados);
                    return conn.close();
                })
                .catch(function(err) {
                    console.error(err);
                    return conn.close();
                });
        })
        .catch(function(err) {
            console.error(err);
        });
});

app.route('/api/oracleDB/count').get((req, res) => {
    oracledb.getConnection(

            {
                user: "useruser",
                password: "senha",
                connectString: "localhost/orcl"
            })
        // GROUP BY STRRAZAOSOCIAL,UF 
        // ORDER BY UF  
        .then(function(conn) {
            return conn.execute(
                    `SELECT COUNT(*)  
      FROM PROCONBASE
      WHERE STRRAZAOSOCIAL LIKE :nome 
     
      `, ['%BANCO BRADESCO%'], // bind value for :nome
                )
                .then(function(result) {
                    dados = result.rows;


                    res.send(dados);
                    return conn.close();
                })
                .catch(function(err) {
                    console.error(err);
                    return conn.close();
                });
        })
        .catch(function(err) {
            console.error(err);
        });
});



app.route('/api/oracleDB/:name/:uf').get((req, res) => {
    let requestedName = findAndReplace(req.params['name']);
    let requestedUf = req.params['uf'];
    oracledb.getConnection(

            {
                user: "useruser",
                password: "senha",
                connectString: "localhost/orcl"
            })
        .then(function(conn) {
            return conn.execute(
                    `SELECT *
      FROM PROCONBASE
      WHERE STRRAZAOSOCIAL = :nome AND UF = :uf`, [requestedName, requestedUf],
                    // bind value for :nome
                )
                .then(function(result) {
                    dados = result.rows;

                    // dados2 = result.rows[0][5];
                    // console.log(dados);
                    // console.log(dados2);
                    // console.log(result.rows[0]);
                    res.send(dados);
                    return conn.close();
                })
                .catch(function(err) {
                    console.error(err);
                    return conn.close();
                });
        })
        .catch(function(err) {
            console.error(err);
        });

});

app.route('/api/oracleDB/count/:name/:uf').get((req, res) => {
    let requestedName = findAndReplace(req.params['name']);
    let requestedUf = req.params['uf'];
    oracledb.getConnection(

            {
                user: "useruser",
                password: "senha",
                connectString: "localhost/orcl"
            })
        .then(function(conn) {
            return conn.execute(
                    `SELECT COUNT(*)
      FROM PROCONBASE
      WHERE STRRAZAOSOCIAL = :nome AND UF = :uf`, [requestedName, requestedUf],
                    // bind value for :nome
                )
                .then(function(result) {
                    count = result.rows;


                    res.send(count);
                    return conn.close();
                })
                .catch(function(err) {
                    console.error(err);
                    return conn.close();
                });
        })
        .catch(function(err) {
            console.error(err);
        });

});

app.route('/api/oracleDB/join/:name').get((req, res) => {
    let requestedName = findAndReplace(req.params['name']);
    // let requestedName = 'Sul';
    oracledb.getConnection(

            {
                user: "useruser",
                password: "senha",
                connectString: "localhost/orcl"
            })
        .then(function(conn) {
            return conn.execute(
                    `SELECT COUNT(*) 
      FROM PROCONDW P 
      JOIN REGIAO R 
      ON P.COD_REGIAO = R.CODIGO_REGIAO 
      WHERE R.REGIAO = :name`, [requestedName],
                    // bind value for :nome
                )
                .then(function(result) {

                    return conn.close();
                })
                .catch(function(err) {
                    console.error(err);
                    return conn.close();
                });
        })
        .catch(function(err) {
            console.error(err);
        });

});

// app.get('/', function (req, res) {
//   oracledb.getConnection(

//     {
//       user: "useruser",
//       password: "senha",
//       connectString: "localhost/orcl"
//     })
//     .then(function(conn) {
//       return conn.execute(
//       `SELECT STRRAZAOSOCIAL  
//       FROM PROCONBASE
//       WHERE STRRAZAOSOCIAL LIKE :nome`,
//         ['%BRADESCO%'],  // bind value for :id
//       )
//       .then(function(result) {
//         // console.log(result.rows);
//         dados=result.rows;
//         console.log(dados)
//         // res.send(result);
//         return conn.close();
//       })
//       .catch(function(err) {
//         console.error(err);
//         return conn.close();
//       });
//   })
//   .catch(function(err) {
//     console.error(err);
//   });



// result.json(script.teste);
// console.log("Entrou na rota ");
// q.all([script.teste()]).then(results => {
//     console.log("Saiu");
//     console.log(results);
//     result.json(results[0])
// });
// result.json(script.teste);

// });

app.route('/api/musics').get((req, res) => {
    oracledb.getConnection(

            {
                user: "useruser",
                password: "senha",
                connectString: "localhost/orcl"
            })
        .then(function(conn) {
            return conn.execute(
                    `
      SELECT m.COD_MUSIC, m.STR_NAME, g.STR_GENRE, m.STR_LINK, m.STR_IMAGE,s.STR_SINGER
            FROM musics_api_node m JOIN singer s
            ON (m.cod_singer = s.cod_singer)
            JOIN genre g ON (m.COD_GENRE = g.COD_GENRE)`,
                    // ['%BANCO BRADESCO%'],  // bind value for :nome
                )
                .then(function(result) {
                    dados = result.rows;


                    res.send(dados);
                    return conn.close();
                })
                .catch(function(err) {
                    console.error(err);
                    return conn.close();
                });
        })
        .catch(function(err) {
            console.error(err);
        });
});

app.route('/api/musics/:id').get((req, res) => {
    let requestedId = req.params['id'];
    // console.log(typeof(requestedName));
    oracledb.getConnection(

            {
                user: "useruser",
                password: "senha",
                connectString: "localhost/orcl"
            })
        .then(function(conn) {
            return conn.execute(
                    `SELECT m.COD_MUSIC, m.STR_NAME, g.STR_GENRE, m.STR_LINK, m.STR_IMAGE,s.STR_SINGER
      FROM musics_api_node m JOIN singer s
      ON (m.cod_singer = s.cod_singer)
      JOIN genre g ON (m.COD_GENRE = g.COD_GENRE)
      WHERE cod_music = ':id'`, [requestedId], // bind value for :nome
                )
                .then(function(result) {
                    dados = result.rows;
                    // console.log(result.rows);
                    // dados2 = result.rows[0][5];
                    // console.log(dados);
                    // console.log(dados2);
                    // console.log(result.rows[0]);
                    res.send(dados);
                    return conn.close();
                })
                .catch(function(err) {
                    console.error(err);
                    return conn.close();
                });
        })
        .catch(function(err) {
            console.error(err);
        });

});

app.route('/api/genres').get((req, res) => {

    oracledb.getConnection(

            {
                user: "useruser",
                password: "senha",
                connectString: "localhost/orcl"
            })
        .then(function(conn) {
            return conn.execute(
                    `SELECT STR_GENRE FROM GENRE`,
                )
                .then(function(result) {

                    dados = result.rows;
                    // console.log(result.rows);
                    // dados2 = result.rows[0][5];
                    // console.log(dados);
                    // console.log(dados2);
                    // console.log(result.rows[0]);
                    res.send(dados);
                    return conn.close();
                })
                .catch(function(err) {
                    console.error(err);
                    return conn.close();
                });
        })
        .catch(function(err) {
            console.error(err);
        });

});

app.route('/api/genres/:genre').get((req, res) => {

    let requestedGenre = req.params['genre'];
    console.log(requestedGenre);
    oracledb.getConnection(

            {
                user: "useruser",
                password: "senha",
                connectString: "localhost/orcl"
            })
        .then(function(conn) {
            return conn.execute(
                    `
      SELECT m.COD_MUSIC, m.STR_NAME, g.STR_GENRE, m.STR_LINK, m.STR_IMAGE,s.STR_SINGER
            FROM musics_api_node m JOIN singer s
            ON (m.cod_singer = s.cod_singer)
            JOIN genre g ON (m.COD_GENRE = g.COD_GENRE)
            WHERE g.STR_GENRE = :genre`, [requestedGenre],
                )
                .then(function(result) {

                    dados = result.rows;
                    // console.log(result.rows);
                    // dados2 = result.rows[0][5];
                    // console.log(dados);
                    // console.log(dados2);
                    // console.log(result.rows[0]);
                    res.send(dados);
                    return conn.close();
                })
                .catch(function(err) {
                    console.error(err);
                    return conn.close();
                });
        })
        .catch(function(err) {
            console.error(err);
        });

});

function findAndReplace(name) {
    length = name.length;
    for (var i = 0; i < length; i++) {
        name = name.replace("@", "/").replace("_", " ");

    }
    return name;


};

//Ouvindo no localhost:8000.
server.listen(8000, () => {
    console.log('Servidor ouvindo na porta 8000!');
});