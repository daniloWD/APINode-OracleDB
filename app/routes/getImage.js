module.exports = function(app) {


    app.get('/image/:name', function(req, res) {
        let requestedName = req.params['name'];
        app.app.controllers.getImage.getImage(app, req, res, requestedName);
    });

}