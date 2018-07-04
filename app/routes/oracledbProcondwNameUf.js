module.exports = function(app) {


    app.route('/api/oracleDB/procondw/:name/:uf').get((req, res) => {
        let requestedName = findAndReplace(req.params['name']);
        let requestedUf = req.params['uf'];
        app.app.controllers.getProcon.getDadosProconByNameUF(app, req, res, requestedName, requestedUf);

    });

    function findAndReplace(name) {
        length = name.length;
        for (var i = 0; i < length; i++) {
            name = name.replace("@", "/").replace("_", " ");

        }
        return name;


    };
};