const express = require('express');
const app = express();
const server = require('http').createServer(app);
var q = require('q');
// const script = require('./infra/myscript.js');
var oracledb = require('oracledb');
var dados = [];
var dados2 = {};

app.route ( '/api/oracleDB' ) .get ( ( req, res ) => { 
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
      ORDER BY UF  `,
      ['%BANCO BRADESCO%'],  // bind value for :nome
      )
      .then(function(result) {
        dados=result.rows;
        
        // dados2 += result.rows[i][1];
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

app.route('/api/oracleDB/:name').get((req, res) => {
  let requestedName = findAndReplace(req.params['name']);
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
      WHERE STRRAZAOSOCIAL = :nome`,
      [requestedName],  // bind value for :nome
      )
      .then(function(result) {
        dados=result.rows;
        
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

function findAndReplace(name) {
  length = name.length;
  for (var i = 0; i < length; i++) {
    name = name.replace("@", "/").replace("_"," ");
    
  }
  return name;

  
};

//Ouvindo no localhost:8000.
server.listen(8000, () => {
    console.log('Servidor ouvindo na porta 8000!');
});