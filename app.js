var app = require('./config/server');

var port = 8000;

app.listen(port, () => {
    console.log('Servidor está ouvindo na porta ' + port);
});