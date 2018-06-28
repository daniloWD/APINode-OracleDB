module.exports = function(app) {


    app.get('/audio/:name', function(req, res) {
        let requestedName = req.params['name'];
        app.app.controllers.getAudio.getAudio(app, req, res, requestedName);
    });

}